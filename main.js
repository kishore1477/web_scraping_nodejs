// const express = require('express')
import express from 'express'
// const cheerio = require('cheerio')
import * as cheerio from 'cheerio';
// const axios = require('axios')
import axios from 'axios';
const app = express()
const port = 5000
let districts = []
const fetchData= async()=>{
    try {
        
// const $ = cheerio.load('<html><body><h1 id="title">Hello, world!</h1></body></html>');
// console.log($('#title').text());

const res = await axios.get("https://en.wikipedia.org/wiki/Districts_of_Pakistan")
// console.log("res", res)
const $ = cheerio.load(res.data)


// const $h3 = $("h3:first").text()
// const $h3 = $("h3:last").text()
// console.log("H3 tag value", $h3)
// console.log($)
// console.log($("#Gilgit_Baltistan").text())
// console.log($("#mw-content-text > div.mw-parser-output > table:nth-child(91)").text())
// $("#mw-content-text > div.mw-parser-output > table:nth-child(91)").each((i,e)=>{
//     // districts.push($(e).text())
//     districts.push($(e).text().trim())
// })
// console.log($("table>tbody>tr>td:first-child").text())
// console.log($("#mw-content-text > div.mw-parser-output > table:nth-child(58) > tbody > tr:nth-child(1)").text())
// console.log($("#mw-content-text > div.mw-parser-output > table:nth-child(58) > tbody > tr:nth-child(2)").text())
// console.log($('table>tbody>td').find("tr"))
// const $table = $('#mw-content-text > div.mw-parser-output > table/')
 $('#mw-content-text > div.mw-parser-output > table:nth-child(58)>tbody > tr').each((index, element) => {
  // console.log($($(element).find("td")[0]).text());
  if (index === 0) return true;
  const tds= $(element).find("td")
  console.log(tds.text())
  const serial_no = $(tds[0]).text()
  console.log("serial number", serial_no)
  const district = $(tds[1]).text()
  console.log("district", district)
  const headquarters = $(tds[2]).text()
  const  area= $(tds[3]).text()
  const  population_1998= $(tds[4]).text()
  const  population_2017= $(tds[5]).text()
  const  density= $(tds[6]).text()
  const  division= $(tds[7]).text()
  console.log("division is", division)
  });
// console.log("$table length", $table)
} catch (error) {
      console.log(error)  
}
}
// fetchData()
fetchData().then(w=>console.log(w))
app.get('/', (req, res) => {
  res.send(districts)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})