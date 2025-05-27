
export interface HealthTips {
  diet: {
    include: string[];
    avoid: string[];
  };
  lifestyle: string[];
  homeRemedies: string[];
}

export const healthTipsDatabase: { [key: string]: HealthTips } = {
  "Common Cold": {
    diet: {
      include: [
        "Warm soups and broths",
        "Citrus fruits (oranges, lemons)",
        "Ginger and honey tea",
        "Garlic and onions",
        "Green leafy vegetables",
        "Plenty of warm fluids"
      ],
      avoid: [
        "Dairy products (may increase mucus)",
        "Sugary drinks and foods",
        "Processed foods",
        "Alcohol",
        "Cold beverages",
        "Fried and oily foods"
      ]
    },
    lifestyle: [
      "Get adequate rest (7-9 hours of sleep)",
      "Stay hydrated with warm water",
      "Use a humidifier to keep air moist",
      "Avoid close contact with others",
      "Wash hands frequently",
      "Cover mouth when coughing or sneezing"
    ],
    homeRemedies: [
      "Steam inhalation with eucalyptus oil",
      "Warm salt water gargling",
      "Honey and ginger tea",
      "Turmeric milk before bed",
      "Apply warm compress on chest"
    ]
  },
  "Fever": {
    diet: {
      include: [
        "Clear broths and soups",
        "Coconut water",
        "Fresh fruit juices",
        "Bananas and applesauce",
        "Toast and crackers",
        "Plenty of water and fluids"
      ],
      avoid: [
        "Heavy, greasy foods",
        "Spicy foods",
        "Alcohol and caffeine",
        "Sugary snacks",
        "Large meals",
        "Dairy products if nauseous"
      ]
    },
    lifestyle: [
      "Complete bed rest",
      "Stay in a cool, comfortable environment",
      "Wear light, breathable clothing",
      "Take lukewarm baths or showers",
      "Monitor temperature regularly",
      "Avoid strenuous activities"
    ],
    homeRemedies: [
      "Cool compress on forehead",
      "Sponge bath with lukewarm water",
      "Willow bark tea (natural aspirin)",
      "Stay in well-ventilated rooms",
      "Drink herbal teas like chamomile"
    ]
  },
  "Headache": {
    diet: {
      include: [
        "Water and hydrating fluids",
        "Magnesium-rich foods (nuts, seeds)",
        "Fatty fish (salmon, mackerel)",
        "Dark chocolate (in moderation)",
        "Leafy greens",
        "Ginger tea"
      ],
      avoid: [
        "Alcohol and excessive caffeine",
        "Processed meats (nitrates)",
        "Aged cheeses",
        "Artificial sweeteners",
        "MSG-containing foods",
        "Skipping meals"
      ]
    },
    lifestyle: [
      "Maintain regular sleep schedule",
      "Practice stress management",
      "Limit screen time",
      "Stay hydrated throughout the day",
      "Exercise regularly but moderately",
      "Keep a headache diary"
    ],
    homeRemedies: [
      "Apply cold or warm compress to head/neck",
      "Practice deep breathing exercises",
      "Gentle head and neck massage",
      "Peppermint oil on temples",
      "Rest in a dark, quiet room"
    ]
  },
  "Stomach Pain": {
    diet: {
      include: [
        "BRAT diet (Bananas, Rice, Applesauce, Toast)",
        "Clear broths",
        "Chamomile tea",
        "Ginger tea or ginger ale",
        "Plain crackers",
        "Small, frequent meals"
      ],
      avoid: [
        "Spicy and acidic foods",
        "High-fat foods",
        "Dairy products",
        "Caffeine and alcohol",
        "Carbonated beverages",
        "Large meals"
      ]
    },
    lifestyle: [
      "Eat slowly and chew thoroughly",
      "Avoid lying down after eating",
      "Reduce stress through relaxation",
      "Stay upright for 2-3 hours after meals",
      "Apply heat to stomach area",
      "Practice gentle walking"
    ],
    homeRemedies: [
      "Warm water with lemon",
      "Fennel seed tea",
      "Apple cider vinegar with water",
      "Heating pad on stomach",
      "Probiotic yogurt (if tolerated)"
    ]
  },
  "Chest Pain": {
    diet: {
      include: [
        "Heart-healthy foods",
        "Omega-3 rich fish",
        "Whole grains",
        "Fresh fruits and vegetables",
        "Lean proteins",
        "Anti-inflammatory foods"
      ],
      avoid: [
        "High sodium foods",
        "Trans fats and saturated fats",
        "Excessive caffeine",
        "Alcohol",
        "Processed foods",
        "Large, heavy meals"
      ]
    },
    lifestyle: [
      "Seek immediate medical attention if severe",
      "Avoid strenuous activities",
      "Practice stress reduction",
      "Monitor symptoms closely",
      "Maintain healthy weight",
      "Quit smoking if applicable"
    ],
    homeRemedies: [
      "Deep breathing exercises",
      "Gentle stretching",
      "Warm compress (if muscular)",
      "Relaxation techniques",
      "Note: Seek medical care for chest pain"
    ]
  },
  "Cough": {
    diet: {
      include: [
        "Honey and warm water",
        "Herbal teas (thyme, licorice)",
        "Warm broths",
        "Pineapple juice",
        "Ginger and turmeric",
        "Plenty of warm fluids"
      ],
      avoid: [
        "Cold drinks and ice cream",
        "Sugary foods",
        "Dairy if mucus-producing",
        "Spicy foods (if throat irritated)",
        "Alcohol",
        "Smoking and smoke exposure"
      ]
    },
    lifestyle: [
      "Use humidifier or steam",
      "Elevate head while sleeping",
      "Avoid throat irritants",
      "Rest voice if sore throat",
      "Stay hydrated",
      "Avoid cold air exposure"
    ],
    homeRemedies: [
      "Honey and lemon tea",
      "Steam inhalation",
      "Salt water gargling",
      "Thyme tea",
      "Ginger and honey mixture"
    ]
  },
  "Back Pain": {
    diet: {
      include: [
        "Anti-inflammatory foods",
        "Turmeric and ginger",
        "Leafy green vegetables",
        "Fatty fish",
        "Berries and cherries",
        "Calcium-rich foods"
      ],
      avoid: [
        "Processed foods",
        "Excessive sugar",
        "Trans fats",
        "Excessive alcohol",
        "Foods high in sodium",
        "Refined carbohydrates"
      ]
    },
    lifestyle: [
      "Maintain good posture",
      "Use proper lifting techniques",
      "Sleep with pillow support",
      "Apply heat or cold therapy",
      "Gentle stretching exercises",
      "Avoid prolonged sitting"
    ],
    homeRemedies: [
      "Hot water bottle or heating pad",
      "Ice pack for acute pain",
      "Epsom salt bath",
      "Gentle yoga stretches",
      "Turmeric paste application"
    ]
  },
  "Dizziness": {
    diet: {
      include: [
        "Water and electrolyte drinks",
        "Ginger tea",
        "Low-sodium foods",
        "Whole grains",
        "Fresh fruits",
        "Lean proteins"
      ],
      avoid: [
        "Alcohol",
        "Excessive caffeine",
        "High-sodium foods",
        "Sugary drinks",
        "Dehydrating beverages",
        "Large meals"
      ]
    },
    lifestyle: [
      "Move slowly when changing positions",
      "Stay hydrated",
      "Avoid sudden head movements",
      "Sit or lie down when dizzy",
      "Ensure adequate sleep",
      "Manage stress levels"
    ],
    homeRemedies: [
      "Ginger tea or ginger chews",
      "Deep breathing exercises",
      "Coriander seed water",
      "Lemon juice with water",
      "Rest in quiet, dark room"
    ]
  },
  "Joint Pain": {
    diet: {
      include: [
        "Anti-inflammatory foods",
        "Omega-3 fatty acids",
        "Turmeric and ginger",
        "Green tea",
        "Colorful fruits and vegetables",
        "Whole grains"
      ],
      avoid: [
        "Processed foods",
        "Excessive sugar",
        "Trans fats",
        "Excessive omega-6 oils",
        "Refined carbohydrates",
        "Alcohol"
      ]
    },
    lifestyle: [
      "Gentle, low-impact exercise",
      "Maintain healthy weight",
      "Use joint protection techniques",
      "Apply heat or cold as needed",
      "Get adequate rest",
      "Practice stress management"
    ],
    homeRemedies: [
      "Turmeric milk",
      "Warm oil massage",
      "Epsom salt bath",
      "Hot/cold compress",
      "Gentle range-of-motion exercises"
    ]
  },
  "Ear Pain": {
    diet: {
      include: [
        "Vitamin C rich foods",
        "Zinc-containing foods",
        "Warm liquids",
        "Soft foods if chewing hurts",
        "Anti-inflammatory foods",
        "Plenty of water"
      ],
      avoid: [
        "Dairy if mucus-producing",
        "Sugary foods",
        "Processed foods",
        "Alcohol",
        "Smoking",
        "Hard foods if jaw hurts"
      ]
    },
    lifestyle: [
      "Keep ears dry",
      "Avoid inserting objects in ears",
      "Sleep with affected ear up",
      "Use humidifier",
      "Avoid swimming",
      "Protect ears from wind"
    ],
    homeRemedies: [
      "Warm compress on ear",
      "Garlic oil drops",
      "Olive oil drops",
      "Steam inhalation",
      "Gentle ear massage"
    ]
  }
};

export function getHealthTips(disease: string): HealthTips | null {
  return healthTipsDatabase[disease] || null;
}
