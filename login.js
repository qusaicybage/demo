
$(document).ready(()=>{
   

    $('#loginForm').submit((e)=>{
        e.preventDefault();
        console.log("in login");
        var email1=$("#email").val().toLowerCase();
        var password1=$("#password").val();
    $.ajax({
        url:`http://localhost:3000/User?email=${email1}&password=${password1}`,
        method:"GET",
        success:(x)=>{
           
            if(x.length > 0){
                alert(x);
                sessionStorage.setItem("isActive",1);
                $('.moretext').slideToggle();
                $(".moreless-button").css("display","none");
                sessionStorage.setItem("user",x[0].email);
                $("#logout").css({"display":"flex"},{"flex-direction":"row"});
                $("#signup").css("display","none");
                $("#login").css("display","none");
                $("#myModal").css("display","none");
                $("#editor").css({"display":"flex"},{"flex-direction":"row"});
                var id=sessionStorage.getItem("currentPostId");
                if(sessionStorage.getItem("currentPostId"))
                {
                    var x = location.href;
                    var y = x.slice(0, 27)
                    location.assign(y + "readMore.html" + "?id=" + id);
                }
                else
                {
                 history.go();
                }
            }else{
                document.getElementById("errorMsg").innerHTML = "<p style='color:red'>Email or password is incorrect!!!</p>";
                
            }
                   
                     },
        error : () =>{
                      alert("error");
                    }
             })
    })
})  

