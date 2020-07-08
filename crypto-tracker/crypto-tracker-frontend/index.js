const search = document.querySelector("#search-btn")
const searchForm = document.querySelector("#search-form")
const searchInput = document.querySelector("#search-input")
const searchInputInner = document.querySelector("#search-input-inner")
const searchContainer = document.querySelector("#search-input-outer")

const addNew = document.querySelector("#new-btn")
const modalCreateNew = document.querySelector("#modal-create-new")
const main = document.querySelector('main')
const cardsContainer = document.querySelector('#modal-scroll')

// dummy data
const coins = [
  {
    name: 'Bitcoin',
    ticker_symbol: 'BTC',
    ticker_image: 'https://s2.coinmarketcap.com/static/img/coins/32x32/1.png',
    landing_page: 'https://bitcoin.org/en/',
    status: 'mature',
    color: 'ff9900',
    balance: '4.564'
  },
  {
    name: 'Ethereum',
    ticker_symbol: 'ETH',
    ticker_image: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png',
    landing_page: 'https://ethereum.org/en/whitepaper/',
    status: 'mature',
    color: '3c3c3d',
    balance: '3.034'
  },
  {
    name: 'Monero',
    ticker_symbol: 'XMR',
    ticker_image: 'https://s2.coinmarketcap.com/static/img/coins/32x32/328.png',
    landing_page: 'https://web.getmonero.org/',
    status: 'stable',
    color: 'ff6600',
    balance: '9.384'
  },
  {
    name: 'Cardano',
    ticker_symbol: 'ADA',
    ticker_image: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2010.png',
    landing_page: 'https://www.cardano.org/',
    status: 'stable',
    color: '2a71d0',
    balance: '9.384'
  },
  {
    name: 'Chainlink',
    ticker_symbol: 'LINK',
    ticker_image: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1975.png',
    landing_page: 'https://chain.link/',
    status: 'stable',
    color: '2a5ada',
    balance: '9.384'
  },
  {
    name: 'Zap',
    ticker_symbol: 'ZAP',
    ticker_image: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2363.png',
    landing_page: 'http://www.zap.org/',
    status: 'locked',
    color: '3884FF',
    balance: '5000'
  },

]

let renderCoinCard = (coin) => {
  // console.log(coin.name)
  let card = document.createElement('div')
  card.className = "coin-card"
  card.setAttribute('style', `border: 3px solid #${coin.color}`)
  card.innerHTML = `
  <div class="coin-inner">
    <img src="${coin.ticker_image}" class="card-img" alt="">
    <h2 class="card-ticker">${coin.ticker_symbol}</h2>
  </div>

  `
  cardsContainer.appendChild(card)
}

coins.forEach(coin => {
  renderCoinCard(coin)
})

let renderCoinCards = (items) => {
  items.forEach(coin => {
    renderCoinCard(coin)
  })
}

search.addEventListener('click', e => {
  if (searchContainer.style.width == "0px") {
    searchContainer.style.width = "350px"
  } else {
    searchContainer.style.width = "0px"
  }
})

searchForm.addEventListener('input', e => {
    let filtered = filterCoin(coins, searchInput.value)
    if (filtered.length === 0) {

      console.log('no coins here :(')
    } else {
      cardsContainer.innerHTML = ""
      renderCoinCards(filtered)
    }


})

let filterCoin = (arr, str) => {
  return arr.filter(coin => {
    if (coin.name.toLowerCase().includes(str.toLowerCase())) {
      return coin.name
    } else if (coin.ticker_symbol.toLowerCase().includes(str.toLowerCase())) {
      return coin.ticker_symbol
    } else if (coin.status.toLowerCase().includes(str.toLowerCase())) {
      return coin.status
    }
  })
}

addNew.addEventListener('click', e => {

  if (modalCreateNew.style.display == 'block') {
    // cardsContainer.style.display = 'block'
    modalCreateNew.style.display = 'none'
    // also toggle the show all here
  } else {
    cardsContainer.style.display = 'none'
    // modalCreateNew.style.display = 'block'
  }
})
