import './style.css';

export function FormLogin() {
    return (
        <>
            <main>
                <section className="container">
                    <div className="navBar">
                        <div className="title">
                            <h2>Entrar</h2>
                            <span></span>
                        </div>
                        <div className="title">
                            <h2>Cadastre-se</h2>
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
                        <button type='submit'>Login</button>
                    </form>
                </section>
            </main>
        </>
    )
}