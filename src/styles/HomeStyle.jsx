import styled from "styled-components";

export const HomeStyle = styled.section`
    /* Estilos Globais */
    font-family: 'Arial', sans-serif;
    color: #4e342e; /* Tom de marrom escuro */
    margin: 0;
    padding: 0;

    .heroi {
        background: linear-gradient(135deg, #8d6e63, #a1887f); /* Tons de marrom */
        color: #fff;
        padding: 4rem 2rem;
        text-align: center;

        .conteudo-heroi {
            max-width: 800px;
            margin: 0 auto;

            h1 {
                font-size: 3rem;
                margin-bottom: 1rem;
            }

            p {
                font-size: 1.5rem;
                margin-bottom: 2rem;
            }

            .cta {
                background: #6d4c41;
                color: white;
                border: none;
                padding: 0.75rem 2rem;
                font-size: 1rem;
                border-radius: 5px;
                cursor: pointer;
                transition: background 0.3s;

                &:hover {
                    background: #5d4037;
                }
            }
        }
    }

    .conteudo {
        padding: 2rem;

        .sobre {
            display: flex;
            flex-direction: column-reverse;
            align-items: center;
            margin-bottom: 3rem;

            .texto-sobre {
                max-width: 600px;
                margin-bottom: 1.5rem;

                h2 {
                    font-size: 2rem;
                    margin-bottom: 1rem;
                }

                p {
                    font-size: 1.1rem;
                    line-height: 1.6;
                }
            }

            .imagem-sobre {
                width: 100%;
                max-width: 600px;
                margin-bottom: 1.5rem;

                img {
                    width: 100%;
                    height: auto;
                    border-radius: 10px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                }
            }

            @media (min-width: 768px) {
                flex-direction: row;
                justify-content: space-between;

                .texto-sobre, .imagem-sobre {
                    width: 48%;
                    margin-bottom: 0;
                }
            }
        }

        .vantagens {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-bottom: 3rem;

            .vantagem {
                background: #d7ccc8;
                padding: 1.5rem;
                margin: 0.5rem 0;
                border-radius: 8px;
                width: 100%;
                max-width: 300px;
                text-align: center;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

                h3 {
                    font-size: 1.5rem;
                    margin-bottom: 0.5rem;
                }

                p {
                    font-size: 1rem;
                }
            }

            @media (min-width: 768px) {
                flex-direction: row;
                justify-content: center;

                .vantagem {
                    margin: 0 1rem;
                }
            }
        }

        .galeria {
            text-align: center;

            h2 {
                font-size: 2rem;
                margin-bottom: 1.5rem;
            }

            .imagens-galeria {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                gap: 1rem;

                .imagem-item {
                    overflow: hidden;
                    border-radius: 10px;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

                    img {
                        width: 100%;
                        height: auto;
                        transition: transform 0.3s;

                        &:hover {
                            transform: scale(1.05);
                        }
                    }
                }
            }
        }
    }
`;
