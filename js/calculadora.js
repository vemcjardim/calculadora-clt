function calcular() {
        
    // Get values from inputs
    var salario = window.document.getElementById('salario')
    var descontos = window.document.getElementById('descontos')
    var dependentes = window.document.getElementById('dependentes')
    
    // Parse values to numbers
    var salario_number = Number(salario.value)
    var descontos_number = Number(descontos.value)
    var dependentes_number = Number(dependentes.value)

    salario_number = 50000.5
    salario_number = salario_number.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
   
    /*
    ***
    *** INSS rates
    ***
    RANGE                               RATE        DEDUCTION
    Until R$ 1.212,00                    7,5%        90,90
    From R$ 1.212,01 to R$ 2.427,35      9,0%       218,46
    From R$ 2.427,36 to R$ 3.641,03     12,0%       436,92
    From R$ 3.641,04 to R$ 7.087,22     14,0%       992,21
    */

    // Compute INSS deduction
    if (salario_number > 100.2) {
        window.document.getElementById('salbruto').innerHTML = salario_number
    }
    toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})

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