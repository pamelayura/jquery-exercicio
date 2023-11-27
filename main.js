let listaTarefa = $("#lista-tarefa");

$(document).ready(function() {

    $('.add').click(function (e) {

        e.preventDefault();

        const novaTarefa = $('#nova-tarefa').val();

        let linha = '<li>' + novaTarefa + '</li>';

        $(linha).appendTo(listaTarefa);

        $(this).css("list-style", "square");

        $('#nova-tarefa').val('');
    })

    $("ul").on("click", "li", function() {

        $(this).css("text-decoration", "line-through");
    })
}) 
