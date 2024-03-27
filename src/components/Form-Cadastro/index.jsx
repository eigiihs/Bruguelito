import { Link } from 'react-router-dom'
import './style.css'
import '../Form-Login/style.css'

export function FormCadastro() {
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
                    <form action="">
                        <div className="form-control">
                            <label htmlFor="email">E-mail</label>
                            <input
                                type='text'
                                id='email'
                                name='senha'
                                placeholder='Digite seu e-mail'
                            />
                        </div>
                        <div className="form-control double">
                            <div className="only">
                                <label htmlFor="senha">Senha</label>
                                <input
                                    type='text'
                                    id='senha'
                                    name='senha'
                                    placeholder='Digite seu e-mail'
                                />
                            </div>
                            <div className="only">
                                <label htmlFor="senha">Confirmar Senha</label>
                                <input
                                    type='text'
                                    id='senha'
                                    name='senha'
                                    placeholder='Digite seu e-mail'
                                />
                            </div>
                        </div>
                        <div className="form-control">
                            <label htmlFor="dataNascimento">Data de Nascimento</label>
                            <input
                                type='date'
                                id='dataNascimento'
                                name='dataNascimento'
                            />
                        </div>
                        <button className='btn-main' type='submit'>Cadastrar</button>
                    </form>
                </section>
            </main>
        </>
    )
}