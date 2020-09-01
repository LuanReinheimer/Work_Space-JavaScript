/*Ao comprar uma ação na bolsa de valores, você se torna acionista parcial da empresa, ganhando direito a uma parte dos lucros: os dividendos. O dividendo é uma porcentagem da ação original e é somado à ela, cada investidor recebe um valor referente à quantidade de ações que possui.

Para esta questão utilize as seguintes regras:

A cada ano, o valor inicial da ação sofre um reajuste de +1
A cada ano, os dividendos pagos sofrem um reajuste de +0,005
Objetivo
Crie um algoritmo que faça a projeção do lucro de um investidor na bolsa de valores, caso ele reinvista todo o capital recebido através dos dividendos pagos pela ação.

Parâmetros de entrada:

Investimento mensal (valor em reais que o investidor compra todo mês)
Valor inicial da ação (preço da ação, este valor é acrescido todo ano conforme a regra 1)
Valor inicial dos dividendos pagos por ação (porcentagem de lucro que esta ação rende ao investidor, este valor é acrescido todo ano conforme a regra 2)
Duração do investimento em anos
Saída esperada:

Valor das ações liquidadas no fim do período
Exemplos
Para as entradas = 1000, 10, 0.10, 1 temos a saída 12120:

Investimento mensal 12 meses / preço da ação* = 1200 ações
1200 ações * valor dos dividentos = R$ 120,00
Comprando mais ações com estes R$ 120,00, temos 12 novas ações
Total no ano: 1200 + 12 = 1212 ações
Liquidando as ações (vendendo), temos: 1212 * preço da ação = R$ 12120,00
Para as entradas = 1000, 10, 0.10, 2 temos a saída 2313.32:

1212 ações no primeiro ano de investimento, calculado igual ao exemplo anterior
Para o segundo ano:
Investimento mensal 12 meses / preço da ação* = 1090.90 ações
1200 ações * valor dos dividentos = R$ 114.54
Comprando mais ações com estes R$ 114.54, temos 10.41 novas ações
Total no ano: 1090.90 + 10.41 = 1101.32
Somando com o ano anterior: 1212 + 1101.32 = 2313.32 ações
Liquidando as ações (vendendo), temos: 2313.32 * preço da ação = R$ 25446.54
Para as entradas = 2000, 3, 0.05, 15 temos a saída 3089190.46.*/

var investimentoMensal = 1000;
var valorInicialAcao = 10;
var valorInicialDiv = 0.10;
var duracao = 2;
var acoesFinalAno = 0;
var divFinalAno = 0;
var acoesFinalAnoDiv = 0;
var vendendoTudo = 0;
var final = 0

function solucao(investimentoMensal, precoAcao, dividendos, duracao)
{
    let acoesFinalAno = 0;
    let divFinalAno = 0;
    let acoesFinalAnoDiv = 0;
    let vendendoTudo = 0;
    let final = 0
    acoesFinalAno = (investimentoMensal * 12) / precoAcao;
    divFinalAno = acoesFinalAno * dividendos;
    acoesFinalAnoDiv = ((investimentoMensal * 12) + divFinalAno) / precoAcao;
    vendendoTudo = acoesFinalAnoDiv * precoAcao;
    for (var x = 1; x <= duracao; x ++) {
        precoAcao = precoAcao + 1;
        dividendos = dividendos + 0.005;
        var acoesFinalAnoFor = (investimentoMensal * 12) / precoAcao;
        divFinalAno = (acoesFinalAnoFor * dividendos);
        var divFinalAnoFor = (((investimentoMensal * 12) + divFinalAno) / precoAcao);
        acoesFinalAnoDiv = acoesFinalAnoDiv + (((investimentoMensal * 12) + divFinalAno) / precoAcao);
        final = final + acoesFinalAnoDiv * precoAcao;
        
    }
    return final.toFixed(2);
}

console.log(solucao(1000, 10, 0.10, 1))

