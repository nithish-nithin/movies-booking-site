const btn = document.getElementById('signin')

const modal = document.getElementsByClassName('modal')[0]

btn.addEventListener('click', ()=>{
    modal.style.display = 'block'
})

function validateform (){
    var name=document.myform.name.value;
    var password=document.myform.password.value;
    if(name==null||name==''){
        alert('name cant be blank')
        return false;
        
    }
    else if(password.length<5){
        alert('password must be five charter long')
        return false;
    }
}