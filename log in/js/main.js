var Email=document.getElementById('Email')
var password=document.getElementById('password')
var SignIn = document.getElementById('SignIn')


var user = []
user = JSON.parse(localStorage.getItem('user'))

SignIn.addEventListener('click' , function (){

    if ( Email.value =='' ||password.value==''){
        document.getElementById('validate').innerHTML='<h3>Please fill this files </h3>'
    }
    else {
        chekBox()
    }

})

function  chekBox (){
    for ( i=0 ; i < user.length ; i++){
        if (Email.value == user[i].Email || password.value==user[i].password){
            var y= user[i].name;
            location.href='../../index3.html'
            localStorage.setItem('UserName' ,y )
        }else{
                document.getElementById('validate').innerHTML='Email or Password uncorekt'
             }
    }
}
