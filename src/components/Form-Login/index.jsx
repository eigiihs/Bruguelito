// Importações necessárias
import { Link, useNavigate } from 'react-router-dom'; // Importa as funções Link e useNavigate do React Router para lidar com a navegação entre páginas
import { useEffect, useState } from 'react'; // Importa a função useEffect e useState do React para lidar com efeitos colaterais e estados
import './style.css'; // Importa o arquivo de estilo CSS específico para este componente

// Componente de formulário de login
export function FormLogin() {
    // Hook useNavigate para realizar a navegação entre páginas
    const navigate = useNavigate();

    // Estados do componente: email para armazenar o email digitado pelo usuário, senha para armazenar a senha digitada pelo usuário,
    // users para armazenar os dados dos usuários carregados do servidor e errorMessage para mensagens de erro
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [users, setUsers] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

    // Efeito que carrega os dados dos usuários do arquivo JSON ao montar o componente
    useEffect(() => {
        fetch('http://localhost:3001/users')
        .then(response => response.json()) // Converte a resposta em formato JSON
        .then(data => setUsers(data)) // Atualiza o estado 'users' com os dados dos usuários
        .catch(error => console.error('Erro ao carregar dados dos usuários: ', error)) // Trata erros de carregamento dos dados
    }, [])

    // Função para lidar com o envio do formulário de login
    const handleLogin = (event) => {
        event.preventDefault(); // Previne o comportamento padrão do formulário

        const userExist = users.find(user => user.email === email); // Verifica se o email existe nos dados dos usuários

        if (userExist) {
            // Verifica se a senha está incorreta
            if (userExist.senha === senha) {
                if (userExist.email === "adminadmin@gmail.com" && userExist.senha === "admin@") {
                    navigate('/dashboard'); // Redireciona para o painel do administrador se as credenciais forem válidas
                } else {
                    alert("Login realizado com sucesso. Aproveite!!"); // Exibe uma mensagem de sucesso para o usuário
                    navigate('/'); // Redireciona para a página inicial se as credenciais forem válidas
                }
            } else {
                setErrorMessage("Senha incorreta. Tente novamente!!"); // Define uma mensagem de erro se a senha estiver incorreta
            }
        } else {
            alert("Email não encontrado. Cadastre-se antes de fazer login!"); // Exibe uma mensagem se o email não estiver cadastrado
            navigate('/cadastro'); // Redireciona para a página de cadastro
        }
    }

    // Retorna a estrutura do componente de formulário de login
    return (
        <>
            <main className='main-form'>
                <section className="container">
                    <div className="navBar">
                        <div className="title">
                            <h2>Entrar</h2> {/* Título do formulário de login */}
                            <span></span>
                        </div>
                        <div className="title">
                            <h2><Link to='/cadastro'>Cadastre-se</Link></h2> {/* Link para redirecionar para a página de cadastro */}
                        </div>
                    </div>
                    <form action="" onSubmit={handleLogin}> {/* Evento onSubmit para lidar com o envio do formulário */}
                        <div className="form-control">
                            <label htmlFor="email">E-mail</label> {/* Rótulo do campo de email */}
                            <input
                                type='email'
                                id='email'
                                name='email'
                                value={email}
                                onChange={(event) => setEmail(event.target.value)} // Atualiza o estado 'email' ao digitar no campo de email
                                placeholder='Digite seu e-mail' // Texto de orientação para o campo de email
                            />
                        </div>
                        <div className="form-control">
                            <label htmlFor="senha">Senha</label> {/* Rótulo do campo de senha */}
                            <input
                                type='password'
                                id='senha'
                                name='senha'
                                value={senha}
                                onChange={(event) => setSenha(event.target.value)} // Atualiza o estado 'senha' ao digitar no campo de senha
                                placeholder='Digite sua senha' // Texto de orientação para o campo de senha
                            />
                        </div>
                        <div>{errorMessage}</div> {/* Exibe mensagens de erro */}
                        <button className='btn-main' type='submit'>Login</button> {/* Botão para enviar o formulário de login */}
                    </form>
                </section>
            </main>
        </>
    )
}
