import sys
from ruamel.yaml import YAML

# =================================================================================
d = dict(plantArray=[
    'Arrowhead',
    'Bald Hip Rose',
    'Beach Strawberry',
    'Beaked Hazelnut',
    'Bearberry',
    'Big Tuna Pine',
    'Bigleaf Maple',
    'Bitter Cherry',
    'Black Cap Raspberry',
    'Black Cottonwood',
    'Black Gooseberry',
    'Black Hawthorn',
    'Blackberry',
    'Bleeding Heart',
    'Blue Elderberry',
    'Blue Eyed Grass',
    'Bog Laurel',
    'Bog Rosemary',
    'Boxwood',
    'Broadleaved Stonecrop',
    'Bunchberry',
    'Camas Common',
    'Camas Great',
    'Cascade penstemon',
    'Cascara',
    'Cattail',
    'Chocolate Lily',
    'Coastal Gumweed',
    'Colorado Spruce',
    'Columbia Lewisia',
    'Cooleys Hedge Nettle',
    'Cow Parsnip',
    'Dagger Leaved Rush',
    'Devils Club',
    'Deweys Sedge',
    'Douglas Aster',
    'Douglas Fir',
    'Douglas Maple',
    'Dunegrass',
    'Dwarf Japanese Pine',
    'Eounonymous (Golden Edge)',
    'Eounonymous (Moonshadow)',
    'Eounonymous (SilverQueen)',
    'False Lily of The Valley',
    'False Solomons Seal',
    'Farewell to Spring',
    'Fern',
    'Fern (Lady)',
    'Fern (Licorice)',
    'Fern (Normal) ',
    'Fern (Oak)',
    'Fern (Sword)',
    'Fireweed',
    'Flowered Alumroot',
    'Foam Flower',
    'Fringecup',
    'Garry Oak',
    'Goats Beard',
    'Golden Eyed Grass',
    'Golden Rod',
    'Golden Spanish Pin Fir',
    'Graceful Cinquefoil',
    'Grand fir',
    'Green Spire',
    'Hairy Honeysuckle',
    'Hairy Manzanita',
    'Hardstem Bulrush',
    'Harebell',
    'Hendersons Checker Mallow',
    'Highbush Cranberry - Mooseberry',
    'Hinoki Cypress',
    'Honeysuckle (Orange)',
    'Hookers Onion',
    'Hookers Willow',
    'Huckleberry',
    'Hydrangea',
    'Idaho Fecue',
    'Indian Plum',
    'Insideout Flower',
    'Juniperus',
    'Kinnick Kinnick',
    'Kneeling Angelica',
    'Low Oregon Grape',
    'Lyngbyes Sedge',
    'Madrone - Madrona',
    'Maidenhair Fern',
    'Manzanita (Hybrid)',
    'Mock Orange',
    'Mogo Pine',
    'Mooseberry',
    'Nettle',
    'Nodding Onion',
    'Nootka Rose',
    'Oceanspray',
    'Oregon Ash',
    'Oregon Box',
    'Oregon Grape ',
    'Oregon Iris',
    'Oregon White Oak',
    'Oxalis',
    'Pacific Crabapple',
    'Pacific Dogwood',
    'Pacific Ninebark',
    'Pacific Rhododendron',
    'Pacific Waterleaf',
    'Pacific Wax Myrtle',
    'Pacific Willow',
    'Palace Purple',
    'Palmate Coltsfoot',
    'Paper Birch',
    'Pear',
    'Peraly Everlasting',
    'Picea',
    'Piggyback Plant',
    'Quaking Aspen',
    'Rattlesnake Plantain',
    'Red Alder',
    'Red Elderberry',
    'Red Flowering Currant',
    'Red Huckleberry',
    'Red Osier Dogwood',
    'Red Stem Ceanothus',
    'Salal',
    'Salmonberry',
    'Scoulers Corydalis',
    'Sea Pink',
    'Seawatch',
    'Serviceberry',
    'Shore Pine',
    'Showy Fleabane',
    'Silverweed',
    'Sitka Spruce',
    'Sitka Willow',
    'Skunk Cabbage',
    'Slide Alder',
    'Slough Sedge',
    'Small Bulrush',
    'Snowberry',
    'Snowberry (Trailing)',
    'Snowbrush ',
    'Spiraea',
    'Spreading Stonecrop',
    'Star Flowered False Solomons Seal',
    'Sticky Laurel',
    'Stink Currant',
    'Strawberry',
    'Stream Violet',
    'Subalpine Spiraea',
    'Swamp Lantern  ',
    'Swamp Rose',
    'Sweet Gale',
    'Thick Headed Sedge',
    'Thimbleberry',
    'Thistle',
    'Tilia',
    'Trillium',
    'Tufted Hairgrass',
    'Twinberry',
    'Twinflower',
    'Vanilla Leaf',
    'Vine Maple',
    'Western Columbine',
    'Western Hemlock',
    'Western Redcedar',
    'Western Starflower',
    'Western White Pine',
    'White Spirea',
    'Wild Ginger',
    'Wild Strawberry',
    'Yarrow',
    'Yellow Monkey Flower',
    'Yew',
])

# ---------------------------------------------------------------------------------
yaml = YAML()
yaml.indent(mapping=4, sequence=6, offset=3)
file = open('../yaml_files/plantArray.yaml', 'w')
yaml.dump(d, file)
