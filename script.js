function validateform(){
var fname = document.getElementById('fname').value.trim();
var email = document.getElementbyId('email').value.trim();
var message = document.getElementById('message').value.trim();

if(fname === ''){
     alert('Preencha o campo nome!');
     return false;
}
if(email ===''){
    alert('Preencha o campo email!');
     return false;
}
if(message === ''){
alert('Preencha o campo mensagem!');
     return false;
}

return true;


}