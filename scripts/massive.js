const intensImg = document.querySelectorAll('.wrapper__img');
const intensiveText = document.querySelectorAll('.wrapper__description');

 intensImg.forEach ((item, index) => {


  item.addEventListener('mouseover', () => { 
        item.style.opacity = 0.5;
        intensiveText[index] .removeAttribute('hidden');
    });

    item.addEventListener ( 'mouseout',() => {
         item.style.opacity = 1;
         intensiveText[index] .setAttribute('hidden', true );
    });
});