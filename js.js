ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 1000,
    delay: 0
});

ScrollReveal().reveal('.h1', { origin: 'bottom' })
ScrollReveal().reveal('.h2', { origin: 'bottom' })
ScrollReveal().reveal('.button_comecar', { origin: 'bottom' })
ScrollReveal().reveal('.img_card', { origin: 'bottom', })
ScrollReveal().reveal('.img_card_2', { origin: 'bottom' })
ScrollReveal().reveal('.cards_melhorias1', { origin: 'bottom', delay: 200, duration: 500 })
ScrollReveal().reveal('.cards_melhorias2', { origin: 'bottom', delay: 200, duration: 1000 })
ScrollReveal().reveal('.cards_melhorias3', { origin: 'bottom', delay: 200, duration: 1500 })
ScrollReveal().reveal('.div_conteudo1', { origin: 'bottom', delay: 200, duration: 250 })
ScrollReveal().reveal('.div_conteudo2', { origin: 'bottom', delay: 200, duration: 500 })
ScrollReveal().reveal('.div_conteudo3', { origin: 'bottom', delay: 200, duration: 750 })
ScrollReveal().reveal('.div_conteudo4', { origin: 'bottom', delay: 200, duration: 1000 })
ScrollReveal().reveal('.titulo_main1', { origin: 'left', delay: 200, duration: 250 })
ScrollReveal().reveal('.loja', { origin: 'left', delay: 200, duration: 1000 })
ScrollReveal().reveal('.div_banner_loja', { origin: 'right', delay: 200, duration: 1000 })
ScrollReveal().reveal('.container_footer', { origin: 'bottom', delay: 200, duration: 500 })

let spanQuantidade = document.querySelector('.span_quantidade')
let spanQuantidade2 = document.querySelector('.span_quantidade2')
let spanQuantidade3 = document.querySelector('.span_quantidade3')
let spanQuantidade4 = document.querySelector('.span_quantidade4')
let spanQuantidade5 = document.querySelector('.span_quantidade5')
let spanQuantidade6 = document.querySelector('.span_quantidade6')
let spanQuantidade7 = document.querySelector('.span_quantidade7')
let spanQuantidade8 = document.querySelector('.span_quantidade8')

let btnMais = document.querySelector('.btn_mais')
let btnMais2 = document.querySelector('.btn_mais2')
let btnMais3 = document.querySelector('.btn_mais3')
let btnMais4 = document.querySelector('.btn_mais4')
let btnMais5 = document.querySelector('.btn_mais5')
let btnMais6 = document.querySelector('.btn_mais6')
let btnMais7 = document.querySelector('.btn_mais7')
let btnMais8 = document.querySelector('.btn_mais8')

let btnMenos = document.querySelector('.btn_menos')
let btnMenos2 = document.querySelector('.btn_menos2')
let btnMenos3 = document.querySelector('.btn_menos3')
let btnMenos4 = document.querySelector('.btn_menos4')
let btnMenos5 = document.querySelector('.btn_menos5')
let btnMenos6 = document.querySelector('.btn_menos6')
let btnMenos7 = document.querySelector('.btn_menos7')
let btnMenos8 = document.querySelector('.btn_menos8')
let valorQuantidade = 1

btnMais.addEventListener('click', Mais)
btnMais2.addEventListener('click', Mais2)
btnMais3.addEventListener('click', Mais3)
btnMais4.addEventListener('click', Mais4)
btnMais5.addEventListener('click', Mais5)
btnMais6.addEventListener('click', Mais6)
btnMais7.addEventListener('click', Mais7)
btnMais8.addEventListener('click', Mais8)

btnMenos.addEventListener('click', Menos)
btnMenos2.addEventListener('click', Menos2)
btnMenos3.addEventListener('click', Menos3)
btnMenos4.addEventListener('click', Menos4)
btnMenos5.addEventListener('click', Menos5)
btnMenos6.addEventListener('click', Menos6)
btnMenos7.addEventListener('click', Menos7)
btnMenos8.addEventListener('click', Menos8)


function Mais() {
    valorQuantidade += 1
    spanQuantidade.innerHTML = valorQuantidade
}

function Mais2() {
    valorQuantidade += 1
    spanQuantidade2.innerHTML = valorQuantidade
}

function Mais3() {
    valorQuantidade += 1
    spanQuantidade3.innerHTML = valorQuantidade
}

function Mais4() {
    valorQuantidade += 1
    spanQuantidade4.innerHTML = valorQuantidade
}

function Mais5() {
    valorQuantidade += 1
    spanQuantidade5.innerHTML = valorQuantidade
}

function Mais6() {
    valorQuantidade += 1
    spanQuantidade6.innerHTML = valorQuantidade
}

function Mais7() {
    valorQuantidade += 1
    spanQuantidade7.innerHTML = valorQuantidade
}

function Mais8() {
    valorQuantidade += 1
    spanQuantidade8.innerHTML = valorQuantidade
}

function Menos() {
    valorQuantidade -= 1
    spanQuantidade.innerHTML = valorQuantidade

    if (valorQuantidade < 0) {
        valorQuantidade = 0
        spanQuantidade.innerHTML = valorQuantidade
    }
}

function Menos2() {
    valorQuantidade -= 1
    spanQuantidade2.innerHTML = valorQuantidade

    if (valorQuantidade < 0) {
        valorQuantidade = 0
        spanQuantidade2.innerHTML = valorQuantidade
    }
}

function Menos3() {
    valorQuantidade -= 1
    spanQuantidade3.innerHTML = valorQuantidade

    if (valorQuantidade < 0) {
        valorQuantidade = 0
        spanQuantidade3.innerHTML = valorQuantidade
    }
}

function Menos4() {
    valorQuantidade -= 1
    spanQuantidade4.innerHTML = valorQuantidade

    if (valorQuantidade < 0) {
        valorQuantidade = 0
        spanQuantidade4.innerHTML = valorQuantidade
    }
}

function Menos5() {
    valorQuantidade -= 1
    spanQuantidade5.innerHTML = valorQuantidade

    if (valorQuantidade < 0) {
        valorQuantidade = 0
        spanQuantidade5.innerHTML = valorQuantidade
    }
}

function Menos6() {
    valorQuantidade -= 1
    spanQuantidade6.innerHTML = valorQuantidade

    if (valorQuantidade < 0) {
        valorQuantidade = 0
        spanQuantidade6.innerHTML = valorQuantidade
    }
}

function Menos7() {
    valorQuantidade -= 1
    spanQuantidade7.innerHTML = valorQuantidade

    if (valorQuantidade < 0) {
        valorQuantidade = 0
        spanQuantidade7.innerHTML = valorQuantidade
    }
}

function Menos8() {
    valorQuantidade -= 1
    spanQuantidade8.innerHTML = valorQuantidade

    if (valorQuantidade < 0) {
        valorQuantidade = 0
        spanQuantidade8.innerHTML = valorQuantidade
    }
}

let inputEmail = document.querySelector('.input_email')
let spanEmail = document.querySelector('.span_email')
inputEmail.addEventListener('click', inputClick)

function inputClick() {
    if (!spanEmail.classList.contains('subir')) {
        spanEmail.classList.add('subir');
    }
}

document.addEventListener('click', function (event) {
    if (!inputEmail.contains(event.target)) {
        if (inputEmail.value.trim() === '') {
            spanEmail.classList.remove('subir');
        }
    }

});