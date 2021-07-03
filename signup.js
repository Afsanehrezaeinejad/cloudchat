let signup = document.getElementById("form-signup")

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

    let data = {
        name: name,
        email: email,
        password: password
    }

    if (name) {} else {
        setTextError("#name-err", "Field Required")
    }

    if (email) {} else {
        setTextError("#email-err", "Field Required")
    }

    if (password) {
        if (password.length > 6) {
            if (password == cfpass) {
                console.log(data)
            } else {
                console.log("aloooo")
                setTextError("#cfpass-err", "Passwords Do Not Match")
            }
        } else {
            setTextError("#password-err", "6 Required Characters")
        }
    } else {
        setTextError("#password", "Field Required")
    }

    if (cfpass) {} else {
        setTextError("#cfpass-err", "Field Required")
    }
}

let setTextError = (tagname, content) => {
    document.querySelector(tagname).innerHTML = content
}