let form_signin = document.querySelector("#form_signin")
form_signin.onsubmit = (e) => {
    e.preventDefault()

    let email = form_signin.email.value
    let password = form_signin.password.value

    let data = {
        email: email,
        password: password
    }

    signIn_process(data)

}

let signIn_process = async (data) => {
    let email = data.email
    let password = data.password
    try {
        let result = await firebase.auth().signInWithEmailAndPassword(email, password)
        let user = result.user
        if (user.emailVerified) {
            window.open("./chat.html")
        } else {
            throw new Error('Must verify email!')
        }
    } catch (error) {

        let message = error.message
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })

        Toast.fire({
            icon: 'error',
            title: message
        })
    }
}