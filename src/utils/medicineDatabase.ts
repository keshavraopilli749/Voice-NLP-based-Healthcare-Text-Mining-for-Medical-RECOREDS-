
export interface Medicine {
  name: string;
  dosage: string;
  notes?: string;
}

export interface DiseaseInfo {
  disease: string;
  symptoms: string[];
  medicines: Medicine[];
}

export const diseaseDatabase: DiseaseInfo[] = [
  {
    disease: "Common Cold",
    symptoms: ["runny nose", "sneezing", "sore throat", "mild headache", "congestion", "cough"],
    medicines: [
      { name: "Paracetamol", dosage: "500mg, 2 tablets every 6-8 hours", notes: "For fever and headache" },
      { name: "Cetirizine", dosage: "10mg once daily", notes: "For runny nose and sneezing" },
      { name: "Dextromethorphan", dosage: "15mg every 4 hours", notes: "For dry cough" }
    ]
  },
  {
    disease: "Fever",
    symptoms: ["high temperature", "chills", "sweating", "headache", "body aches", "fatigue"],
    medicines: [
      { name: "Paracetamol", dosage: "500mg every 6 hours", notes: "Primary fever reducer" },
      { name: "Ibuprofen", dosage: "400mg every 8 hours", notes: "Alternative fever reducer" },
      { name: "Aspirin", dosage: "325mg every 4-6 hours", notes: "For adults only" }
    ]
  },
  {
    disease: "Headache",
    symptoms: ["head pain", "migraine", "tension", "pressure", "light sensitivity"],
    medicines: [
      { name: "Paracetamol", dosage: "500mg every 6 hours", notes: "First-line treatment" },
      { name: "Ibuprofen", dosage: "400mg every 8 hours", notes: "For inflammatory headaches" },
      { name: "Sumatriptan", dosage: "50mg as needed", notes: "For migraines only" }
    ]
  },
  {
    disease: "Stomach Pain",
    symptoms: ["abdominal pain", "nausea", "bloating", "indigestion", "cramps"],
    medicines: [
      { name: "Omeprazole", dosage: "20mg once daily before breakfast", notes: "For acid-related pain" },
      { name: "Simethicone", dosage: "40mg after meals", notes: "For gas and bloating" },
      { name: "Ondansetron", dosage: "4mg every 8 hours", notes: "For nausea" }
    ]
  },
  {
    disease: "Chest Pain",
    symptoms: ["chest discomfort", "breathing difficulty", "pressure", "tightness"],
    medicines: [
      { name: "Aspirin", dosage: "325mg immediately", notes: "If cardiac chest pain suspected" },
      { name: "Antacid", dosage: "2 tablets as needed", notes: "For acid reflux related pain" },
      { name: "Seek immediate medical attention", dosage: "", notes: "Emergency evaluation required" }
    ]
  },
  {
    disease: "Cough",
    symptoms: ["persistent cough", "throat irritation", "mucus", "dry cough", "chest congestion"],
    medicines: [
      { name: "Dextromethorphan", dosage: "15mg every 4 hours", notes: "For dry cough" },
      { name: "Guaifenesin", dosage: "200mg every 4 hours", notes: "For productive cough" },
      { name: "Honey", dosage: "1 tablespoon as needed", notes: "Natural cough suppressant" }
    ]
  },
  {
    disease: "Back Pain",
    symptoms: ["lower back pain", "muscle aches", "stiffness", "spasm"],
    medicines: [
      { name: "Ibuprofen", dosage: "400mg every 8 hours", notes: "Anti-inflammatory" },
      { name: "Diclofenac gel", dosage: "Apply 3-4 times daily", notes: "Topical pain relief" },
      { name: "Muscle relaxant", dosage: "As prescribed", notes: "For severe muscle spasm" }
    ]
  },
  {
    disease: "Dizziness",
    symptoms: ["vertigo", "balance problems", "lightheadedness", "nausea"],
    medicines: [
      { name: "Meclizine", dosage: "25mg every 8 hours", notes: "For motion sickness" },
      { name: "Dimenhydrinate", dosage: "50mg every 6 hours", notes: "For vertigo" },
      { name: "Betahistine", dosage: "16mg three times daily", notes: "For inner ear disorders" }
    ]
  },
  {
    disease: "Joint Pain",
    symptoms: ["arthritis", "swelling", "stiffness", "inflammation"],
    medicines: [
      { name: "Ibuprofen", dosage: "400mg every 8 hours with food", notes: "Anti-inflammatory" },
      { name: "Diclofenac", dosage: "50mg twice daily", notes: "For joint inflammation" },
      { name: "Topical analgesic", dosage: "Apply 3 times daily", notes: "Local pain relief" }
    ]
  },
  {
    disease: "Ear Pain",
    symptoms: ["earache", "ear pressure", "hearing loss", "ear discharge"],
    medicines: [
      { name: "Paracetamol", dosage: "500mg every 6 hours", notes: "For pain relief" },
      { name: "Ear drops", dosage: "2-3 drops twice daily", notes: "For ear canal issues" },
      { name: "Amoxicillin", dosage: "500mg three times daily", notes: "If bacterial infection suspected" }
    ]
  },
  {
    disease: "Skin Rash",
    symptoms: ["itching", "redness", "inflammation", "allergic reaction"],
    medicines: [
      { name: "Cetirizine", dosage: "10mg once daily", notes: "Antihistamine for allergies" },
      { name: "Hydrocortisone cream", dosage: "Apply twice daily", notes: "Topical anti-inflammatory" },
      { name: "Calamine lotion", dosage: "Apply as needed", notes: "Soothing topical treatment" }
    ]
  },
  {
    disease: "Insomnia",
    symptoms: ["trouble sleeping", "anxiety", "restlessness", "fatigue"],
    medicines: [
      { name: "Melatonin", dosage: "3mg 30 minutes before bed", notes: "Natural sleep aid" },
      { name: "Diphenhydramine", dosage: "25mg before bed", notes: "Temporary sleep aid" },
      { name: "Sleep hygiene practices", dosage: "Daily routine", notes: "Non-medication approach" }
    ]
  },
  {
    disease: "Dental Pain",
    symptoms: ["toothache", "gum swelling", "jaw pain", "sensitivity"],
    medicines: [
      { name: "Ibuprofen", dosage: "400mg every 8 hours", notes: "Anti-inflammatory for dental pain" },
      { name: "Clove oil", dosage: "Apply topically as needed", notes: "Natural pain relief" },
      { name: "Benzocaine gel", dosage: "Apply to affected area", notes: "Topical numbing agent" }
    ]
  },
  {
    disease: "Eye Irritation",
    symptoms: ["red eyes", "watery eyes", "itching", "burning sensation"],
    medicines: [
      { name: "Artificial tears", dosage: "1-2 drops as needed", notes: "For dry eyes" },
      { name: "Antihistamine eye drops", dosage: "1 drop twice daily", notes: "For allergic conjunctivitis" },
      { name: "Cold compress", dosage: "Apply for 10 minutes", notes: "Natural relief method" }
    ]
  },
  {
    disease: "Urinary Tract Infection",
    symptoms: ["burning urination", "frequent urination", "cloudy urine", "pelvic pain"],
    medicines: [
      { name: "Cranberry supplements", dosage: "500mg twice daily", notes: "Preventive measure" },
      { name: "Increase water intake", dosage: "8-10 glasses daily", notes: "Flush out bacteria" },
      { name: "See doctor for antibiotics", dosage: "", notes: "Professional treatment required" }
    ]
  },
  {
    disease: "Acid Reflux",
    symptoms: ["heartburn", "acid taste", "chest burning", "regurgitation"],
    medicines: [
      { name: "Omeprazole", dosage: "20mg once daily before breakfast", notes: "Proton pump inhibitor" },
      { name: "Antacid tablets", dosage: "2 tablets after meals", notes: "Quick relief" },
      { name: "Ranitidine", dosage: "150mg twice daily", notes: "H2 blocker alternative" }
    ]
  },
  {
    disease: "Constipation",
    symptoms: ["difficulty passing stool", "bloating", "abdominal discomfort"],
    medicines: [
      { name: "Psyllium husk", dosage: "1 tablespoon with water daily", notes: "Fiber supplement" },
      { name: "Polyethylene glycol", dosage: "17g in water daily", notes: "Osmotic laxative" },
      { name: "Increase fiber intake", dosage: "25-30g daily", notes: "Dietary modification" }
    ]
  },
  {
    disease: "Diarrhea",
    symptoms: ["loose stools", "frequent bowel movements", "abdominal cramps"],
    medicines: [
      { name: "Loperamide", dosage: "2mg after each loose stool", notes: "Maximum 8mg per day" },
      { name: "ORS solution", dosage: "200ml after each loose stool", notes: "Prevent dehydration" },
      { name: "Probiotics", dosage: "As per package instructions", notes: "Restore gut flora" }
    ]
  },
  {
    disease: "Anxiety",
    symptoms: ["nervousness", "restlessness", "panic attacks", "worry"],
    medicines: [
      { name: "Deep breathing exercises", dosage: "Practice 10 minutes daily", notes: "Natural anxiety relief" },
      { name: "Chamomile tea", dosage: "1 cup before bed", notes: "Natural calming agent" },
      { name: "Consult mental health professional", dosage: "", notes: "For persistent anxiety" }
    ]
  },
  {
    disease: "Muscle Strain",
    symptoms: ["muscle pain", "stiffness", "limited movement", "swelling"],
    medicines: [
      { name: "Ibuprofen", dosage: "400mg every 8 hours", notes: "Anti-inflammatory" },
      { name: "Ice pack", dosage: "Apply for 15-20 minutes", notes: "First 48 hours" },
      { name: "Heat therapy", dosage: "Apply after 48 hours", notes: "Promote healing" }
    ]
  }
];

export function getMedicineForSymptoms(input: string): DiseaseInfo | null {
  const lowercaseInput = input.toLowerCase();
  
  for (const disease of diseaseDatabase) {
    // Check if any symptom matches the input
    const matchingSymptoms = disease.symptoms.filter(symptom => 
      lowercaseInput.includes(symptom.toLowerCase()) || 
      symptom.toLowerCase().includes(lowercaseInput.split(' ').find(word => word.length > 3) || '')
    );
    
    // Check if disease name is mentioned
    const diseaseNameMatch = lowercaseInput.includes(disease.disease.toLowerCase());
    
    if (matchingSymptoms.length > 0 || diseaseNameMatch) {
      return {
        ...disease,
        symptoms: matchingSymptoms.length > 0 ? matchingSymptoms : [input.trim()]
      };
    }
  }
  
  return null;
}
