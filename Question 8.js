function trocando() {

    var frase = "Quem parte e reparte fica com a maior parte";
    var palavraAnt = "parte"
    var palavraNova = "parcela"

    var index = frase.lastIndexOf(palavraAnt)
    if (index >= 0) {
        frase = frase.substr(0, index) + palavraNova + frase.substr(index + palavraAnt.length);
    }
    console.log(frase)

}

trocando()