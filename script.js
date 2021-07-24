const form = document.getElementById('form')

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    let nome = document.getElementById('nome').value;
    let nasc = document.getElementById('data-nasc').value;
    let cpf = document.getElementById('CPF').value;
    let email = document.getElementById('email').value;
    let up = document.getElementById('UP').value;
    let city = document.getElementById('city').value;
    let endr = document.getElementById('rua/casa').value;
    let cep = document.getElementById('cep').value;
    let data ={
        nome,
        nasc,
        cpf,
        email,
        up,
        city,
        endr,
        cep,
    }
    let convertData = JSON.stringify(data);

    localStorage.setItem('lead', convertData)

    let content = document.getElementById('content')
    let carregando = `<p>Cadastrado!</p>`
    content.innerHTML = carregando

})

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    let produto = document.getElementById('prod').value;
    let marca = document.getElementById('marc').value;
    let modelo = document.getElementById('modl').value;
    let quantidade = document.getElementById('quant').value;
    let codigoProd = document.getElementById('codP').value;
    let local = document.getElementById('local').value;
    let codLocalizacao = document.getElementById('codL').value;
    let loja = document.getElementById('loja').value;
    let data ={
        produto,
        marca,
        modelo,
        quantidade,
        codigoProd,
        local,
        codLocalizacao,
        loja,
    }
    let convertData = JSON.stringify(data);

    localStorage.setItem('lead', convertData)

    let content = document.getElementById('content')
    let carregando = `<p>Cadastrado!</p>`
    content.innerHTML = carregando

})