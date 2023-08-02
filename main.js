const humBtn = document.querySelector(`.ham-menu`);
const navbar = document.querySelector(`.navbar`);

humBtn.addEventListener(`click`, function(){
    if(navbar.style.display === `none`) {
        navbar.style.display=`block`;
    }else{
        navbar.style.display=`none`;
    }
})

