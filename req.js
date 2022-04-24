const request = require('request');
const url = 'http://localhost:3000/api/v1'

request.post({
    url: url+'/market',
    headers: {
        'Accept': 'application/x-www-form-urlencoded',
        'Accept-Charset': 'utf-8',
    },
    form:{
        marketID:'mkt-101',
        marketName:'mktNoida',
        marketType:'Mandi'
    },
    body:"marketID='mkt-100',marketName='mktNoida',marketType='Mandi'"
}, (err, res, body) => {
    console.log(JSON.parse(res.body))
})
request.get({
    url: url+'/market',
    headers: {
        'Accept': 'application/json',
        'Accept-Charset': 'utf-8',
    },

}, (err, res, body) => {
    // console.log(JSON.parse(body))
})
