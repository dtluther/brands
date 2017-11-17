json.array! @brands do |brand|
    json.partial! "api/brands/brand", brand: brand
end