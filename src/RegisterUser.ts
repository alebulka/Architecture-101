export default class RegisterUser {
    users: any[] = []

    execute(name:string, email:string, password:string){
        const criptoPassword = password.split('').reverse().join('')
        
        const user = {
            id: Math.random(),
            name,
            email,
            password : criptoPassword
        }

        this.users.push(user)
        return user
    }
    // The code executes the constant 'user,' creates its name, email, and password, additionally encrypts the password, and generates an ID.,
    // At the moment the code 'executes' this user, it will push it and save it inside the array.
}