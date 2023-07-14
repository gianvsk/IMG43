
export const validateName = (name: string) => {
    const usernameRegex = /^[a-zA-Z0-9_]{3,}$/;
    return usernameRegex.test(name);
}

export const validateNumber = (number: string) => {
    const phoneNumberRegex = /^\d{9,10}$/;
    return phoneNumberRegex.test(number);
}

export const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

export const validatePassword = (password: string) => {

    if(password.length < 8 ) {
        return false
    }

    if (!/[A-Z]/.test(password)) {
        return false
      }
    
      if (!/[a-z]/.test(password)) {
        return false
      }
    
      if (!/[0-9]/.test(password)) {
        return false
      }

      if (!/[^A-Za-z0-9]/.test(password)) {
        return false
      }

      return true
}

  