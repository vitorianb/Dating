function escolha1(){
    while(true){
    let numero = prompt("1- Elogie sua aparência. | 2- Diga algo inteligente. | 3- Dê a ela um abraço. | 4- Diga algo engraçado.")
    if(numero == 1) {
        alert("Adorei sua roupa");
        return escolha2();
    }
    else if (numero == 2) {
        alert("O quadrado dos dois lados de um triângulo retângulo é igual ao quadrado da hipotenusa.")
        return escolha2();
    }
    else if (numero == 3) {
        alert("Belo abraço, posso dizer que você é do tipo físico.")
        return escolha2();
    }
    else if (numero == 4) {
        alert("Quanto tempo dura um minuto depende de que lado da porta do banheiro você está.")
        return escolha2();
    }
    else{
        alert("Escreva novamente uma resposta válida.")
    }
    }
}


function escolha2(){
    while(true){
    let questao2;
    questao2 = prompt("1- Dê um beijo nela. | 2- Leia um poema.")
    if (questao2 == 1){
        alert("Você dá um selinho rápido nos lábios.")
        alert("Parece meio cedo para me beijar, você não acha?")
        return escolha2_1()

    }
    else if (questao2 == 2){
        alert("Isso é um livro de poemas? Me deixe ler um.")
        alert("Sim, é um livro de poesia. Vá em frente e escolha um para ler.")
        return escolha2_2()
    }
    else{
        alert("Escreva novamente uma resposta válida.")
    }
    }
}

function escolha2_1(){
    while(true){
    let questao2_1;
    questao2_1 = prompt("1- Eu não consegui me controlar, você é beijável de uma forma tao fofa. | 2- Eu só queria testar se a nossa saliva era compatível. | 3- Eu queria quebrar a tensão. | 4- Bem, se vamos para cama juntos precisamos começar em algum momento.")
    if (questao2_1 == 1) {
        alert("Que gentileza sua dizer.")
        return questao2_1_1234()
    }
    else if(questao2_1 == 2) {
        alert("Parece compatível para mim.")
        return questao2_1_1234()
    }
    else if(questao2_1 == 3) {
        alert("O que você quer dizer com quebrar a tensão?")
        alert("Digamos que ficaremos aqui a noite toda, teria toda essa tensão, se não te beijasse antes, nos nunca nos beijamos e eu nunca saberia.")
        alert("Estou feliz que você entendeu, vamos seguir em frente.")
        return questao2_1_1234()
    }
    else if(questao2_1 == 4) {
        alert("Bom, eu acho que você está se adiantando, não sou assim tão fácil de ir para a cam.a")
        return questao2_1_1234()
    }
    else{
        alert("Escreva novamente uma resposta válida.")
    }
    }
}

function questao2_1_1234 (){  
    alert("Me desculpe se fui um pouco presunçoso.")
    alert("Você é um verdadeiro cavalheiro, estou impressionada.")
    alert("Então, o que deveriamos fazer nessa noite?")
    alert("Você é meu convidado. Eu vou deixar você decidir.")
    return escolha3()
}

function escolha2_2(){ 
    while(true){
    let questao2_2;
    questao2_2 = prompt("1- Devo te comparar a um dia de verão. | 2- Em Xanadu fez Kubla Khan. | 3- Há algo sobre um martini.")
    if (questao2_2 == 1) {
        alert("Devo te comparar a um dia de verão? tu és mais amável e mais temperado: Ventos fortes sacodem os queridos botões de maio, e o arrendamento de verão tem data muito curta.")
        alert("Bonito poema, isso é shakespeare, certo?")
        return questao2_2_123()

    }
    else if(questao2_2 == 2) {
        alert("Em Xanadu fez Kubla Khan Um decreto majestoso da cúpula do prazer: Onde Alph, o rio sagrado, corria através de cavernas imensuráveis ​​para o homem descendo para um mar sem sol.")
        alert("Escolha interessante. Coleridge é um poeta tão estranho")
        return questao2_2_123()
    }
    else if(questao2_2 == 3) {
        alert("Há algo sobre um martini, um formigamento extremamente agradável. Um Martini amarelo e suave; Eu gostaria de ter um no momento.")
        alert("Ótimo, agora você está me deixando com sede")
        return questao2_2_123()
    }
    else{
        alert("Escreva novamente uma resposta válida.")
    }
    }
}

