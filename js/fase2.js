
//o mesmo que funcão 3.1.3.1
function escolha4(cozinha) {
    while (true) {
        let questao4;
        if (cozinha) {
            questao4 = prompt("1- Vá pegar vinho da cozinha. | 2- Espere pelos bifes. | 3- Coma o jantar na piscina.")
        } else {
            questao4 = prompt("1- Vá pegar vinho da cozinha. | 2- Espere pelos bifes. | 3- Coma o jantar na piscina. | 4- Vá nadar.")
        }
        if (questao4 == 1) {
            alert("Muito álcool. Não estou me sentindo bem.")
            return escolha3_4_4()
        } else if (questao4 == 2) {
            return escolha4_2()
        } else if (questao4 == 3) {
            alert("Uma festa na piscina será mais divertida se nos vestirmos para a ocasião, espere aqui.")
            return escolha3_4_4()
        } else if (questao4 == 4) {
            alert("Talvez podemos nadar após o jantar.")
            return escolha4(questao4)
        } else {
            alert("Escreva novamente uma resposta válida.")
        }
    }
}

function escolha4_2(conversa) {
    while (true) {
        let arrEscolhas = ['1- Fale com ela.', '2- Elogie ela.', '3- Beba vinho.', '4- Coma o bife.'];
        let questao4_2;
        if (conversa) {
            questao4_2 = prompt(arrEscolhas.join(' | '))
        } else {
            arrEscolhas.splice(+conversa - 1, 0)
            questao4_2 = prompt(arrEscolhas.join(' | '))
        }
        if (questao4_2 == 1) {
            alert("Muito obrigada pelo jantar. Estou sentindo um clima romântico agora.")
            return escolha5()
        } else if (questao4_2 == 2) {
            return escolha4_2_2()
        } else if (questao4_2 == 3) {
            alert("~bebendo vinho")
            return escolha4_2(questao4_2)
        } else if (questao4_2 == 4) {
            alert("~comendo o bife")
            return escolha4_2(questao4_2)
        } else {
            alert("Escreva novamente uma resposta válida.")
        }
    }
}

function escolha4_2_2() {
    while (true) {
        let questao4_2_2;
        questao4_2_2 = prompt("1- Ótimas habilidades de churrasco você as aprendeu trabalhando em fast food? | 2- Eu gosto das paredes vermelhas da sua casa. Interessante escolha. | 3- Você é linda, alguma vez ja considerou ser modelo? | 4- Você é tao linda, não consigo tirar meus olhos de você. ")
        if (questao4_2_2 == 1) {
            alert("Não, apenas instinto. Fogo e carne, até um homem das cavernas poderia fazê-lo.")
            return escolha4_2()
        } else if (questao4_2_2 == 2) {
            alert("Paredes brancas são tão chatas, eu prefiro um pouco de cor.")
            return escolha4_2()
        } else if (questao4_2_2 == 3) {
            alert("Você está falando sério? Eu não sou modelo, mas não me importaria de tirar as minhas roupas.")
            return escolha4_2()
        } else if (questao4_2_2 == 4) {
            alert("Sim, eu notei. Isso está ficando um pouco estranho.")
            return escolha4_2()
        } else {
            alert("Escreva novamente uma resposta válida.")
        }
    }
}
