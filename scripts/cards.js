const EraContainer = document.querySelector('.cards__library');

if(EraContainer){
    const dataTitleEra =[
            "Древний мир",
            "Античность",
            "Средневековье",
            "Новое время",
            "Новейщее время",
    ];

const titleCards = EraContainer.querySelectorAll('.cards__name');

titleCards.forEach((item,index) =>{
     item.textContent = dataTitleEra[index];
});
}