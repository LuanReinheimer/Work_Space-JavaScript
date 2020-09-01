var precoFinal = 0;
$('#botao').on('click', function(event) {
    event.preventDefault();



    var codigo = $('#inputCodigo').val();
    var descricao = $('#inputDescricao').val();
    var estoque = $('#inputEstoque').val();
    var precoVenda = $('#inputPreco').val();
    var quantidade = $('#inputQuantidade').val();
    var precoTotal = quantidade * precoVenda;


    //Trecho comentado apenas para a demonstração

    // var codigo = "teste";
    // var descricao = "descrição do produto";
    // var estoque = 10;
    // var precoVenda = 10.5;
    // var quantidade = 5;
    // var precoTotal = quantidade * precoVenda;

    if (codigo != '') {
        $('#tabela').append('<tr>' + '<td>' + codigo + '</td>' + '<td>' + descricao + '</td>' + '<td>' + quantidade + '</td>' +
            '<td>' + precoVenda + '</td>' + '<td>' + precoTotal + '</td>' + '<td class="btn btn-danger excluir"  onclick="removerProduto(this);">EXCLUIR</td>' + '</tr>');

    }

    $('#inputCodigo,#inputDescricao,#inputEstoque,#inputPreco,#inputQuantidade').val('');


    precoFinal += precoTotal;

    $('#totalPedido').html("TOTAL DO PEDIDO: " + precoFinal);


});

var removerProduto = (function(elemento) {
    $(elemento).closest('tr').remove();
});