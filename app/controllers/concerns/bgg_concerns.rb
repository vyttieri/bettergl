module BggConcerns
  extend ActiveSupport::Concern

  class GeeklistScraper < Vessel::Cargo
    domain 'boardgamegeek.com'
    start_urls 'https://boardgamegeek.com/geeklist/298162/beautiful-fillers'

    def parse
      css('gg-geeklist-item-ui').each do |geeklist_item|
        yield({
          text: geeklist_item
        })
      end

      # if next_page = at_xpath("//li[@class='next']/a[@href]")
      #   url = absolute_url(next_page.attribute(:href))
      #   yield request(url: url, handler: :parse)
      # end
    end
  end
end