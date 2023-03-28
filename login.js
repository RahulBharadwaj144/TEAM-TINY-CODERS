var objUser = [
    {
        username:"mahesh@gmail.com",
        password:"Mahesh"
    },
    {
        username:"stimp@gmail.com",
        password:"Mahesh"
    }
];

function verifylogin()
{
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    for(i=0; i<objUser.length; i++)
    {
        if(username == objUser[i].username && password == objUser[i].password)
        {
            document.location.href="event.html"; 
           return
        }
    }
    alert("Invalid Email or password");
    

}


function signUp()
{
    var element = {};
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    for(i=0; i<objUser.length; i++)
    {
        if(username == objUser[i].username)
        {
            alert("User already Exists"); 
           return
        }
    }
    element.username=username;
    element.password = password;
    objUser.push(element);
    alert("User succesfully registered");
    
}