// Helper function
function element(id) {
    return window.document.getElementById(id)
}

// Clears all to start again
function reset() {
    element('show_table').style.display = 'none'
}

// Check if at least salary was input
function check() {
    var input_salary = element('input_salary')
    if (input_salary.value) {
        compute()
    } else {
        element('error_msg').innerHTML = `<p>Digite ao menos o valor do salário</p>`
    }
}

// Calculates net salary
function compute() {
    // Hides error message and shows table with results
    element('error_msg').style.display = 'none'
    element('show_table').style.display = 'table'
    
    // Gets values from inputs
    var input_salary = element('input_salary')
    let input_discount = element('input_discount')
    let input_dependent = element('input_dependent')

    // Turns inputs into numbers
    input_salary = Number(input_salary.value)
    input_discount = Number(input_discount.value)
    input_dependent = Number(input_dependent.value)

    // Makes INSS ranges
    const inssrange1 = {min: 0,       max: 1212.00, rate:  7.5, deduction:   0.00}
    const inssrange2 = {min: 1212.01, max: 2427.35, rate:  9.0, deduction:  90.90}
    const inssrange3 = {min: 2427.36, max: 3641.03, rate: 12.0, deduction: 200.28}
    const inssrange4 = {min: 3641.04, max: 7087.22, rate: 14.0, deduction: 345.92}
    const inssrange5 = {min: 7087.23,               rate: 14.0, deduction: 828.39}
    
    // Makes IRRF ranges
    const irrfrange1 = {min:       0, max: 1903.98, rate:    0, deduction:   0.00}
    const irrfrange2 = {min: 1903.99, max: 2826.65, rate:  7.5, deduction: 142.80}
    const irrfrange3 = {min: 2826.66, max: 3751.05, rate: 15.5, deduction: 354.80}
    const irrfrange4 = {min: 3751.06, max: 4664.68, rate: 22.5, deduction: 636.13}
    const irrfrange5 = {min: 4664.69,               rate: 27.5, deduction: 869.36}

    // Makes dependent deduction
    const dependent_value = 189.59
    let dependent_deduction = input_dependent * dependent_value

    // Finds where salary is in INSS range and calculates INSS contribution
    if (input_salary <= inssrange1.max) {
        var inss_contribution = ((input_salary - inssrange1.min) * inssrange1.rate / 100) + inssrange1.deduction
    } else if (input_salary <= inssrange2.max) {
        var inss_contribution = ((input_salary - inssrange2.min) * inssrange2.rate / 100) + inssrange2.deduction
    } else if (input_salary <= inssrange3.max) {
        var inss_contribution = ((input_salary - inssrange3.min) * inssrange3.rate / 100) + inssrange3.deduction
    } else if (input_salary <= inssrange4.max) {
        var inss_contribution = ((input_salary - inssrange4.min) * inssrange4.rate / 100) + inssrange4.deduction
    } else {
        var inss_contribution = inssrange5.deduction
    }

    // Finds IRRF calculation basis
    let irrf_base = input_salary - inss_contribution - dependent_deduction

    // Finds where IRRF base is in IRRF range and calculates IRRF value
    if (irrf_base <= irrfrange1.max) {
        var irrf = (irrf_base * irrfrange1.rate / 100) - irrfrange1.deduction
    } else if (irrf_base <= irrfrange2.max) {
        var irrf = (irrf_base * irrfrange2.rate / 100) - irrfrange2.deduction
    } else if (irrf_base <= irrfrange3.max) {
        var irrf = (irrf_base * irrfrange3.rate / 100) - irrfrange3.deduction
    } else if (irrf_base <= irrfrange4.max) {
        var irrf = (irrf_base * irrfrange4.rate / 100) - irrfrange4.deduction
    } else {
        var irrf = (irrf_base * irrfrange5.rate / 100) - irrfrange5.deduction
    }
    
    //element('error_msg').innerHTML = `<br>INSS: ${inss_contribution}<br>IRRF: ${irrf}`

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
        element('show_gross_salary_percent').innerHTML = `100 %`
        //element('show_gross_salary').innerHTML = input_salary.toFixed(2)
        element('show_gross_salary').innerHTML = input_salary.toFixed(2)
        // Second line
        element('show_discounts_percent').innerHTML = `${discounts_percent} %`
        element('show_discounts').innerHTML = input_discount.toFixed(2)
        // Third line
        element('show_inss_percent').innerHTML = `${inss_percent} %`
        element('show_inss').innerHTML = inss_contribution
        // 4th line
        element('show_irrf_percent').innerHTML = `${irrf_percent} %`
        element('show_irrf').innerHTML = irrf.toFixed(2)
        // 5th line
        element('show_total_discounts_percent').innerHTML = `${total_discounts_percent} %`
        element('show_total_discounts').innerHTML = total_discounts.toFixed(2)
        // 6th line
        element('show_net_salary_percent').innerHTML = `${net_salary_percent} %`
        element('show_net_salary').innerHTML = net_salary.toFixed(2)
    
    // Clear inputs
    //window.document.getElementById('input_salary').value = ''
    //window.document.getElementById('input_discount').value = ''
    //window.document.getElementById('input_dependent').value = ''
}