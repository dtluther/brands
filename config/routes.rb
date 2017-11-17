Rails.application.routes.draw do


  get 'products/create'

  get 'products/index'

  get 'products/show'

  get 'products/destroy'

  get 'products/update'

  root "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :brands, except: [:new, :edit]
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
