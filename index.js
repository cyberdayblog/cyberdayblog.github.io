document.addEventListener("DOMContentLoaded", function() {
    function decode(input) {
        return atob(input);
    }
    
    var url = decode("aHR0cDovLzQ5LjIzNC4zMS4xNzA6ODAvcGhwaW5mby5waHA=");
    var iframe = document.getElementById('frame');
    iframe.src = url;
});