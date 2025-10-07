const infoBoxes = document.querySelectorAll('.info-box');

infoBoxes.forEach(box => {
    box.addEventListener('click', () => {
        
        console.log('Você clicou em uma caixa de informação!');
    });
});