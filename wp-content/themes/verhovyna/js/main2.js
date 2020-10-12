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
});