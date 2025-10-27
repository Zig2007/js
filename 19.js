let palavra = "amor";
let letras = {};
let iso =  true;
for (let l of palavra) {
    if (letras[l]) iso = false;
    letras [l] = true;
}
console.log(iso ? " É isograma " : "Não é isograma");