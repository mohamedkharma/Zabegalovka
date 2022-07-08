const foodItem=[
  {
    id: 1,
    name: 'Marinated Mushrooms',
    category: 'starters',
    rating: 2,
    price: 3,
    img: '/img/Marinated-Mushrooms-Recipe-150.jpeg',
    quantity: 1
  },
  {
    id: 2,
    name: 'Roasted Cabbage Steaks',
    category: 'starters',
    rating: 3.1,
    price: 3,
    img: 'https://cdn.glitch.global/f824a37e-a4ec-4323-99c4-e7c1da4c18ae/Crispy-Roasted-Cabbage-Steaks.webp?v=1652709491622',
    quantity: 1
  },
  {
    id: 3,
    name: 'Smoked Salmon Sandwiches',
    category: 'starters',
    rating: 3.4,
    price: 4,
    img: 'https://cdn.glitch.global/f824a37e-a4ec-4323-99c4-e7c1da4c18ae/Smoked-Salmon-Tea-Sandwiches.webp?v=1652709585277',
    quantity: 1
  },
  {
    id: 4,
    name: 'Carrot Sandwiches',
    category: 'starters',
    rating: 2.3,
    price: 3.50,
    img: 'https://cdn.glitch.global/f824a37e-a4ec-4323-99c4-e7c1da4c18ae/Carrot-Sandwiches.webp?v=1652709645907',
    quantity: 1
  },
  {
    id: 5,
    name: 'Adjika Spicy Sauce',
    category: 'starters',
    rating: 5,
    price: 2.50,
    img: 'https://cdn.glitch.global/f824a37e-a4ec-4323-99c4-e7c1da4c18ae/Adjika-Recipe.webp?v=1652709697935',
    quantity: 1
  },
  {
    id: 6,
    name: 'Buckwheat with Mushrooms',
    category: 'main-dish',
    rating: 4.1,
    price: 11,
    img: 'https://cdn.glitch.global/f824a37e-a4ec-4323-99c4-e7c1da4c18ae/Buckwheat-with-Mushrooms.webp?v=1652710297071',
    quantity: 1
  },
  {
    id: 7,
    name: 'Traditional Cabbage Rolls',
    category: 'main-dish',
    rating: 3.2,
    price: 13.50,
    img: 'https://cdn.glitch.global/f824a37e-a4ec-4323-99c4-e7c1da4c18ae/Traditional-Cabbage-Rolls.webp?v=1652710341561',
    quantity: 1
  },
  {
    id: 8,
    name: 'Stuffed Bell Peppers',
    category: 'main-dish',
    rating: 2.9,
    price: 13,
    img: 'https://cdn.glitch.global/f824a37e-a4ec-4323-99c4-e7c1da4c18ae/Stuffed-Bell-Peppers.webp?v=1652710397937',
    quantity: 1
  },
  {
    id: 9,
    name: 'Beef with Potatoes',
    category: 'main-dish',
    rating: 3.9,
    price: 14.50,
    img: 'https://cdn.glitch.global/f824a37e-a4ec-4323-99c4-e7c1da4c18ae/Beef-with-Potatoes-and-Carrots.webp?v=1652710474169',
    quantity: 1
  },
  {
    id: 10,
    name: 'The Classic Vareniki',
    category: 'main-dish',
    rating: 5,
    price: 11,
    img: 'https://cdn.glitch.global/f824a37e-a4ec-4323-99c4-e7c1da4c18ae/The-Classic-Pierogis.webp?v=1652710579243',
    quantity: 1
  },
  {
    id: 11,
    name: 'Shuba Salad',
    category: 'salads',
    rating: 4.5,
    price: 9.5,
    img: 'https://cdn.glitch.global/f824a37e-a4ec-4323-99c4-e7c1da4c18ae/Shuba-Salad.webp?v=1652711065286',
    quantity: 1
  },
  {
    id: 12,
    name: 'Classic Garden Salad',
    category: 'salads',
    rating: 3,
    price: 8,
    img: 'https://cdn.glitch.global/f824a37e-a4ec-4323-99c4-e7c1da4c18ae/Classic-Garden-Cucumber-Tomato-Salad.webp?v=1652711067425',
    quantity: 1
  },
  {
    id: 13,
    name: 'Olivier Potato Salad',
    category: 'salads',
    rating: 4.7,
    price: 8.5,
    img: 'https://cdn.glitch.global/f824a37e-a4ec-4323-99c4-e7c1da4c18ae/Olivier-Potato-Salad.webp?v=1652711070589',
    quantity: 1
  },
  {
    id: 14,
    name: 'Vinaigrette Salad',
    category: 'salads',
    rating: 2,
    price: 8,
    img: 'https://cdn.glitch.global/f824a37e-a4ec-4323-99c4-e7c1da4c18ae/Russian-Vinaigrette-Salad.webp?v=1652711074555',
    quantity: 1
  },
  {
    id: 15,
    name: 'Green Salad',
    category: 'salads',
    rating: 3.6,
    price: 9,
    img: 'https://cdn.glitch.global/f824a37e-a4ec-4323-99c4-e7c1da4c18ae/Green-Cabbage-Cucumber-Salad-with-Herbs.webp?v=1652711077221',
    quantity: 1
  },
  {
    id: 16,
    name: 'Turkey Neck Soup',
    category: 'soups',
    rating: 4.8,
    price: 15,
    img: 'https://cdn.glitch.global/f824a37e-a4ec-4323-99c4-e7c1da4c18ae/Turkey-Necks-Soup.webp?v=1652711899108',
    quantity: 1
  },
  {
    id: 17,
    name: 'Buckwheat Soup',
    category: 'soups',
    rating: 2.2,
    price: 12,
    img: 'https://cdn.glitch.global/f824a37e-a4ec-4323-99c4-e7c1da4c18ae/Healthy-Buckwheat-Soup.webp?v=1652711903782',
    quantity: 1
  },
  {
    id: 18,
    name: 'Chicken Soup',
    category: 'soups',
    rating: 3.4,
    price: 13.5,
    img: 'https://cdn.glitch.global/f824a37e-a4ec-4323-99c4-e7c1da4c18ae/Moms-Chicken-Dumpling-Soup.webp?v=1652711904632',
    quantity: 1
  },
  {
    id: 19,
    name: 'Ukha Fish Soup',
    category: 'soups',
    rating: 3.5,
    price: 14.50,
    img: 'https://cdn.glitch.global/f824a37e-a4ec-4323-99c4-e7c1da4c18ae/Fish-Soup-aka-Ukha.webp?v=1652711908061',
    quantity: 1
  },
  {
    id: 20,
    name: 'Chicken Lentil Soup',
    category: 'soups',
    rating: 1.3,
    price: 12,
    img: 'https://cdn.glitch.global/f824a37e-a4ec-4323-99c4-e7c1da4c18ae/Chicken-Lentil-Soup.webp?v=1652711910408',
    quantity: 1
  },
  {
    id: 21,
    name: 'Dulce De Leche Cake Roll',
    category: 'desserts',
    rating: 2.3,
    price: 5.50,
    img: 'https://cdn.glitch.global/f824a37e-a4ec-4323-99c4-e7c1da4c18ae/Dulce-De-Leche-Cake-Roll.webp?v=1652712265523',
    quantity: 1
  },
  {
    id: 22,
    name: 'Peach Cookies',
    category: 'desserts',
    rating: 4,
    price: 4.50,
    img: 'https://cdn.glitch.global/f824a37e-a4ec-4323-99c4-e7c1da4c18ae/European-Peach-Cookies.webp?v=1652712269339',
    quantity: 1
  },
  {
    id: 23,
    name: 'Chocolate Raspberry Tarts',
    category: 'desserts',
    rating: 2.7,
    price: 4.50,
    img: 'https://cdn.glitch.global/f824a37e-a4ec-4323-99c4-e7c1da4c18ae/White-Chocolate-Raspberry-Mini-Tarts.webp?v=1652712277209',
    quantity: 1
  },
  {
    id: 24,
    name: 'Walnut Cake with Prunes',
    category: 'desserts',
    rating: 4.2,
    price: 5,
    img: 'https://cdn.glitch.global/f824a37e-a4ec-4323-99c4-e7c1da4c18ae/Walnut-Cake-with-Prunes-Recipe.webp?v=1652712279158',
    quantity: 1
  },
  {
    id: 25,
    name: 'Piroshky with Poppy Seeds',
    category: 'desserts',
    rating: 4.9,
    price: 5.50,
    img: 'https://cdn.glitch.global/f824a37e-a4ec-4323-99c4-e7c1da4c18ae/Russian-Sweet-Piroshky.webp?v=1652712269973',
    quantity: 1
  },
  {
    id: 26,
    name: 'Homemade Kompot',
    category: 'drinks',
    rating: 3.1,
    price: 3,
    img: 'https://cdn.glitch.global/f824a37e-a4ec-4323-99c4-e7c1da4c18ae/Kompot.webp?v=1652712808389',
    quantity: 1
  },
  {
    id: 27,
    name: 'Latte',
    category: 'drinks',
    rating: 1.4,
    price: 3.50,
    img: 'https://cdn.glitch.global/f824a37e-a4ec-4323-99c4-e7c1da4c18ae/Latte.webp?v=1652712801057',
    quantity: 1
  },
  {
    id: 28,
    name: 'Kvass',
    category: 'drinks',
    rating: 3.3,
    price: 3.50,
    img: 'https://cdn.glitch.global/f824a37e-a4ec-4323-99c4-e7c1da4c18ae/Easiest-Kvass-Recipe.webp?v=1652712805949',
    quantity: 1
  },
  {
    id: 29,
    name: 'Sparkling Mango Drink',
    category: 'drinks',
    rating: 4.1,
    price: 4,
    img: 'https://cdn.glitch.global/f824a37e-a4ec-4323-99c4-e7c1da4c18ae/Sparkling-Mango-Drink.webp?v=1652712798635',
    quantity: 1
  },
  {
    id: 30,
    name: 'Citrus and Mint Water',
    category: 'drinks',
    rating: 2.7,
    price: 2.50,
    img: 'https://cdn.glitch.global/f824a37e-a4ec-4323-99c4-e7c1da4c18ae/Citrus-and-Mint-Infused-Water.webp?v=1652712803623',
    quantity: 1
  },
  {
    id: 31,
    name: 'Kyiv Cake',
    category: 'vip-only',
    rating: 3.8,
    price: 6,
    img: 'https://cdn.glitch.global/f824a37e-a4ec-4323-99c4-e7c1da4c18ae/Kiyv-Cake.webp?v=1652795565694',
    quantity: 1
  },
  {
    id: 32,
    name: 'Classic Borscht',
    category: 'vip-only',
    rating: 2.9,
    price: 12,
    img: 'https://cdn.glitch.global/f824a37e-a4ec-4323-99c4-e7c1da4c18ae/Russian-Red-Borscht.webp?v=1652795570323',
    quantity: 1
  },
  {
    id: 33,
    name: 'Pelmeni',
    category: 'vip-only',
    rating: 4.1,
    price: 10,
    img: 'https://cdn.glitch.global/f824a37e-a4ec-4323-99c4-e7c1da4c18ae/Pelmeni.webp?v=1652795572911',
    quantity: 1
  },
  {
    id: 34,
    name: 'Chocolate Babka',
    category: 'vip-only',
    rating: 1.8,
    price: 4.50,
    img: 'https://cdn.glitch.global/f824a37e-a4ec-4323-99c4-e7c1da4c18ae/Chocolate-Babka.webp?v=1652795574902',
    quantity: 1
  },
  {
    id: 35,
    name: 'Sorrel Soup',
    category: 'vip-only',
    rating: 3,
    price: 11,
    img: 'https://cdn.glitch.global/f824a37e-a4ec-4323-99c4-e7c1da4c18ae/Sorrel-Soup.webp?v=1652795567997',
    quantity: 1
  },
]

export {foodItem};