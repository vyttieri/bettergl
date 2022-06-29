class Parser
	def initialize
		doc = Nokogiri::HTML(html)
		@list = parse(doc)
	end

	def list_json
		@list.to_json
	end

	private

	def parse

	end
end
