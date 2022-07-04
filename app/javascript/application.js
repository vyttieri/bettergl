// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import '@hotwired/turbo-rails'
import 'controllers'
import 'components/form'

import React, { useState } from 'react'
import { render } from 'react-dom'

import h from 'helpers/createElement'
import Form from 'components/form'
import List from 'components/list'

const GEEKLIST_ITEMS = [
    {
        "rank": 1,
        "title": "Air, Land, and Sea: Critters at War",
        "rating": 7.7,
        "link": "https://boardgamegeek.com/boardgame/342857/air-land-and-sea-critters-war"
    },
    {
        "rank": 2,
        "title": "Ambar",
        "rating": 6.8,
        "link": "https://boardgamegeek.com/boardgame/255680/ambar"
    },
    {
        "rank": 3,
        "title": "Ankh'or",
        "rating": 7,
        "link": "https://boardgamegeek.com/boardgame/271530/ankhor"
    },
    {
        "rank": 4,
        "title": "Arboretum",
        "rating": 7.4,
        "link": "https://boardgamegeek.com/boardgame/140934/arboretum"
    },
    {
        "rank": 5,
        "title": "Ausonia",
        "rating": 7.8,
        "link": "https://boardgamegeek.com/boardgame/302469/ausonia"
    },
    {
        "rank": 6,
        "title": "Azul",
        "rating": 7.8,
        "link": "https://boardgamegeek.com/boardgame/230802/azul"
    },
    {
        "rank": 7,
        "title": "Azul: Stained Glass of Sintra",
        "rating": 7.4,
        "link": "https://boardgamegeek.com/boardgame/256226/azul-stained-glass-sintra"
    },
    {
        "rank": 8,
        "title": "Azul: Summer Pavilion",
        "rating": 7.7,
        "link": "https://boardgamegeek.com/boardgame/287954/azul-summer-pavilion"
    },
    {
        "rank": 9,
        "title": "Badland Wolves",
        "rating": 7.1,
        "link": "https://boardgamegeek.com/boardgame/325676/badland-wolves"
    },
    {
        "rank": 10,
        "title": "Birds of a Feather: Western North America",
        "rating": 6.9,
        "link": "https://boardgamegeek.com/boardgame/358000/birds-feather-western-north-america"
    },
    {
        "rank": 11,
        "title": "Bosk",
        "rating": 7,
        "link": "https://boardgamegeek.com/boardgame/252556/bosk"
    },
    {
        "rank": 12,
        "title": "Botanik",
        "rating": 7.8,
        "link": "https://boardgamegeek.com/boardgame/271529/botanik"
    },
    {
        "rank": 13,
        "title": "Calico",
        "rating": 7.7,
        "link": "https://boardgamegeek.com/boardgame/283155/calico"
    },
    {
        "rank": 14,
        "title": "Campy Creatures",
        "rating": 7.1,
        "link": "https://boardgamegeek.com/boardgame/214396/campy-creatures"
    },
    {
        "rank": 15,
        "title": "Canopy",
        "rating": 7.6,
        "link": "https://boardgamegeek.com/boardgame/295607/canopy"
    },
    {
        "rank": 16,
        "title": "Canvas",
        "rating": 7.4,
        "link": "https://boardgamegeek.com/boardgame/290236/canvas"
    },
    {
        "rank": 17,
        "title": "Carcassonne",
        "rating": 7.4,
        "link": "https://boardgamegeek.com/boardgame/822/carcassonne"
    },
    {
        "rank": 18,
        "title": "Cascadia",
        "rating": 8,
        "link": "https://boardgamegeek.com/boardgame/295947/cascadia"
    },
    {
        "rank": 19,
        "title": "Catacombs Conquest",
        "rating": 6.8,
        "link": "https://boardgamegeek.com/boardgame/228553/catacombs-conquest"
    },
    {
        "rank": 20,
        "title": "Cathedral",
        "rating": 6.5,
        "link": "https://boardgamegeek.com/boardgame/7/cathedral"
    },
    {
        "rank": 21,
        "title": "Chakra",
        "rating": 6.9,
        "link": "https://boardgamegeek.com/boardgame/267378/chakra"
    },
    {
        "rank": 22,
        "title": "Codex Naturalis",
        "rating": 7.2,
        "link": "https://boardgamegeek.com/boardgame/314503/codex-naturalis"
    },
    {
        "rank": 23,
        "title": "Conspiracy: Abyss Universe",
        "rating": 7.3,
        "link": "https://boardgamegeek.com/boardgame/276042/conspiracy-abyss-universe"
    },
    {
        "rank": 24,
        "title": "Crossfire",
        "rating": 6.5,
        "link": "https://boardgamegeek.com/boardgame/230059/crossfire"
    },
    {
        "rank": 25,
        "title": "CuBirds",
        "rating": 7,
        "link": "https://boardgamegeek.com/boardgame/245476/cubirds"
    },
    {
        "rank": 26,
        "title": "Dance of the Fireflies",
        "rating": 6.1,
        "link": "https://boardgamegeek.com/boardgame/223597/dance-fireflies"
    },
    {
        "rank": 27,
        "title": "Death Valley",
        "rating": 7.1,
        "link": "https://boardgamegeek.com/boardgame/322703/death-valley"
    },
    {
        "rank": 28,
        "title": "Detective Club",
        "rating": 7.4,
        "link": "https://boardgamegeek.com/boardgame/256788/detective-club"
    },
    {
        "rank": 29,
        "title": "Dice Throne: Season One ReRolled",
        "rating": 8.4,
        "link": "https://boardgamegeek.com/boardgame/291794/dice-throne-season-one-rerolled"
    },
    {
        "rank": 30,
        "title": "Disney: The Haunted Mansion – Call of the Spirits Game",
        "rating": 7.2,
        "link": "https://boardgamegeek.com/boardgame/309129/disney-haunted-mansion-call-spirits-game"
    },
    {
        "rank": 31,
        "title": "Dixit",
        "rating": 7.2,
        "link": "https://boardgamegeek.com/boardgame/39856/dixit"
    },
    {
        "rank": 32,
        "title": "Dragon Farkle",
        "rating": 6.4,
        "link": "https://boardgamegeek.com/boardgame/128174/dragon-farkle"
    },
    {
        "rank": 33,
        "title": "Dungeon Mayhem",
        "rating": 7,
        "link": "https://boardgamegeek.com/boardgame/260300/dungeon-mayhem"
    },
    {
        "rank": 34,
        "title": "Ecosystem",
        "rating": 7.3,
        "link": "https://boardgamegeek.com/boardgame/271519/ecosystem"
    },
    {
        "rank": 35,
        "title": "Eight-Minute Empire: Legends",
        "rating": 6.9,
        "link": "https://boardgamegeek.com/boardgame/142326/eight-minute-empire-legends"
    },
    {
        "rank": 36,
        "title": "Floriferous",
        "rating": 7.7,
        "link": "https://boardgamegeek.com/boardgame/322622/floriferous"
    },
    {
        "rank": 37,
        "title": "For Sale",
        "rating": 7.2,
        "link": "https://boardgamegeek.com/boardgame/172/sale"
    },
    {
        "rank": 38,
        "title": "The Fox in the Forest",
        "rating": 7.2,
        "link": "https://boardgamegeek.com/boardgame/221965/fox-forest"
    },
    {
        "rank": 39,
        "title": "Frankenstein",
        "rating": 6.7,
        "link": "https://boardgamegeek.com/boardgame/286064/frankenstein"
    },
    {
        "rank": 40,
        "title": "A Game of Cat & Mouth",
        "rating": 7.1,
        "link": "https://boardgamegeek.com/boardgame/321539/game-cat-mouth"
    },
    {
        "rank": 41,
        "title": "Ghosts of Christmas",
        "rating": 7.3,
        "link": "https://boardgamegeek.com/boardgame/281619/ghosts-christmas"
    },
    {
        "rank": 42,
        "title": "Gods Love Dinosaurs",
        "rating": 7.1,
        "link": "https://boardgamegeek.com/boardgame/316622/gods-love-dinosaurs"
    },
    {
        "rank": 43,
        "title": "Great Plains",
        "rating": 7.3,
        "link": "https://boardgamegeek.com/boardgame/330036/great-plains"
    },
    {
        "rank": 44,
        "title": "Hanamikoji",
        "rating": 7.5,
        "link": "https://boardgamegeek.com/boardgame/158600/hanamikoji"
    },
    {
        "rank": 45,
        "title": "Harvest Island",
        "rating": 7,
        "link": "https://boardgamegeek.com/boardgame/231639/harvest-island"
    },
    {
        "rank": 46,
        "title": "Haven",
        "rating": 7,
        "link": "https://boardgamegeek.com/boardgame/205127/haven"
    },
    {
        "rank": 47,
        "title": "Herbaceous",
        "rating": 7.1,
        "link": "https://boardgamegeek.com/boardgame/195314/herbaceous"
    },
    {
        "rank": 48,
        "title": "Herbaceous Sprouts",
        "rating": 7,
        "link": "https://boardgamegeek.com/boardgame/244099/herbaceous-sprouts"
    },
    {
        "rank": 49,
        "title": "Hidden Leaders",
        "rating": 7.2,
        "link": "https://boardgamegeek.com/boardgame/320718/hidden-leaders"
    },
    {
        "rank": 50,
        "title": "Hidden Leaders",
        "rating": 7.2,
        "link": "https://boardgamegeek.com/boardgame/320718/hidden-leaders"
    },
    {
        "rank": 51,
        "title": "High Society",
        "rating": 7.1,
        "link": "https://boardgamegeek.com/boardgame/220/high-society"
    },
    {
        "rank": 52,
        "title": "The Imposter Kings Card Game",
        "rating": 9.3,
        "link": "https://boardgamegeek.com/boardgame/303003/imposter-kings-card-game"
    },
    {
        "rank": 53,
        "title": "Into the Blue",
        "rating": 6.6,
        "link": "https://boardgamegeek.com/boardgame/346950/blue"
    },
    {
        "rank": 54,
        "title": "Iwari",
        "rating": 7.2,
        "link": "https://boardgamegeek.com/boardgame/270109/iwari"
    },
    {
        "rank": 55,
        "title": "Jaipur",
        "rating": 7.5,
        "link": "https://boardgamegeek.com/boardgame/54043/jaipur"
    },
    {
        "rank": 56,
        "title": "Kanagawa",
        "rating": 7.1,
        "link": "https://boardgamegeek.com/boardgame/200147/kanagawa"
    },
    {
        "rank": 57,
        "title": "Kerala: The Way of the Elephant",
        "rating": 6.9,
        "link": "https://boardgamegeek.com/boardgame/191055/kerala-way-elephant"
    },
    {
        "rank": 58,
        "title": "King & Assassins",
        "rating": 6.9,
        "link": "https://boardgamegeek.com/boardgame/147930/king-assassins"
    },
    {
        "rank": 59,
        "title": "Kōhaku",
        "rating": 7.8,
        "link": "https://boardgamegeek.com/boardgame/270143/khaku"
    },
    {
        "rank": 60,
        "title": "Lanterns: The Harvest Festival",
        "rating": 6.9,
        "link": "https://boardgamegeek.com/boardgame/160851/lanterns-harvest-festival"
    },
    {
        "rank": 61,
        "title": "Letter Tycoon",
        "rating": 6.8,
        "link": "https://boardgamegeek.com/boardgame/169147/letter-tycoon"
    },
    {
        "rank": 62,
        "title": "Long Shot: The Dice Game",
        "rating": 7.9,
        "link": "https://boardgamegeek.com/boardgame/295374/long-shot-dice-game"
    },
    {
        "rank": 63,
        "title": "Lotus",
        "rating": 6.7,
        "link": "https://boardgamegeek.com/boardgame/198525/lotus"
    },
    {
        "rank": 64,
        "title": "Lovecraft Letter",
        "rating": 7.2,
        "link": "https://boardgamegeek.com/boardgame/198740/lovecraft-letter"
    },
    {
        "rank": 65,
        "title": "Magic: The Gathering – Explorers of Ixalan",
        "rating": 7.2,
        "link": "https://boardgamegeek.com/boardgame/231309/magic-gathering-explorers-ixalan"
    },
    {
        "rank": 66,
        "title": "Mandala",
        "rating": 7.6,
        "link": "https://boardgamegeek.com/boardgame/264241/mandala"
    },
    {
        "rank": 67,
        "title": "Mascarade",
        "rating": 6.6,
        "link": "https://boardgamegeek.com/boardgame/139030/mascarade"
    },
    {
        "rank": 68,
        "title": "Matcha",
        "rating": 6.3,
        "link": "https://boardgamegeek.com/boardgame/166107/matcha"
    },
    {
        "rank": 69,
        "title": "Mint Works",
        "rating": 7,
        "link": "https://boardgamegeek.com/boardgame/200077/mint-works"
    },
    {
        "rank": 70,
        "title": "Modern Art",
        "rating": 7.5,
        "link": "https://boardgamegeek.com/boardgame/118/modern-art"
    },
    {
        "rank": 71,
        "title": "Monster Expedition",
        "rating": 6.9,
        "link": "https://boardgamegeek.com/boardgame/313698/monster-expedition"
    },
    {
        "rank": 72,
        "title": "Morels",
        "rating": 7,
        "link": "https://boardgamegeek.com/boardgame/122298/morels"
    },
    {
        "rank": 73,
        "title": "Mountain Goats",
        "rating": 7,
        "link": "https://boardgamegeek.com/boardgame/305985/mountain-goats"
    },
    {
        "rank": 74,
        "title": "No Thanks!",
        "rating": 7.1,
        "link": "https://boardgamegeek.com/boardgame/12942/no-thanks"
    },
    {
        "rank": 75,
        "title": "Noctiluca",
        "rating": 7.2,
        "link": "https://boardgamegeek.com/boardgame/269752/noctiluca"
    },
    {
        "rank": 76,
        "title": "Odin's Ravens (Second Edition)",
        "rating": 7,
        "link": "https://boardgamegeek.com/boardgame/192074/odins-ravens-second-edition"
    },
    {
        "rank": 77,
        "title": "Ohanami",
        "rating": 7.4,
        "link": "https://boardgamegeek.com/boardgame/270314/ohanami"
    },
    {
        "rank": 78,
        "title": "On Tour",
        "rating": 7,
        "link": "https://boardgamegeek.com/boardgame/251412/tour"
    },
    {
        "rank": 79,
        "title": "Onirim (Second Edition)",
        "rating": 7.1,
        "link": "https://boardgamegeek.com/boardgame/156336/onirim-second-edition"
    },
    {
        "rank": 80,
        "title": "Onitama",
        "rating": 7.4,
        "link": "https://boardgamegeek.com/boardgame/160477/onitama"
    },
    {
        "rank": 81,
        "title": "Overboss: A Boss Monster Adventure",
        "rating": 7.5,
        "link": "https://boardgamegeek.com/boardgame/310192/overboss-boss-monster-adventure"
    },
    {
        "rank": 82,
        "title": "Pairs",
        "rating": 6.3,
        "link": "https://boardgamegeek.com/boardgame/152237/pairs"
    },
    {
        "rank": 83,
        "title": "Parade",
        "rating": 7,
        "link": "https://boardgamegeek.com/boardgame/56692/parade"
    },
    {
        "rank": 84,
        "title": "Paris: La Cité de la Lumière",
        "rating": 7.4,
        "link": "https://boardgamegeek.com/boardgame/276498/paris-la-cite-de-la-lumiere"
    },
    {
        "rank": 85,
        "title": "Piepmatz",
        "rating": 7.1,
        "link": "https://boardgamegeek.com/boardgame/246200/piepmatz"
    },
    {
        "rank": 86,
        "title": "Point Salad",
        "rating": 7.2,
        "link": "https://boardgamegeek.com/boardgame/274960/point-salad"
    },
    {
        "rank": 87,
        "title": "QE",
        "rating": 7.4,
        "link": "https://boardgamegeek.com/boardgame/266830/qe"
    },
    {
        "rank": 88,
        "title": "Quest",
        "rating": 7.4,
        "link": "https://boardgamegeek.com/boardgame/316287/quest"
    },
    {
        "rank": 89,
        "title": "Radlands",
        "rating": 8.2,
        "link": "https://boardgamegeek.com/boardgame/329082/radlands"
    },
    {
        "rank": 90,
        "title": "Railroad Ink: Deep Blue Edition",
        "rating": 7.2,
        "link": "https://boardgamegeek.com/boardgame/245654/railroad-ink-deep-blue-edition"
    },
    {
        "rank": 91,
        "title": "Ramen Fury",
        "rating": 6.3,
        "link": "https://boardgamegeek.com/boardgame/265524/ramen-fury"
    },
    {
        "rank": 92,
        "title": "Royal Visit",
        "rating": 6.7,
        "link": "https://boardgamegeek.com/boardgame/22245/royal-visit"
    },
    {
        "rank": 93,
        "title": "Sagrada",
        "rating": 7.5,
        "link": "https://boardgamegeek.com/boardgame/199561/sagrada"
    },
    {
        "rank": 94,
        "title": "Sakura",
        "rating": 6.2,
        "link": "https://boardgamegeek.com/boardgame/229543/sakura"
    },
    {
        "rank": 95,
        "title": "Santa Monica",
        "rating": 7.3,
        "link": "https://boardgamegeek.com/boardgame/298065/santa-monica"
    },
    {
        "rank": 96,
        "title": "Santorini",
        "rating": 7.4,
        "link": "https://boardgamegeek.com/boardgame/194655/santorini"
    },
    {
        "rank": 97,
        "title": "Seikatsu",
        "rating": 7.1,
        "link": "https://boardgamegeek.com/boardgame/216428/seikatsu"
    },
    {
        "rank": 98,
        "title": "Skulk Hollow",
        "rating": 7.4,
        "link": "https://boardgamegeek.com/boardgame/232595/skulk-hollow"
    },
    {
        "rank": 99,
        "title": "Skull",
        "rating": 7.2,
        "link": "https://boardgamegeek.com/boardgame/92415/skull"
    },
    {
        "rank": 100,
        "title": "Sky Tango",
        "rating": 6.3,
        "link": "https://boardgamegeek.com/boardgame/126750/sky-tango"
    },
    {
        "rank": 101,
        "title": "Songbirds",
        "rating": 6.9,
        "link": "https://boardgamegeek.com/boardgame/212765/songbirds"
    },
    {
        "rank": 102,
        "title": "Sonora",
        "rating": 7,
        "link": "https://boardgamegeek.com/boardgame/296626/sonora"
    },
    {
        "rank": 103,
        "title": "Space Park",
        "rating": 7.2,
        "link": "https://boardgamegeek.com/boardgame/243358/space-park"
    },
    {
        "rank": 104,
        "title": "Spicy",
        "rating": 7.2,
        "link": "https://boardgamegeek.com/boardgame/299169/spicy"
    },
    {
        "rank": 105,
        "title": "Spirits of the Forest",
        "rating": 6.9,
        "link": "https://boardgamegeek.com/boardgame/235375/spirits-forest"
    },
    {
        "rank": 106,
        "title": "Spirits of the Wild",
        "rating": 7.4,
        "link": "https://boardgamegeek.com/boardgame/256606/spirits-wild"
    },
    {
        "rank": 107,
        "title": "Splendor",
        "rating": 7.4,
        "link": "https://boardgamegeek.com/boardgame/148228/splendor"
    },
    {
        "rank": 108,
        "title": "Stella: Dixit Universe",
        "rating": 7.3,
        "link": "https://boardgamegeek.com/boardgame/329845/stella-dixit-universe"
    },
    {
        "rank": 109,
        "title": "Sunset Over Water",
        "rating": 7,
        "link": "https://boardgamegeek.com/boardgame/224904/sunset-over-water"
    },
    {
        "rank": 110,
        "title": "Sushi Go!",
        "rating": 7,
        "link": "https://boardgamegeek.com/boardgame/133473/sushi-go"
    },
    {
        "rank": 111,
        "title": "Taluva",
        "rating": 7.2,
        "link": "https://boardgamegeek.com/boardgame/24508/taluva"
    },
    {
        "rank": 112,
        "title": "Tao Long: The Way of the Dragon",
        "rating": 6.9,
        "link": "https://boardgamegeek.com/boardgame/215613/tao-long-way-dragon"
    },
    {
        "rank": 113,
        "title": "Through the Desert",
        "rating": 7.1,
        "link": "https://boardgamegeek.com/boardgame/503/through-desert"
    },
    {
        "rank": 114,
        "title": "Tic Tac K.O.: Dragons vs Unicorns",
        "rating": 6.8,
        "link": "https://boardgamegeek.com/boardgame/346296/tic-tac-ko-dragons-vs-unicorns"
    },
    {
        "rank": 115,
        "title": "Tichu",
        "rating": 7.6,
        "link": "https://boardgamegeek.com/boardgame/215/tichu"
    },
    {
        "rank": 116,
        "title": "Tiny Epic Galaxies",
        "rating": 7.4,
        "link": "https://boardgamegeek.com/boardgame/163967/tiny-epic-galaxies"
    },
    {
        "rank": 117,
        "title": "Tiny Epic Zombies",
        "rating": 7,
        "link": "https://boardgamegeek.com/boardgame/244536/tiny-epic-zombies"
    },
    {
        "rank": 118,
        "title": "TRAILS",
        "rating": 7.2,
        "link": "https://boardgamegeek.com/boardgame/338628/trails"
    },
    {
        "rank": 119,
        "title": "Tsuro",
        "rating": 6.7,
        "link": "https://boardgamegeek.com/boardgame/16992/tsuro"
    },
    {
        "rank": 120,
        "title": "Tussie Mussie",
        "rating": 7,
        "link": "https://boardgamegeek.com/boardgame/257614/tussie-mussie"
    },
    {
        "rank": 121,
        "title": "Twin It!",
        "rating": 6.8,
        "link": "https://boardgamegeek.com/boardgame/222887/twin-it"
    },
    {
        "rank": 122,
        "title": "Unmatched Game System",
        "rating": 8.4,
        "link": "https://boardgamegeek.com/boardgame/295564/unmatched-game-system"
    },
    {
        "rank": 123,
        "title": "Village Green",
        "rating": 7.1,
        "link": "https://boardgamegeek.com/boardgame/300583/village-green"
    },
    {
        "rank": 124,
        "title": "Wavelength",
        "rating": 7.4,
        "link": "https://boardgamegeek.com/boardgame/262543/wavelength"
    },
    {
        "rank": 125,
        "title": "Welcome To...",
        "rating": 7.6,
        "link": "https://boardgamegeek.com/boardgame/233867/welcome"
    },
    {
        "rank": 126,
        "title": "The Whatnot Cabinet",
        "rating": 7.4,
        "link": "https://boardgamegeek.com/boardgame/283242/whatnot-cabinet"
    },
    {
        "rank": 127,
        "title": "Wild Space",
        "rating": 7.3,
        "link": "https://boardgamegeek.com/boardgame/298371/wild-space"
    },
    {
        "rank": 128,
        "title": "Word Domination",
        "rating": 7.1,
        "link": "https://boardgamegeek.com/boardgame/205057/word-domination"
    }
]

const App = props => {
	const [geeklistItems, setGeeklistItems] = useState(GEEKLIST_ITEMS)
	const onGeeklistLoad = geeklistItems => {
		setGeeklistItems(geeklistItems)
	}

	return h`
	<div>
		Test ${props.name}
		<${Form} onGeeklistLoad=${onGeeklistLoad} />
		<${List} geeklistItems=${geeklistItems}/>
	</div>
	`
}

document.addEventListener('DOMContentLoaded', () => {
	render(
		h`<${App} name='htm' />`,
		document.getElementById('app')
	)
})
