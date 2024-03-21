// Código do item escolhido e quantidade
const codigoItem = parseInt(prompt("qual item"))
const quantidade = parseInt(prompt("qual Quantidade"))

let valorTotal;

// Utilizando switch-case para calcular o valor total com base no código do item
switch (codigoItem) {
    case 100:
        valorTotal = quantidade * 1.70; // Preço do item 1
            alert(`você comprou ${quantidade} Cachorro Quentes e sua conta é de R$`  +valorTotal.toFixed(2) + `reais`);
        break;
   
    case 101:
        valorTotal = quantidade * 2.30; // Preço do item 2
            alert(`você comprou ${quantidade} Bauru Simples e sua conta é de R$`  +valorTotal.toFixed(2) + `reais`);
        break;

    case 102:
        valorTotal = quantidade * 2.60; // Preço do item 3
            alert(`você comprou ${quantidade} Bauru com Ovo e sua conta é de R$`  +valorTotal.toFixed(2) + `reais`);
        break;

    case 103:
        valorTotal = quantidade * 2.40; // Preço do item 4
            alert(`você comprou ${quantidade} Hamburguer e sua conta é de R$`  +valorTotal.toFixed(2) + `reais`);
        break;

     case 104:
        valorTotal = quantidade * 2.50; // Preço do item 5
            alert(`você comprou ${quantidade} Cheeseburguer e sua conta é de R$`  +valorTotal.toFixed(2) + `reais`);
        break;  

     case 105:
        valorTotal = quantidade * 1.00; // Preço do item 6
             alert(`você comprou ${quantidade} Refrigerante e sua conta é de R$`  +valorTotal.toFixed(2) + `reais`);
        break;

}

// Exibindo somente o valor total a pagar
//alert("Valor a pagar: R$" + valorTotal.toFixed(2));