function questao2_2_123 (){
    alert("Já chega de poesia por hoje.")
    alert("Você é um verdadeiro cavalheiro, estou impressionada.")
    alert("Então, o que deveriamos fazer nessa noite?")
    alert("Você é meu convidado. Eu vou deixar você decidir.")
    return escolha3()
}

function escolha3(){
    while(true){
    let questao3;
    let questao3 = prompt("1- Ir para outro quarto. | 2- Beijar ela. | 3- Passar os dedos pelos cabelos dela. | 4- Ler um pouco de poesia.")
    if(questao3 == 1) {
        return escolha3_1()
    }
    else if(questao3 == 2) {
        alert("THE END. Seu beijo é ótimo! Mas todo esse carinho está me deixando cansada. Então eu vou te dar um beijo de boa noite.")
        break
    }
    else if(questao3 == 3) {
        alert("THE END. Seu beijo é ótimo! Mas todo esse carinho está me deixando cansada. Então eu vou te dar um beijo de boa noite.")
        break
    }
    else if(questao3 == 4) {
        alert("Essa foi boa, você está me deixando com um clima romântico.")
        return escolha3_4()
    }
    else{
        alert("Escreva novamente uma resposta válida.")
    }
    }
}

function escolha3_1(){
    while(true){
    let questao3_1;
    questao3_1 = prompt("1- Eu preciso usar o banheiro. | 2- Vamos para o quarto. | 3- Vamos para a cozinha. | 4- Vamos para a sala de estar. | 5- Vamos ver o quintal.")
    if(questao3_1 == 1) {
        alert("*END* Me desculpa, mudei de ideia. Lets call it a nigth. The end.")
        break
    }
    else if(questao3_1 == 2) {
        alert("*END* Desculpe, mas o quarto esta fora de limite. The end.")
        break
    }
    else if(questao3_1 == 3) {
        return escolha3_1_3()
    }
    else if(questao3_1 == 4) {
        alert("Você é um verdadeiro cavalheiro, estou impressionada.")
        return escolha3();
    }
    else if(questao3_1 == 5) {
        alert("Esse eh o quintal. Tem uma banheira de hidromassagem, uma piscina, e uma churrasqueira.")
        return escolha3_1_5()
    }
    else{
        alert("Escreva novamente uma resposta válida.")
    }
    }
}

function escolha3_4(numero){
    while(true){
    let questao3_4;
    questao3_4 = prompt("1- Ir para outro quarto. | 2- Beije ela. | 3- Passar os dedos pelos cabelos dela. | 4- Pegue um pouco de vinho da cozinha.")
    if(questao3_4 == 1) {  
        return escolha3_1();
    }
    else if(questao3_4 == 2) {
        alert("*END* Seu beijo é ótimo! mas todas essas carícias estão me deixando cansada. Então eu só vou te dar um beijo de boa noite.")
        break
    }
    else if(questao3_4 == 3) {
        alert("*END* Seu beijo é ótimo! mas todas essas carícias estão me deixando cansada. Então eu só vou te dar um beijo de boa noite.")
        break
    }
    else if(questao3_4 == 4) {
        alert("Muito álcool. Não estou me sentindo bem.")
        // escolha = prompt("1- Siga ela até o banheiro. | 2- Espere por ela no corredor.")
        // return correcao_estruturas_de_repeticao(escolha)
    }
    else{
        alert("Escreva novamente uma resposta válida.")
    }
    }
}

function escolha3_1_3 (numero){
    while(true){
    let questao3_1_3;
    questao3_1_3 = prompt("1- Pegue bife para o jantar. | 2- Pegue um vinho para beber. | 3- Vá para outro lugar.")
    if(questao3_1_3 == 1) {
        alert("É uma noite boa para um piquenique")
        return escolha4()
    }
    else if(questao3_1_3 == 2) {
        alert("Este vinho é uma boa safra")
        return escolha3_1_3()
    }
    else if(questao3_1_3 == 3) {
        return escolha3_1()
    }
    else{
        alert("Escreva novamente uma resposta válida.")
    }
    }
}
    

