<!--
title = "Exposure equivalence"
slug = "exposure-equivalence"
category = "Lab"
description = "Equivalence calculator for photographers"
author = "Aurélien Scoubeau"
lang = "en"
date = 2019-03-23T20:20:20Z
tags = ["photography", "equivalence"]
cover = "https://res.cloudinary.com/qur2/image/upload/c_scale,q_auto:eco,w_1440/c_crop,h_711,w_1440,y_120/v1553285020/blog/000001.jpg"
-->
<template>
  <blog-post slug="exposure-equivalence">
    <article slot="content">
      <p>Quick exposure equivalence calculator.</p>

      <fieldset>
        <legend>Exposure parameters</legend>
        <div>
          <label for="focal">Focal in mm</label>
          <input
            id="focal"
            v-model.number="focal"
            type="text"
            placeholder="Focal length in mm"
          >
        </div>
        <div>
          <label for="aperture">Aperture</label>
          <input
            id="aperture"
            v-model.number="aperture"
            type="text"
            placeholder="F-number"
          >
        </div>
        <div>
          <label for="focal">ISO</label>
          <input
            id="iso"
            v-model.number="iso"
            type="text"
            placeholder="Sensibility"
          >
        </div>
        <div>
          <label for="sensorId">Sensor type</label>
          <select
            id="sensorId"
            v-model.number="sensorId"
          >
            <template v-for="sensor in sensors">
              <option
                :key="sensor.id"
                :value="sensor.id"
              >{{ sensor.label }}</option>
            </template>
          </select>
        </div>
      </fieldset>

      <fieldset>
        <legend>Equivalent exposure parameters</legend>
        <div>
          <label for="targetSensorId">Convert to Sensor type</label>
          <select
            id="targetSensorId"
            v-model="targetSensorId"
          >
            <template v-for="sensor in sensors">
              <option
                :key="sensor.id"
                :value="sensor.id"
              >{{ sensor.label }}</option>
            </template>
          </select>
        </div>
        <div>
          <label>Focal in mm</label>
          <input
            :value="targetFocal"
            disabled
            readonly
            type="text"
            placeholder="Focal length in mm"
          >
        </div>
        <div>
          <label>Aperture</label>
          <input
            :value="targetAperture"
            disabled
            readonly
            type="text"
            placeholder="F-number"
          >
        </div>
        <div>
          <label>ISO</label>
          <input
            :value="targetIso"
            disabled
            readonly
            type="text"
            placeholder="Sensibility"
          >
        </div>
      </fieldset>

      <p>
        Calculator modelled after
        <a
          href="https://photographylife.com/equivalence-also-includes-aperture-and-iso"
        >https://photographylife.com/equivalence-also-includes-aperture-and-iso</a>
      </p>
      <p>
        There you have it, an exposure equivalence calculator.
        I know it's only mildly interesting; I just wanted to know what gear it
        would take to replicate the view of an Agfa Isolette wide open on other formats.
        Of course, one cannot replicate the look of an Apotar or Solinar lens that easily.
        Nor can you easily simulate whatever 120 film used for the exposure :)
      </p>
    </article>
  </blog-post>
</template>

<script>
import BlogPost from "~/components/BlogPost"

const diagonal = (L, l) => Math.sqrt(Math.pow(L, 2) + Math.pow(l, 2))

const sensors = [
  {
    id: "iphone7",
    label: "iPhone 7",
    area: [6.25, 5.16]
  },
  {
    id: "one-inch",
    label: "1-inch",
    area: [13.2, 8.8]
  },
  {
    id: "m43",
    label: "µ43",
    area: [18, 13.5]
  },
  {
    id: "aps-c-canon",
    label: "APS-C (Canon)",
    area: [22.2, 14.8]
  },
  {
    id: "aps-c",
    label: "APS-C",
    area: [23.5, 15.7]
  },
  {
    id: "aps-h",
    label: "APS-H",
    area: [29.2, 20.2]
  },
  {
    id: "ff",
    label: "Full frame",
    area: [36, 24]
  },
  {
    id: "mf-fuji",
    label: "MF (Fuji)",
    area: [43.8, 32.9]
  },
  {
    id: "mf-phaseone",
    label: "MF (Phaseone)",
    area: [53.7, 40.4]
  },
  {
    id: "mf-6x4.5",
    label: "MF (6×4.5)",
    area: [60, 45]
  },
  {
    id: "mf-6x6",
    label: "MF (6×6)",
    area: [60, 60]
  },
  {
    id: "mf-6x9",
    label: "MF (6×9)",
    area: [60, 90]
  }
].map(({ area, ...data }) => ({ ...data, area, diagonal: diagonal(...area) }))

const equivFocal = (value, fromSensor, toSensor) =>
  value / (fromSensor / toSensor)

const equivAperture = equivFocal

const equivIso = (value, fromSensor, toSensor) =>
  value / Math.pow(fromSensor / toSensor, 2)

export default {
  components: {
    BlogPost
  },
  data() {
    return {
      sensors,
      focal: 50,
      aperture: 2.8,
      iso: 200,
      sensorId: "aps-c",
      targetSensorId: "ff"
    }
  },
  computed: {
    sensorSize() {
      return this.sensors.find(({ id }) => id === this.sensorId).diagonal
    },
    targetSensorSize() {
      return this.sensors.find(({ id }) => id === this.targetSensorId).diagonal
    },
    targetFocal() {
      return Math.round(
        equivFocal(this.focal, this.sensorSize, this.targetSensorSize)
      )
    },
    targetAperture() {
      return Number(
        equivAperture(this.aperture, this.sensorSize, this.targetSensorSize)
      ).toFixed(1)
    },
    targetIso() {
      return Math.round(
        equivIso(this.iso, this.sensorSize, this.targetSensorSize)
      )
    }
  }
}
</script>
