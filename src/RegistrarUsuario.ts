export default class RegistrarUsuario {
    usuarios: any[] = []

    executar(nome:string, email:string, senha:string){
        const senhaCripto = senha.split('').reverse().join('')
        
        const usuario = {
            id: Math.random(),
            nome,
            email,
            senha : senhaCripto
        }

        this.usuarios.push(usuario)
        return usuario
    }
    // o execute (executa) a constante usuario, cria seu nome, email e senha, além disso criptografa a senha, e cria um id,
    // ao momento que o código "executar" esse usuário, vai dar um push nele e salvar dentro do array
}