require 'rubygems'
require 'open-uri'
require 'json'
# require 'net/http'

BASE_URL = "https://www.googleapis.com/youtube/v3/"
DEVELOPER_KEY = "AIzaSyB6XHker4rjXSZmlsphEoBGr33P_tMtWqI"
MAX_RESULT = 3


class YoutubeSearcher
  def get_videos(q)
    q.format
    open("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=#{MAX_RESULT}&q=#{q}&key=#{DEVELOPER_KEY}") do |f|
      json_string = f.read
      parsed_json = JSON.parse(json_string)
      p parsed_json
    end
  end
end

module Formatter
  def format
    self.gsub(/\s/, '+')
  end
end


class String
  include Formatter
end

searcher = YoutubeSearcher.new

searcher.get_videos("figure skating")