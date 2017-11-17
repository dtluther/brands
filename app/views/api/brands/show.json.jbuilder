json.set! @brand.id do 
    json.partial! "api/brands/show", brand: @brand
end