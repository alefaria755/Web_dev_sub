import axios from 'axios';

const API_URL = 'https://api.example.com/livros'; // Substitua com a URL real da API de livros

// Função para buscar os livros da API
export const fetchBooks = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data; // Retorna os dados dos livros
    } catch (error) {
        console.error('Erro ao buscar livros', error);
        throw error;
    }
};
