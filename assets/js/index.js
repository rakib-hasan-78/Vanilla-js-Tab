// ** project title - --
document.querySelector('.title-box__heading').innerHTML=`vanilla JS tab mini project`;
document.getElementsByClassName(`tab-btns__single-btn`)[0].innerHTML=`about`;
document.getElementsByClassName(`tab-btns__single-btn`)[1].innerHTML=`education`;
document.getElementsByClassName(`tab-btns__single-btn`)[2].innerHTML = `experiences`;
document.getElementsByClassName(`tab-btns__single-btn`)[3].innerHTML=`contact`;


// const tabFunction = ()=>{
//     let btns = document.querySelectorAll(`.tab-btns__single-btn`);
//     let contents = document.querySelectorAll(`.tab-contents__content`);
//     let line = document.querySelector('.line');


//     btns.forEach((btn,index)=>{
//         btn.addEventListener('click', (e)=>{
//             e.preventDefault()
//             btns.forEach(btn=>btn.classList.remove('active'));
//             btn.classList.add('active');
//             line.style.width = e.target.offsetWidth + `px`;
//             line.style.left = e.target.offsetLeft + `px`;

//             contents.forEach((content)=>content.classList.remove('active'))
//             contents[index].classList.add('active');
//         });
//     });
// }
// tabFunction()

const tabFunction = () => {
    let btns = document.querySelectorAll('.tab-btns__single-btn');
    let contents = document.querySelectorAll('.tab-contents__content');
    let line = document.querySelector('.line');

    // Retrieve the active tab index from local storage
    let activeTabIndex = localStorage.getItem('activeTabIndex') || 0;

    // Set the initial state based on the retrieved active tab index
    btns.forEach((btn, index) => {
        if (index == activeTabIndex) {
            btn.classList.add('active');
            line.style.width = btn.offsetWidth + 'px';
            line.style.left = btn.offsetLeft + 'px';
            contents.forEach((content) => content.classList.remove('active'));
            contents[index].classList.add('active');
        }

        btn.addEventListener('click', (e) => {
            e.preventDefault();

            // Update the active tab index in local storage
            localStorage.setItem('activeTabIndex', index);

            btns.forEach((btn) => btn.classList.remove('active'));
            btn.classList.add('active');
            line.style.width = e.target.offsetWidth + 'px';
            line.style.left = e.target.offsetLeft + 'px';

            contents.forEach((content) => content.classList.remove('active'));
            contents[index].classList.add('active');
        });
    });
};

tabFunction();

