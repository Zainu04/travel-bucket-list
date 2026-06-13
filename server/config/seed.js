require('dotenv').config();
const pool = require('./db');

const seed = async () => {
  await pool.query(`
    DROP TABLE IF EXISTS destinations;
    CREATE TABLE destinations (
      id SERIAL PRIMARY KEY,
      slug VARCHAR(100) UNIQUE NOT NULL,
      name VARCHAR(100) NOT NULL,
      country VARCHAR(100) NOT NULL,
      category VARCHAR(50) NOT NULL,
      estimated_cost VARCHAR(20) NOT NULL,
      best_season VARCHAR(100) NOT NULL,
      description TEXT NOT NULL,
      must_dos TEXT NOT NULL,
      local_food TEXT NOT NULL,
      travel_tip TEXT NOT NULL,
      image VARCHAR(500) NOT NULL
    );
  `);

  const destinations = [
    {
      slug: "dubai-uae",
      name: "Dubai, UAE",
      country: "United Arab Emirates",
      category: "City",
      estimated_cost: "$3,000",
      best_season: "Winter (November - March)",
      description: "Dubai is a dazzling ultramodern city rising from the Arabian Desert, known for its record-breaking skyscrapers, luxurious shopping malls, and vibrant nightlife. From the world's tallest building to man-made islands, Dubai constantly pushes the boundaries of what's possible.",
      must_dos: "Visit the Burj Khalifa, explore the Dubai Mall, take an abra ride in Dubai Creek, go dune bashing in the desert, visit the Palm Jumeirah",
      local_food: "Try shawarma, Al Harees (slow-cooked wheat and meat), fresh camel milk, luqaimat (sweet dumplings), and a traditional Emirati breakfast",
      travel_tip: "Visit between November and March to avoid extreme heat. Download the RTA app for easy metro and bus navigation around the city.",
      image: "https://images.unsplash.com/photo-1546412414-e1885259563a?w=1600&auto=format&fit=crop&q=60"
    },
    {
      slug: "doha-qatar",
      name: "Doha, Qatar",
      country: "Qatar",
      category: "City",
      estimated_cost: "$2,500",
      best_season: "Winter (October - April)",
      description: "Doha is a rapidly rising gem on the Arabian Gulf, blending a rich Bedouin heritage with futuristic architecture and world-class museums. The city's stunning corniche, vibrant souq, and extraordinary Museum of Islamic Art make it one of the Middle East's most compelling destinations.",
      must_dos: "Explore Souq Waqif, visit the Museum of Islamic Art, stroll the Corniche, explore the futuristic Msheireb Downtown, visit Katara Cultural Village",
      local_food: "Try machboos (spiced rice with meat), harees, balaleet (sweet vermicelli), fresh seafood, and traditional karak chai",
      travel_tip: "Dress modestly when visiting souqs and cultural sites. The Doha Metro is modern, cheap, and connects all major attractions.",
      image: "https://images.unsplash.com/photo-1669300884869-e6e11c67c031?q=80&w=1470&auto=format&fit=crop"
    },
    {
      slug: "istanbul-turkey",
      name: "Istanbul, Turkey",
      country: "Turkey",
      category: "Cultural",
      estimated_cost: "$1,500",
      best_season: "Spring (April - May) or Fall (September - November)",
      description: "Istanbul is one of the world's greatest cities, uniquely straddling two continents — Europe and Asia. With a skyline punctuated by minarets and domes, a labyrinthine Grand Bazaar, and layers of Byzantine, Ottoman, and modern culture, Istanbul is endlessly fascinating and deeply atmospheric.",
      must_dos: "Visit the Hagia Sophia and Blue Mosque, get lost in the Grand Bazaar, take a Bosphorus cruise, explore the Topkapi Palace, visit the Spice Bazaar",
      local_food: "Try doner kebab, simit (sesame bread rings), baklava, meze platters, fresh fish sandwiches by the Galata Bridge, and Turkish tea",
      travel_tip: "Get an Istanbulkart for easy and cheap access to all public transport. Visit major mosques outside of prayer times for the best experience.",
      image: "https://images.unsplash.com/photo-1527838832700-5059252407fa?q=80&w=1598&auto=format&fit=crop"
    },
    {
      slug: "kuala-lumpur-malaysia",
      name: "Kuala Lumpur, Malaysia",
      country: "Malaysia",
      category: "City",
      estimated_cost: "$1,200",
      best_season: "Summer (May - July)",
      description: "Kuala Lumpur is a vibrant, multicultural capital where gleaming skyscrapers stand beside ornate Hindu temples and colonial-era buildings. The city is a melting pot of Malay, Chinese, and Indian cultures, offering incredible food, warm hospitality, and some of Southeast Asia's best shopping.",
      must_dos: "Visit the Petronas Twin Towers, explore Batu Caves, wander through Chinatown (Petaling Street), visit the Islamic Arts Museum, take a day trip to Putrajaya",
      local_food: "Try nasi lemak (coconut rice dish), roti canai, char kway teow, rendang, satay, and fresh tropical fruit juices everywhere",
      travel_tip: "KL is very affordable — street food is delicious and dirt cheap. Use Grab (Southeast Asia's Uber) for easy and affordable rides around the city.",
      image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=1464&auto=format&fit=crop"
    },
    {
      slug: "switzerland",
      name: "Switzerland",
      country: "Switzerland",
      category: "Nature",
      estimated_cost: "$4,000",
      best_season: "Summer (June - August) or Winter (December - February)",
      description: "Switzerland is a postcard-perfect country of snow-capped Alpine peaks, crystal-clear lakes, and charming medieval towns. Whether you're skiing world-famous slopes in winter, hiking breathtaking trails in summer, or simply riding panoramic trains through jaw-dropping mountain scenery, Switzerland never disappoints.",
      must_dos: "Ride the Jungfraujoch train to the top of Europe, visit Interlaken, explore Lucerne's Chapel Bridge, take the Glacier Express, visit Zermatt and see the Matterhorn",
      local_food: "Try cheese fondue, raclette, rosti (Swiss potato dish), Swiss chocolate, zurcher geschnetzeltes (veal dish), and fresh Alpine cheeses",
      travel_tip: "Buy a Swiss Travel Pass for unlimited train, bus, and boat travel — it pays for itself quickly. Book mountain excursions early as weather can cancel trips.",
      image: "https://images.unsplash.com/photo-1530638458177-fcc275860f8b?q=80&w=1470&auto=format&fit=crop"
    },
    {
      slug: "london-uk",
      name: "London, UK",
      country: "United Kingdom",
      category: "City",
      estimated_cost: "$3,500",
      best_season: "Summer (June - August)",
      description: "London is one of the world's greatest cities, a dynamic metropolis where centuries of history meet cutting-edge culture, fashion, and food. From the Tower of London to the Tate Modern, Buckingham Palace to Borough Market, London rewards every kind of traveler with endless things to see and do.",
      must_dos: "Visit the British Museum, see Buckingham Palace, walk across Tower Bridge, explore Borough Market, ride the London Eye, catch a West End show",
      local_food: "Try a traditional English breakfast, fish and chips, afternoon tea, pie and mash, chicken tikka masala, and a pint at a classic British pub",
      travel_tip: "Get an Oyster card for the Tube — it's the cheapest and fastest way to get around. Many of London's best museums are completely free to enter.",
      image: "https://images.unsplash.com/photo-1486299267070-83823f5448dd?q=80&w=1471&auto=format&fit=crop"
    },
    {
      slug: "banff-canada",
      name: "Banff, Canada",
      country: "Canada",
      category: "Nature",
      estimated_cost: "$1,500",
      best_season: "Summer (June - August)",
      description: "Banff National Park is Canada's oldest national park and one of the most breathtaking places on Earth. With turquoise glacial lakes, towering Rocky Mountain peaks, abundant wildlife, and charming alpine towns, it's a paradise for outdoor lovers and photographers alike.",
      must_dos: "Visit Lake Louise and Moraine Lake, drive the Icefields Parkway, spot wildlife at dawn, soak in Banff Upper Hot Springs, hike Johnston Canyon",
      local_food: "Try poutine, Alberta beef burgers, wild game dishes like elk or bison, fresh trout, and warm beaver tails pastry by the river",
      travel_tip: "Arrive at Moraine Lake parking lot before 6AM or take the shuttle — it fills up by 7AM in summer. Book lodging several months ahead.",
      image: "https://images.unsplash.com/photo-1561134643-668f9057cce4?q=80&w=1548&auto=format&fit=crop"
    }
  ];

  for (const dest of destinations) {
    await pool.query(
      `INSERT INTO destinations (slug, name, country, category, estimated_cost, best_season, description, must_dos, local_food, travel_tip, image)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)`,
      [dest.slug, dest.name, dest.country, dest.category, dest.estimated_cost, dest.best_season, dest.description, dest.must_dos, dest.local_food, dest.travel_tip, dest.image]
    );
  }

  console.log('Database seeded successfully!');
  process.exit();
};

seed().catch(err => {
  console.error('Error seeding database:', err);
  process.exit(1);
});