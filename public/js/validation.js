$(function($) {
    var nome, npedido, email, titulo, observacaoes;
    nome = '';
    npedido = '';
    email = '';
    titulo = '';
    observacaoes = '';

    // Regras de Validação
    $('.next-step').click(function (event) {
        $('#chamado').validate({
            rules: {
                'nome': {
                    required: true
                },
                'npedido': {
                    required: true,
                    number: true
                },
                'email': {
                    required: true,
                    email: true
                },
                'titulo' : {
                    required: true
                },
                'observacoes' : {
                    required: true
                }
            },
            messages: {
                'nome': {
                    required: 'O nome é obrigatório.',
                },
                'npedido': {
                    required: 'Informe o numero do pedido.',
                    number: 'Apenas numeros.'
                },
                'email': {
                    required: 'O email é obrigatório.',
                    email: 'Informe um email válido.'
                },
                'titulo': {
                    required: 'Informe um titulo para o chamado.'
                },
                'observacoes': {
                    required: 'Descreva o chamado.'
                }
            }
        });

        if ($('#chamado').valid()) {
            nome = $('#nome').val();
            npedido = $('#npedido').val();
            email = $('#email').val();
            titulo = $('#titulo').val();
            observacoes = $('#observacoes').val();
            $.post( "index/gravar", { nome: nome, npedido: npedido, email: email, titulo: titulo, observacoes: observacoes } );
        }
    });
});