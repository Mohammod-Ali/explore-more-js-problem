// fixed: per item wood requirements
// chair --> 3 cft
// table --> 10 cft
// bed --> 50 cft

function woodCalculator(chairQuantity, tableQuantity, bedQuantity){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chairWood = chairQuantity * perChairWood;
    const tableWood = tableQuantity * perTableWood;
    const bedWood = bedQuantity * perBedWood;

    // console.log(chairQuantity, tableQuantity, bedQuantity)

    const totalWood = chairWood + tableWood + bedWood;
    return totalWood
}

const totalWood = woodCalculator(0, 0, 1)
console.log(totalWood)