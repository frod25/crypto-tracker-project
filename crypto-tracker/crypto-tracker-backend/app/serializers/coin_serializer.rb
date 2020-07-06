class CoinSerializer < ActiveModel::Serializer
  attributes :id, :name, :ticker_symbol, :ticker_image, :landing_page, :status, :color, :balance
end
