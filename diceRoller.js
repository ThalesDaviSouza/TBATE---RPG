// In this moment, we only have dice in formula
const getResultsFormula = (formula) => {
    let dicesFormula = formula.replaceAll(' ', '').split('+');
    dicesFormula = dicesFormula.filter(x => x != '');

    let results = dicesFormula.map((diceFormulaIndividual) => {
        let diceFormulaSeparate = diceFormulaIndividual.split('d');
        let numDices = parseInt(diceFormulaSeparate[0]);
        let faces = diceFormulaSeparate[1];
        if(typeof faces !== 'number'){
            faces = eval(faces);
        }
        let numFaces = faces;
        let total;

        if(numDices > 1){
            total = [];
            for(i = 0; i < numDices; i++){
                total.push(rollDice(numFaces));
            }
        }
        else{
            total = rollDice(numFaces);
        }

        return total;
    })

    return results;
}

const rollDice = (numFaces) => {
    return parseInt(Math.random() * numFaces) + 1;
}

const printDiceResult = (dicesResult) => {
    let total = 0;
    let string = '[ ';
    let result = '';

    for(i = 0; i < dicesResult.length; i++){
        const dice = dicesResult[i];

        if(typeof dice === 'object'){
            string += '[';

            for(j = 0; j < dice.length; j++){
                const subResult = dice[j];
                string += subResult;
                total += subResult;
                
                if(j != (dice.length-1)){
                    string += ', '
                }
            }
            string += ']';
        }
        else{
            string += dice;
            total += dice;
        }

        if(i != dicesResult.length -1){
            string += ', '
        }
    }

    string += ' ]';

    result = `(${total}) ${string}`;

    return result;
}