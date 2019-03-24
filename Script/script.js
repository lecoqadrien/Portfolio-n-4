<script src="//code.jquery.com/jquery-1.11.3.min.js"></script>



$(document).ready (function(){
    $('.btn-navigation') .click(function(){
        $(this).find('.barre').toggleClass('white');
        $('.navigation') .toggleClass('isOpen');
    })
})