import styled from 'styled-components';

export const BookStyle = styled.section`
    padding: 40px;
    background-color: #f3f2f1; /* Fundo suave para destacar os livros */
    display: flex;
    flex-direction: column;
    align-items: center;

    .titulo_box_livro {
        font-size: 36px;
        font-weight: 700;
        color: #4e342e; /* Marrom escuro */
        text-align: center;
        padding: 20px;
        margin-bottom: 40px;
    }

    .box_livros {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 30px;
        max-width: 1200px;
        width: 100%;
    }

    .box_livro {
        background-color: #fff;
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }

    .box_livro:hover {
        transform: scale(1.05); /* Aumenta o card ao passar o mouse */
        box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2); /* Aumenta a sombra */
    }

    .imagem_livro img {
        width: 100%;
        height: 250px;
        object-fit: cover;
        border-bottom: 2px solid #795548; /* Linha de separação */
    }

    .descricao_livro {
        padding: 20px;
        text-align: center;
        color: #6d4c41; /* Cor de texto suave */
    }

    .descricao_livro h3 {
        font-size: 20px;
        font-weight: 600;
        color: #4e342e; /* Marrom escuro */
        margin-bottom: 10px;
    }

    .descricao_livro p {
        font-size: 16px;
        line-height: 1.5;
    }

    /* Responsividade */
    @media (max-width: 768px) {
        .titulo_box_livro {
            font-size: 28px;
        }

        .box_livro {
            height: 380px;
        }

        .descricao_livro h3 {
            font-size: 18px;
        }

        .descricao_livro p {
            font-size: 14px;
        }
    }

    @media (max-width: 480px) {
        .titulo_box_livro {
            font-size: 24px;
        }

        .box_livros {
            grid-template-columns: 1fr; /* Alinha os livros em uma coluna para telas pequenas */
        }

        .box_livro {
            height: auto;
        }

        .descricao_livro h3 {
            font-size: 16px;
        }

        .descricao_livro p {
            font-size: 12px;
        }
    }
`;
