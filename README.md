# Calculadora de Partidas Rankeadas

## Descrição

Este projeto implementa, em JavaScript, uma calculadora de partidas ranqueadas.  
A função principal recebe a quantidade de vitórias e derrotas de um jogador e:
- calcula o saldo de vitórias por meio da expressão `vitórias - derrotas`
- determina o nível do jogador de acordo com a quantidade de vitórias
- exibe uma mensagem com o saldo de vitórias e o nível.

## Regras de Classificação

Com base na quantidade de vitórias, o nível do jogador é definido assim:

- Se vitórias for menor do que 10 → **Ferro**
- Se vitórias for entre 11 e 20 → **Bronze**
- Se vitórias for entre 21 e 50 → **Prata**
- Se vitórias for entre 51 e 80 → **Ouro**
- Se vitórias for entre 81 e 90 → **Diamante**
- Se vitórias for entre 91 e 100 → **Lendário**
- Se vitórias for maior ou igual a 101 → **Imortal**

## Saída Esperada

Para cada jogador avaliado, será exibida no console uma mensagem no formato:

> O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**

Onde:
- `saldoVitorias` é o resultado de `vitórias - derrotas`
- `nivel` é um dos níveis descritos anteriormente.

## Tecnologias e Recursos Utilizados

No código foram utilizados:
- Variáveis
- Operadores aritméticos e lógicos
- Laço de repetição (`for`)
- Estruturas de decisão (`if / else if / else`)
- Funções (`obterNivel` e `calcularSaldoRankeadas`)
