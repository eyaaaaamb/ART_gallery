/* home*/
window.onload = function() {
    if (window.location.pathname.includes("index.html")) {
        var x = confirm("Are you an art lover ? Click OK then ");
    if(x){
        alert("Welcome to the site!");
    }else{
        window.location.href= "blank.html" ;
    }
    
       
    }
    
    
};

/* profil*/
 var $pseudo = $('#pseudo'),
    $mdp =$('#mdp'),
    $confirmation = $('#confirmation'),
    $mail =$('#mail'),
    $erreur =$("#erreur"),
    $champ =$(".champ"),
    $envoi =$("#submit"),
    $reset =$("#rafraichir");

$champ.keyup(function(){

    if($(this).val().length < 5){ 
    
    $(this).css({ 
    borderColor: 'red',
    color: 'red' });
    } else{ 
        $(this).css({ 
         borderColor: 'green', 
         color: 'green' 
        });
    
    }
    
    });
 $confirmation.keyup(function(){

        if($(this).val() != $mdp.val()){
            $(this).css({    
        borderColor: 'red',
        color : 'red'   });
             } else{
        $(this).css({ 
            borderColor: 'green', 
             color: 'green' });
            
       
    }        
});
function verifier(x){
    if(x.val() == ""){ 
    $erreur.css('display','block'); 
    x.css({ 
    borderColor :'red',
    color: 'red'
    }); 
    return false; 
    }
    else {
        x.css({ 
            borderColor: 'green',
            color: 'green'
        });
        return true; 
    }
 };


$envoi.click(function(e){
    e.preventDefault();
   var x=verifier($pseudo);
   var y=verifier($mail);
 var i=verifier($mdp);
 var z=verifier($confirmation);
 
  if (x && y && i && z){
    $erreur.css('display','none'); 


    var pseudo = $pseudo.val();
    var h="Welcome " + pseudo  + "!";
    alert(h);
  
}});






    $reset.click(function(){
        $erreur.css('display','none'); 
        $champ.css({ 
           color: '#1E5289',
        borderColor: '#74A2BE' 
        });
        
        });
/*blank*/
var $blank = $('.titre');
$blank.fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);