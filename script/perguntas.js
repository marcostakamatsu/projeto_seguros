$(document).ready(function() {
    let currentQuestion = 1;
    $('#produto_card').hide();

    $('#next').click(function() {
        if (currentQuestion < 4) {
            $('#question' + currentQuestion).hide();
            currentQuestion++;
            $('#question' + currentQuestion).show();
        } else {
            $('#next').hide();
            $('h1').hide();
            $('input').hide();
            $('.question').hide();
            $('#produto_card').show();
        }
    });
});