@brands.each do |brand|
    json.set! brand.id do
        json.partial! "api/brands/brand", brand: brand
    end
end

# # This would work if I wanted an array of brands
# json.array! @brands do |brand|
#     json.partial! "api/brands/brand", brand: brand
# end