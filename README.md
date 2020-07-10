# ledger

> **ledg·er**
> */ˈlejər/*
>
> a book or other collection of financial accounts of a particular type

There are a few ways to hold onto your cryptocurrency. You can keep it on a software wallet. Which can sometimes be deprecated when you forget you've got an altcoin stored there, and noooooow it's locked.

You can keep it on an exchange. But, that's not always the best thing to do. Actually, it's the worst. See this [list](https://selfkey.org/list-of-cryptocurrency-exchange-hacks/).

It's not 100% hackproof, but the better alternative is a hardware wallet. When you do that, you lose the convenience of knowing what your cryptocurrency is currently valued at. It is the very thing that the emotional state of FUD and FOMO cannot exist without.

Insert `ledger`. Your... sorta offline cryptocurrency companion. If you've got a cryptocurrency in AirDrop limbo, track it. If you need to keep an eye on the market cap of a former 💩coin turned volatile social media trend, track it.

### Getting Started


### CRUD Walkthrough

![main-page](/crypto-tracker/crypto-tracker-frontend/assets/screenshots/main-page.png)

The main page displays all of your coins, both owned and watched. True to its name, this is where you'll see the ledger functionality. The search bar is triggered with the click of the magnifying glass. Once expanded, it can successfully filter between cryptocurrencies or their symbols.

![main-page](/crypto-tracker/crypto-tracker-frontend/assets/screenshots/new-form.png)

The `+` button next to the search button triggers the form to add a new cryptocurrency to track. Aside from your standard text and number input, there's also an input field for a color! Yes. See, each card listed in the main page has a border that matches their logo, or is part of their color palette. Another input field is the `status`. Bitcoin has been around for a while, and so its blockchain is stable. Ethereum as well. Other coins are either compromised. Perhaps they did not live up to their ICO expectations and are now dead. Some are more volatile than others. Some you are actually unable to purchased because of where you live. And very few are in AirDrop limbo.

![coin-view](/crypto-tracker/crypto-tracker-frontend/assets/screenshots/coin-view.png)

Clicking on a coin renders a small card for you with some new information that you don't remember entering. How do we get the price, the market cap... AND... what your amount held is worth in USD? Oh by calling from the [nomics API](https://p.nomics.com/cryptocurrency-bitcoin-api) for Bitcoin and other Cryptocurrency. It has the information for 8,735 tokens across 309 exchanges.

But you might find yourself at a point where you're no longer interested in a cryptocurrency. You diversified your portfolio but would actually like to just sell it all, buy more Ethereum. You find Cryptokitties to be a better store of value. Clicking delete will remove the coin from your list, and the database. 
