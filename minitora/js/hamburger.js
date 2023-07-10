const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.globalMenuSp');
    
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('disabled');
});
$(function() {
    $('.hamburger').click(function() {
        $(this).toggleClass('active'); 
        if ($(this).hasClass('active')) {
            $('.globalMenuSp').addClass('active');
        } 
        else {
            $('.globalMenuSp').removeClass('active');
        }
    });
});