//Questão04
function localização(a){
    var endereco = {
        rua: "Rua dos Pinheiros",
        numero: 1293,
        bairro: "Centro",
        cidade: "São Paulo",
        uf: "SP"
    }
    
    return console.log(`O usuário mora em ${endereco.cidade}/${endereco.uf}, no bairro ${endereco.bairro}, na rua "${endereco.rua}" com n° ${endereco.numero} `)
}

localização()