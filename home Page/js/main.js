// var welcome =document.getElementById('welcome')
// var userName=JSON.parse(localStorage.getItem('UserName'))
document.getElementById('welcome').innerHTML= 'welcome' +' ' + localStorage.getItem('UserName')


document.getElementById('LogOut').addEventListener('click' , function(){
    localStorage.removeItem('UserName')
})