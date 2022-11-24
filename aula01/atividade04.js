// exemplo utilizando o nome nativo do node - URL

// importa um modulo url
const url = require('url')

// define a url do site
let site = 'https://www.amazon.com.br/ACER-Notebook-AN515-55-59T4-gera%C3%A7%C3%A3o-Polegadas/dp/B09QLBGP5N/ref=asc_df_B09QLBGP5N/?tag=googleshopp00-20&linkCode=df0&hvadid=379720653016&hvpos=&hvnetw=g&hvrand=5328067494284042566&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9100551&hvtargid=pla-1622464760121&psc=1'

let partUrl = new url.URL(site)

// exibe o dominio
console.log('Dominio:', partUrl.host)

console.log('Caminho ou rota', partUrl.pathname)

console.log('Query String', partUrl.search)

console.log('Parâmetros:' , partUrl.searchParams)

console.log('Parametros tag da url:', partUrl.searchParams.get('tag'))
