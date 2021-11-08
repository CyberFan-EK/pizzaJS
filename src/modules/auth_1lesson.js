const auth = () => {
    const buttonAuth = document.querySelector('.button-auth')
    const modalAuth = document.querySelector('.modal-auth')
    const closeAuth = document.querySelector('.close-auth')
    const logInForm = document.querySelector('#logInForm')
    const userName = document.querySelector('.user-name')
    const buttonOut = document.querySelector('.button-out')
    const userPizza = {}
    buttonAuth.addEventListener('click', () => {
        modalAuth.style.setProperty('display', 'flex')
    })
    closeAuth.addEventListener('click', () => {
        modalAuth.style.setProperty('display', 'none')
    })

    logInForm.addEventListener('submit', (event) => {
        event.preventDefault()
        const loginUser = document.querySelector('#login')
        const passwordUser = document.querySelector('#password')
        if (loginUser.value.length > 1) {
            userPizza.name = loginUser.value
            userPizza.password = passwordUser.value
            login(userPizza)
        } else {
        alert("Логин не введен!")
    }



    })

const login = (user) => {

    modalAuth.style.setProperty('display', 'none')
    buttonAuth.style.setProperty("display", "none")
    buttonOut.style.setProperty("display", "flex")
    userName.textContent = user.name
    userName.style.setProperty("display", "flex")
    console.log(user)
    localStorage.setItem("user", JSON.stringify(user))
}

buttonOut.addEventListener("click", () => {
    logout()
})


const logout = () => {
    userName.textContent = ""
    userName.style.setProperty("display", "none")
    buttonAuth.style.setProperty("display", "flex")
    buttonOut.style.setProperty("display", "none")
    localStorage.removeItem('user')
}

if (localStorage.getItem("user")) {
    login(JSON.parse(localStorage.getItem('user')))
}


    // part 2

}

export default auth