const search = document.querySelector("#search-btn")
const searchForm = document.querySelector("#search-form")
const searchInput = document.querySelector("#search-input")
const searchInputInner = document.querySelector("#search-input-inner")
const searchContainer = document.querySelector("#search-input-outer")

const addNew = document.querySelector("#new-btn")
const modalCreateNew = document.querySelector("#modal-create-new")
const main = document.querySelector('main')
const cardsContainer = document.querySelector('#modal-scroll')

// const coins = [
//   {
//     name: 'Bitcoin',
//     ticker_symbol: 'BTC',
//     ticker_image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png',
//     landing_page: 'https://bitcoin.org/en/',
//     status: 'mature',
//     color: 'ff9900',
//     balance: '4.564'
//   },
//   {
//     name: 'Ethereum',
//     ticker_symbol: 'ETH',
//     ticker_image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ethereum-icon-purple.svg/440px-Ethereum-icon-purple.svg.png',
//     landing_page: 'https://ethereum.org/en/whitepaper/',
//     status: 'mature',
//     color: '3c3c3d',
//     balance: '3.034'
//   },
//   {
//     name: 'Monero',
//     ticker_symbol: 'XMR',
//     ticker_image: 'https://cryptologos.cc/logos/monero-xmr-logo.png?v=003',
//     landing_page: 'https://web.getmonero.org/',
//     status: 'stable',
//     color: 'ff6600',
//     balance: '9.384'
//   },
//   {
//     name: 'Cardano',
//     ticker_symbol: 'ADA',
//     ticker_image: 'https://cryptologos.cc/logos/cardano-ada-logo.png?v=003',
//     landing_page: 'https://www.cardano.org/',
//     status: 'stable',
//     color: '2a71d0',
//     balance: '9.384'
//   },
//   {
//     name: 'Chainlink',
//     ticker_symbol: 'LINK',
//     ticker_image: 'https://cryptologos.cc/logos/chainlink-link-logo.png?v=003',
//     landing_page: 'https://chain.link/',
//     status: 'stable',
//     color: '2a5ada',
//     balance: '9.384'
//   },
//   {
//     name: 'Zap',
//     ticker_symbol: 'ZAP',
//     ticker_image: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2363.png',
//     landing_page: 'http://www.zap.org/',
//     status: 'locked',
//     color: '3884FF',
//     balance: '5000'
//   },
//   {
//     name: 'Tron',
//     ticker_symbol: 'TRX',
//     ticker_image: 'https://cryptologos.cc/logos/tron-trx-logo.png',
//     landing_page: 'https://tron.network/',
//     status: 'locked',
//     color: 'c72a34',
//     balance: '300'
//   },
//   {
//     name: 'Dogecoin',
//     ticker_symbol: 'DOGE',
//     ticker_image: 'https://cryptologos.cc/logos/dogecoin-doge-logo.png?v=003',
//     landing_page: 'http://dogecoin.com/',
//     status: 'negative roi',
//     color: 'F2A51F',
//     balance: '15.030'
//   },
//   {
//     name: 'Dash',
//     ticker_symbol: 'DASH',
//     ticker_image: 'https://cryptologos.cc/logos/dash-dash-logo.png?v=003',
//     color: '008de4'
//   },
//   {
//     name: 'DFINITY',
//     ticker_symbol: 'DFN',
//     ticker_image: 'https://images.ctfassets.net/enatj8r8y1g4/7aeKw2tUQZ2ttcQHn0PyBo/d1dbf47953f5ea663689e42638d2e42b/dfinity_logo.png',
//     color: 'ee1f7a'
//   },
//   {
//     name: 'Foam',
//     ticker_symbol: 'FOAM',
//     ticker_image: 'https://cryptologos.cc/logos/foam-foam-logo.png?v=003',
//     color: 'ad6f69'
//   },
// ]

let coinView = (coin) => {
  main.innerHTML = ""
  let cardView = document.createElement('section')
  cardView.className = "modal-card-view"
  cardView.style.backgroundColor = `#${coin.color}`
  cardView.innerHTML = `
  <div class="exit-btn"></div>
  <div id="card-view-inner">
    <div id="card-view-header">
      <img src="${coin.ticker_image}" alt="${coin.name} logo" class="card-view-img">
      <div class="coin-header-wrapper">
        <h2 class="bold-text" id="card-view-ticker_symbol">${coin.ticker_symbol}</h2>
        <h2 id="card-view-coin_name">${coin.name}</h2>
      </div>
    </div>
    <div class="coin-view-body">
      <div class="coin-view-body-wrapper" id="view__amt-held">
        <h2 class="bold">Amount Held</h2>
        <p>${coin.balance}</p>
      </div>
      <div class="coin-view-body-wrapper" id="view__price">
        <h2 class="bold">Price</h2>
        <p>250.21</p>
      </div>
      <div class="coin-view-body-wrapper" id="view__market-cap">
        <h2 class="bold">Market Cap</h2>
        <p>1.53b</p>
      </div>
      <div class="coin-view-body-wrapper" id="view__status">
        <h2 class="bold">Status</h2>
        <p>${coin.status}</p>
      </div>
      <div class="coin-view-body-wrapper" id="delete">
        <input type="submit" placeholder="delete" name="delete">
      </div>
    </div>
  </div>
  `
  main.appendChild(cardView)
  let exit = main.querySelector('.exit-btn')
  exit.addEventListener('click', e => {
    // on click, clear main
    // render the original card page
  })
  // main.innerHTML = cardView
}

let renderCoinCard = (coin) => {
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
  card.addEventListener('click', e => {
    coinView(coin)
  })
}

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

search.addEventListener('click', e => {
  if (searchContainer.style.width == "0px") {
    searchContainer.style.width = "350px"
  } else {
    searchContainer.style.width = "0px"
  }
})

let searchEventListener = (coins) => {
  searchForm.addEventListener('input', e => {
    let filtered = filterCoin(coins, searchInput.value)
    if (filtered.length === 0) {

      console.log('no coins here :(')
    } else {
      cardsContainer.innerHTML = ""
      renderCoinCards(filtered)
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

let renderCoinCards = (items) => {
  items.forEach(coin => {
    renderCoinCard(coin)
  })
}


// fetch and render all coins on front page and add event listener for search form
const renderMainView = () => {
  getAllCoins()
  .then(coins => {
    renderCoinCards(coins)
    searchEventListener(coins)
  })
}

renderMainView()
