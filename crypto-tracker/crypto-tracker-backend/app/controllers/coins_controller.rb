class CoinsController < ApplicationController

    def index
        coins = Coin.all
        render json: coins
    end

    def create
        coin = Coin.create(
            name: params[:name],
            ticker_symbol: params[:tickerSymbol],
            ticker_image: params[:tickerImage],
            landing_page: params[:landingPage],
            status: params[:status],
            color: params[:color],
            balance: params[:balance].to_f
        )
        if coin.valid?
            render json: coin
        else
            render json: {errors: coin.errors.full_messages}, status: 400
        end
    end

    def destroy
        coin = Coin.find(params[:id])
        coin.destroy
        render json: {message: "Coin deleted"}
    end

    def update
        coin = Coin.find(params[:id])
        updated_params = {params.keys.first => params[params.keys.first]}
        if coin.update(updated_params)
            render json: coin
        else
            render json: {errors: coin.errors.full_messages}, status: 400
        end
    end

    def show
        coin = Coin.find(params[:id])
        if coin
            render json: coin
        else
            render json: {errors: "Coin not found"}
        end
    end
end
