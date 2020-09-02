burger();

function burger() {
    const burger = document.querySelector(".menu-icon");
    const menu = document.querySelector(".menu__body");
    const ninja = document.querySelector(".ninja");
    const body = document.querySelector("body");
    let check = false;
    burger.onclick = function (e) {
        if (check) {
            burger.classList.remove("active");
            menu.classList.remove("active");
            ninja.classList.remove("active");
            // body.classList.remove("lock");
            check = !check;
        } else {
            burger.classList.add("active");
            menu.classList.add("active");
            ninja.classList.add("active");
            // body.classList.add("lock");
            check = !check;
        }

    }
}