function escolha3_1_5 (){
    while(true){
    let questao3_1_5;
    questao3_1_5 = prompt("1- Pegue bife para o jantar. | 2- Volte para dentro. | 3- Coloque roupa de banho.")
    if(questao3_1_5 == 1) {
        alert("O que você diz de assarmos alguns bifes para o jantar?")
        escolha = prompt("1- Vá pegar vinho da cozinha. | 2- Espere pelos bifes. | 3- Coma o jantar na piscina. | 4- Vá nadar.")
        return escolha4()
    }
    else if(questao3_1_5 == 2) {
        return escolha3_1()
    }
    else if(questao3_1_5 == 3) {
        alert("Talvez possamos nadar depois do jantar.")
        return escolha3_1_5()
    }
    else{
        alert("Escreva novamente uma resposta válida.")
    }
    }
}

// //o mesmo que funcão 3.1.3.1
// function questao4(numero){
//     while(true){
//     var escolha;
//     if(numero == 1) {
//         alert("Muito álcool. Não estou me sentindo bem.")
//         escolha = prompt("1- Siga ela até o banheiro. | 2- Espere por ela no corredor.")
//         return correcao_estruturas_de_repeticao(escolha)
//     }
//     else if(numero == 2) {
//         escolha = prompt("1- Fale com ela. | 2- Elogie ela. | 3- Beba vinho. | 4- Coma o bife.")
//         return questao4_2(escolha)
//     }
//     else if(numero == 3) {
//         alert("Uma festa na piscina será mais divertida se nos vestirmos para a ocasião, espere aqui.")
//         escolha = prompt("1- Siga ela até dentro do quarto. | 2- Espere por ela no corredor.")
//         return correcao_estruturas_de_repeticao(escolha)
//     }
//     else if(numero == 4) {
//         alert("Talvez podemos nadar após o jantar.")
//         escolha = prompt("1- Vá pegar vinho da cozinha. | 2- Espere pelos bifes. | 3- Coma o jantar na piscina.")
//         return questao4(escolha)
//     }
//     else{
//         alert("Escreva novamente uma resposta válida.")
//     }
//     }
// }

// function questao4_2(numero){
//     while(true){
//     var escolha;
//     if(numero == 1) {
//         alert("Muito obrigada pelo jantar. Estou sentindo um clima romântico agora.")
//         return escolha5()
//     }
//     else if(numero == 2) {
//         escolha = prompt("1- Ótimas habilidades de churrasco você as aprendeu trabalhando em fast food? | 2- Eu gosto das paredes vermelhas da sua casa. Interessante escolha. | 3- Você é linda, alguma vez ja considerou ser modelo? | 4- Você é tao linda, não consigo tirar meus olhos de você. ")
//         return questao4_2_2(escolha)
//     }
//     else if(numero == 3) {
//         alert("~bebendo vinho")
//         escolha = prompt("1- Fale com ela. | 2- Elogie ela. | 4- Coma o bife.")
//         return questao4_2(escolha)
//     }
//     else if(numero == 4) {
//         alert("~comendo o bife")
//         escolha = prompt("1- Fale com ela. | 2- Elogie ela. | 3- Beba vinho.")
//         return questao4_2(escolha)
//     }
//     else{
//         alert("Escreva novamente uma resposta válida.")
//     }
//     }
// }

// function questao4_2_2(numero){
//     while(true){
//     var escolha;
//     if(numero == 1) {
//         alert("Não, apenas instinto. Fogo e carne, até um homem das cavernas poderia fazê-lo.")
//         return questao4_2(escolha) 
//     }
//     else if(numero == 2) {
//         alert("Paredes brancas são tão chatas, eu prefiro um pouco de cor.")
//         return questao4_2(escolha) 
//     }
//     else if(numero == 3) {
//         alert("Você está falando sério? Eu não sou modelo, mas não me importaria de tirar as minhas roupas.")
//         escolha = prompt("1- Fale com ela. | 3- Beba vinho. | 4- Coma o bife.")
//         return questao4_2(escolha)
//     }
//     else if(numero == 4) {
//         alert("Sim, eu notei. Isso está ficando um pouco estranho")
//         escolha = prompt("1- Fale com ela. | 3- Beba vinho. | 4- Coma o bife.")
//         return questao4_2(escolha)  
//     }
//     else{
//         alert("Escreva novamente uma resposta válida.")
//     }
//     }
// } 

