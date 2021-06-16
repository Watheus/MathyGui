$(document).ready(function () {
    $("#formulario-contato").validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true,
                number: true
            },
            mensagem: {
                required: true
            }
        },
        messages: {
            nome: {
                required: "Campo Obrigatório!"
            },
            email: {
                required: "Campo Obrigatório!",
                email: "Por favor insira e-mail válido!"
            },
            telefone: {
                required: "Campo Obrigatório!",
                number: "Por favor insira apenas número!"
            },
            mensagem: {
                required: "Campo Obrigatório!"
            }
        }
    });
});