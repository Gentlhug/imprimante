$(document).ready(function() {
    $('#btnMenu').click(function() {
        $(this).parents('#menu').find('#list').toggleClass('hidden');
    });
});