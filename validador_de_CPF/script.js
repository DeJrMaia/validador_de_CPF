console.log("JS carregado");

function validaCPF(cpf) {
    console.log(cpf.length + " números digitados");
    // Invalida qualquer CPF digitado que não contenha 11 dígitos //
    if (cpf.length != 11) {
        return false;

        // Caso contenha 11 dígitos, reserva os 9 números iniciais em uma variável e os dígitos em outra 
    } else {
        var numeros = cpf.substring(0, 9);
        var digito = cpf.substring(9);

        // Validação do primeiro dígito //
        // Percorre os 9 primeiros dígitos do CPF pela sequência decrescente de números de 10 à 2, soma os resultados e multiplica por 10 //

        var soma = 0;
        for (var i = 10; i > 1; i--) {
            soma += numeros.charAt(10 - i) * i;
        }
        // Divide o resultado por 11 e verifica se o resto da divisão é igual ao primeiro dígito do CPF //
        var resultado = (soma % 11) < 2 ? 0 : 11 - (soma % 11);

        if (resultado != digito.charAt(0)) {
            return false;
        }

        // Validação do segundo dígito //
        // Percorre os 10 primeiros números (incluindo o primeiro dígito), multiplicando pela sequência decrescente de 11 a 2 e multiplicando o resultado por 10 //
        soma = 0;
        numeros = cpf.substring(0, 10);
        for (var k = 11; k > 1; k--) {
            soma += numeros.charAt(11 - k) * k;
        }
        // Divide o resultado por 11 e verifica se o resto da divisão é igual ao segundo dígito do CPF //

        resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);

        if (resultado != digito.charAt(1)) {
            return false;
        }
        return true;
    }
}

// Função para retornar a mensagem de erro ou sucesso na validação, resetando a mensagem caso o botão "Validar!" seja clicado novamente //
function validacao() {
    console.log('Iniciando validação de CPF');
    var cpf = document.getElementById('cpf_digitado').value;
    document.getElementById('success').style.display = 'none';
    document.getElementById('error').style.display = 'none';

    var resultadoValidacao = validaCPF(cpf);

    if (resultadoValidacao) {
        document.getElementById('success').style.display = 'block';
    } else {
        document.getElementById('error').style.display = 'block';
    }

}