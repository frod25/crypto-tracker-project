const baseUrl = "http://localhost:3000/coins/"

function getAllCoins(){
    return fetch(baseUrl)
    .then(res => res.json())
}

function createNewCoin(coinObj){
    return fetch(baseUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(coinObj)
    })
    .then(res => res.json())
}

function getOneCoin(coinId){
    return fetch(baseUrl + `${coinId}`)
    .then(res => res.json())
}

function deleteCoin(coinId){
    return fetch(baseUrl + `${coinId}`, {
        method: "DELETE"
    })
    .then(res => res.json())
}

function updateCoin(coinId, coinObj){
    return fetch(baseUrl + `${coinId}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(coinObj)
    })
    .then(res => res.json())
}

function getPnomicsData(tickerSymbol){
    return fetch(`https://api.nomics.com/v1/currencies/ticker?key=a52548d8dac7bd5b2fdfa92f3aab749e&ids=${tickerSymbol}&interval=1d&convert=USD`)
    .then(response => response.json())

}
