export type Product = {
    category: string;
    subcategory: string;
    productName: string;
    creatorName: string;
    rating: number;
    price: number;
    imageUrl: string;
    description: string;
};

// Array of sample product objects 
const prods: Product[] = [
    {
        category: "Avatars",
        subcategory: "Human-like",
        productName: "Lifelike Persona",
        creatorName: "Jane Doe",
        rating: 5.0,
        price: 25.00,
        imageUrl: "https://api.dicebear.com/9.x/notionists/svg?seed=Chase",
        description: "A meticulously crafted human-like avatar for a realistic digital presence. Perfect for role-playing, gaming, or virtual meetups. Bring an authentic vibe to your digital world."
    },
    {
        "category": "Avatars",
        "subcategory": "Anthro & Furry",
        "productName": "Furry Friend Fox",
        "creatorName": "Artistic Wolf",
        "rating": 5.0,
        "price": 30.00,
        "imageUrl": "https://api.dicebear.com/9.x/notionists/svg?seed=Liam",
        "description": "Embrace your wild side with this vibrant fox avatar. A detailed design tailored for fans of anthropomorphic art. Add charm and energy to your virtual persona."
    },
    {
        "category": "Avatars",
        "subcategory": "Robot & Cyborgs",
        "productName": "Cyborg Commander",
        "creatorName": "TechNova",
        "rating": 5.0,
        "price": 40.00,
        "imageUrl": "https://api.dicebear.com/9.x/notionists/svg?seed=Riley",
        "description": "Lead with a futuristic edge using this sleek cyborg avatar. Designed for sci-fi enthusiasts, it combines innovation and authority. Perfect for gaming or futuristic settings."
    },
    {
        "category": "Backgrounds",
        "subcategory": "Fantasy",
        "productName": "Mystic Forest",
        "creatorName": "Ethereal Designs",
        "rating": 5.0,
        "price": 15.00,
        "imageUrl": "https://api.dicebear.com/9.x/notionists/svg?seed=Brooklynn",
        "description": "Step into a magical realm with this enchanting forest backdrop. Ideal for fantasy role-plays or artistic projects. The intricate details add depth to your scenes."
    },
    {
        "category": "Backgrounds",
        "subcategory": "Sci-fi",
        "productName": "Galactic Horizon",
        "creatorName": "Stellar Studios",
        "rating": 5.0,
        "price": 20.00,
        "imageUrl": "https://api.dicebear.com/9.x/notionists/svg?seed=Avery",
        "description": "Explore the vastness of space with this cosmic sci-fi background. Its vivid hues and stellar design are perfect for futuristic storytelling or immersive gaming."
    },
    {
        "category": "Props",
        "subcategory": "Weapons",
        "productName": "Dragon Slayer Sword",
        "creatorName": "ForgeWorks",
        "rating": 5.0,
        "price": 50.00,
        "imageUrl": "https://api.dicebear.com/9.x/notionists/svg?seed=Andrea",
        "description": "A legendary weapon forged to vanquish mighty dragons. Its intricate craftsmanship and lore-inspired details make it a collector's favorite. Ready for epic adventures."
    },
    {
        "category": "Props",
        "subcategory": "Furniture",
        "productName": "Royal Throne",
        "creatorName": "Imperial Artistry",
        "rating": 5.0,
        "price": 35.00,
        "imageUrl": "https://api.dicebear.com/9.x/notionists/svg?seed=George",
        "description": "Command your realm from this grand royal throne. Perfect for medieval or fantasy settings, its opulent design exudes power and majesty. A regal centerpiece."
    },
    {
        "category": "Props",
        "subcategory": "Characters",
        "productName": "Stealth Ninja",
        "creatorName": "Shadow Creations",
        "rating": 5.0,
        "price": 45.00,
        "imageUrl": "https://api.dicebear.com/9.x/notionists/svg?seed=Destiny",
        "description": "Blend into the shadows with this stealthy ninja skin. Crafted for agility and mystery, it's ideal for action-packed adventures. A must-have for stealth enthusiasts."
    },
    {
        "category": "Props",
        "subcategory": "Vehicles",
        "productName": "Cyberbike X-12",
        "creatorName": "Velocity Designs",
        "rating": 5.0,
        "price": 60.00,
        "imageUrl": "https://api.dicebear.com/9.x/notionists/svg?seed=Aiden",
        "description": "Ride into the future with this high-tech cyberbike skin. Its sleek design and glowing details are perfect for high-speed chases or futuristic worlds."
    },
    {
        "category": "Props",
        "subcategory": "Casual",
        "productName": "Summer Breeze Outfit",
        "creatorName": "TrendWave",
        "rating": 5.0,
        "price": 25.00,
        "imageUrl": "https://api.dicebear.com/9.x/notionists/svg?seed=Easton",
        "description": "Stay cool and stylish with this breezy summer outfit. Designed for casual settings, it's the perfect blend of comfort and fashion for any digital wardrobe."
    },
    {
        "category": "Props",
        "subcategory": "Formal",
        "productName": "Classic Tuxedo",
        "creatorName": "Elegance Studios",
        "rating": 5.0,
        "price": 40.00,
        "imageUrl": "https://api.dicebear.com/9.x/notionists/svg?seed=Amaya",
        "description": "Elevate your formal look with this timeless tuxedo. Perfect for gala events or virtual ceremonies, its refined design adds sophistication to any avatar."
    },
    {
        "category": "Accessories",
        "subcategory": "Jewelry",
        "productName": "Mystic Pendant",
        "creatorName": "GemCraft",
        "rating": 5.0,
        "price": 20.00,
        "imageUrl": "https://api.dicebear.com/9.x/notionists/svg?seed=Vivian",
        "description": "Add an air of mystery with this intricately designed pendant. Its ethereal glow is perfect for magical or fantasy themes. A true gem for any collection."
    },
    {
        "category": "Accessories",
        "subcategory": "Hats",
        "productName": "Wizard's Hat",
        "creatorName": "Magic Threads",
        "rating": 5.0,
        "price": 15.00,
        "imageUrl": "https://api.dicebear.com/9.x/notionists/svg?seed=Liliana",
        "description": "Channel your inner sorcerer with this iconic wizard's hat. Perfect for spellbinding adventures or whimsical attire. Adds a touch of magic to any look."
    },
    {
        "category": "Accessories",
        "subcategory": "Magic",
        "productName": "Fireball Spell",
        "creatorName": "Mystic Coders",
        "rating": 5.0,
        "price": 18.00,
        "imageUrl": "https://api.dicebear.com/9.x/notionists/svg?seed=Aidan",
        "description": "Ignite the battlefield with this fiery spell effect. Designed for magical duels or dramatic visuals, it's a hot addition to your repertoire."
    },
    {
        "category": "Accessories",
        "subcategory": "Sci-fi",
        "productName": "Holographic Shield",
        "creatorName": "Futurist Labs",
        "rating": 5.0,
        "price": 22.00,
        "imageUrl": "https://api.dicebear.com/9.x/notionists/svg?seed=Leah",
        "description": "Defend with style using this cutting-edge holographic shield. Its dynamic animations and vibrant effects make it a must-have for sci-fi enthusiasts."
    }
];


export default prods;