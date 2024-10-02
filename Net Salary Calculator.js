function calculateNetSalary(basicSalary, benefits) {
    const NHIF_Deductions = calculateNHIF(basicSalary);
    const NSSF_Deductions = 0.06 * basicSalary; 
    const grossSalary = basicSalary + benefits;

    const PAYE = calculatePAYE(grossSalary);

    const netSalary = grossSalary - (NHIF_Deductions + NSSF_Deductions + PAYE);

    console.log(`Basic Salary: Ksh ${basicSalary}`);
    console.log(`Benefits: Ksh ${benefits}`);
    console.log(`Gross Salary: Ksh ${grossSalary}`);
    console.log(`NHIF Deductions: Ksh ${NHIF_Deductions}`);
    console.log(`NSSF Deductions: Ksh ${NSSF_Deductions}`);
    console.log(`PAYE Tax: Ksh ${PAYE}`);
    console.log(`Net Salary: Ksh ${netSalary}`);
}
