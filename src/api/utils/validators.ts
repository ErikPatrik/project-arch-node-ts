export const isEmailValid = (email: string): string | undefined | boolean => {
    if (email === '' || email === null || email === undefined) return 'Email address is empyt!'

    const regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
    if (!regexp.test(email)) return 'Email address is invalid!'

    return true;
}

export const isPasswordValid = (password: string | undefined, confirmPassword: string | undefined): string | undefined | boolean => {
    if (password === '' || password === null || password === undefined) return 'Password is empyt!'
    if (password.length < 6) return 'Password needs 6 or more digits!'
    if (password !== confirmPassword) return 'The password is different from the confirmation password!'

    return true
}
