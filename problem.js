function calculateMoney(ticketSale) {
    if (typeof ticketSale !== 'number') {
        return 'please provide a valid number'
    }
    if (ticketSale <= 0) {
        return 'please provide a positive number'
    }
    const result = (ticketSale * 120) - (500 + (8 * 50))
    return result

}

calculateMoney(1055)


// -----------------------------

function checkName(name) {
    if (typeof name !== 'string') {
        return 'please provide a valid name';
    }
    if (name.includes('A') || name.includes('y') || name.includes('i') || name.includes('e') || name.includes('o') || name.includes('u') || name.includes('w')) {
        return 'Good Name';
    }
    return 'Bad Name';
}

checkName('RAFEE')

// -----------------------------

function deleteInvalids(array) {
    if (!Array.isArray(array)) {
        return "please provide a valid array";
    }

    let validNumbers = [];

    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'number' && !isNaN(array[i])) {
            validNumbers.push(array[i]);
        }
    }
    return validNumbers;
}

deleteInvalids([1, 2, -3]);

// -----------------

function password(obj) {
    if (!obj.hasOwnProperty('name') || !obj.hasOwnProperty('birthYear') || !obj.hasOwnProperty('siteName')) {
        return "invalid";
    }

    if (isNaN(obj.birthYear) || obj.birthYear.toString().length !== 4) {
        return "invalid";
    }

    const websiteName = obj.siteName.charAt(0).toUpperCase() + obj.siteName.slice(1);
    const userName = obj.name;
    const userYear = obj.birthYear;

    return `${websiteName}#${userName}@${userYear}`;
}

(password({
    name: 'maisha',
    birthYear: 2002
}));

// -----------------

function monthlySavings(arr, livingCost) {
    if (!Array.isArray(arr) || typeof livingCost !== 'number') {
        return "invalid input";
    }

    let totalIncome = 0;
    let totalTax = 0;

    for (let i = 0; i < arr.length; i++) {
        totalIncome += arr[i];
        if (arr[i] > 2999) {
            totalTax += 0.2 * arr[i];
        }
    }

    const totalSavings = totalIncome - totalTax - livingCost;

    if (totalSavings >= 0) {
        return totalSavings;
    } else {
        return "earn more";
    }
}

monthlySavings([1000, 2000, 2500], 5000)
monthlySavings([900, 2700, 3400], 10000)