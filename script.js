const logo = document.querySelectorAll('#logo path');

for (let i = 0; i < logo.length; i++) {
    console.log(`letter ${i} is  ${logo[i].getTotalLength()}`);
}

$(function(){
    $('.li').hide();
    var currentImg = $('.li').first();
    currentImg.show();

    var currIdx = 0;
    // function autoslide() { 
    //     $('.slider-inside > ul > li:first')
    //     .fadeOut(1000)
    //     .next()
    //     .fadeIn(1000)
    //     .end()
    //     .appendTo('.slider-inside > ul');
    //     currIdx += 1;
    //     if (currIdx > 2) currIdx = 0;
    //     console.log(currIdx);
    

        // console.log($('.li').length);
        $('.right').click(function(){
            currentImg.hide();
            if (currIdx >= 2) {
                currIdx = 0;
                currentImg = $('.li').first();
            } else {
                currIdx += 1;
                currentImg = currentImg.next();
            }
            currentImg.fadeIn();
            // clearInterval(autoslider);
            // autoslider = setInterval(autoslide, 2000);
        })
        
        $('.left').click(function(){
            currentImg.hide()
            if (currIdx == 0) {
                currIdx = $('.li').length - 1;
                currentImg = $('.li').last();
            } else {
                currIdx -= 1;
                currentImg = currentImg.prev();
            }
            currentImg.fadeIn();
            // clearInterval(autoslider);
            // autoslider = setInterval(autoslide, 2000);
        })
    // }
    // var autoslider = setInterval(autoslide, 2000);

});
