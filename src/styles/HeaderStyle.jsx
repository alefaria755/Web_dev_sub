import styled from 'styled-components';

export const HeaderStyle = styled.section`
  header {
    display: flex;
    min-height: 10vh;
  }

  .logo {
    display: flex;
    font-size: 4vh;
    justify-content: center;
    align-items: center;
    width: 300px;
    flex-grow: 1;
    background-color: rgb(105, 58, 3);
    color: white;
    font-weight: 900; 
  }

  nav {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    gap: 2vw;
    background-color: rgb(105, 58, 3);
    color: white;
    font-weight: 900;
    font-size: 3vh;
  }

  nav a {
    text-decoration: none; /* Remove o sublinhado */
    color: inherit; /* Garante que a cor seja herdada */
    font-weight: inherit; /* Garante consistência no peso da fonte */
  }

  nav a:visited {
    color: inherit; /* Remove a cor padrão para links visitados */
  }

  nav a:hover {
    text-decoration: underline; /* Exemplo: adicione um efeito de hover (opcional) */
  }

  .login {
    height: 6vh;
    width: 8vw;
    margin-right: 7vw;
    background-color: blue;
    color: white;
    font-size: 2.5vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2vh;
  }
`;
