import $ from 'jquery';
// import $ from 'https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js'

let smDesktopWidth = 1120;
let firstMenu = $('.firstMenuJs');
let secondMenuJs = $('.secondMenuJs');
let burger = $('.burger')

// Burger
// Burger animation
let openMenu = function() {
        burger.click(function(evt) {
        burger.toggleClass("open");
        firstMenu.slideToggle(300).css('display', 'flex');
        secondMenuJs.slideToggle(300).css('display', 'flex');
        evt.preventDefault();
        stopPropagation();
    });
}


// Resize Change
// 
let hideMenu = function() {
    firstMenu.css('display', 'flex');
    secondMenuJs.css('display', 'flex');
}
var win = $(window);
activateMenu();
win.resize(activateMenu);

function activateMenu() {
    if(win.width() <= smDesktopWidth) {
        burger.removeClass("open");
        firstMenu.css('display', 'none');
        secondMenuJs.css('display', 'none');
        openMenu(); 
    } else if (win.width() > smDesktopWidth) {
        burger.toggleClass("open");
        hideMenu();
        return;
    }
}
