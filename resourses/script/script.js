// let nomes = ["Ana Clara", "Denise Martins", "Rayssa Giovanelly", "Roger Alcantra"]

// nomes.forEach(nome => {
//     console.log(nome)
// });

// let nome = prompt("Digite o nome do usuario:")
// while(nome!== "Thiago"){
//     console.log("Insira o nome correto:")
//     nome = prompt("Digite o nome do usuario novamente:")
// }



//Atividade


let active = true
let tarefas = ["Estudar","Lavar Louça","Faculdade","Curso","Trabalhar"]

while(active){
    
    let opção = prompt(`
        === MINHA TODO LIST=== \n
        1 - Cadastrar tarefas
        2 - Listar tarefas
        3 - Buscar tarefas
        4 - Atualizar tarefas
        5 - Excluir tarefas
        6 - Filtrar tarefas
        7 - Adicionar tarefa no inicio
        8 - Remover primeira tarefa
        9 - Remover última tarefa
        0 - Sair 
        Digite uma opção:`);
        
        
    switch(opção){
        case "1":
            // Cadastrar tarefas
            let cadTaref = prompt("Digte o nome da tarefa que deseja cadastrar!");
            tarefas.push(cadTaref);
            console.log(tarefas)
            prompt("Criada com sucesso!")
        break;

        case "2":
            // Listar tarefas
            tarefas.forEach(tarefa =>{
                prompt(tarefa)
            });
        break;
        
        case "3":
            // Buscar tarefas
            let buscTaref = prompt("Digite o nome da tarefa que desejá buscar:")
            if(buscTaref === null){
                prompt("Digite o nome de uma tarefa!")
            }

            else{
                let tarefa = tarefas.find( tarefa =>
                    tarefa.toLocaleLowerCase().includes(buscTaref.toLocaleLowerCase().trim())
                )
                if(tarefa === undefined){
                    prompt("Tarefa não encontrada")
                }
                else{
                    prompt("Tarefa encontrada: " .concat(tarefa))
                }
            }
        break;
        
        case "4":
            // Atualizar tarefas
            let nomeTaref = prompt("Digite o nome da tarefa que deseja atualizar: ")
            let novoNome = prompt("Digite o novo nome da tarefa: ")
            let tarefa = tarefas.find( tarefa =>
                    tarefa.toLocaleLowerCase().includes(nomeTaref.toLocaleLowerCase().trim())
                )
            let index = tarefas.indexOf(tarefa);
            tarefas[index] = novoNome
        break;

        case "5":
            // Excluir tarefas
            
            let excluTref = prompt("Digite o novo nome da tarefa: ")
            let excluir = tarefas.find( excluir =>
                    excluir.toLocaleLowerCase().includes(excluTref.toLocaleLowerCase().trim())
                )
            if(excluir === undefined){
                prompt("Tarefa não encontrada")
            }

            else{
                let exindex = tarefas.indexOf(excluir);
                tarefas.splice(exindex, 1)
                prompt("Tarefa excluida com sucesso " .concat(excluir))
            }
        break;

        case "6":
            // Filtrar tarefas
        break;

        case "7":
            // Adicionar tarefa no inicio
        break;

        case "8":
            // Remover primeira tarefa
        break;

        case "9":
            // Remover última tarefa
        break;

        case "0":
            console.log("Até logo!");
            active = false
        break;

        default:
            console.log("Opção inválida!!!");
    }
    
}