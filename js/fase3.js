function escolha5() {
    while (true) {
        let questao5;
        questao5 = prompt("1- Vá se limpar no banheiro. | 2- Vá para o quarto e coloque uma roupa de banho. | 3- Vamos para cozinha. | 4- Vá para sala. | 5- Vá para o quintal")
        if (questao5 == 1) {
            alert("Espere aqui, só vai levar um minuto")
            return escolha5_1()
        } else if (questao5 == 2) {
            alert("Espere aqui enquanto coloco meu traje de banho.")
            return escolha5_2()
        } else if (questao5 == 3) {
            return escolha3_1_5()
        } else if (questao5 == 4) {
            alert("Bem vindo de volta a sala. O que devemos fazer agora?")
            return escolha3()
        } else if (questao5 == 5) {
            alert("Você quer nadar ou fazer alguma outra coisa?")
            return escolha5_2_2()
        } else {
            alert("Escreva novamente uma resposta válida.")
        }
    }
}

function escolha5_1() {
    while (true) {
        let questao5_1;
        questao5_1 = prompt("1- Espere por ela no corredor. | 2- Siga ela até dentro do banheiro.")
        if (questao5_1 == 1) {
            return escolha5_1_1()
        } else if (questao5_1 == 2) {
            alert("Me desculpe, mudei de ideia. Vamos terminar a noite por aqui. THE END")
            break
        } else {
            alert("Escreva novamente uma resposta válida.")
        }
    }
}

function escolha5_2() {
    while (true) {
        let questao5_2;
        questao5_2 = prompt("1- Siga ela até dentro do quarto. | 2- Espere por ela no corredor.")
        if (questao5_2 == 1) {
            alert("Me desculpe, mudei de ideia. Vamos terminar a noite por aqui. THE END")
            break
        } else if (questao5_2 == 2) {
            alert("Você gostou do meu biquini? Vamos para o quintal.")
            return escolha5_2_2()
        } else {
            alert("Escreva novamente uma resposta válida.")
        }
    }
}

function escolha5_1_1() {
    while (true) {
        let questao5_1_1;
        questao5_1_1 = prompt("1- Use o banheiro. | 2- Vá para outro lugar.")
        if (questao5_1_1 == 1) {
            alert("Não se esqueça da pastilha de menta.")
            return escolha5()
        } else if (questao5_1_1 == 2) {
            return escolha5()
        } else {
            alert("Escreva novamente uma resposta válida.")
        }
    }
}

function escolha5_2_2() {
    while (true) {
        let questao5_2_2;
        questao5_2_2 = prompt("1- Beba vinho. | 2- Volte para dentro. | 3- Vá nadar.")
        if (questao5_2_2 == 1) {
            alert("~bebendo vinho~")
            alert("Ok, estou de traje de banho aqui. O que devemos fazer agora?")
            return escolha5_2_2()
        } else if (questao5_2_2 == 2) {
            return escolha5()
        } else if (questao5_2_2 == 3) {
            alert("É um bom exercício, mas nadar mt me deixa cansada.")
            return escolha5_2_2_3()
        } else {
            alert("Escreva novamente uma resposta válida.")
        }
    }
}

function escolha5_2_2_3() {
    while (true) {
        let questao5_2_2_3;
        questao5_2_2_3 = prompt("1- Tente tirar a parte de cima do biquini dela. | 2- Nade um pouco mais.")
        if (questao5_2_2_3 == 1) {
            alert("Me desculpe, mudei de ideia. Vamos terminar a noite por aqui. THE END")
            break
        } else if (questao5_2_2_3 == 2) {
            alert("O que devemos fazer? Se eu nadar um pouco mais posso ficar com cãibra.")
            return escolha5_2_2_3_2()
        } else {
            alert("Escreva novamente uma resposta válida.")
        }
    }
}

function escolha5_2_2_3_2() {
    while (true) {
        let questao5_2_2_3_2;
        questao5_2_2_3_2 = prompt("1- Mergulhar nua. | 2- Vamos sair da piscina. | 3- Nadar um pouco mais.")
        if (questao5_2_2_3_2 == 1) {
            alert("Me desculpe, mudei de ideia. Vamos terminar a noite por aqui. THE END")
            break
        } else if (questao5_2_2_3_2 == 2) {
            alert("Nosso mergulho foi mt curto. Talvez possamos tentar novamente mais tarde.")
            return escolha6()
        } else if (questao5_2_2_3_2 == 3) {
            return escolha5_2_2_3_2_3()
        } else {
            alert("Escreva novamente uma resposta válida.")
        }
    }
}

function escolha5_2_2_3_2_3() {
    while (true) {
        let questao5_2_2_3_2_3;
        questao5_2_2_3_2_3 = prompt("1-Tente tirar o biquini dela. | 2- Nadar embaixo d'agua.")
        if (questao5_2_2_3_2_3 == 1) {
            alert("Me desculpe, mudei de ideia. Vamos terminar a noite por aqui. THE END")
            break
        } else if (questao5_2_2_3_2_3 == 2) {
            alert("~segurando a respiração~")
            return escolha6()
        } else {
            alert("Escreva novamente uma resposta válida.")
        }
    }
}

function escolha6() {
    while (true) {
        let questao6;
        questao6 = prompt("1- Beba vinho. | 2- Volte para dentro. | 3- Vá nadar. | 4- Vá nadar sem roupas.")
        if (questao6 == 1) {
            alert("~bebendo vinho~")
            alert("Penso que nadamos demais por hoje.")
            return escolha6()
        } else if (questao6 == 2) {
            return escolha7()
        } else if (questao6 == 3) {
            alert("Me desculpe, mudei de ideia. Vamos terminar a noite por aqui. THE END")
            break
        } else if (questao6 == 4) {
            alert("Me desculpe, mudei de ideia. Vamos terminar a noite por aqui. THE END")
            break
        } else {
            alert("Escreva novamente uma resposta válida.")
        }
    }
}

function escolha7() {
    while (true) {
        let questao7;
        questao7 = prompt("1- Tome um banho. | 2- Vá para o quarto trocar de roupa. | 3- Ir para cozinha. | 4- Vá para sala. | 5- Vá para o quintal.")
        if (questao7 == 1) {
            alert("~tomando banho~")
            alert("AINDA NÃO ACABOU")
        } else if (questao7 == 2) {
            alert("AINDA NÃO ACABOU")
        } else if (questao7 == 3) {
            return escolha8()
        } else if (questao7 == 4) {
            return escolha3()
        } else if (questao7 == 5) {
            return escolha5_2_2()
        } else {
            alert("Escreva novamente uma resposta válida.")
        }
    }
}

function escolha8() {
    while (true) {
        let questao8;
        questao8 = prompt("1- Pegue bife para o jantar. | 2- Pegue um vinho para beber. | 3- Vá para outro lugar.")
        if (questao8 == 1) {
            return escolha4()
        } else if (questao8 == 2) {
            alert("Este vinho é uma boa safra.")
            return escolha3_1_3()
        } else if (questao8 == 3) {
            return escolha7()
        } else {
            alert("Escreva novamente uma resposta válida.")
        }
    }
}