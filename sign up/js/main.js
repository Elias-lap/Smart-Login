var logInName = document.getElementById('logInName')
var logInEmail = document.getElementById('logInEmail')
var logInPassword = document.getElementById('logInPassword')
var attention = document.getElementById('alert')
var data=[]


if ( localStorage.getItem('user')!= null){
    data = JSON.parse(localStorage.getItem('user'))
}else{
    data=['']
}


function AddAcount (){
    if ( logInName.value == '' || logInEmail.value =='' ||logInPassword.value==''){
        document.getElementById('alert').innerHTML='<p > Please fill this files  </p>'

    }else{
        var user ={
            name:logInName.value,
            email:logInEmail.value,
            password:logInPassword.value
        }
        data.push(user)
        
        // window.open('../../log in/index2.html')
         location.href='../../index2.html'
         localStorage.setItem('user' , JSON.stringify(data))
       
    }
}