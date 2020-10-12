$(document).ready(function () {

    // adaptive block
    const serviceImg = document.querySelectorAll('.service_img')
    const chessBlockImg = document.querySelectorAll('.chess_block .block_img')
    const medicalProgramBlock = document.querySelectorAll('.program_block')

    adaptiveBlock = (nameBlock, relative) => {
        for(let i=0; i<nameBlock.length; i++){
            const blockWidth = nameBlock[i].offsetWidth;
            const blockHeight = blockWidth * relative;
            nameBlock[i].style.height = `${blockHeight}px`;
        }
    }

    adaptiveBlock(serviceImg, 0.85);
    adaptiveBlock(chessBlockImg, 0.75);
    adaptiveBlock(medicalProgramBlock, 0.9);



    // open popup
    const body = document.querySelector('body');
    function openPopup(btnClick, namePopup, addClassPopup){
        const btn = document.querySelectorAll(btnClick);
        const popup = document.querySelector(namePopup);

        if(btn.length > 0){
            for(let i=0; i<btn.length; i++){
                btn[i].addEventListener('click', () =>{
                    body.classList.add('hidden');
                    popup.classList.add(addClassPopup);
                })
            }
        }
    }
    openPopup('.open_popup', '#booking_popup', 'active');
    

    // close popup
    const closeBtn = document.querySelectorAll('.close_popup');
    if(closeBtn.length > 0){
        for(let i=0; i<closeBtn.length; i++){
            closeBtn[i].addEventListener('click', () =>{
                body.classList.remove('hidden');
                closeBtn[i].closest('.popup_main').classList.remove('active');
            })
        }
    }

    
});