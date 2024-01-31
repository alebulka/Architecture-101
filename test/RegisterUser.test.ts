import RegisterUser from "../src/RegistrarUsuario"

test('Must register a user', () => {
    const useCase = new RegisterUser()
    const user = useCase.execute(
    'João',
    'jjjoao@zmail.com.br',
    '123456'
    )

    expect(user).toHaveProperty('id')
    expect(user.name).toBe('João')
})