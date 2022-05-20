function calcular() {

    window.document.getElementById('data').style.display = 'table'
            
    // Get values from inputs
    var salario = window.document.getElementById('salario')
    var descontos = window.document.getElementById('descontos')
    var dependentes = window.document.getElementById('dependentes')
    
    // Parse values to numbers
    var salario_number = Number(salario.value)
    var descontos_number = Number(descontos.value)
    var dependentes_number = Number(dependentes.value)
   
    /*
    ***
    *** INSS rates
    ***
    RANGE                               RATE        DEDUCTION
    Until R$ 1.212,00                    7,5%        90,90      First Range
    From R$ 1.212,01 to R$ 2.427,35      9,0%       109.38      Second Range
    From R$ 2.427,36 to R$ 3.641,03     12,0%       145.64      Third Range
    From R$ 3.641,04 to R$ 7.087,22     14,0%       482.46      Fourth Range
    */

    // Compute INSS deduction
    
    if (salario_number <= 1212) {
        // First Range
        var inss = salario_number * 0.075
        salario_number = salario_number.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
        inss = inss.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
        
        window.document.getElementById('salbruto').innerHTML = salario_number
        window.document.getElementById('inss').innerHTML = inss
    } else if (salario_number <= 2427.35) {
        // Second Range
        var inss = ((salario_number - 1212) * 0.09) + 90.90
        var inss_aliquota = (inss / salario_number)*100
        inss = inss.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
        window.document.getElementById('inss_aliquota').innerHTML = `${inss_aliquota.toFixed(2)} %`
        window.document.getElementById('inss').innerHTML = inss
    } else if (salario_number <= 3641.03) {
        // Third Range
        var inss = ((salario_number - 1212.01 - 1215.34) * 0.12) + 90.90 + 109.38
        var inss_aliquota = (inss / salario_number)*100
        inss = inss.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
        window.document.getElementById('inss_aliquota').innerHTML = `${inss_aliquota.toFixed(2)} %`
        window.document.getElementById('inss').innerHTML = inss
    } else if (salario_number <= 7087.22) {
        // Fourth Range
        var inss = ((salario_number - 1212.01 - 1215.34 - 1213.68) * 0.14) + 90.90 + 109.38 + 145.64
        var inss_aliquota = (inss / salario_number)*100
        inss = inss.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
        window.document.getElementById('inss_aliquota').innerHTML = `${inss_aliquota.toFixed(2)} %`
        window.document.getElementById('inss').innerHTML = inss
    } else {
        var inss = 828.39
        var inss_aliquota = (inss / salario_number)*100
        inss = inss.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
        window.document.getElementById('inss_aliquota').innerHTML = `${inss_aliquota.toFixed(2)} % (TETO)`
        window.document.getElementById('inss').innerHTML = inss
    }


    /*
    ***
    *** IRPF rates and deduction per dependant
    ***
    Until R$ 1.903,98                    none         0,00
    From R$ 1.903,99 to R$ 2.826,65      7,5%       142,80
    From R$ 2.826,66 to R$ 3.751,05     15,0%       354,80
    From R$ 3.751,06 to R$ 4.664,68     22,5%       636,13
    After R$ 4.664,68                   27,5%       869,36
    */


    // Exibe o resultado
}

function limpar() {
    window.document.getElementById('data').style.display = 'none'
    window.document.getElementById('salario').value = ''
    window.document.getElementById('descontos').value = ''
    window.document.getElementById('dependentes').value = ''
    window.document.getElementById('salbruto').innerHTML = '0,00'
    window.document.getElementById('inss_aliquota').innerHTML = '0,00'
    window.document.getElementById('inss').innerHTML = '0,00'
    window.document.getElementById('irpf').innerHTML = '0,00'

}