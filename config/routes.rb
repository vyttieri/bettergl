Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  root "application#index"
  # Defines the root path route ("/")
  # root "articles#index"

  get '/fetch', to: 'application#fetch'
end
