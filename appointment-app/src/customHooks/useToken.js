
export const setUserSession = (credentials, userFlag) =>{
    console.log('credentials',credentials)
        window.sessionStorage.setItem('user', JSON.stringify(credentials));
        window.sessionStorage.setItem("userLoggedIn", userFlag)
}

export const getToken = () =>{
   const tokenUser =  JSON.parse(sessionStorage.getItem('user'));
   const userFlag = window.sessionStorage.getItem("userLoggedIn")
   console.log(userFlag)
    return [tokenUser, userFlag]
}

export const removeUserSession = () =>{
    window.sessionStorage.removeItem("user")
    window.sessionStorage.removeItem("userLoggedIn")
}