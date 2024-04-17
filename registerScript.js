$(function(){

    $("form").submit(function(){
        
        const data = {
            name: $("#name").val(),
            email: $("#email").val(),
            password: $("#password").val(),
            confirmPassword: $("#confirmPassword").val()
        }

        $.post( "/register", data, function( data ) {
            console.log("Done");
        });

        return false;
    });
});