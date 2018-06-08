// @preval
const { readdirSync, readFileSync } = require("fs")
const { join } = require("path")
const toml = require("toml")

const filterDrafts = ({ meta }) =>
  process.env.NODE_ENV === "production" ? !meta.draft : true

const identity = x => x

// const isJSON = (filename) => filename.slice(0, -5) === '.json'
// const isMarkdown = (filename) => filename.slice(-3) === '.md'
// const isVue = (filename) => filename.slice(-4) === '.vue'
const isOfType = (ext, filename) => filename.slice(-ext.length) === ext
const indexBy = (array, key) =>
  array.reduce((acc, x) => {
    acc[x[key]] = x
    return acc
  }, {})

// const listFiles = (basePath, filter) => fs.readdirSync(basePath)
//   .filter(filter)
//   .map((fileName) => fileName.slice(0, fileName.lastIndexOf('.')))

const parseMeta = blob => {
  try {
    return toml.parse(blob)
  } catch (error) {
    // Make it obvious in console when that happens
    error.message = `[TOML] ${error.message}`
    throw error
  }
}
// oui
const listFilesMeta = (basePath, filter = identity) => {
  return readdirSync(basePath)
    .filter(filter)
    .map(fileName => {
      const buf = readFileSync(join(basePath, fileName), "utf8")
      const fmStart = buf.indexOf("<!--")
      const fmEnd = buf.indexOf("-->")
      return fmEnd === -1 || fmStart === -1
        ? false
        : Object.assign(
            {
              baseName: fileName.slice(0, fileName.lastIndexOf("."))
            },
            parseMeta(buf.slice(fmStart + 4, fmEnd))
          )
    })
    .filter(Boolean)
}

const frontmatter = (basePath, type, metaFilter = identity) => {
  const typeFilter = basePath => isOfType(type, basePath)
  const list = listFilesMeta(basePath, typeFilter).filter(metaFilter)
  return list
  // .reduce(
  //   (dict, { baseName, meta }) =>
  //     meta
  //       ? Object.assign(dict, {
  //           [baseName]: Object.assign({ id: baseName }, meta)
  //         })
  //       : dict,
  //   {}
  // )
}

module.exports = Object.assign(
  {},
  indexBy(
    []
      .concat(
        frontmatter(
          join(process.cwd(), "pages", "blog"),
          ".vue",
          filterDrafts
        ).map(fm => Object.assign({ category: "Lab" }, fm))
      )
      .concat(frontmatter(join(process.cwd(), "blog"), ".md", filterDrafts))
      .sort((a, b) => b.date - a.date),
    "baseName"
  )
)
