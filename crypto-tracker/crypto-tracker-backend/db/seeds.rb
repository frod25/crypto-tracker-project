# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Coin.destroy_all

Coin.create(name: 'Bitcoin', ticker_symbol: 'BTC', ticker_image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png', landing_page: 'https://bitcoin.org/en/', status: 'mature', color: '#ff9900', balance: 4.564)
Coin.create(name: 'Ethereum', ticker_symbol: 'ETH', ticker_image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ethereum-icon-purple.svg/440px-Ethereum-icon-purple.svg.png', landing_page: 'https://ethereum.org/en/', status: 'mature', color: '#3c3c3d', balance: 3.034)
Coin.create(name: 'Monero', ticker_symbol: 'XMR', ticker_image: 'https://cryptologos.cc/logos/monero-xmr-logo.png?v=003', landing_page: 'https://web.getmonero.org/', status: 'stable', color: '#ff6600', balance: 9.384 )
Coin.create(name: 'Cardano', ticker_symbol: 'ADA', ticker_image: 'https://cryptologos.cc/logos/cardano-ada-logo.png?v=003', landing_page: 'https://www.cardano.org/', status: 'stable', color: '#2a71d0', balance: 9.384 )
Coin.create(name: 'Chainlink', ticker_symbol: 'LINK', ticker_image: 'https://cryptologos.cc/logos/chainlink-link-logo.png?v=003', landing_page: 'https://chain.link/', status: 'stable', color: '#2a5ada', balance: 1.0)
Coin.create(name: 'Zap', ticker_symbol: 'ZAP', ticker_image: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2363.png', landing_page: 'http://www.zap.org/', status: 'locked', color: '#3884FF', balance: 5000)
Coin.create(name: 'Tron', ticker_symbol: 'TRX', ticker_image: 'https://cryptologos.cc/logos/tron-trx-logo.png', landing_page: 'https://tron.network/', status: 'volatile', color: '#c72a34', balance: 300)
Coin.create(name: 'Dogecoin',	ticker_symbol: 'DOGE',	ticker_image: 'https://cryptologos.cc/logos/dogecoin-doge-logo.png?v=003',	landing_page: 'http://dogecoin.com/',	status: 'negative roi',	color: '#F2A51F',	balance: 15.030)
Coin.create(name: 'Dash',	ticker_symbol: 'DASH',	ticker_image: 'https://cryptologos.cc/logos/dash-dash-logo.png?v=003', landing_page: 'https://www.dash.org/', status: 'stable',	color: '#008de4', balance: 100.345)
Coin.create(name: 'DFINITY',	ticker_symbol: 'DFN',	ticker_image: 'https://images.ctfassets.net/enatj8r8y1g4/7aeKw2tUQZ2ttcQHn0PyBo/d1dbf47953f5ea663689e42638d2e42b/dfinity_logo.png',landing_page: 'https://dfinity.org/',	status: 'airdrop', color: '#ee1f7a', balance: 100)
Coin.create(name: 'Foam',	ticker_symbol: 'FOAM',	ticker_image: 'https://cryptologos.cc/logos/foam-foam-logo.png?v=003',	landing_page: 'https://foam.space/location', color: '#ad6f69', balance: 4)
# Coin.create(name: 'Stellar Lumens', ticker_symbol: 'XLM', ticker_image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Stellar_Symbol.png/220px-Stellar_Symbol.png', landing_page: 'https://www.stellar.org/', status: 'stable', color: '#3115af', balance: 243.5801750)
# Coin.create(name: 'Orchid', ticker_symbol: 'OXT', ticker_image: 'https://www.orchid.com/assets/img/oxt/orchid-logomark.svg', landing_page: 'https://www.orchid.com/', status: 'stable', color: '#725ac6', balance: 68.3436)
# Coin.create(name: '', ticker_symbol: '', ticker_image: '', landing_page: '', status: '', color: '', balance: )

puts "Seeded!"
