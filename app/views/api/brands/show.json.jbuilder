json.set! @brand.id do 
    json.partial! "api/brands/brand", brand: @brand
end