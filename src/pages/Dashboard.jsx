import { useState } from "react";
import { MenuDashboard } from "../components/Menu-dashboard";
import { TitleDash } from "../components/Title-Dash";
import '../styles/dashboard.css';

export function Dashboard() {
    //Estado inicial do formulário
    const initilForm = {
        nome: "",
        preco: "",
        tamanhos: [""],
        imgModelo: "",
        imgsProd: [""]
    };

    const [form, setForm] = useState(initilForm);

    //Função para atualizar os tamanhos no estado do formulário
    const handleTamanhoChange = (index, event) => {
        const newTamanhos = [...form.tamanhos];
        newTamanhos[index] = event.target.value;
        setForm({
            ...form,
            tamanhos: newTamanhos
        });
    };

    //Função para adicionar um novo campo de tamanho ao estado do formulário
    const handleAddTamanho = () => {
        setForm(prevForm => ({
            ...prevForm,
            tamanhos: [...prevForm.tamanhos, ""]
        }));
    };

    //Função para atualizar as imagens do produto no estado do formulário
    const handleImgsChange = (index, event) => {
        const newImgs = [...form.imgsProd];
        newImgs[index] = event.target.value;
        setForm({
            ...form,
            imgsProd: newImgs
        });
    }

    //Função para adionar um novo campo de imagens do produto no estado do formulário
    const handleAddImgs = () => {
        setForm(prevForm => ({
            ...prevForm,
            imgsProd: [...prevForm.imgsProd, ""]
        }));
    }

    // Função para lidar com o envio do formulário
    const handleSubmit = (event) => {
        event.preventDefault();

        const formGeneral = {
            nome: form.nome,
            preco: form.preco,
            tamanhos: form.tamanhos,
            imgModelo: form.imgModelo,
            imgsProd: form.imgsProd
        };

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formGeneral)
        }

        fetch('http://localhost:3001/products', requestOptions)
            .then(response => response.json())
            .then((data) => setForm(data))
            .catch(error => {
                console.error('Erro ao enviar o formulário:', error);
                alert("Erro ao enviar o formulário. Tente novamente mais tarde.");
            });
        //Limpando os campos do formulário
        setForm({...initilForm })

        console.log(form)
    };

    return (
        <>
            <main className="main-dashboard">
                <MenuDashboard />

                <div className="content">
                    <TitleDash title='Cadastrar Produto' />
                    <form action="" onSubmit={handleSubmit}>
                        <div className="form-control double">
                            <div className="only big">
                                <label htmlFor="nome">Nome</label>
                                <input
                                    type='text'
                                    id='nome'
                                    name='nome'
                                    value={form.nome}
                                    onChange={(event) => setForm({ ...form, nome: event.target.value })}
                                    required
                                />
                            </div>
                            <div className="only small">
                                <label htmlFor="preco">Preço</label>
                                <input
                                    type='price'
                                    id='preco'
                                    name='preco'
                                    value={form.preco}
                                    onChange={(event) => setForm({ ...form, preco: event.target.value })}
                                    required
                                />
                            </div>
                        </div>

                        {/* Campo de tamanho fixo inicial */}
                        <div className="form-control double-add">
                            <div className="taman-component">
                                <label htmlFor={`tamanho-0`}>Tamanho</label>
                                <input
                                    type='text'
                                    id={`tamanho-0`}
                                    name='tamanho'
                                    value={form.tamanhos[0]}
                                    list={`tamanhos-0`}
                                    onChange={(event) => handleTamanhoChange(0, event)}
                                    required
                                />
                                <datalist id={`tamanhos-0`}>
                                    <option value="UNICO"></option>
                                    <option value="PP"></option>
                                    <option value="P"></option>
                                    <option value="M"></option>
                                    <option value="G"></option>
                                    <option value="GG"></option>
                                </datalist>
                            </div>

                            {/* Botão para adicionar mais campos de tamanho */}
                            <button type="button" className="btn-add" onClick={handleAddTamanho}>+</button>
                        </div>

                        {/* Adicionando campos adicionais de tamanho de forma dinâmica */}
                        {form.tamanhos.slice(1).map((tamanho, index) => (
                            <div className="form-control double-add" key={index + 1}>
                                <div className="taman-component">
                                    <label htmlFor={`tamanho-${index + 1}`}>Tamanho</label>
                                    <input
                                        type='text'
                                        id={`tamanho-${index + 1}`}
                                        name='tamanho'
                                        value={tamanho}
                                        list={`tamanhos-${index + 1}`}
                                        onChange={(event) => handleTamanhoChange(index + 1, event)}
                                    />
                                    <datalist id={`tamanhos-${index + 1}`}>
                                        <option value="UNICO"></option>
                                        <option value="PP"></option>
                                        <option value="P"></option>
                                        <option value="M"></option>
                                        <option value="G"></option>
                                        <option value="GG"></option>
                                    </datalist>
                                </div>
                            </div>
                        ))}

                        <div className="form-control">
                            <label htmlFor="imgModelo">Imagem Modelo</label>
                            <input
                                type='url'
                                id='imgModelo'
                                name='imgModelo'
                                value={form.imgModelo}
                                onChange={(event) => setForm({ ...form, imgModelo: event.target.value })}
                                required
                            />
                        </div>

                        {/* Campos de imagens fixa inicial */}
                        <div className="form-control double-add">
                            <div className="only first">
                                <label htmlFor={`imgProd-0`}>Img Prod</label>
                                <input
                                    type='url'
                                    id={`imgProd-0`}
                                    name='imgProd'
                                    value={form.imgsProd[0]}
                                    onChange={(event) => handleImgsChange(0, event)}
                                    required
                                />
                            </div>
                            <div className="only">
                                <label htmlFor={`imgProd-1`}>Img Prod</label>
                                <input
                                    type='url'
                                    id={`imgProd-1`}
                                    name='imgProd'
                                    value={form.imgsProd[1]}
                                    onChange={(event) => handleImgsChange(1, event)}
                                    required
                                />
                            </div>
                            {/* Botão para adicionar mais campos de imgProd */}
                            <button type="button" className="btn-add" onClick={handleAddImgs}>+</button>
                        </div>

                        {/* Adiocionando campos adicionais de imgsProd de forma dinâmica */}
                        {form.imgsProd.slice(2).map((imgProd, index) => (
                            <div className="form-control double-add" key={index + 2}>
                                <div className="only first">
                                    <label htmlFor={`imgProd-${index + 2}`}>Img Prod</label>
                                    <input
                                        type='url'
                                        id={`imgProd-${index + 2}`}
                                        name='imgProd'
                                        value={imgProd}
                                        onChange={(event) => handleImgsChange(index + 2, event)}
                                    />
                                </div>
                            </div>
                        ))}

                        <button className="btn-main" type="submit" >Cadastrar</button>
                    </form>
                </div>
            </main>
        </>
    );
}
