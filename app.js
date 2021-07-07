const loginForm = document.querySelector('.form-login')
const titleLogin = document.querySelector('.login')
const titleSignup = document.querySelector('.signup')
const loginBtn = document.querySelector('#login')
const signupBtn = document.querySelector('#signup')
const link_signup = document.querySelector('.link-signup')

signupBtn.onclick = ()=>{
    loginForm.style.marginLeft = '-50%'
    titleLogin.style.marginLeft = '-50%'
}
loginBtn.onclick = ()=>{
    loginForm.style.marginLeft = '0'
    titleLogin.style.marginLeft = '0'
}
link_signup.onclick = ()=>{
    loginForm.style.marginLeft = '-50%'
    titleLogin.style.marginLeft = '-50%' 
}