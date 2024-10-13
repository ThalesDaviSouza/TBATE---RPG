const packDesviantComplexModifier =
{
    title: 'Elementos Desviantes (magma e planta)',
    tiers: [
        {
            cost: 2,
            level: 1,
            effects: {
                buff: 3,
                debuff: 3,
                area: 'Acerta um alvo adjacente',
                dano: '1d6'
            }
        },
        {
            cost: 3,
            level: 2,
            effects: {
                buff: 4,
                debuff: 4,
                area: 'Area de 4 metros',
                dano: '2d4'
            }
        },
        {
            cost: 5,
            level: 3,
            effects: {
                buff: 5,
                debuff: 5,
                area: 'Area de 9 metros',
                dano: '1d10'
            }
        },
        {
            cost: 7,
            level: 4,
            effects: {
                buff: 6,
                debuff: 6,
                area: 'Area de 18 metros',
                dano: '2d6'
            }
        },
        {
            cost: 9,
            level: 5,
            effects: {
                buff: 7,
                debuff: 7,
                area: 'Area de 24 metros',
                dano: '2d8'
            }
        },
        {
            cost: 12,
            level: 6,
            effects: {
                buff: 8,
                debuff: 8,
                area: 'Area de 90 metros',
                dano: '5d4'
            }
        },
    ]
}