export const initialProducts = [
  {
    id: 'wb-01',
    brandName: 'PantoBee-DSR',
    genericName: 'Pantoprazole 40 mg + Domperidone SR',
    category: 'gastro',
    categoryLabel: 'Gastroenterology',
    targetAudience: 'GP / CP / Gastro',
    dosageForm: 'Capsule (Enteric & Sustained Release)',
    strength: '40 mg + 30 mg SR',
    specialty: 'General Physicians (GP), Consulting Physicians (CP), Gastroenterologists',
    packType: '10 × 10 Alu-Alu Blister Strip',
    composition: 'Pantoprazole Sodium IP 40 mg (Enteric Coated) + Domperidone IP 30 mg (Sustained Release)',
    description: 'Gold-standard acid suppressant and prokinetic combination engineered for rapid symptom control in severe GERD, reflux oesophagitis, and non-ulcer dyspepsia.',
    indications: [
      'Gastroesophageal Reflux Disease (GERD)',
      'Reflux Oesophagitis & Chronic Dyspepsia',
      'NSAID-Induced Gastritis Prophylaxis'
    ]
  },
  {
    id: 'wb-02',
    brandName: 'LevoBee-M',
    genericName: 'Levocetirizine 5 mg + Montelukast 10 mg',
    category: 'respiratory',
    categoryLabel: 'Respiratory & Pulmonology',
    targetAudience: 'GP / CP',
    dosageForm: 'Tablet (Film Coated)',
    strength: '5 mg + 10 mg',
    specialty: 'General Physicians (GP), Consulting Physicians (CP), Pulmonologists, ENT',
    packType: '10 × 10 Alu-Alu Blister Pack',
    composition: 'Levocetirizine Dihydrochloride IP 5 mg + Montelukast Sodium IP 10 mg',
    description: 'Synergistic H1-receptor antihistamine and cysteinyl leukotriene receptor antagonist delivering 24-hour relief from seasonal and perennial allergic manifestations.',
    indications: [
      'Allergic Rhinitis (Seasonal & Perennial)',
      'Allergic Bronchitis & Wheezing',
      'Chronic Idiopathic Urticaria'
    ]
  },
  {
    id: 'wb-03',
    brandName: 'AceBee-P',
    genericName: 'Aceclofenac 100 mg + Paracetamol 325 mg',
    category: 'ortho',
    categoryLabel: 'Pain & Orthopaedics',
    targetAudience: 'GP / CP',
    dosageForm: 'Tablet (Film Coated)',
    strength: '100 mg + 325 mg',
    specialty: 'General Physicians (GP), Consulting Physicians (CP), Orthopaedicians',
    packType: '10 × 10 Blister Strip',
    composition: 'Aceclofenac IP 100 mg + Paracetamol IP 325 mg',
    description: 'Potent preferential COX-2 inhibitor paired with a proven central antipyretic/analgesic for prompt management of acute inflammatory pain with superior gastric tolerability.',
    indications: [
      'Osteoarthritis & Rheumatoid Arthritis',
      'Ankylosing Spondylitis & Lower Back Pain (Lumbago)',
      'Acute Post-Traumatic Musculoskeletal Pain'
    ]
  },
  {
    id: 'wb-04',
    brandName: 'NervBee-Plus',
    genericName: 'Methylcobalamin + Alpha Lipoic Acid + B-Vitamins',
    category: 'nutrition',
    categoryLabel: 'Neuro-Nutrition & Metabolic',
    targetAudience: 'GP / CP',
    dosageForm: 'Capsule (Softgel / Hard Gelatin)',
    strength: '1500 mcg + 100 mg + B-Complex',
    specialty: 'General Physicians (GP), Consulting Physicians (CP), Diabetologists, Neurologists',
    packType: '10 × 10 Alu-Alu Strip',
    composition: 'Methylcobalamin 1500 mcg + Alpha Lipoic Acid 100 mg + Pyridoxine HCl (Vit B6) 3 mg + Folic Acid 1.5 mg + Thiamine Mononitrate 10 mg',
    description: 'Advanced neuroprotective and antioxidant complex formulated to stimulate axonal regeneration, restore nerve conduction velocity, and relieve diabetic peripheral neuropathy.',
    indications: [
      'Diabetic & Peripheral Neuropathy',
      'Sciatica, Cervical & Lumbar Radiculopathy',
      'Generalized Neuritic Pain & B-Vitamin Deficiency'
    ]
  },
  {
    id: 'wb-05',
    brandName: 'CalBee-D3',
    genericName: 'Calcium + Vitamin D3',
    category: 'bone',
    categoryLabel: 'Bone Health & Endocrinology',
    targetAudience: 'GP / Gyne',
    dosageForm: 'Tablet (Film Coated)',
    strength: 'Elemental Ca 500 mg + D3 250 IU',
    specialty: 'General Physicians (GP), Gynaecologists (Gyne), Orthopaedicians',
    packType: '10 × 15 Tablets Blister',
    composition: 'Calcium Carbonate IP 1250 mg (equivalent to Elemental Calcium 500 mg) + Cholecalciferol (Vitamin D3) IP 250 IU',
    description: 'Therapeutic elemental calcium enriched with Cholecalciferol to maximize intestinal calcium absorption, preserve bone mineral density, and meet maternal gestational demands.',
    indications: [
      'Pregnancy & Lactation Calcium Supplementation',
      'Post-Menopausal Osteoporosis & Senile Osteopenia',
      'Hypocalcaemia & Skeletal Demineralization'
    ]
  },
  {
    id: 'wb-06',
    brandName: 'FeroBee-XT',
    genericName: 'Iron + Folic Acid + Zinc (Tab / Syp / Drop)',
    category: 'nutrition',
    categoryLabel: 'Haematinics & Gynaecology',
    targetAudience: 'Gyne / GP / Paediatric',
    dosageForm: 'Tablets, Syrup & Paediatric Oral Drops',
    strength: 'Fe 100 mg + FA 1.5 mg + Zn 22.5 mg / ml drop',
    specialty: 'Gynaecologists (Gyne), General Physicians (GP), Paediatricians',
    packType: '10 × 10 Alu-Alu / 15 ml Calibrated Pipette Drops',
    composition: 'Ferrous Ascorbate equivalent to Elemental Iron 100 mg + Folic Acid IP 1.5 mg + Zinc Sulphate Monohydrate 22.5 mg (Drops: Fe 10 mg + FA 100 mcg + Zn 2.5 mg / ml)',
    description: 'Next-generation haematinic providing high elemental iron bioavailability with minimal gastrointestinal upset and zero tooth staining, suitable across gynaecology and paediatric demographics.',
    indications: [
      'Iron Deficiency Anaemia in Pregnancy & Adolescence',
      'Nutritional Anaemia in Paediatrics & Growth Spurts',
      'Post-Surgical & Chronic Blood Loss Convalescence'
    ]
  },
  {
    id: 'wb-07',
    brandName: 'HydroBee-Z',
    genericName: 'ORS + Zinc',
    category: 'paediatrics',
    categoryLabel: 'Paediatrics & Hydration',
    targetAudience: 'Paedia / GP',
    dosageForm: 'Oral Rehydration Salts (WHO Sachet)',
    strength: 'WHO Low-Osmolarity Formula + 20 mg Zinc',
    specialty: 'Paediatricians (Paedia), General Physicians (GP)',
    packType: '21.8 g Sachet (Box of 25 Sachets)',
    composition: 'Sodium Chloride IP 2.6g + Potassium Chloride IP 1.5g + Sodium Citrate IP 2.9g + Dextrose Anhydrous IP 13.5g + Zinc Gluconate equivalent to Elemental Zinc 20 mg',
    description: 'WHO-recommended low-osmolarity oral rehydration formula fortified with elemental zinc to rapidly replenish vital electrolytes, shorten diarrhoeal duration, and prevent childhood dehydration.',
    indications: [
      'Acute Diarrhoeal Dehydration in Children & Infants',
      'Electrolyte Replenishment during Gastroenteritis',
      'Heat Exhaustion, Summer Dehydration & Viral Fevers'
    ]
  },
  {
    id: 'wb-08',
    brandName: 'ParaBee Suspension',
    genericName: 'Paracetamol Paediatric Suspension (125 mg / 250 mg)',
    category: 'paediatrics',
    categoryLabel: 'Paediatrics & Antipyretic',
    targetAudience: 'Paed / GP',
    dosageForm: 'Paediatric Oral Suspension',
    strength: '125 mg / 5 ml & 250 mg / 5 ml (DS)',
    specialty: 'Paediatricians (Paed), General Physicians (GP)',
    packType: '60 ml Pet Bottle with Calibrated Measuring Cup',
    composition: 'Paracetamol IP 125 mg / 5 ml (Standard) and 250 mg / 5 ml (Forte DS) in a child-friendly, non-narcotic palatable syrup base',
    description: 'Trusted, fast-acting paediatric antipyretic and analgesic suspension providing smooth, weight-calibrated fever reduction and rapid relief from childhood aches.',
    indications: [
      'Paediatric High Fever & Post-Immunization Pyrexia',
      'Teething Pain, Earache & Acute Headache',
      'Flu-Related Body Ache & Mild-to-Moderate Childhood Pain'
    ]
  },
  {
    id: 'wb-09',
    brandName: 'BronchoBee-LS',
    genericName: 'Ambroxol + Guaiphenesin + Levosalbutamol Syrup',
    category: 'respiratory',
    categoryLabel: 'Respiratory & Pulmonology',
    targetAudience: 'GP / Paediatric',
    dosageForm: 'Expectorant Syrup (Sugar-Free)',
    strength: '1 mg + 30 mg + 50 mg / 5 ml',
    specialty: 'General Physicians (GP), Paediatricians, Pulmonologists, ENT',
    packType: '100 ml Amber Bottle with Measuring Cap',
    composition: 'Levosalbutamol Sulphate IP equivalent to Levosalbutamol 1 mg + Ambroxol Hydrochloride IP 30 mg + Guaiphenesin IP 50 mg per 5 ml',
    description: 'Triple-action broncho-mucolytic expectorant combining precise beta-2 bronchodilation, airway liquefaction, and surfactant stimulation for free breathing and mucus expulsion.',
    indications: [
      'Productive Cough associated with Bronchospasm',
      'Acute & Chronic Bronchitis / Tracheobronchitis',
      'Asthmatic Bronchitis & Paediatric Chest Congestion'
    ]
  },
  {
    id: 'wb-10',
    brandName: 'D3-Bee 60K',
    genericName: 'Vitamin D3 (Cholecalciferol) Oral Solution / Sachet',
    category: 'bone',
    categoryLabel: 'Bone Health & Endocrinology',
    targetAudience: 'GP / Gyne / Paediatric',
    dosageForm: 'Nano Oral Solution (Shots) & Granule Sachet',
    strength: 'Cholecalciferol 60,000 IU',
    specialty: 'General Physicians (GP), Gynaecologists (Gyne), Paediatricians, Orthopaedics',
    packType: '4 × 5 ml Nano Shots / 1 g Granule Sachet',
    composition: 'Cholecalciferol IP 60,000 IU (Nano-droplet emulsion liquid for instant absorption & water-dispersible granules)',
    description: 'High-potency weekly therapeutic Cholecalciferol formulation engineered for rapid calcium restoration, immune modulation, and musculoskeletal structural integrity.',
    indications: [
      'Clinical Hypovitaminosis D & Calcium Deficiency',
      'Antenatal & Postnatal Maternal Vitamin D Optimization',
      'Paediatric Rickets & Senile Osteomalacia Management'
    ]
  }
];
