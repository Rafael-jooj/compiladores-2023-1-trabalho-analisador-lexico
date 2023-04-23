# Trabalho: Analisador Léxico

Nome dos alunos e números de matrícula:
* Aluno: Rafael Silva Tavares
* Aluno: Lindomar Rodrigues
* Disciplina: Compiladores
* Semestre: 2023/1
* Data de entrega: 26/04/2023
* Valor: 2,0

> Orientações: preencher os dados da dupla antes da data de entrega

## Como entregar este trabalho

Faça um fork deste repositório e faça os commits com o código que você utilizou para chegar nos resultados. Serão aceitos os commits até a data de 26/04/2023 às 13:59:59 (antes da aula).

No dia 26/04/2023 haverá uma apresentação expositiva das técnicas utilizadas e resultado.

**Códigos duplicados ou com bastante semelhança terão suas notas zeradas**

## Analisador Léxico

O presente trabalho consiste da construção de um analisador léxico que funcione em uma sintaxe de linguagem C (operadores lógico e aritméticos, palavras reservadas, etc).

O trabalho deverá lidar com as seguintes classes de token:

* Palavra reservada: 
  - int
  - char 
  - long
  - short
  - float
  - double
  - void
  - if
  - else
  - for
  - while
  - do
  - break
  - continue
  - struct
  - switch
  - case
  - default
  - return

* Operadores:
  - =
  - \+
  - \-
  - \*
  - /
  - ++
  - \--
  - !
  - &
  - %
  - ->
  - ==
  - !=
  - ||
  - &&
  - +=
  - -=
  - *=
  - /=
  - <
  - \>
  - <=
  - \>=

* Delimitadores: 
  - (
  - )
  - [
  - ]
  - {
  - }
  - ;
  - ,

* Constante numérica inteira
* Constante numérica ponto flutuante
* Constante textual
* Identificadores (nome de variáveis e de funções)

## Tópicos de avaliação

* Escaneamento e extração de tokens de forma correta
* Detalhamento e justificativa das técnicas utilizadas
* Análise dos códigos entregues
* Apresentação expositiva dos resultados
