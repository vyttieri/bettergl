require 'rails_helper'
require 'spec_helper'

RSpec.describe 'Bgg_concerns' do
	let(:test_class) { Struct.new(:url) { include BggConcerns } }

	describe 'fetch_list' do
		context 'with valid geeklist url' do
			let(:bgg_concerns) { test_class.new('https://boardgamegeek.com/geeklist/298162/beautiful-fillers') }
			let(:html) do
				VCR.use_cassette('geeklist', record: :new_episodes) do
					bgg_concerns.fetch_list(bgg_concerns.url)
				end
			end

			it 'successfully fetches the html' do
				puts html
			end
		end

		context 'with invalid geeklist url' do

		end
	end

	describe 'parse_list' do
		context 'with valid html' do
			let(:bgg_concerns) { test_class.new('url') }

			it 'successfully parses data fields' do
			end
		end

		context 'with invalid html' do

		end
	end
end
