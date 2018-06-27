Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_page#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:index, :show, :create, :update]
    get "users/friends", to: "users#friends"
    resources :profiles, only: [:create, :update, :destroy]
    resources :friend_requests, only: [:create, :update]
    resources :posts, only: [:index, :show, :create, :update, :destroy] do
      resource :likes, only: [:create, :destroy]
    end
    resources :comments, only: [:create, :destroy] do
      resource :likes, only: [:create, :destroy]
    end
    resource :friends, only: [:create, :destroy]
    resource :session, only: [:create, :destroy]
  end

  get "/api/users/:id/friends", to: "api/users#friends", defaults: { format: :json }
  get "/api/user/requesters", to: "api/users#requesters",
                               defaults: { format: :json }
  get "/api/users/:id/posts", to: "api/posts#wall_posts", defaults: { format: :json }
  get "/api/user/news", to: "api/posts#news_feed", defaults: { format: :json }
end
