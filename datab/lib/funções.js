const cfonts = require("cfonts")
const axios = require("axios")
const mimetype = require("mime-types")
const _ = require("lodash")

const getBuffer = async (url, body = {}) => {
let response = await axios.get(url, body, {
  headers: {
    "DNT": 1,
    "Upgrade-Insecure-Request": 1
  },
  responseType: "arraybuffer"
})
  return response.data
}

const banner = cfonts.render("Laura", {
  font: "tiny",
  align: "center",
  colors: _.shuffle([ "red", "cyan", "yellow", "gray" ]),
  background: "transparent",
  letterSpacing: 2,
  lineHeight: 2,
  space: true,
  maxLength: "0",
  gradient: false,
  independentGradient: false,
  transitionGradient: false,
  env: "node"
})

const getExtension = async (type) => {
  return await mimetype.extension(type)
}

const getRandom = (value) => {
  return _.random(value, 10000)
}

module.exports = { banner, getBuffer, getExtension, getRandom }
