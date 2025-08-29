// Valid cards
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 0, 1, 0, 1, 9, 5, 9, 7, 3, 9, 5, 1];
const valid4 = [6, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7];
const valid5 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];

// Invalid cards
const invalid1 = [4, 5, 3, 2, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const invalid2 = [5, 7, 9, 5, 7, 6, 7, 6, 7, 8, 7, 5, 1, 4, 3, 9];
const invalid3 = [3, 7, 1, 6, 0, 1, 0, 1, 9, 5, 9, 7, 3, 5, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2];
const invalid5 = [4, 9, 2, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];

// Mystery cards (may be valid or invalid) create check othervalidation()
const mystery1 = [3, 7, 1, 6, 0, 1, 0, 1, 9, 5, 9, 7, 3, 5, 1, 4];
const mystery2 = [5, 7, 9, 5, 7, 6, 7, 6, 7, 8, 7, 5, 1, 4, 3, 9];
const mystery3 = [6, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2];
const mystery4 = [4, 9, 2, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const mystery5 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];

// Batch of all cards
const batch = [
  valid1, valid2, valid3, valid4, valid5,
  invalid1, invalid2, invalid3, invalid4, invalid5,
  mystery1, mystery2, mystery3, mystery4, mystery5
];
//cards is a array
function validateCred(card) {
    let sum = 0;

    for (let i = card.length - 1; i >= 0; i--) {
        let current = card[i];

        if ((card.length - 1 - i) % 2 === 1) {
            current *= 2;
            if (current > 9) {
                current -= 9;
            }
        }

        sum += current;
    }

    return sum % 10 === 0;
}

//4

function findInvalidCards(cards) {
    return cards.filter(card => !validateCred(card));
}


//5
function idInvalidCardCompanies(invalidCards) {
    const companies = [];

    for (let card of invalidCards) { //ye loop ar card ko check kre ga
        switch (card[0]) {
            case 3:
                if (!companies.includes('Amex')) companies.push('Amex');
                break;
            case 4:
                if (!companies.includes('Visa')) companies.push('Visa');
                break;
            case 5:
                if (!companies.includes('Mastercard')) companies.push('Mastercard');
                break;
            case 6:
                if (!companies.includes('Discover')) companies.push('Discover');
                break;
            default:
                console.log('Company not found for card:', card);
        }
    }

    return companies;
}

function stringToDigits(cardStr) {
    return cardStr.split('').map(Number);
}


function makeValid(card) {
    let newCard = card.slice();
    for (let i = 0; i < 10; i++) {
        newCard[newCard.length - 1] = i;
        if (validateCred(newCard)) return newCard;
    }
    return card;
}



const invalidCards = findInvalidCards(batch);
const companiesWithInvalids = idInvalidCardCompanies(invalidCards);

console.log('Invalid Cards:', invalidCards);
console.log('Companies with Invalid Cards:', companiesWithInvalids);




