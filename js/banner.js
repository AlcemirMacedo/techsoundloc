let totalSliders = document.querySelectorAll('.background-banner').length;
let slideAtual = 0;

document.querySelector('.area-total-banner').style.width = `calc(100vw * ${totalSliders})`
console.log(totalSliders);

function goToPrev(){
    slideAtual--;
    if(slideAtual<0){
        slideAtual = totalSliders - 1;
    }
    atualizaMargin();
}

function goToNext(){
    slideAtual++;
    if(slideAtual > (totalSliders-1)){
        slideAtual = 0;
    };
    atualizaMargin();
};

function atualizaMargin(){
    let novaMargem = (slideAtual * document.body.clientWidth);
    document.querySelector('.area-total-banner').style.marginLeft = `-${novaMargem}px`
}

setInterval(goToNext, 5000);