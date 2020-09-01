
/*Crie uma função com dois parâmetros de entrada:

Horas (string no formato "hh:mm");
MinutosAcrescimo (número inteiro);
A sua função deverá acrescentar os minutos ao horário recebido, respeitando o padrão de 24h, e retornar uma string representando o horário resultante.

Importante:

Não serão consideradas soluções baseadas em utilitários de data da linguagem escolhida
Exemplos
Para a entrada hora = "11:10" e minutos = 20 temos a saída "11:30"
Para a entrada hora = "13:41" e minutos = 36 temos a saída "14:17"
Para a entrada hora = "22:27" e minutos = 281 temos a saída "03:08"*/

// https://pt.stackoverflow.com/questions/256721/somar-minutos-em-javascript

// solução funcional

function solucao(horario, minutosAcrescimo) {

    var hora = horario;
    var minutos = minutosAcrescimo;


/*A função abaixo, recebe um horário e retorna um timestamp. Um timestamp é a data/hora convertida em milissegundos (isso em JavaScript)*/
function toTimestamp(hora){
  var aux = hora.split(':'), dt = new Date();
  dt.setHours(aux[0]);
  dt.setMinutes(aux[1]);
  return dt.getTime()
}
/* Agora que se tem o timestamp da hora passada e o timestamp dos minutos em milissegundos, basta somá-los. Podemos ter a função maisMinutos() 
que recebe uma string com o horário e devolve uma outra string com o horário passado somado com os minutos de acrescimo*/
function maisMinutos(hora){
  var minutosAdd = minutos*60*1000; //minutos em milissegundos
  var timeHoraFinal = toTimestamp(hora) + minutosAdd;
  var dt = new Date(timeHoraFinal);
  var colocaHora = (dt.getHours() < 10) ? '0'+dt.getHours() : dt.getHours();
  var colocaMinuto = (dt.getMinutes() < 10) ? '0'+dt.getMinutes(): dt.getMinutes();
  var horaRetorno = colocaHora+":"+colocaMinuto
  return horaRetorno;
}

    return maisMinutos(hora);
}