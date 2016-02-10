require 'sinatra'
require 'json'
require_relative 'search'

get '/search' do
  searcher = YoutubeSearcher.new
  return response = searcher.get_videos(params[:q])
  render json: response
end