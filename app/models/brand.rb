# == Schema Information
#
# Table name: brands
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Brand < ApplicationRecord
    has_many :products,
        primary_key: :id,
        foreign_key: :make_id,
        class_name: :User
        
    validates :name, presence: true

end
