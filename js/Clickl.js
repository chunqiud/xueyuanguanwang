var user=new Map([["123","123"]])
function login(){
    var username =document.getElementById("login-username").value;
    var password =document.getElementById("login-password").value;
    
    if(user.get(username)==password){
        console.log(username,password);
        var str="index.html?param1="+username+"&param2="+password;
        // alert(str)
        // window.location.href="index.html";
        window.location.href=str;
    }
    else{
        console.log(username,password)
        alert("用户名或密码错误");
    }
}
function register(){
    var username =document.getElementById("register-username").value;
    var password =document.getElementById("register-password").value;
    user.set(username,password);
    alert("注册成功")
    document.getElementById("register-username").value="";
    document.getElementById("register-password").value="";
    document.getElementById("register-email").value="";

}