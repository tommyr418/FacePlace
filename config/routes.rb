Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_page#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:show, :create, :update]
    resources :profiles, only: [:create, :update, :destroy]
    resources :friends, only: [:create, :destroy]
    resource :friend_requests, only: [:create, :update]
    resource :session, only: [:create, :destroy]
  end
end
