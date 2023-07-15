const yesBtn = document.querySelector('#noBtn');

yesBtn.addEventListener('click',function () {
    alert('Soy tan adivino que sabia que ibas a decir que No jasjajs')
});

const noBtn = document.querySelector('#yesBtn');

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*500);
    const randomY = parseInt(Math.random()*500);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})