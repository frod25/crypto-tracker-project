let details;

const search = document.querySelector("#search-btn")
const searchForm = document.querySelector("#search-form")
const searchInput = document.querySelector("#search-input")
const searchInputInner = document.querySelector("#search-input-inner")
const searchContainer = document.querySelector("#search-input-outer")

const addNew = document.querySelector("#new-btn")
const createNewForm = document.querySelector("#createNewForm")
const modalCardContainer = document.querySelector("#modal-card-container")
const modalCreateNew = document.querySelector("#modal-create-new")
const modalCardView = document.querySelector("#modal-card-view")
const main = document.querySelector('main')
const cardsContainer = document.querySelector('#modal-scroll')

let renderCoinCard = (coin) => {
  let card = document.createElement('div')
  card.className = "coin-card"
  card.id = `card-${coin.id}`
  card.setAttribute('style', `border: 3px solid ${coin.color}`)
  card.innerHTML = `
  <div class="coin-inner">
    <img src="${coin.ticker_image}" class="card-img" alt="${coin.name}">
    <h2 class="card-ticker">${coin.ticker_symbol}</h2>
  </div>
  `
  cardsContainer.appendChild(card)
  card.addEventListener('click', e => {
    modalCardContainer.style.display = 'none'
    coinView(coin)
  })
}


let coinView = (coin) => {
  modalCardView.style.display = 'block'
  modalCardView.innerHTML = `
  <div id="${coin.id}" class="card-pseudo-wrapper" style="background-color: ${coin.color}">
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
        <div class="coin-view-body-wrapper editable" id="view__amt-held">
          <h2 class="bold">Amount Held</h2>
          <div id="coin__amtHeld-container">
            <p id="coin__amtHeld">${coin.balance}</p>
          </div>
        </div>
        <div class="coin-view-body-wrapper" id="view__value">
          <h2 class="bold">Value</h2>
          <p id="dollarValue">$500</p>
        </div>
        <div class="coin-view-body-wrapper" id="view__price">
          <h2 class="bold">Price</h2>
          <p id="coinPrice">250.21</p>
        </div>
        <div class="coin-view-body-wrapper" id="view__market-cap">
          <h2 class="bold">Market Cap</h2>
          <p id="marketCapVal">1.53b</p>
        </div>
        <div class="coin-view-body-wrapper editable" id="view__status">
          <h2 class="bold">Status</h2>
          <div id="coin__status-container">
            <p id="coin__status">${coin.status}</p>
          </div>
        </div>
        <div class="coin-view-body-wrapper" id="view__delete">
          <input type="submit" placeholder="delete" name="delete" value="DELETE">
        </div>
      </div>
    </div>
  </div>
  `
  main.appendChild(modalCardView)


  let exit = main.querySelector('.exit-btn')
  let amtHeld = main.querySelector('#coin__amtHeld-container')
  let coinStatus = main.querySelector("#coin__status-container")
  let coinStatusP = main.querySelector('#coin__status')
  main.addEventListener('click', e => {
    if (e.target === exit) {
        modalCardContainer.style.display = 'grid'
        modalCardView.style.display = "none"
    } else if (e.target == coinStatusP) {
      console.log(e.target.textContent)
      let attr = Object.keys(coin).find(key => coin[key] == e.target.textContent)
      // console.log(attr)
      coinChange(coin, coinStatusP, attr)
    }
  })

  const coinChange = (coin, element, attr) => {
    let elementParent = element.parentNode
    elementParent.innerHTML = `
      <input id="elementInput" type="text" value="${element.textContent}">
    `
    let input = elementParent.querySelector('#elementInput')
    elementInput.addEventListener('keypress', e => {
      let obj = {}
      obj[attr] = e.target.value
      if (e.key === 'Enter') {
        updateCoin(coin.id, obj)
      }
    })
  }

  const del = modalCardView.querySelector('[name="delete"]')
  del.addEventListener('click', e => {
    deleteCoinAndRemoveCard(coin.id)
  })

  getPnomicsData(coin.ticker_symbol)
  .then(coinData => {
    renderPriceInfo(coinData[0], coin.balance)
  })
}

const calcValue = (balance, price) => {
  const num = balance * price
  const roundedNum = (Math.round((num + Number.EPSILON) * 100) / 100).toFixed(2)
  return roundedNum
}

const renderPriceInfo = (coinData, balance) => {
  const dollarValue = modalCardView.querySelector("#dollarValue")
  const coinPrice = modalCardView.querySelector("#coinPrice")
  const marketCapVal = modalCardView.querySelector("#marketCapVal")
  const roundedPrice = (Math.round((parseFloat(coinData.price) + Number.EPSILON) * 100) / 100).toFixed(2)
  coinPrice.textContent = `$${roundedPrice}`
  dollarValue.textContent = `$${calcValue(balance, roundedPrice)}`
  marketCapVal.textContent = `${coinData.market_cap}`
}

// const updateCoinData = ()

const deleteCoinAndRemoveCard = (coinId) => {
  deleteCoin(coinId)
  modalCardContainer.style.display = 'grid'
  modalCardView.style.display = "none"
  const coinCard = cardsContainer.querySelector(`#card-${coinId}`)
  cardsContainer.removeChild(coinCard)
}


search.addEventListener('click', e => {
  if (searchContainer.style.width == "350px") {
    searchContainer.style.width = "0px"
  } else {
    searchContainer.style.width = "350px"

  }
})

let searchEventListener = (coins) => {
  searchForm.addEventListener('input', e => {
    console.log(searchInput.value)
    if (modalCreateNew.style.display == 'block') {
      modalCreateNew.style.display = 'none'
      modalCardContainer.style.display = 'grid'
    }
    let filtered = filterCoin(coins, searchInput.value)
    if (filtered.length === 0) {
      console.log('no coins here :(')
    } else {
      cardsContainer.innerHTML = ""
      renderCoinCards(filtered)
    }
  })
}

let filterCoin = (arr, str) => {
  console.log(str)
  return arr.filter(coin => {
    console.log(coin)
    if (coin.name.toLowerCase().includes(str.toLowerCase())) {
      return coin.name
    } else if (coin.ticker_symbol.toLowerCase().includes(str.toLowerCase())) {
      return coin.ticker_symbol
    }
  })
}

addNew.addEventListener('click', e => {
  if (modalCreateNew.style.display == 'block') {
    modalCreateNew.style.display = 'none'
    modalCardContainer.style.display = 'grid'
  } else {
    modalCardContainer.style.display = 'none'
    modalCreateNew.style.display = 'block'
  }
})

createNewForm.addEventListener('submit', e => {
  e.preventDefault()
  const newCoinObj = {
    name: e.target.name.value,
    tickerSymbol: e.target.tickerSymbol.value,
    tickerImage: e.target.tickerImage.value,
    landingPage: e.target.landingPage.value,
    status: e.target.status.value,
    color: e.target.color.value,
    balance: e.target.balance.value
  }
  createNewCoin(newCoinObj)
  .then(newCoin => {
    renderCoinCard(newCoin)
    modalCreateNew.style.display = 'none'
    modalCardContainer.style.display = 'grid'
  })
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
