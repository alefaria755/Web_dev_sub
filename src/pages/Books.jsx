import { useState, useEffect } from 'react';
import { BookStyle } from '../styles/BookStyle';
import { fetchBooks } from '../services/bookApi'; // Importando a função de consumo da API
import fantasia from '../imgs/fantasia.jpg';
import acao from '../imgs/acao.jpg';
import romance from '../imgs/romance.jpg';

const Books = () => {
    const [livros, setLivros] = useState([]);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState(null);

    useEffect(() => {
        const getLivros = async () => {
            try {
                const data = await fetchBooks(); // Chama a API
                setLivros(data); // Atualiza o estado com os dados dos livros
                setCarregando(false); // Finaliza o carregamento
            } catch (error) {
                setErro('Erro ao carregar os livros'); // Caso ocorra um erro
                setCarregando(false); // Finaliza o carregamento mesmo com erro
            }
        };

        getLivros(); // Executa a função quando o componente for montado
    }, []);

    if (carregando) {
        return <div>Carregando...</div>; // Exibe "Carregando..." enquanto os livros não são carregados
    }

    if (erro) {
        return <div>{erro}</div>; // Exibe uma mensagem de erro, se ocorrer
    }

    return (
        <BookStyle>
            <div className="titulo_box_livro">Nossos Livros</div>
            <div className="box_livros">
                {/* Exibindo os livros carregados da API */}
                {livros.map((livro) => (
                    <div key={livro.id} className="box_livro">
                        <div className="imagem_livro">
                            <img
                                src={livro.imagem || fantasia} // Se não houver imagem, usa a imagem padrão
                                alt={`Capa de ${livro.titulo}`}
                            />
                        </div>
                        <div className="descricao_livro">
                            <h3>{livro.titulo}</h3>
                            <p>{livro.descricao}</p>
                        </div>
                    </div>
                ))}
            </div>
        </BookStyle>
    );
};

export default Books;
