// Importações necessárias
import { useState } from "react";
import { MenuDashboard } from "../components/Menu-dashboard"; // Importa o componente do menu do painel
import { TitleDash } from "../components/Title-Dash"; // Importa o componente de título do painel
import '../styles/dashboard.css'; // Importa o arquivo de estilo CSS específico para este componente

// Componente para a página do painel de controle (dashboard)
export function Dashboard() {
    // Estado inicial do formulário para cadastrar produtos
    const initilForm = {
        nome: "", // Nome do produto
        preco: "", // Preço do produto
        tamanhos: [""], // Tamanhos disponíveis do produto
        imgModelo: "", // URL da imagem modelo do produto
        imgsProd: [""] // URLs das imagens do produto
    };

    const [form, setForm] = useState(initilForm); // Estado para armazenar o formulário

    // Função para atualizar os tamanhos no estado do formulário
    const handleTamanhoChange = (index, event) => {
        const newTamanhos = [...form.tamanhos]; // Cria uma cópia do array de tamanhos
        newTamanhos[index] = event.target.value; // Atualiza o tamanho na posição especificada
        setForm({
            ...form,
            tamanhos: newTamanhos
        });
    };

    // Função para adicionar um novo campo de tamanho ao estado do formulário
    const handleAddTamanho = () => {
        setForm(prevForm => ({
            ...prevForm,
            tamanhos: [...prevForm.tamanhos, ""]
        }));
    };

    // Função para atualizar as imagens do produto no estado do formulário
    const handleImgsChange = (index, event) => {
        const newImgs = [...form.imgsProd]; // Cria uma cópia do array de imagens do produto
        newImgs[index] = event.target.value; // Atualiza a imagem na posição especificada
        setForm({
            ...form,
            imgsProd: newImgs
        });
    }

    // Função para adicionar um novo campo de imagens do produto ao estado do formulário
    const handleAddImgs = () => {
        setForm(prevForm => ({
            ...prevForm,
            imgsProd: [...prevForm.imgsProd, ""]
        }));
    }

    // Função para lidar com o envio do formulário de cadastro de produtos
    const handleSubmit = (event) => {
        event.preventDefault(); // Previne o comportamento padrão do formulário

        const formGeneral = { // Constrói um objeto com os dados do formulário
            nome: form.nome,
            preco: form.preco,
            tamanhos: form.tamanhos,
            imgModelo: form.imgModelo,
            imgsProd: form.imgsProd
        };

        const requestOptions = { // Opções para a requisição POST
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formGeneral) // Converte o objeto para JSON
        }

        fetch('http://localhost:3001/products', requestOptions) // Envia a requisição POST para cadastrar o produto
            .then(response => response.json()) // Converte a resposta em formato JSON
            .then((data) => setForm(data)) // Atualiza o estado do formulário com os dados do produto cadastrado
            .catch(error => {
                console.error('Erro ao enviar o formulário:', error); // Trata erros de envio do formulário
                alert("Erro ao enviar o formulário. Tente novamente mais tarde."); // Exibe uma mensagem de erro
            });
        
        // Limpa os campos do formulário após o envio bem-sucedido
        setForm({...initilForm })

        console.log(form); // Exibe o formulário no console (para fins de depuração)
    };

    // Retorna a estrutura do componente da página do painel de controle
    return (
        <>
            <main className="main-dashboard">
                <MenuDashboard /> {/* Componente do menu do painel */}
                <div className="content">
                    <TitleDash title='Cadastrar Produto' /> {/* Componente do título da seção */}
                    <form action="" onSubmit={handleSubmit}> {/* Evento onSubmit para lidar com o envio do formulário */}
                        <div className="form-control double">
                            <div className="only big">
                                <label htmlFor="nome">Nome</label> {/* Rótulo do campo de nome do produto */}
                                <input
                                    type='text'
                                    id='nome'
                                    name='nome'
                                    value={form.nome}
                                    // Função para lidar com a mudança de valor nos campos de input do formulário
                                    onChange={(event) => setForm({ ...form, nome: event.target.value })}
                                    required
                                />
                            </div>
                            <div className="only small">
                                <label htmlFor="preco">Preço</label> {/* Rótulo do campo de preço do produto */}
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
                                <label htmlFor={`tamanho-0`}>Tamanho</label> {/* Rótulo do campo de tamanho */}
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
                            <label htmlFor="imgModelo">Imagem Modelo</label> {/* Rótulo do campo de imagem modelo do produto */}
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
                                <label htmlFor={`imgProd-0`}>Img Prod</label> {/* Rótulo do campo de imagens do produto */}
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
                            {/* Botão para adicionar mais campos de imagens do produto */}
                            <button type="button" className="btn-add" onClick={handleAddImgs}>+</button>
                        </div>

                        {/* Adicionando campos adicionais de imagens do produto de forma dinâmica */}
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

                        <button className="btn-main" type="submit" >Cadastrar</button> {/* Botão para enviar o formulário */}
                    </form>
                </div>
            </main>
        </>
    );
}
