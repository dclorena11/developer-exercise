require 'open-uri'
require 'json'

BASE_URL = "https://www.googleapis.com/youtube/v3/"
DEVELOPER_KEY = "AIzaSyB6XHker4rjXSZmlsphEoBGr33P_tMtWqI"
MAX_RESULT = 3

class YoutubeSearcher
  def get_videos(q)
    q.format
    open("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=#{MAX_RESULT}&q=#{q}&key=#{DEVELOPER_KEY}") do |f|
      json_string = f.read
      parsed_json = JSON.parse(json_string)
      videos = parsed_json["items"]
      jsonify(videos)
    end
  end

  def jsonify(videos)
    accumulator = []
    videos.each do |video|
      accumulator << {video["snippet"]["title"] => url(video["id"]["videoId"])}.to_json
    end
    accumulator
  end

  def url(video_id)
    "https://www.youtube.com/watch?v=#{video_id}"
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