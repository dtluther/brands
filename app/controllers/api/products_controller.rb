class Api::ProductsController < ApplicationController
  def create
    @product = Product.new(product_params)
    if @product.save
      render "api/products/show"
    else
      render @product.errors.full_messages, status: 422
    end
  end

  def index
    @products = Product.all
  end

  def show
    @product = Product.find_by(id: params[:id])
    if @product
      render "api/products/show"
    else
      render json: ["Cannot find product"], status: 422
    end
  end

  def destroy
    product = Product.find_by(id: params[:id])
    if product
      product.destroy
      render product
    else
      render json: ["Unable to delete"], status: 422
    end
  end

  def update
    @product = Product.find_by(id: params[:id])

    if @product
      @product.update_attributes(product_params)
      render "api/products/show"
    else
      render json: @product.errors.full_messages, status: 422
    end
  end

  def product_params
    params.require(:product).permit(:id, :name, :make_id, :description, :price)
  end
end
