class ApplicationController < ActionController::Base
  include BggConcerns

  def index
  end

  def fetch
    url = params[:url].blank? ? 'https://boardgamegeek.com/geeklist/298162/beautiful-fillers' : params[:url]

    geeklist_scraper = GeeklistScraper.new(url)
    geeklist_scraper.scrape

    render json: JSON.generate(geeklist_scraper.geeklist_items)
  end
end
