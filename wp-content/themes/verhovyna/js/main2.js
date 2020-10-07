$(document).ready(function () {


    const serviceImg = document.querySelectorAll('.service_img')

    adaptiveBlock = (nameBlock, relative) => {
        for(let i=0; i<nameBlock.length; i++){
            const blockWidth = nameBlock[i].offsetWidth;
            const blockHeight = blockWidth * relative;
            nameBlock[i].style.height = `${blockHeight}px`;
        }
    }

    adaptiveBlock(serviceImg, 0.85);


});