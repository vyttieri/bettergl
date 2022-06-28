require 'open-uri'

class ApplicationController < ActionController::Base
	def index
	end

	def fetch
		url = params[:url].blank? ? 'https://boardgamegeek.com/geeklist/298162/beautiful-fillers' : params[:url]

		html = URI.open url
		doc = Nokogiri::HTML(html)

		render json: Hash.from_xml(doc.to_xml).to_json
	end
end
