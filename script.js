/* Fixed Header */

window.onscroll = function () {scrollFunction()};

function scrollFunction() {
    let scrollPos = 10;
    let header = document.querySelector(".header");

    if (document.body.scrollTop > scrollPos || document.documentElement.scrollTop > scrollPos) {
        header.classList.add("active");
    }else {
        header.classList.remove("active");
    }
}

// Toggle menu

const menuBurger = document.querySelector(".header__burger");
const nav = document.querySelector(".nav");
const body = document.querySelector("body");
if (menuBurger) {
    menuBurger.addEventListener("click", function (e){
        menuBurger.classList.toggle("active");
        nav.classList.toggle("active");
        body.classList.toggle("lock");
    });
}

// scroll to sections

const menuLinks = document.querySelectorAll(".nav__link[data-scroll]")
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick)

    });
    function onMenuLinkClick(e) {
        e.preventDefault();
        //ниже объект, на который мы кликнули, целевой объект
        const menuLink = e.target;
        //проверяем заполнен ли data атрибут и существует ли объект, на который ссылается атрибут
        if(menuLink.dataset.scroll && document.querySelector(menuLink.dataset.scroll)) {
            //помещаем в const сам объект
            const scrollBlock = document.querySelector(menuLink.dataset.scroll);
            //    высчитываем положение этого объекта с учетом высоты шапки
            //    scrollBlock.getBoundingClientRect().top - местоположение в пикселях
            //    pageYOffset - количество прокрученных пикселей
            //    document.querySelector("header").offsetHeight; - высота шапки
            const scrollBlockValue = scrollBlock.getBoundingClientRect().top + pageYOffset - document.querySelector("header").offsetHeight;
            if (menuBurger.classList.contains("active")) {
                menuBurger.classList.remove("active");
                nav.classList.remove("active");
                body.classList.remove("lock");
            }
            window.scrollTo({
                top: scrollBlockValue,
                behavior: "smooth"
            });

            if( scroll > top && scroll < bottom){
                $('a.active').removeClass('active');
                $('a[href="#'+id+'"]').addClass('active');

            }
        }
    }

}