const itensPerguntasERespostas = document.querySelectorAll('.item');

itensPerguntasERespostas.forEach((item) => {
    item.addEventListener('click', () => {
        const itemAtivo = document.querySelector('.ativo');

        if(itemAtivo){
            itemAtivo.classList.remove('ativo');
        }

        item.classList.add('ativo');
    })
})