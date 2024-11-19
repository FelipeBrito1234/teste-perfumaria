import { FormEvent, useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom"; //catalogo de uma perfumaria / 
                            // ideia de criar catalogo de uma perfumaria//
                           // dentro teria a area de cadastrado de produto, area de listagem, e area de visualizacao completa dos produto e todas as suas informacoes//


export default function CadastroPerfume(){
    const navigate = useNavigate();
    const [id, setId] = useState("");
    const [nome, setNome] = useState("");
    const [marca, setMarca] = useState("");
    const [descricao, setDescricao] = useState("");
    const [preco, setPreco] = useState("");
    const [imagem, setImagem] = useState("");
    const [notaOlfativa, setNotaOlfativa] = useState(""); // Novo campo para nota olfativa / lembrar de mudar para frangrancia do produto 

    function handleForm(event: FormEvent){
        event.preventDefault();
        console.log("Tentando cadastrar perfume");
        const perfume = {
            id: id,
            nome: nome,
            marca: marca,
            descricao: descricao,
            preco: preco,
            imagem: imagem,
            notaOlfativa: notaOlfativa // Incluindo nota olfativa / lembrar de mudar para frangrancia do produto 

        };
        fetch("http://localhost:8000/perfumes", { // Alterando a URL para o endpoint de perfumes
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(perfume)
        }).then(response => {
            if(response.status === 200){
                alert("Perfume cadastrado com sucesso");
                navigate("/");
            }
            else{
                alert("Erro ao cadastrar perfume");
            }
        });
    }

    function handleId(event: ChangeEvent<HTMLInputElement>){
        setId(event.target.value);
    }
    function handleNome(event: ChangeEvent<HTMLInputElement>){
        setNome(event.target.value);
    }
    function handleMarca(event: ChangeEvent<HTMLInputElement>){
        setMarca(event.target.value);
    }
    function handleDescricao(event: ChangeEvent<HTMLInputElement>){
        setDescricao(event.target.value);
    }
    function handlePreco(event: ChangeEvent<HTMLInputElement>){
        setPreco(event.target.value);
    }
    function handleImagem(event: ChangeEvent<HTMLInputElement>){
        setImagem(event.target.value);
    }
    function handleNotaOlfativa(event: ChangeEvent<HTMLInputElement>){
        setNotaOlfativa(event.target.value); // Manipulador para nota olfativa / lembrar de mudar para frangrancia do produto 
    }

    return(
        <>
            <h1>Tela Cadastro de Perfumes</h1>
            <form onSubmit={handleForm}>
                <div>
                    <label htmlFor="id">ID</label>
                    <input type="text" name="id" onChange={handleId} />
                </div>
                <div>
                    <label htmlFor="nome">Nome</label>
                    <input type="text" name="nome" onChange={handleNome} />
                </div>
                <div>
                    <label htmlFor="marca">Marca</label>
                    <input type="text" name="marca" onChange={handleMarca} /> {/* Novo campo para marca */}
                </div>
                <div>
                    <label htmlFor="descricao">Descrição</label>
                    <input type="text" name="descricao" onChange={handleDescricao} />
                </div>
                <div>
                    <label htmlFor="preco">Preço</label>
                    <input type="text" name="preco" onChange={handlePreco} />
                </div>
                <div>
                    <label htmlFor="imagem">Imagem</label>
                    <input type="text" name="imagem" onChange={handleImagem}/>
                </div>
                <div>
                    <label htmlFor="notaOlfativa">Nota Olfativa</label>
                    <input type="text" name="notaOlfativa" onChange={handleNotaOlfativa}/> {/* Campo para nota olfativa */}  / lembrar de mudar para frangrancia do produto /

                </div>
                <div>
                    <input type="submit" value="Cadastrar"/>
                </div>
            </form>
        </>
    );
}