class CreateFruits < ActiveRecord::Migration[8.0]
  def change
    create_table :fruits do |t|
      t.string :name
      t.string :category

      t.timestamps
    end
  end
end
