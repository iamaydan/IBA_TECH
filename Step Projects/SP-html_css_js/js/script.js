"use strict";


//////////////////////////our-services////////////////////////
$(function() {
    $("ul.services-tabs").on("click", "li:not(.active)", function() {
        $(this)
            .addClass("active")
            .siblings()
            .removeClass("active");
        $("div.tabs-contents")
            .find("div.tab-content")
            .removeClass("active")
            .eq($(this).index())
            .addClass("active");
    });
  });



const $loadButton=$('<button class=" button load-more-btn"><i class="fas fa-plus"></i>  Load More</button>');
$('.our-amazing-work').append($loadButton);
const $showImage=$('.img-card.hidden');
function secondClick(){
    for(let elem=12;elem<24;elem++){
        $($showImage[elem]).removeClass('hidden');
    }
    $loadButton.remove();
}
function firstClick(){
           for(let elem=0;elem<12;elem++){
               $($showImage[elem]).removeClass('hidden');
           }
       $loadButton.off('click',firstClick);
       $loadButton.on('click',secondClick);
   }
   $loadButton.on('click',firstClick);


const tabNames=document.querySelectorAll('.work-tab');
tabNames.forEach(function (elem) {
        elem.addEventListener('click',function (event) {
        tabNames.forEach(function (elem) {
            elem.classList.remove('active');
        });
        if(elem===tabNames[0]){
            const hiddenItems= document.querySelectorAll('.img-card');
            hiddenItems.forEach(function (hideImg) {
                hideImg.classList.add('hidden');
            });
            for(let i=0;i<12;i++){
                hiddenItems[i].classList.remove('hidden');
            }
            $('.our-amazing-work').append($loadButton);
            $loadButton.on('click',firstClick);
        }else {
            document.querySelectorAll('.img-card').forEach(function (hideImg) {
            hideImg.classList.add('hidden');
        });
            event.target.classList.add('active');
            const dataName= event.target.getAttribute('data-info');
            document.querySelectorAll(`[data-label="${dataName}"]`).forEach(function (elem) {
                elem.parentElement.classList.remove('hidden');
            });
            $loadButton.remove();
        }
    })
});