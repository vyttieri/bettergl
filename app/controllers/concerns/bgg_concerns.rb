module BggConcerns
	extend ActiveSupport::Concern

	def fetch_list(url)
		begin
			html = URI.open(url)
		end

		html
	end


	def parse_html(html)
		doc = Nokogiri::HTML(html)
	end
end
