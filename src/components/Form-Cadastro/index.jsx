// Importações necessárias
import { Link, useNavigate } from 'react-router-dom'; // Importa as funções Link e useNavigate do React Router para lidar com a navegação entre páginas
import './style.css'; // Importa o arquivo de estilo CSS específico para este componente
import '../Form-Login/style.css'; // Importa o arquivo de estilo CSS de outro componente
import { useState } from 'react'; // Importa a função useState do React para lidar com estados

// Componente de formulário de cadastro
export function FormCadastro() {
    // Hook useNavigate para realizar a navegação entre páginas
    const navigate = useNavigate();

    // Estado inicial do formulário
    const initialForm = {
        email: "",
        senha: "",
        confirmSenha: "",
        dataNasci: ""
    }

    // Estados do componente: formState para armazenar os valores do formulário e errorMessage para mensagens de erro
    const [formState, setFormState] = useState(initialForm);
    const [errorMessage, setErrorMessage] = useState("");

    // Função para lidar com a mudança nos campos do formulário
    const handleInput = (event) =>  {
        const target = event.currentTarget;
        const { name, value } = target;
        setFormState({ ...formState, [name]: value });
    }

    // Função para lidar com o envio do formulário
    const handleSubmit = async (event) => {
        event.preventDefault();

        // Verifica se as senhas são iguais
        if (formState.confirmSenha !== formState.senha) {
            setErrorMessage("As senhas não são iguais. Digite novamente!");
            return;
        }

        try {
            // Verifica se o email já está cadastrado
            const response = await fetch(`http://localhost:3001/users?email=${formState.email}`);
            const data = await response.json();

            if (data.length > 0) {
                setErrorMessage("Este e-mail já está sendo usado! Use outro e-mail ou faça login!!");
                return;
            }

            // Se o e-mail não existir, realiza o cadastro
            const requestOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: formState.email,
                    senha: formState.senha,
                    dataNasci: formState.dataNasci
                })
            };

            const responseCadastro = await fetch('http://localhost:3001/users', requestOptions);
            if (!responseCadastro.ok) {
                throw new Error('Erro ao enviar o formulário');
            }
            alert("Cadastrado com sucesso!!");
            setFormState(initialForm);
            navigate('/'); // Redireciona para a página inicial após o cadastro bem-sucedido
        } catch (error) {
            console.error('Erro ao enviar o formulário:', error);
            setErrorMessage("Erro ao enviar o formulário. Tente novamente mais tarde.");
        }
    };
    
    // Retorna a estrutura do componente de formulário de cadastro
    return (
        <>
            <main className='main-form'>
                <section className="container">
                    <div className="navBar">
                        <div className="title">
                            <h2><Link to='/login'>Entrar</Link></h2> {/* Link para redirecionar para a página de login */}
                        </div>
                        <div className="title">
                            <h2>Cadastre-se</h2>
                            <span></span>
                        </div>
                    </div>
                    <form action="" onSubmit={handleSubmit}>
                        <div className="form-control">
                            <label htmlFor="email">E-mail</label>
                            <input
                                type='email'
                                id='email'
                                name='email'
                                value={formState.email}
                                onChange={handleInput} // Chama a função handleInput ao mudar o valor do campo
                                placeholder='Digite seu e-mail'
                                required
                            />
                        </div>
                        <div className="form-control double">
                            <div className="only">
                                <label htmlFor="senha">Senha</label>
                                <input
                                    type='password'
                                    id='senha'
                                    name='senha'
                                    value={formState.senha}
                                    onChange={handleInput} // Chama a função handleInput ao mudar o valor do campo
                                    placeholder='Digite sua senha'
                                    minLength={"8"} // Define o comprimento mínimo da senha
                                    required
                                />
                            </div>
                            <div className="only">
                                <label htmlFor="senha">Confirmar Senha</label>
                                <input
                                    type='password'
                                    id='confirmSenha'
                                    name='confirmSenha'
                                    value={formState.confirmSenha}
                                    onChange={handleInput} // Chama a função handleInput ao mudar o valor do campo
                                    placeholder='Confirme sua senha'
                                    minLength={"8"} // Define o comprimento mínimo da senha
                                    required
                                />
                            </div>
                        </div>
                        <div className="form-control">
                            <label htmlFor="dataNasci">Data de Nascimento</label>
                            <input
                                type='date'
                                id='dataNasci'
                                name='dataNasci'
                                value={formState.dataNasci}
                                onChange={handleInput} // Chama a função handleInput ao mudar o valor do campo
                                required
                            />
                        </div>
                        <div>{errorMessage}</div> {/* Exibe mensagens de erro */}
                        <button className='btn-main' type='submit'>Cadastrar</button>
                    </form>
                </section>
            </main>
        </>
    );
}
