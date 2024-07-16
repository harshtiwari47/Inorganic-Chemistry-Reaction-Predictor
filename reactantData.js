// reactantData.js

export const reactants = [
    {
        name: 'HCl',
        fullName: 'Hydrochloric Acid',
        type: 'acid',
        description: 'Hydrochloric Acid, a strong acid commonly used in laboratories and industry.',
        reactsWithType: ['base', 'water', 'metal', 'carbonate', 'bicarbonate', 'ammonia', 'ammonium salt'],
        properties: {
            molecularFormula: 'HCl',
            molarMass: '36.46 g/mol',
            density: '1.49 g/cm³',
            boilingPoint: '-85.05°C',
            solubility: 'Soluble in water'
        }
    },
    {
        name: 'NaOH',
        fullName: 'Sodium Hydroxide',
        type: 'base',
        description: 'Sodium Hydroxide, a strong base also known as caustic soda.',
        reactsWithType: ['acid', 'water', 'metal', 'carbonate', 'bicarbonate', 'ammonium salt'],
        properties: {
            molecularFormula: 'NaOH',
            molarMass: '40.00 g/mol',
            density: '2.13 g/cm³',
            meltingPoint: '318°C',
            solubility: 'Soluble in water'
        }
    },
    {
        name: 'H₂O',
        fullName: 'Water',
        type: 'water',
        description: 'Water, a polar molecule essential for life and a common solvent.',
        reactsWithType: ['acid', 'base'],
        properties: {
            chemicalFormula: 'H₂O',
            molarMass: '18.015 g/mol',
            density: '1.00 g/cm³',
            boilingPoint: '100°C',
            meltingPoint: '0°C',
            solubility: 'Miscible with many substances'
        }
    },
    // Add more reactants
];