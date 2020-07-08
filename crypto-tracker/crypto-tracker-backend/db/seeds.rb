# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Coin.destroy_all

Coin.create(name: 'Bitcoin', ticker_symbol: 'BTC', ticker_image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png', landing_page: 'https://bitcoin.org/en/', status: 'mature', color: 'ff9900', balance: 4.564)
Coin.create(name: 'Ethereum', ticker_symbol: 'ETH', ticker_image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ethereum-icon-purple.svg/440px-Ethereum-icon-purple.svg.png', landing_page: 'https://ethereum.org/en/', status: 'mature', color: '3c3c3d', balance: 3.034)
Coin.create(name: 'Monero', ticker_symbol: 'XMR', ticker_image: 'https://cryptologos.cc/logos/monero-xmr-logo.png?v=003', landing_page: 'https://web.getmonero.org/', status: 'stable', color: 'ff6600', balance: 9.384 )
# Coin.create(name: '', ticker_symbol: '', ticker_image: '', landing_page: '', status: '', color: '', balance: )
# Coin.create(name: '', ticker_symbol: '', ticker_image: '', landing_page: '', status: '', color: '', balance: )

puts "Seeded!"