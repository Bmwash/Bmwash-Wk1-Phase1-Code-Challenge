
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculateTax(grossSalary) {
    let tax;
    if (grossSalary <= 24000) {
        tax = grossSalary * 0.1;
    } else if (grossSalary <= 32333) {
        tax = (24000 * 0.1) + ((grossSalary - 24000) * 0.25);
    } else {
        tax = (24000 * 0.1) + ((32333 - 24000) * 0.25) + ((grossSalary - 32333) * 0.3);
    }
    return tax;
}

function calculateNHIF(grossSalary) {
    if (grossSalary <= 5999) return 150;
    if (grossSalary <= 7999) return 300;
    if (grossSalary <= 11999) return 400;
    if (grossSalary <= 14999) return 500;
    if (grossSalary <= 19999) return 600;
    if (grossSalary <= 24999) return 750;
    if (grossSalary <= 29999) return 850;
    if (grossSalary <= 34999) return 900;
    if (grossSalary <= 39999) return 950;
    if (grossSalary >= 40000) return 1000;
    return 0;
}

function calculateNSSF(pensionablePay) {
    let NSSF;
    if (pensionablePay <= 7000) {
        NSSF = pensionablePay * 0.06;
    } else if (pensionablePay <= 36000) {
        NSSF = ((pensionablePay - 7000) * 0.06);
    }
    return NSSF;
}

rl.question("What is your basic salary: ", function(basicSalary) {
    rl.question("Enter your benefits: ", function(benefits) {
        rl.question("Enter your pensionablePay: ", function(pensionablePay) {
            basicSalary = Number(basicSalary);
            benefits = Number(benefits);
            pensionablePay = Number(pensionablePay);
            
            if (isNaN(basicSalary) || isNaN(benefits) || isNaN(pensionablePay) || basicSalary < 0 || benefits < 0 || pensionablePay < 0) {
                console.log("Invalid amount, enter a positive number for salary, benefits, and pensionable pay.");
                rl.close();
                return;
            }
            
            let grossSalary = basicSalary + benefits;
            let payeeTax = calculateTax(grossSalary);
            let nhifDeduction = calculateNHIF(grossSalary);
            let nssfDeduction = calculateNSSF(pensionablePay);
            
            let netSalary = grossSalary - payeeTax - nhifDeduction - nssfDeduction;
            
            console.log(`Gross Salary: ${grossSalary}`);
            console.log(`PAYEE (Tax): ${payeeTax}`);
            console.log(`NHIF Deduction: ${nhifDeduction}`);
            console.log(`NSSF Deduction: ${nssfDeduction}`);
            console.log(`Net Salary: ${netSalary}`);
            
            rl.close();
        });
    });
});
