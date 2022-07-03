class ApplicationController < ActionController::Base
  include BggConcerns

  def index
  end

  def fetch
    url = params[:url].blank? ? 'https://boardgamegeek.com/geeklist/298162/beautiful-fillers' : params[:url]

    begin
      geeklist_scraper = GeeklistScraper.new(url)
      geeklist_scraper.scrape
    rescue ArgumentError => e
      render json: { error: e.message }, status: :bad_request
    else
      render json: geeklist_scraper.geeklist_items
    end
  end
end
