class CreateCoins < ActiveRecord::Migration[6.0]
  def change
    create_table :coins do |t|
      t.string :name
      t.string :ticker_symbol
      t.string :ticker_image
      t.string :landing_page
      t.string :status
      t.string :color
      t.float :balance

      t.timestamps
    end
  end
end
