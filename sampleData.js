// sampleData.js

export const reactions = [
    {
        reactant1: 'HCl',
        reactant1Type: 'acid',
        reactant2: 'H₂O',
        reactant2Type: 'water',
        product: 'Cl⁻ + H₃O⁺',
        type: 'acid-water',
        details: 'Reaction of Hydrochloric Acid with Water.',
        formula: 'HCl + H₂O → Cl⁻ + H₃O⁺',
        steps: [
            'Mix Hydrochloric Acid with Water.',
            'Observe the formation of Chloride ion and Hydronium ion.'
        ]
    },
    {
        reactant1: 'NH₃',
        reactant1Type: 'base',
        reactant2: 'H₂O',
        reactant2Type: 'water',
        product: 'NH₄⁺ + OH⁻',
        type: 'base-water',
        details: 'Reaction of Ammonia with Water.',
        formula: 'NH₃ + H₂O → NH₄⁺ + OH⁻',
        steps: [
            'Mix Ammonia with Water.',
            'Observe the formation of Ammonium ion and Hydroxide ion.'
        ]
    },
    {
        reactant1: 'H₂SO₄',
        reactant1Type: 'acid',
        reactant2: 'NaOH',
        reactant2Type: 'base',
        product: 'Na₂SO₄ + H₂O',
        type: 'acid-base-neutralization',
        details: 'Neutralization reaction between Sulfuric Acid and Sodium Hydroxide.',
        formula: 'H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O',
        steps: [
            'Mix Sulfuric Acid with Sodium Hydroxide.',
            'Observe the formation of Sodium Sulfate and Water.'
        ]
    },
    {
        reactant1: 'HCl',
        reactant1Type: 'acid',
        reactant2: 'Mg',
        reactant2Type: 'metal',
        product: 'MgCl₂ + H₂',
        type: 'acid-metal',
        details: 'Reaction of Hydrochloric Acid with Magnesium.',
        formula: '2HCl + Mg → MgCl₂ + H₂',
        steps: [
            'Add Hydrochloric Acid to Magnesium metal.',
            'Observe the formation of Magnesium Chloride and Hydrogen gas.'
        ]
    },
    {
        reactant1: 'NaOH',
        reactant1Type: 'base',
        reactant2: 'Zn',
        reactant2Type: 'metal',
        product: 'Na₂ZnO₂ + H₂',
        type: 'base-metal',
        details: 'Reaction of Sodium Hydroxide with Zinc.',
        formula: '2NaOH + Zn → Na₂ZnO₂ + H₂',
        steps: [
            'Mix Sodium Hydroxide with Zinc metal.',
            'Observe the formation of Sodium Zincate and Hydrogen gas.'
        ]
    },
    {
        reactant1: 'HCl',
        reactant1Type: 'acid',
        reactant2: 'Na₂CO₃',
        reactant2Type: 'salt',
        product: 'NaCl + CO₂ + H₂O',
        type: 'acid-carbonate',
        details: 'Reaction of Hydrochloric Acid with Sodium Carbonate.',
        formula: '2HCl + Na₂CO₃ → 2NaCl + CO₂ + H₂O',
        steps: [
            'Add Hydrochloric Acid to Sodium Carbonate solution.',
            'Observe the formation of Sodium Chloride, Carbon Dioxide, and Water.'
        ]
    },
    {
        reactant1: 'NaOH',
        reactant1Type: 'base',
        reactant2: 'CO₂',
        reactant2Type: 'gas',
        product: 'Na₂CO₃ + H₂O',
        type: 'base-carbonate',
        details: 'Reaction of Sodium Hydroxide with Carbon Dioxide.',
        formula: '2NaOH + CO₂ → Na₂CO₃ + H₂O',
        steps: [
            'Mix Sodium Hydroxide with Carbon Dioxide gas.',
            'Observe the formation of Sodium Carbonate and Water.'
        ]
    },
    {
        reactant1: 'HCl',
        reactant1Type: 'acid',
        reactant2: 'NH₃',
        reactant2Type: 'base',
        product: 'NH₄Cl',
        type: 'acid-ammonia',
        details: 'Reaction of Hydrochloric Acid with Ammonia.',
        formula: 'HCl + NH₃ → NH₄Cl',
        steps: [
            'Mix Hydrochloric Acid with Ammonia gas.',
            'Observe the formation of Ammonium Chloride.'
        ]
    },
    {
        reactant1: 'NaOH',
        reactant1Type: 'base',
        reactant2: 'NH₄Cl',
        reactant2Type: 'ammonium-salt',
        product: 'NH₃ + NaCl + H₂O',
        type: 'base-ammonium-salt',
        details: 'Reaction of Sodium Hydroxide with Ammonium Chloride.',
        formula: 'NaOH + NH₄Cl → NH₃ + NaCl + H₂O',
        steps: [
            'Mix Sodium Hydroxide with Ammonium Chloride solution.',
            'Observe the formation of Ammonia gas, Sodium Chloride, and Water.'
        ]
    }
    // Add more reactions
];