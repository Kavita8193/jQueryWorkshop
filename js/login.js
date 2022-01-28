// var attempt = 3; // Variable to count number of attempts.
// // Below function Executes on click of login button.
// function validate() {
//     var username = document.getElementById("username").value;
//     var password = document.getElementById("password").value;
//     if (username == "kavita" && password == "kavita@123") {
//         alert("Login successfully");
//         window.location = "registration.html"; // Redirecting to other page.
//         return false;
//     }
//     else {
//         attempt--;// Decrementing by one.
//         alert("You have left " + attempt + " attempt;");
//         // Disabling fields after 3 attempts.
//         if (attempt == 0) {
//             document.getElementById("username").disabled = true;
//             document.getElementById("password").disabled = true;
//             document.getElementById("submit").disabled = true;
//             return false;
//         }
//     }
// }


$(document).ready(()=>{
    $("input[type='button']").click(()=>{
        var username=$("input[username='username']").val();
        var password=$("input[password='password']").val();
        if(username==undefined || password==undefined){
            alert("Please Enter Username and Password")
        }else{
        $.ajax({
            url:" http://localhost:3000/users",
            method:"GET",
            data:{
                "username":username,
                "password":password,
            },
            success:(x)=>{
                console.log(x);
                alert(x.username+" Success!!!!");
                window.location = "registration.html";
                console.log(x);
            },
            error:(x)=>{
                alert("Error!! "+x);
            }
        });
    }
    });
    });