import { HomeStyle } from "../styles/HomeStyle";
import livro_inicio from '../imgs/livro.jpg'

const Home = () => {
    return (
        <HomeStyle>
            <header className="heroi">
                <div className="conteudo-heroi">
                    <h1>Bem-vindo à Storebook</h1>
                    <p>Seu destino para uma vasta seleção de livros.</p>
                </div>
            </header>
            <main className="conteudo">
                <section className="sobre">
                    <div className="texto-sobre">
                        <h2>Sobre Nós</h2>
                        <p>
                            Na Storebook, acreditamos no poder transformador da leitura. Oferecemos uma ampla variedade de livros para todas as idades e gostos, garantindo que você encontre a obra perfeita para sua próxima leitura.
                        </p>
                    </div>
                    <div className="imagem-sobre">
                        {/* Adicione uma imagem relevante aqui */}
                        <img src={livro_inicio} alt="imagem do livro" />

                    </div>
                </section>
                
                <section className="vantagens">
                    <div className="vantagem">
                        <h3>Variedade</h3>
                        <p>Uma extensa coleção de gêneros para atender a todos os leitores.</p>
                    </div>
                    <div className="vantagem">
                        <h3>Qualidade</h3>
                        <p>Livros selecionados com cuidado para garantir a melhor experiência de leitura.</p>
                    </div>
                    <div className="vantagem">
                        <h3>Facilidade</h3>
                        <p>Compra rápida e segura com diversas opções de pagamento.</p>
                    </div>
                </section>

                
            </main>
        </HomeStyle>
    );
};

export default Home;
