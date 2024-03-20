const axios =require("axios").default;

const instance = axios.create({
    baseURL: process.env.DEV_URL
})

module.exports = instance;