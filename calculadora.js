// Check if at least salary was input
function check() {
    let input_salary = window.document.getElementById('input_salary')
    if (input_salary.value) {
        compute()
    } else {
        window.document.getElementById('error_msg').innerHTML = `<p>Digite ao menos o valor do salário</p>`
    }
}

// Calculates net salary
function compute() {
    // Hides error message and shows table with results
    window.document.getElementById('error_msg').style.display = 'none'
    window.document.getElementById('show_table').style.display = 'table'
    
    // Gets values from inputs
    let input_discount = window.document.getElementById('input_discount')
    let input_dependent = window.document.getElementById('input_dependent')

    // Turns inputs into numbers
    input_salary = Number(input_salary.value)
    input_discount = Number(input_discount.value)
    input_dependent = Number(input_dependent.value)

    // Makes ranges
    let inss_range = [1212.00, 2427.35, 3641.03, 7087.22]
    let irrf_range = [1903.98, 2826.65, 3751.05, 4664.68]

    // Makes rates
    let inss_rate = [7.5,  9.0, 12.0, 14.0]
    let irrf_rate = [0, 7.5, 15.0, 22.5, 27.5]

    // Makes deductions
    let inss_deduction = [90.90,  109.38, 145.64, 482.46]
    let irrf_deduction = [0, 142.80, 354.80, 636.13, 869.36]

    // Makes dependent deduction
    let dependent_value = 189.59
    let dependent_deduction = input_dependent * dependent_value

    // Finds where salary is in INSS range and calculates INSS contribution
    if (input_salary <= inss_range[0]) {
        inss_contribution = input_salary * inss_rate[0] / 100
        inss_contribution = inss_contribution.toFixed(2)
    } else if (input_salary <= inss_range[1]) {
        inss_contribution = ((input_salary - (inss_range[0]+0.01)) * inss_rate[1] / 100) + inss_deduction[0]
        inss_contribution = inss_contribution.toFixed(2)
    } else if (input_salary <= inss_range[2]) {
        inss_contribution = ((input_salary - (inss_range[1]+0.01)) * inss_rate[2] / 100) + inss_deduction[0] + inss_deduction[1]
        inss_contribution = inss_contribution.toFixed(2)
    } else if (input_salary <= inss_range[3]) {
        inss_contribution = ((input_salary - (inss_range[2]+0.01)) * inss_rate[3] / 100) + inss_deduction[0] + inss_deduction[1] + inss_deduction[2]
        inss_contribution = inss_contribution.toFixed(2)
    } else {
        inss_contribution = inss_deduction[0] + inss_deduction[1] + inss_deduction[2] + inss_deduction[3]
        inss_contribution = inss_contribution.toFixed(2)
    }

    // Finds IRRF calculation basis
    let irrf_base = input_salary - inss_contribution - dependent_deduction

    // Finds where IRRF base is in IRRF range and calculates IRRF value
    let irrf = 0
    if (irrf_base <= irrf_range[0]) {
        irrf = (irrf_base * irrf_rate[0] / 100) - irrf_deduction[0]
    } else if (irrf_base <= irrf_range[1]) {
        irrf = (irrf_base * irrf_rate[1] / 100) - irrf_deduction[1]
    } else if (irrf_base <= irrf_range[2]) {
        irrf = (irrf_base * irrf_rate[2] / 100) - irrf_deduction[2]
    } else if (irrf_base <= irrf_range[3]) {
        irrf = (irrf_base * irrf_rate[3] / 100) - irrf_deduction[3]
    } else {
        irrf = (irrf_base * irrf_rate[4] / 100) - irrf_deduction[4]
    }

    // Calculates Net Salary
    let total_discounts = input_discount + Number(inss_contribution) + irrf
    let net_salary = input_salary - inss_contribution - irrf - input_discount

    // Calculates percents
    let discounts_percent = (input_discount / input_salary * 100).toFixed(2)
    let inss_percent = (inss_contribution / input_salary * 100).toFixed(2)
    let irrf_percent = (irrf / input_salary * 100).toFixed(2)
    let total_discounts_percent = (total_discounts / input_salary * 100).toFixed(2)
    let net_salary_percent = (net_salary / input_salary * 100).toFixed(2)

    // Shows results
        // First line
        window.document.getElementById('show_gross_salary_percent').innerHTML = `100 %`
        window.document.getElementById('show_gross_salary').innerHTML = input_salary.toFixed(2)
        // Second line
        window.document.getElementById('show_discounts_percent').innerHTML = `${discounts_percent} %`
        window.document.getElementById('show_discounts').innerHTML = input_discount.toFixed(2)
        // Third line
        window.document.getElementById('show_inss_percent').innerHTML = `${inss_percent} %`
        window.document.getElementById('show_inss').innerHTML = inss_contribution
        // 4th line
        window.document.getElementById('show_irrf_percent').innerHTML = `${irrf_percent} %`
        window.document.getElementById('show_irrf').innerHTML = irrf.toFixed(2)
        // 5th line
        window.document.getElementById('show_total_discounts_percent').innerHTML = `${total_discounts_percent} %`
        window.document.getElementById('show_total_discounts').innerHTML = total_discounts.toFixed(2)
        // 6th line
        window.document.getElementById('show_net_salary_percent').innerHTML = `${net_salary_percent} %`
        window.document.getElementById('show_net_salary').innerHTML = net_salary.toFixed(2)
}

// Clears all to start again
function clear() {
    window.document.getElementById('input_salary').value = ''
    window.document.getElementById('input_discount').value = ''
    window.document.getElementById('input_dependent').value = ''
    window.document.getElementById('show_table').style.display = 'none'
}