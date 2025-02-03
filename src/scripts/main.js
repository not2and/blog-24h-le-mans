// Este arquivo contém o código JavaScript para interatividade no blog sobre as 24 horas de Le Mans. 
// Você pode adicionar funções para manipulação de eventos e carregamento dinâmico de conteúdo aqui.

document.addEventListener('DOMContentLoaded', () => {
    // Código para inicializar a interatividade do blog
    console.log('Blog 24h Le Mans carregado com sucesso!');
    
    // Exemplo de manipulação de evento
    const button = document.getElementById('load-more');
    if (button) {
        button.addEventListener('click', () => {
            // Lógica para carregar mais conteúdo
            console.log('Carregando mais conteúdo...');
        });
    }
});