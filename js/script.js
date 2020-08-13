$(document).ready(function(){
    $('#div2').hide();
    $('#divDob').hide();
    $('#btn1').attr('disabled','disabled');
    var name1;
    
// form validation
  $(function(){
      $("#nameError").hide();
      $('#dateError').hide();
      var NameError = false;
      var DateError = false;



    $("#name").focusout(function(){
        nameCheck();
    });  
    $("#dob").focusout(function(){
        dobCheck();
        activateButton();
    })  ;

    function nameCheck(){
         name1 = $('#form').find('input[name="FullName"]').val();
        name=name1.replace(/\s/g, '').toLowerCase();;
        if(name=="" )
        {
            $("#nameError").html("Please enter a name ");
            $("#nameError").show();
            NameError=true;
            $("input").focusin(function(){
              location.reload(true);
            });
        }
        

        else{

            var specialChars = "<>@!#$%^&*()_+[]{}?:;|'\"\\,./~`-=0987654321"
            var check = function(string){
            for(i = 0; i < specialChars.length;i++)
            {
            if(string.indexOf(specialChars[i]) > -1){
            return true
            }
            }
            return false;
            }

            if(check(name) == true){
                $("#nameError").html("Enter proper name ");
                $("#nameError").show();
                NameError=true;
                $("input").focusin(function(){
                  location.reload(true);
                });
            }else{
              $('#divDob').show();
            $("#nameError").hide(); 
            }
        }
      }
    

      function dobCheck(){
        var dob = $('#form').find('input[name="dob"]').val();
        if(dob=="")
        {
            $('#dateError').html("Enter your date of birth");
            $('#dateError').show();
            DateError = true;
        }
        else
        {
            $('#dateError').hide();
            DateError = false;
        }
      }


      
      
      function activateButton(){
          if(DateError == false && NameError == false )
          {
            $('#btn1').removeAttr("disabled");
            
          }
         else
         {
            
            $('#btn1').hide();
            $("input").focusin(function(){
              location.reload(true);
            });
         }
      }

  });

  




//hide form
  $('#btn1').click(function(e) {
    // prevent click action
    e.preventDefault();
    $('#firstdiv').hide();
    $('#div2').show();
    $('#headindName').html(name1);
    // your code here
    return false;
  });





  

    
  });
