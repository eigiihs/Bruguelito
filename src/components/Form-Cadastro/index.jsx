    import { Link, useNavigate } from 'react-router-dom'
    import './style.css'
    import '../Form-Login/style.css'
    import { useState } from 'react'

    export function FormCadastro() {

        const navigate = useNavigate();

        const initilForm = {
            email: "",
            senha: "",
            confirmSenha: "",
            dataNasci: ""
        }

        const [formState, setFormState] = useState(initilForm);
        const [errorMessage, setErrorMessage] = useState("");

        const handleInput = (event) =>  {

            const target = event.currentTarget;
            
            const {name, value} = target;

            setFormState({...formState, [name]: value})
        }

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

                console.log(data)
        
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
                setFormState(initilForm);
                navigate('/');
            } catch (error) {
                console.error('Erro ao enviar o formulário:', error);
                setErrorMessage("Erro ao enviar o formulário. Tente novamente mais tarde.");
            }
        };
        
        return (
            <>
                <main className='main-form'>
                    <section className="container">
                        <div className="navBar">
                            <div className="title">
                                <h2><Link to='/login'>Entrar</Link></h2>
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
                                    onChange={handleInput}
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
                                        onChange={handleInput}
                                        placeholder='Digite sua senha'
                                        minLength={"8"}
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
                                        onChange={handleInput}
                                        placeholder='Confirme sua senha'
                                        minLength={"8"}
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
                                    onChange={handleInput}
                                    required
                                />
                            </div>
                            <div>{errorMessage}</div>
                            <button className='btn-main' type='submit'>Cadastrar</button>
                        </form>
                    </section>
                </main>
            </>
        )
    }