

export const steamLogin = () => {
    window.location = 'http://localhost/auth/steam'
}

export const steamLoginReturn = (user) => {
    console.log('Loginned to steam...', user)
}
