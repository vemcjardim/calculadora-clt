function calcular() {
        
    // Puxas os valores digitados nos campos
    var salario = window.document.getElementById('salario')
    var descontos = window.document.getElementById('descontos')
    var dependentes = window.document.getElementById('dependentes')
    
    // Transforma os valores em números
    var salario_number = Number(salario.value)
    var descontos_number = Number(descontos.value)
    var dependentes_number = Number(dependentes.value)
   
    // Exibe o resultado
    window.document.getElementById('resultado').innerHTML = `O salário digitado foi ${salario_number}.<br>O desconto digitado foi ${descontos_number}.<br>A quantidade de dependentes digitada foi de ${dependentes_number}`
    
    }