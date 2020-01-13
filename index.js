var request = require('request')
var cheerio = require('cheerio')
var find = require('cheerio-eq');
cherrioAdv = require("cheerio-advanced-selectors")
var config =  require('./config')
var fs = require('fs')

/*
request('https://www.imdb.com/chart/toptv/?ref_=nv_tvv_250', function(err,res,body){

 var $ = cheerio.load(body)

$('.lister-list tr').each(function(){

    var title = $(this).find(".titleColumn a").text().trim();
    var rating = $(this).find(".imdbRating strong").text().trim();

    console.log(title);

})
})

*/


request(`${config.URL + config.PRODUTO + config.VALOR_MINIMO + config.VALOR_MAXIMOc+ config.MAIS_RECENTE }`,function(err,res,body){
    
    if(err) console.log(`Erro: ` + err)

    var $ = cheerio.load(body)

    let retorno = {}

    console.log(config.URL + config.PRODUTO + config.VALOR_MINIMO + config.VALOR_MAXIMO + config.MAIS_RECENTE )

    let alvo = cherrioAdv.find($,".col2 div:eq(9)").find("li")

   alvo.each(function(){
      console.log("xxx")
   })
})








