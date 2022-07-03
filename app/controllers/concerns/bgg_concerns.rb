module BggConcerns
  extend ActiveSupport::Concern

  class GeeklistScraper
    attr_reader :geeklist_url, :geeklist_items

    def initialize(geeklist_url)
      @geeklist_url = geeklist_url
      @geeklist_items = []
      @browser = Ferrum::Browser.new(timeout: 30)
    end

    def scrape
      @browser.go_to @geeklist_url
      sleep 2

      pages = @browser.css('nav gg-pagination-input > ul > li > p > span')[0].text.split(' ')[1].to_i
      cur_page = 2
      while cur_page <= pages
        new_url = @geeklist_url + "?page=#{cur_page}"
        @browser.go_to new_url

      # browser.network.wait_for_idle
        sleep 2

        parse_page

        cur_page += 1
      end

    end

    private

    def parse_page
      @browser.css('gg-geeklist-item').each do |item|
        rank = item.at_css('h2 > span').text.split('.')[0].to_i
        rating = item.at_css('gg-rating-indicator > span > span').text.to_f
        link_node = item.at_css('h2 a')
        title = link_node.text
        link = link_node.attribute('href')

        @geeklist_items << {rank: rank, title: title, rating: rating, link: link}
      end

    end
  end
end
