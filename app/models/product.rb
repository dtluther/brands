# == Schema Information
#
# Table name: products
#
#  id          :integer          not null, primary key
#  name        :string           not null
#  make_id     :integer          not null
#  description :text             not null
#  price       :float            not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Product < ApplicationRecord
    belongs_to :brand,
        primary_key: :id,
        foreign_key: :make_id,
        class_name: :Brand

    validates :name, :make_id, :description, :price, presence: true
    validates :price, numericality: { greater_than: 0, less_than_or_equal_to: 100 }
end
