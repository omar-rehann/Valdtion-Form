let inp = document.querySelector(".second .em");
let send = document.querySelector(".send");
let el = document.createElement("div");
let info = document.querySelector("form");
let section = document.querySelector(".continer");
el.className = "check";

send.onclick = function(event) {
    event.preventDefault(); // منع إعادة تحميل الصفحة
    valdation(inp.value);
}

let timer = setTimeout(valdation, 2000)

function valdation(str) {
    inp.value = "";
    el.value = ""
    let regex = /^[^\d\s]\w+@\w+\.com$/ig;
    if (str.match(regex)) {
        let lastel = document.createElement("div");
        lastel.className = "show_data";
        let oneel = document.createElement("h3");
        let onetxt = document.createTextNode("Success Login From And Valdtion Form");
        oneel.appendChild(onetxt);
        let twoel = document.createElement("h4");
        let twotxt = document.createTextNode("Thank You Brohter");
        twoel.appendChild(twotxt);
        lastel.appendChild(oneel);
        lastel.appendChild(twoel);
        section.appendChild(lastel);
        setTimeout(function() {
            section.removeChild(lastel);
        }, 3000); // 3000 ميلي ثانية = 3 ثوانٍ
    } else {
        el.textContent = "Not Valid. Please Try Again";
        info.appendChild(el);
        setTimeout(function() {
            info.removeChild(el);
        }, 2000);
    }
}