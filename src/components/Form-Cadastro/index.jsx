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

    const handleInput = (event) =>  {

        const target = event.currentTarget;
        
        const {name, value} = target;

        setFormState({...formState, [name]: value})
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (formState.confirmSenha != formState.senha) {
            console.error("Senhas diferentes!")
            alert("As senhas não são iguais. Digite novamente!")
            return;
        }

        const formGeneral = {
            email: formState.email,
            senha: formState.senha,
            dataNasci: formState.dataNasci
        }

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formGeneral)
        }

        fetch('http://localhost:3001/users', requestOptions)
            .then(response => response.json())
            .then((data) => {
                setFormState(data)
                alert("Cadastrado com sucesso!!")
                navigate('/')
            })
            .catch(error => {
                console.error('Erro ao enviar o formulário:', error);
                alert("Erro ao enviar o formulário. Tente novamente mais tarde.");
            });
        setFormState({...initilForm})

        
    }

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
                            />
                        </div>
                        <button className='btn-main' type='submit'>Cadastrar</button>
                    </form>
                </section>
            </main>
        </>
    )
}