import { Link } from 'react-router-dom';
import './style.css';

export function FormLogin() {
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
                        <div className="form-control">
                            <label htmlFor="senha">Senha</label>
                            <input 
                            type='text'
                            id='senha'
                            name='senha'           
                            placeholder='Digite seu e-mail'
                            />
                        </div>
                        <button className='btn-lc' type='submit'>Login</button>
                    </form>
                </section>
            </main>
        </>
    )
}