// nav - selected

window.onhashchange = function(e){
    const oldURL = e.oldURL.split('#')[1]
    const newURL = e.newURL.split('#')[1]
    
    const oldLink = document.querySelector(`.menu a[href='#${oldURL}']`)
    const newLink = document.querySelector(`.menu a[href='#${newURL}']`)
    
    oldLink && oldLink.classList.remove('selected')
    newLink && newLink.classList.add('selected')
}


const form = document.querySelector("#form-contato")
const nameInput = document.querySelector("#name")
const emailInput = document.querySelector("#email")

form.addEventListener("submit", (e) =>{
    e.preventDefault()
    
    if(emailInput.value === "" || !validarEmail(emailInput.value)){
        
    }
    
    form.submit()
})

function validarEmail(email){
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-z]{2,}$/ 
    )
    
    if(emailRegex.test(email)){
        return true
    }else{
        return false
    }
}

const menuToggle = document.querySelector("#toggle")
const nav = document.querySelector('.menu')

menuToggle.onclick = e =>{
    menuToggle.classList.toggle('bx-x')
    nav.classList.toggle('open')

}

window.onscroll = e => {
    menuToggle.classList.remove('bx-x')
    nav.classList.remove('open')
  }
