function verificar() {
    let res = document.getElementById("res");
    let p = document.getElementById("res-p");
    let ndigit = document.getElementById("txtnum");
    let n = Number(ndigit.value);
    res.style.textAlign = "center";
    res.style.backgroundColor = "#1b1b1b";
    p.style.color = "#d69d47ea";
    p.style.fontWeight = "400";
    p.style.fontSize = "18px";
    p.style.marginTop = "10px"
 

    let c = 1;
    let tabuada = "";

    while (c <= 10) {
        tabuada += `${n} x ${c} = ${n * c}<br><br>`
        c++;
    }

    p.innerHTML = tabuada;
}