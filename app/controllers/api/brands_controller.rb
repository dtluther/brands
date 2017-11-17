class Api::BrandsController < ApplicationController
  def create
    @brand = Brand.new(brand_params)
    if @brand.save
      render "api/brands/show"
    else
      render @brand.errors.full_messages, status: 422
    end
  end

  def show
    @brand = Brand.find_by(id: params[:id])
    if @brand
      render "api/brands/show"
    else
      render json: ["Track does not exist/Unable to delete track"], status: 422
    end
  end

  def index
    @brands = Brand.all
  end

  def update
    @brand = Brand.find_by(id: params[:id])

    if @brand
      @brand.update_attributes(brand_params)
      render "api/brands/show"
    else
      render json: @brand.errors.full_messages, status: 422
    end
  end

  def destroy
    brand = Brand.find_by(id: params[:id])
    if brand
      brand.destroy
      render brand
    else
      render json: ["Unable to delete"], status: 422
    end
  end

  def brand_params
    params.require(:brand).permit(:name, :make_id, :description, :price);
  end

end
