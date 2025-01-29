const menuData = [
    {
        "image": "assets/images/menu/algeriantraditional/Kesra Algerian.jpg",
        "category": "Algerian Traditional",
        "title": "Kesra Algerian",
        "description": "Delicious dish with fresh ingredients.",
        "price":"15"
    },
    {
        "image": "assets/images/menu/algeriantraditional/Mhadjeb.jpg",
        "category": "Algerian Traditional",
        "title": "Mhadjeb",
        "description": "Flaky Algerian flatbread with a savory filling.",
        "price":"15"
    },
    {
        "image": "assets/images/menu/salads/Chroba Frik.jpg",
        "category": "Salads",
        "title": "Chroba Frik",
        "description": "Traditional green wheat soup.",
        "price":"15"
    },
    {
        "image": "assets/images/menu/salads/Chorba Hrira.jpg",
        "category": "Salads",
        "title": "Chorba Hrira",
        "description": "A classic hearty Algerian soup.",
        "price":"15"
    },
    {
        "image": "assets/images/menu/salads/Lentil Soup.jpg",
        "category": "Salads",
        "title": "Lentil Soup",
        "description": "Nutritious soup with a rich taste.",
        "price":"15"
    },
    {
        "image": "assets/images/menu/couscous/Couscous Beef.jpg",
        "category": "Couscous",
        "title": "Couscous Beef",
        "description": "Traditional couscous with tender beef.",
        "price":"15"
    },
    {
        "image": "assets/images/menu/couscous/Couscous Chicken.jpg",
        "category": "Couscous",
        "title": "Couscous Chicken",
        "description": "A classic couscous dish with chicken.",
        "price":"15"
    },
    {
        "image": "assets/images/menu/couscous/Couscous Vegetables.jpg",
        "category": "Couscous",
        "title": "Couscous Vegetables",
        "description": "Vegetarian couscous loaded with fresh veggies.",
        "price":"15"
    },
    {
        "image": "assets/images/menu/couscous/Couscous Royal.jpg",
        "category": "Couscous",
        "title": "Couscous Royal",
        "description": "A grand couscous with meats and vegetables.",
        "price":"15"
    },
    {
        "image": "assets/images/menu/tadjine/Mutawam casserole.jpg",
        "category": "Tadjines",
        "title": "Mutawam casserole",
        "description": "Garlic-rich traditional casserole.",
        "price":"15"
    },
    {
        "image": "assets/images/menu/tadjine/Tadjine Zitoune.jpg",
        "category": "Tadjines",
        "title": "Tadjine Zitoune",
        "description": "Algerian olive stew with tender meat.",
        "price":"15"
    },
    {
        "image": "assets/images/menu/tadjine/Tadjine Jelbana.jpg",
        "category": "Tadjines",
        "title": "Tajine Jelbana",
        "description": "Green pea stew with traditional spices.",
        "price":"15"
    },
    {
        "image": "assets/images/menu/specialdishes/Chakhchoukha Beskria Beef.jpg",
        "category": "Special Dishes",
        "title": "Chakhchoukha Beskria Beef",
        "description": "Savory shredded bread with beef.",
        "price":"15"
    },
    {
        "image": "assets/images/menu/specialdishes/Lubia (White Bean) Dish.jpg",
        "category": "Special Dishes",
        "title": "Lubia (White Bean) Dish",
        "description": "A hearty white bean stew.",
        "price":"15"
    },
    {
        "image": "assets/images/menu/specialdishes/Chakhchoukha Beskria Chicken.jpg",
        "category": "Special Dishes",
        "title": "Chakhchoukha Beskria Chicken",
        "description": "Savory shredded bread with chicken.",
        "price":"15"
    },
    {
        "image": "assets/images/menu/specialdishes/Chakhchoukha Dfar Constantine (Chicken).jpg",
        "category": "Special Dishes",
        "title": "Chakhchoukha Dfar Constantine (Chicken)",
        "description": "Flavorful shredded bread with spiced chicken.",
        "price":"15"
    },
    {
        "image": "assets/images/menu/specialdishes/Tlitli Chicken.jpg",
        "category": "Special Dishes",
        "title": "Tlitli Chicken",
        "description": "Short pasta in savory chicken sauce.",
        "price":"15"
    },
    {
        "image": "assets/images/menu/specialdishes/Rechta Chicken.jpg",
        "category": "Special Dishes",
        "title": "Rechta Chicken",
        "description": "Thin handmade noodles with chicken.",
        "price":"15"
    },
    {
        "image": "assets/images/menu/specialdishes/Chtitha Lham.jpg",
        "category": "Special Dishes",
        "title": "Chtitha Lham",
        "description": "Meaty stew in a rich, spicy sauce.",
        "price":"15"
    },
    {
        "image": "assets/images/menu/internationalfood/Grilled Shrimp With Hot Sauce.jpg",
        "category": "International food",
        "title": "Grilled Shrimp With Hot Sauce",
        "description": "Spicy grilled shrimp with a tangy kick.",
        "price":"15"
    },
    {
        "image": "assets/images/menu/internationalfood/Spaghetti with Cream & Shrimp.jpg",
        "category": "International food",
        "title": "Spaghetti with Cream & Shrimp",
        "description": "Creamy pasta with fresh shrimp.",
        "price":"15"
    },
    {
        "image": "assets/images/menu/internationalfood/Spaghetti With Cream And Grilled Chicken.jpg",
        "category": "International food",
        "title": "Spaghetti With Cream And Grilled Chicken",
        "description": "Rich pasta with grilled chicken.",
        "price":"15"
    },
    {
        "image": "assets/images/menu/internationalfood/Scallops With Sauce.jpg",
        "category": "International food",
        "title": "Scallops With Sauce",
        "description": "Perfectly seared scallops with sauce.",
        "price":"15"
    },
    {
        "image": "assets/images/menu/internationalfood/Crispy Scallops With Vegetables And Mushrooms.jpg",
        "category": "International food",
        "title": "Crispy Scallops With Vegetables And Mushrooms",
        "description": "Crispy scallops with a veggie medley.",
        "price":"15"
    },
    {
        "image": "assets/images/menu/sandwiches/French Fries Omelet.jpg",
        "category": "Sandwiches",
        "title": "French Fries Omelet",
        "description": "Fluffy omelet with crispy fries.",
        "price":"15"
    },
    {
        "image": "assets/images/menu/sandwiches/Karantita.jpg",
        "category": "Sandwiches",
        "title": "Karantita",
        "description": "Chickpea-based savory snack.",
        "price":"15"
    },
    {
        "image": "assets/images/menu/sandwiches/Sandwich Mergaz.jpg",
        "category": "Sandwiches",
        "title": "Sandwich Mergaz",
        "description": "Spiced sausage in a hearty sandwich.",
        "price":"15"
    },
    {
        "image": "assets/images/menu/tacos/Minced Beef Taco.jpg",
        "category": "Tacos",
        "title": "Minced Beef Taco",
        "description": "Minced beef taco with smooth flavors.",
        "price":"15"
    },
    {
        "image": "assets/images/menu/tacos/Chicken Taco.jpg",
        "category": "Tacos",
        "title": "Chicken Taco",
        "description": "Juicy chicken taco with zesty flavors.",
        "price":"15"
    },
    {
        "image": "assets/images/menu/tacos/Mix Chicken And Beef Taco.jpg",
        "category": "Tacos",
        "title": "Mix Chicken And Beef Taco",
        "description": "Cocktail of chicken and beef taco with exciting flavors.",
        "price":"15"
    },
    {
        "image": "assets/images/menu/panini/Tuna Panini.jpg",
        "category": "Panini",
        "title": "Tuna Panini",
        "description": "Grilled panini with tuna filling.",
        "price":"15"
    },
    {
        "image": "assets/images/menu/panini/Minced Beef Panini.jpg",
        "category": "Panini",
        "title": "Minced Beef Panini",
        "description": "Savory panini with minced beef.",
        "price":"15"
    },
    {
        "image": "assets/images/menu/traditionalsweets/Cigar Almonds And Walnuts.jpg",
        "category": "Traditional sweets",
        "title": "Cigar Almonds And Walnuts",
        "description": "Sweet treats with almonds and walnuts.",
        "price":"15"
    },
    {
        "image": "assets/images/menu/beverages/Water 500 Ml.jpg",
        "category": "Beverages",
        "title": "Water 500 Ml",
        "description": "Refreshing bottled water.",
        "price":"15"
    },
    {
        "image": "assets/images/menu/beverages/Hamoud Ananas.jpg",
        "category": "Beverages",
        "title": "Hamoud Ananas",
        "description": "Pineapple soda delight.",
        "price":"15"
    },
    {
        "image": "assets/images/menu/beverages/Hamoud Orange.jpg",
        "category": "Beverages",
        "title": "Hamoud Orange",
        "description": "Citrusy orange soda.",
        "price":"15"
    },
    {
        "image": "assets/images/menu/beverages/Hamoud La Blanche White Small.jpg",
        "category": "Beverages",
        "title": "Hamoud La Blanche White Small",
        "description": "Classic fizzy white soda.",
        "price":"15"
    },
    {
        "image": "assets/images/menu/beverages/Hamoud Selecto Small.jpg",
        "category": "Beverages",
        "title": "Hamoud Selecto Small",
        "description": "Rich, caramelized soda.",
        "price":"15"
    },
    {
        "image": "assets/images/menu/beverages/Cola 330ml.jpg",
        "category": "Beverages",
        "title": "Cola 330ml",
        "description": "Classic cola refreshment.",
        "price":"15"
    },
    {
        "image": "assets/images/menu/beverages/Pepsi.jpg",
        "category": "Beverages",
        "title": "Pepsi",
        "description": "The timeless cola.",
        "price":"15"
    },
    {
        "image": "assets/images/menu/beverages/7 Up.jpg",
        "category": "Beverages",
        "title": "7 Up",
        "description": "Crisp, lemon-lime soda.",
        "price":"15"
    }
];