// function escolha5(){
//     while(true){
//     let questao5;
//     questao5 = prompt("1- Vá se limpar no banheiro. | 2- Vá para o quarto e coloque uma roupa de banho. | 3- Vamos para cozinha. | 4- Vá para sala. | 5- Vá para o quintal")
//     var escolha;
//     if(questao5 == 1) {
//         alert("Espere aqui, só vai levar um minuto")
//         escolha = prompt("1- Espere por ela no corredor. | 2- Siga ela até dentro do banheiro.")
//         return questao5_1(escolha)
//     }
//     else if(questao5 == 2) {
//         alert("Espere aqui enquanto coloco meu traje de banho.")
//         escolha = prompt("1- Siga ela até dentro do quarto. | 2- Espere por ela no corredor.")
//         return questao5_2(escolha)
//     }
//     else if(questao5 == 3) {
//         escolha = prompt("1- Pegue bife para o jantar. | 2- Pegue um vinho para beber. | 3- Vá para outro lugar.")
//         return questao3_1_5 (escolha)
//     }
//     else if(questao5 == 4) {
//         alert("Bem vindo de volta a sala. O que devemos fazer agora?")
//         return escolha3()
//     }
//     else if(questao5 == 5) {
//         alert("Você quer nadar ou fazer alguma outra coisa?")
//         escolha = prompt("1- Beba vinho. | 2- Volte para dentro. | 3- Vá nadar.")
//         return questao5_2_2(escolha)
//     }
//     else{
//         alert("Escreva novamente uma resposta válida.")
//     }
//     }
// } 

// function questao5_1(numero){
//     while(true){
//     var escolha;
//     if(numero == 1) {
//         escolha = prompt("1- Use o banheiro. | 2- Vá para outro lugar.")
//         return questao5_1_1(escolha)
//     }
//     else if(numero == 2) {
//         alert("Me desculpa, mudei de ideia. Lets call it a nigth. THE END.")
//         break
//     }
//     else{
//         alert("Escreva novamente uma resposta válida.")
//     }
//     }
// } 

// function questao5_2(numero){
//     while(true){
//     var escolha;
//     if(numero == 1) {
//         alert("Me desculpa, mudei de ideia. Lets call it a nigth. THE END.")
//         break
//     }
//     else if(numero == 2) {
//         alert("Você gostou do meu biquini? Vamos para o quintal.")
//         escolha = prompt("1- Beba vinho. | 2- Volte para dentro. | 3- Vá nadar.")
//         return questao5_2_2(escolha)
//     }
//     }
// } 

// function questao5_1_1(numero){
//     while(true){
//     if(numero == 1) {
//         alert("Não se esqueça da pastilha de menta.")
//         return escolha5()
//     }
//     else if(numero == 2) {
//         return escolha5()
//     }
//     else{
//         alert("Escreva novamente uma resposta válida.")
//     }
//     }
// } 

// function questao5_2_2(numero){
//     while(true){
//     var escolha;
//     if(numero == 1) {
//         alert("~bebendo vinho~")
//         alert("Ok, estou de traje de banho aqui. O que devemos fazer agora?")
//         escolha = prompt("1- Beba vinho. | 2- Volte para dentro. | 3- Vá nadar")
//         return questao5_2_2(escolha)
//     }
//     else if(numero == 2) {
//         return escolha5()
//     }
//     else if(numero == 3) {
//         alert("É um bom exercício, mas nadar mt me deixa cansada.")
//         escolha = prompt("1- Tente tirar a parte de cima do biquini dela. | 2- Nade um pouco mais.")
//         return questao5_2_2_3(escolha)
//     }
//     else{
//         alert("Escreva novamente uma resposta válida.")
//     }
//     }
// }

//  function questao5_2_2_3(numero){
//     while(true){
//     var escolha;
//     if(numero == 1) {
//         alert("Me desculpa, mudei de ideia. Lets call it a nigth. THE END.")
//         break
//     }
//     else if(numero == 2) {
//         alert("O que devemos fazer? Se eu nadar um pouco mais posso ficar com cãibra.")
//         escolha = prompt("1- Mergulhar nua. | 2- Vamos sair da piscina. | 3- Nadar um pouco mais.")
//         return questao5_2_2_3_2(escolha)
//     }
//     else{
//         alert("Escreva novamente uma resposta válida.")
//     }
//     }
//  }

