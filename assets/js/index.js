// ** project title - --
document.querySelector('.title-box__heading').innerHTML=`vanilla JS tab mini project`;
document.getElementsByClassName(`tab-btns__single-btn`)[0].innerHTML=`about`;
document.getElementsByClassName(`tab-btns__single-btn`)[1].innerHTML=`education`;
document.getElementsByClassName(`tab-btns__single-btn`)[2].innerHTML = `experiences`;
document.getElementsByClassName(`tab-btns__single-btn`)[3].innerHTML=`contact`;


const tabFunction = ()=>{
    let btns = document.querySelectorAll(`.tab-btns__single-btn`);
    let contents = document.querySelectorAll(`.tab-contents__content`);
    let line = document.querySelector('.line');


    btns.forEach((btn,index)=>{
        btn.addEventListener('click', (e)=>{
            e.preventDefault()
            btns.forEach(btn=>btn.classList.remove('active'));
            btn.classList.add('active');
            line.style.width = e.target.offsetWidth + `px`;
            line.style.left = e.target.offsetLeft + `px`;
        });
    });
}
tabFunction()