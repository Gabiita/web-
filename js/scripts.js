

var  sendMail = "true";
/*******************************************************************************************/
function cargaSendMail(){
 
    $("#c_enviar").attr("disabled", true);
 
    $(".c_error").remove();
 
    var filter=/^[A-Za-z][A-Za-z0-9_]*@[A-Za-z0-9_]+.[A-Za-z0-9_.]+[A-za-z]$/;
    var s_email = $('#c_mail').val();
    var s_name = $('#c_name').val();
    var s_lastname = $('#c_lastname').val();    
    var s_msg = $('#c_msg').val();
    
    if (filter.test(s_email)){
   
    } else
    {
        $('#c_mail').after("<span class='c_error' id='c_error_mail'>Ingrese e-mail valido.</span>");
         //aplicamos color de borde si el se encontro algun error en el envio
        $('#contactform').css("border-color","#e74c3c");   
        sendMail = "false";
    }
    if (s_name.length == 0 )
    {
        $('#c_name').after( "<span class='c_error' id='c_error_name'>Ingrese su nombre.</span>" );
         sendMail = "false";
    }
    if (s_msg.length == 0 )
    {
        $('#c_msg').after( "<span class='c_error' id='c_error_msg'>Ingrese mensaje.</span>" );
        sendMail = "false";
    }
 
    
if(sendMail == "true"){
     

     $("#c_msg").html("Enviando...");
     $.ajax({
            type : "POST",
            url  : "php/sendmsg.php",
            data : $('#custom').serialize(),
            error : function(jqXHR, textStatus, errorThrown) {
                $("#c_msg").html(textStatus);
            },
            success : function(data) {
                if(data="ok")
                {
                   
                }
                $("#c_btns").html(data);
            }
        }); 

 
} else{
    $("#c_enviar").removeAttr("disabled");
}
 
}

