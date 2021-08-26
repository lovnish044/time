function  formvalidation()
      {
                 var username=document.getElementById('name').value;
                 var phone=document.getElementById('pn').value;
                 var usercheck = /^[A-Z a-z]{3,30}$/;
                 var phncheck=/^[789]{1}[0-9]{9}$/;
                
                 if(usercheck.test(username))
                 {
                     document.getElementById('spancheck').innerHTML="";
                 }
                 else{
                     document.getElementById('spancheck').innerHTML="You have entered wrong username";
                     return false;
                 }

                

                 if(phncheck.test(phone))
                 {
                     document.getElementById('sph').innerHTML="";
                 }
                 else{
                     document.getElementById('sph').innerHTML="You have entered wrong phonenumber";
                     return false;
                 }
                  alertfunc();
                }
             
               function alertfunc()
               {
                         alert("Appointment Made Successfully");
               }