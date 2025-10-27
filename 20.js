let opcao = "Sair";
while ( opcao != "Sair"){
    opcao = "Ajuda";
    switch (opcao) {
        case "Inicio": console.log("Tela inicial");break;
        case "Ajuda": console.log("Ajuda aberta");break;
        case "Sair":console.log("Saindo...");break;
        default: console.log("Opção invalida");
    }
    if (opcao == "Sair") break
}