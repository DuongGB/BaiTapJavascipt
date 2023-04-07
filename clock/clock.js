let hr = document.querySelector(".hour");
let min = document.querySelector(".minute");
let sec = document.querySelector(".second");
let hString = document.querySelector(".h");
let mString = document.querySelector(".m");
let sString = document.querySelector(".s");

function setRotation(ele, rotate) {
    ele.style.setProperty("--rotation", rotate);
}

setInterval(() => {
    let date = new Date();
    console.log(hr);
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let hRotation = 30 * hh + mm / 2;
    let mRotation = 6 * mm;
    let sRotation = 6 * ss;

    setRotation(hr, hRotation);
    setRotation(min, mRotation);
    setRotation(sec, sRotation);

    if (hh < 10) {
        hh = "0" + hh;
    }
    if (mm < 10) {
        mm = "0" + mm;
    }
    if (ss < 10) ss = "0" + ss;
    hString.innerHTML = hh;
    mString.innerHTML = mm;
    sString.innerHTML = ss;
}, 1000);
