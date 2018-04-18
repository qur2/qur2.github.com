const { readdirSync, readFileSync } = require("fs")
const { join } = require("path")
const toml = require("toml")

const identity = x => x

// const isJSON = (filename) => filename.slice(0, -5) === '.json'
// const isMarkdown = (filename) => filename.slice(-3) === '.md'
// const isVue = (filename) => filename.slice(-4) === '.vue'
const isOfType = (ext, filename) => filename.slice(-ext.length) === ext

// const listFiles = (basePath, filter) => fs.readdirSync(basePath)
//   .filter(filter)
//   .map((fileName) => fileName.slice(0, fileName.lastIndexOf('.')))

const listFilesMeta = (basePath, filter = identity) => {
  return readdirSync(basePath)
    .filter(filter)
    .map(fileName => {
      const buf = readFileSync(join(basePath, fileName), "utf8")
      const fmStart = buf.indexOf("<!--") + 4
      const fmEnd = buf.indexOf("-->")
      return {
        baseName: fileName.slice(0, fileName.lastIndexOf(".")),
        meta:
          fmEnd === -1 || fmStart === 3
            ? false
            : toml.parse(buf.slice(fmStart, fmEnd))
      }
    })
}

const getMetaAsDict = (basePath, type, metaFilter = identity) => {
  const typeFilter = basePath => isOfType(type, basePath)
  return listFilesMeta(basePath, typeFilter)
    .filter(metaFilter)
    .reduce(
      (dict, { baseName, meta }) =>
        meta
          ? Object.assign(dict, {
              [baseName]: Object.assign({ identifier: baseName }, meta)
            })
          : dict,
      {}
    )
}

module.exports = getMetaAsDict
