let signup =  document.getElementById("form-signup")

signup.onsubmit = (e) => {
    e.preventDefault();

    let name = signup.name.value
    let email = signup.email.value
    let password = signup.password.value
    let cfpass = signup.cfpass.value
    
    console.log(name);
    console.log(email);
    console.log(password);
    console.log(cfpass);
}