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