//  function questao5_2_2_3_2(numero){
//      while(true){
//     var escolha;
//     if(numero == 1) {
//         alert("Me desculpa, mudei de ideia. Lets call it a nigth. THE END.")
//         break
//     }
//     else if(numero == 2) {
//         alert("Nosso mergulho foi mt curto. Talvez possamos tentar novamente mais tarde.")
//         return escolha6()
//     }
//     else if(numero == 3) {
//         escolha = prompt("1-Tente tirar o biquini dela. | 2- Nadar embaixo d'agua.")
//         return questao5_2_2_3_2_3(escolha)
//     }
//     else{
//         alert("Escreva novamente uma resposta válida.")
//     }
//     }
// }

// function questao5_2_2_3_2_3(numero){
//     while(true){
//     if(numero == 1) {
//         alert("Me desculpa, mudei de ideia. Lets call it a nigth. THE END.")
//         break
//     }
//     else if(numero == 2) {
//         alert("~segurando a respiração~")
//         return escolha6()
//     }
//     else{
//         alert("Escreva novamente uma resposta válida.")
//     }
//     }
// }

// function escolha6(){
//     while(true){
//     let questao6;
//     questao6 = prompt("1- Beba vinho. | 2- Volte para dentro. | 3- Vá nadar. | 4- Vá nadar sem roupas.")
//     if(questao6 == 1) {
//         alert("~bebendo vinho~")
//         alert("Penso que nadamos demais por hoje.")
//         return escolha6()
//     }
//     else if(questao6 == 2) {
//         return escolha7()
//     }   
//     else if(questao6 == 3) {
//         alert("Me desculpa, mudei de ideia. Lets call it a nigth. THE END.")
//         break
//     }
//     else if(questao6 == 4) {
//         alert("Me desculpa, mudei de ideia. Lets call it a nigth. THE END.")
//         break
//     }
//     else{
//         alert("Escreva novamente uma resposta válida.")
//     }  
//     }
// } 

// function escolha7(){
//     while(true){
//     let questao7;
//     questao7 = prompt("1- Tome um banho. | 2- Vá para o quarto trocar de roupa. | 3- Ir para cozinha. | 4- Vá para sala. | 5- Vá para o quintal.")
//     var escolha;
//     if(questao7 == 1) {
//         alert("~tomando banho~")
//         return escolha1()
//     }
//     else if(questao7 == 2) {
//         alert("AINDA NÃO ACABOU")
//     }   
//     else if(questao7 == 3) {
//         return escolha8()
//     }
//     else if(questao7 == 4) {
//         return escolha3()
//     }
//     else if(questao7 == 5) {
//         escolha = prompt("1- Beba vinho. | 2- Volte para dentro. | 3- Vá nadar.")
//         return questao5_2_2(escolha)
//     }
//     else{
//         alert("Escreva novamente uma resposta válida.")
//     }
//     }
// }

// function escolha8(){
//     while(true){
//     let questao8;
//     questao8 = prompt("1- Pegue bife para o jantar. | 2- Pegue um vinho para beber. | 3- Vá para outro lugar.")
//     var escolha;
//     if(questao7 == 1) {
//         escolha = prompt("1- Vá pegar vinho da cozinha. | 2- Espere pelos bifes. | 3- Coma o jantar na piscina. | 4- Vá nadar.")
//         return questao4(escolha)
//     }
//     else if(questao7 == 2) {
//         alert("Este vinho é uma boa safra.")
//         escolha = prompt("1- Pegue bife para o jantar. | 2- Pegue um vinho para beber. | 3- Vá para outro lugar.")
//         return questao3_1_3(escolha)
//     }   
//     else if(questao7 == 3) {
//         return escolha7()
//     }
//     else{
//         alert("Escreva novamente uma resposta válida.")
//     }
//     }
// }

// function correcao_estruturas_de_repeticao(numero){
//     while(true){
//     if(numero == 1|| numero == 2){
//         alert("Me desculpe, mudei de ideia. Vamos terminar a noite por aqui. THE END.")
//         break
//     }
//     else{
//         alert("Escreva novamente uma resposta válida.")
//     }
//     }
// }
