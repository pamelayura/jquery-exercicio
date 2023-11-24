$(document).ready(function() {

    $('.add').click(function () {

        const novaTarefa = $('.input').val();
        const novaTarefaAdd = $('<li></li>');
        $(`<input type="${novaTarefa}" />`).appendTo(novaTarefaAdd);
    })

    $('novaTarefaAdd').appendTo('ul'); 

}) 

    $('.task').css("text-decoration", "line-through");main.js