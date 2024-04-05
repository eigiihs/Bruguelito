import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './style.css';

export function FormLogin() {

    const navigate = useNavigate();

    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [users, setUsers] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

    // Carrega os dados dos usuários do arquivo JSON ao montar o componente
    useEffect(() => {
        fetch('http://localhost:3001/users')
        .then(response => response.json())
        .then(data => setUsers(data))
        .catch(error => console.error('Erro ao carregar dados dos usuários: ', error))
    }, [])

    const handleLogin = (event) => {
        event.preventDefault();

        console.log(users)

        const userExist = users.find(user => user.email === email )

        if (userExist) {
            //Verifica se a senha está incorreta
            if (userExist.senha === senha) {
                if (userExist.email === "adminadmin@gmail.com" && userExist.senha === "admin@") {
                    navigate('/dashboard')
                }else {
                    navigate('/')
                }
            }else {
                setErrorMessage("Senha incorreta. Tente novamente!!")
            }
        }else {
            alert("Email não encontrado. Cadastre-se antes de fazer login!")
            navigate('/cadastro')
        }
    }

    return (
        <>
            <main className='main-form'>
                <section className="container">
                    <div className="navBar">
                        <div className="title">
                            <h2>Entrar</h2>
                            <span></span>
                        </div>
                        <div className="title">
                            <h2><Link to='/cadastro'>Cadastre-se</Link></h2>
                        </div>
                    </div>
                    <form action="" onSubmit={handleLogin}>
                        <div className="form-control">
                            <label htmlFor="email">E-mail</label>
                            <input
                                type='email'
                                id='email'
                                name='email'
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                placeholder='Digite seu e-mail'
                            />
                        </div>
                        <div className="form-control">
                            <label htmlFor="senha">Senha</label>
                            <input
                                type='password'
                                id='senha'
                                name='senha'
                                value={senha}
                                onChange={(event) => setSenha(event.target.value)}
                                placeholder='Digite sua senha'
                            />
                        </div>
                        <div>{errorMessage}</div>
                        <button className='btn-main' type='submit'>Login</button>
                    </form>
                </section>
            </main>
        </>
    )
}