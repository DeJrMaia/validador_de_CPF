#Validador de CPF

Este é um projeto da aula prática de JS básico do programa Hiring Coders.

Criamos o arquivo JS com as funções para validação de CPF.

É uma validação simples que avalia:



1 - Se o CPF digitado contém 11 caracteres;

2 - É feita a multiplicação dos números do CPF (exceto os dígitos) pelos números decrescentes de 10 a 2, o resultado é somado, multiplicado por 10 e dividido por 11. É verificado se o resto dessa divisão é igual ao primeiro dígito do CPF;

3 - É feita a multiplicação dos números do CPF (exceto o último dígito) pelos números decrescentes de 11 a 2, o resultado é somado, multiplicado por 10 e dividido por 11. É verificado se o resto dessa divisão é igual ao segundo dígito do CPF;