$(function(){

    $("form").submit(function(){
        
        const data = {
            stat: $("#stat").val(),
            
        }

        $.post( "/user_status", data, function( data ) {
            console.log("Done");
        });

        return false;
    });
});