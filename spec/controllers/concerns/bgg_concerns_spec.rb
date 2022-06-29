require 'rails_helper'

RSpec.describe 'Bgg_concerns' do
	let(:test_class) { Struct.new(:url) { include BggConcerns } }

	describe 'fetch_list' do
		context 'with valid geeklist url' do
			let(:bgg_concerns) { test_class.new('url') }

			it 'successfully fetches the html' do
				html = bgg_concerns.fetch_list('asdf')
			end
		end
	end

	describe 'parse_list' do
		context 'with valid html' do
			let(:bgg_concerns) { test_class.new('url') }

			it 'successfully parses data fields' do
			end
		end
	end
end
