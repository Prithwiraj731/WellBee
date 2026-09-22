export const initialProducts = [
  {
    id: 'wb-01',
    brandName: 'PantoBee-DSR',
    genericName: 'Pantoprazole 40 mg + Domperidone SR',
    category: 'gastro',
    categoryLabel: 'Gastroenterology',
    dosageForm: 'Capsule (SR)',
    strength: '40 mg + 30 mg SR',
    specialty: 'Gastroenterologists, Physicians',
    packType: '10 × 10 Alu-Alu Strip',
    composition: 'Pantoprazole Sodium IP 40 mg (Enteric Coated) + Domperidone IP 30 mg (Sustained Release)',
    description: 'Proton pump inhibitor and prokinetic agent engineered for acid suppression and gastrointestinal motility in severe GERD and reflux oesophagitis.',
    indications: [
      'Gastroesophageal Reflux Disease (GERD)',
      'Reflux Oesophagitis & Dyspepsia',
      'NSAID-Induced Gastric Ulcer Prophylaxis'
    ]
  },
  {
    id: 'wb-02',
    brandName: 'LevoBee-M',
    genericName: 'Levocetirizine 5 mg + Montelukast 10 mg',
    category: 'respiratory',
    categoryLabel: 'Respiratory & Pulmonology',
    dosageForm: 'Tablet (FC)',
    strength: '5 mg + 10 mg',
    specialty: 'Pulmonologists, ENT, Allergists',
    packType: '10 × 10 Alu-Alu Pack',
    composition: 'Levocetirizine Dihydrochloride IP 5 mg + Montelukast Sodium IP 10 mg',
    description: 'Dual-action H1-antihistamine and leukotriene receptor antagonist delivering 24-hour relief from seasonal and perennial allergic rhinitis.',
    indications: [
      'Allergic Rhinitis (Seasonal & Perennial)',
      'Comorbid Mild-to-Moderate Asthma',
      'Chronic Idiopathic Urticaria'
    ]
  },
  {
    id: 'wb-03',
    brandName: 'AceBee-P',
    genericName: 'Aceclofenac 100 mg + Paracetamol 325 mg',
    category: 'ortho',
    categoryLabel: 'Pain & Orthopaedics',
    dosageForm: 'Tablet (FC)',
    strength: '100 mg + 325 mg',
    specialty: 'Orthopaedicians, Rheumatologists',
    packType: '10 × 10 Blister Strip',
    composition: 'Aceclofenac IP 100 mg + Paracetamol IP 325 mg',
    description: 'Selective COX-2 preferential NSAID and antipyretic combination for acute musculoskeletal inflammation with high gastric tolerability.',
    indications: [
      'Osteoarthritis & Rheumatoid Arthritis Pain',
      'Ankylosing Spondylitis & Lumbago',
      'Post-Traumatic Musculoskeletal Inflammation'
    ]
  },
  {
    id: 'wb-04',
    brandName: 'NervBee-Plus',
    genericName: 'Methylcobalamin + Alpha Lipoic Acid + B-Vitamins',
    category: 'nutrition',
    categoryLabel: 'Neuro-Nutrition & Metabolic',
    dosageForm: 'Capsule',
    strength: '1500 mcg + 100 mg + B-Complex',
    specialty: 'Neurologists, Diabetologists',
    packType: '10 × 10 Alu-Alu Strip',
    composition: 'Methylcobalamin 1500 mcg + Alpha Lipoic Acid 100 mg + Pyridoxine HCl 3 mg + Folic Acid 1.5 mg + Thiamine Mononitrate 10 mg',
    description: 'Targeted neurotropic compound designed to promote axonal myelin regeneration and manage diabetic peripheral neuropathy.',
    indications: [
      'Diabetic Peripheral Neuropathy',
      'Sciatica & Lumbago Neuralgia',
      'Subclinical B-Complex Deficiencies'
    ]
  },
  {
    id: 'wb-05',
    brandName: 'CalBee-D3',
    genericName: 'Calcium + Vitamin D3',
    category: 'bone',
    categoryLabel: 'Bone Health & Endocrinology',
    dosageForm: 'Tablet (FC)',
    strength: 'Elemental Ca 500 mg + D3 250 IU',
    specialty: 'Gynaecologists, Orthopaedicians',
    packType: '10 × 15 Tablets Blister',
    composition: 'Calcium Carbonate IP 1250 mg (Eq. to Elemental Calcium 500 mg) + Cholecalciferol (Vitamin D3) IP 250 IU',
    description: 'Therapeutic elemental calcium enriched with Vitamin D3 to enhance intestinal mineral absorption and preserve skeletal bone density.',
    indications: [
      'Osteoporosis & Osteopenia Management',
      'Pregnancy & Lactational Mineral Supplementation',
      'Senile Bone Demineralization'
    ]
  },
  {
    id: 'wb-06',
    brandName: 'FeroBee-Z Drops',
    genericName: 'Iron + Folic Acid + Zinc / Paediatric Drop',
    category: 'paediatrics',
    categoryLabel: 'Paediatrics & Hydration',
    dosageForm: 'Paediatric Oral Drops',
    strength: 'Fe 10 mg + FA 100 mcg + Zn 2.5 mg / ml',
    specialty: 'Paediatricians, Neonatologists',
    packType: '15 ml Bottle with Calibrated Pipette',
    composition: 'Ferrous Ascorbate eq. to Elemental Iron 10 mg + Folic Acid IP 100 mcg + Zinc Sulphate eq. to Elemental Zinc 2.5 mg per ml',
    description: 'Calibrated infant haematinic delivering bioavailable iron without gastric irritation or teeth discoloration.',
    indications: [
      'Infantile Iron Deficiency Anaemia',
      'Prophylaxis in Low Birth Weight Infants',
      'Paediatric Growth Spurt Micronutrient Support'
    ]
  },
  {
    id: 'wb-07',
    brandName: 'HydroBee-Z',
    genericName: 'ORS + Zinc',
    category: 'paediatrics',
    categoryLabel: 'Paediatrics & Hydration',
    dosageForm: 'Oral Rehydration Powder',
    strength: 'WHO Low-Osmolarity Formula + 20 mg Zinc',
    specialty: 'Paediatricians, General Physicians',
    packType: '21.8 g Sachet (Box of 25)',
    composition: 'Sodium Chloride IP 2.6g + Potassium Chloride IP 1.5g + Sodium Citrate IP 2.9g + Dextrose Anhydrous IP 13.5g + Zinc Sulphate eq. to Elemental Zinc 20 mg',
    description: 'WHO low-osmolarity oral rehydration formula enriched with zinc to promptly replenish electrolytes during acute dehydration.',
    indications: [
      'Acute Diarrhoeal Dehydration in Children & Adults',
      'Traveler’s Diarrhea & Electrolyte Depletion',
      'Heat Exhaustion & Exertional Dehydration'
    ]
  },
  {
    id: 'wb-08',
    brandName: 'ParaBee Suspension',
    genericName: 'Paracetamol Paediatric Suspension 125 mg / 250 mg',
    category: 'paediatrics',
    categoryLabel: 'Paediatrics & Hydration',
    dosageForm: 'Paediatric Suspension',
    strength: '125 mg / 5 ml & 250 mg / 5 ml',
    specialty: 'Paediatricians, General Practitioners',
    packType: '60 ml Bottle with Measuring Cup',
    composition: 'Paracetamol IP 125 mg (or 250 mg Forte) per 5 ml in a palatable fruit-flavored vehicle',
    description: 'Fast-acting, gentle paediatric antipyretic suspension for weight-calibrated fever reduction and acute teething discomfort.',
    indications: [
      'Paediatric Pyrexia & Post-Vaccination Fever',
      'Teething Discomfort & Earache',
      'Mild-to-Moderate Childhood Pain'
    ]
  },
  {
    id: 'wb-09',
    brandName: 'BronchoBee-LS',
    genericName: 'Ambroxol + Guaiphenesin + Levosalbutamol Syrup',
    category: 'respiratory',
    categoryLabel: 'Respiratory & Pulmonology',
    dosageForm: 'Expectorant Syrup',
    strength: '1 mg + 30 mg + 50 mg / 5 ml',
    specialty: 'Pulmonologists, Paediatricians, ENT',
    packType: '100 ml Amber Bottle with Measuring Cap',
    composition: 'Levosalbutamol Sulphate IP eq. to Levosalbutamol 1 mg + Ambroxol HCl IP 30 mg + Guaiphenesin IP 50 mg per 5 ml (Sugar-Free)',
    description: 'Triple-action broncho-mucolytic expectorant combining selective beta-2 bronchodilation with mucus thinning and airway clearance.',
    indications: [
      'Productive Cough with Bronchospasm',
      'Acute & Chronic Bronchitis / COPD',
      'Asthmatic Bronchitis & Chest Congestion'
    ]
  },
  {
    id: 'wb-10',
    brandName: 'D3-Bee 60K',
    genericName: 'Vitamin D3 (Cholecalciferol) Oral Solution / Sachet',
    category: 'bone',
    categoryLabel: 'Bone Health & Endocrinology',
    dosageForm: 'Oral Solution & Sachet',
    strength: 'Cholecalciferol 60,000 IU',
    specialty: 'Endocrinologists, Orthopaedicians',
    packType: '4 × 5 ml Shots & 1 g Granule Sachet',
    composition: 'Cholecalciferol IP 60,000 IU (Nano-emulsion liquid / oral granules)',
    description: 'High-dose weekly therapeutic Vitamin D3 formulation engineered for high systemic bioavailability and rapid calcium restoration.',
    indications: [
      'Clinical Hypovitaminosis D Deficiency',
      'Osteomalacia & Senile Osteoporosis Adjunct',
      'Immune Function & Metabolic Support'
    ]
  }
];
