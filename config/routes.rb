Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_page#root"

  namespace :api, default: { format: :json } do
    resources :users, only: [:show, :create, :update]
    resources :profiles, only: [:create, :update, :destroy]
    resource :session, only: [:create, :destroy]
  end
end
