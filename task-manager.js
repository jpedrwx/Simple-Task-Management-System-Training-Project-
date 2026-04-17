let tarefas = new Array(100);
let concluidas = new Array(100);
let contador = 0;

while (true) {
    
    console.log("//////////////////////////\n1 - Adicionar tarefa\n2 - Listar tarefas\n3 - Concluir tarefa\n4 - Remover tarefa\n5 - Sair");
    let opcao = Number(prompt("ESCOLHA UMA OPÇÃO: "));
    
    if (opcao == 5) {
        break;
        
    } else if (opcao < 1 || opcao > 5) {
        console.log("Opção inválida. Tente novamente\n");
        
    } else if (opcao == 1) {
        
        if (contador >= 100) {
            console.log("Limite de tarefas atingido.\n");
        } else {
            let tarefaNova = prompt("Nome da tarefa? ");
            console.log("Tarefa '" + tarefaNova + "' salva com sucesso.\n");
            tarefas[contador] = tarefaNova;
            concluidas[contador] = false;
            contador++;
        }
        
    } else if (opcao == 2) {
        
        if (contador == 0) {
            console.log("Nenhuma tarefa cadastrada.\n");
        } else {
            let i = 0;
            while (i < contador) {
                console.log(i + 1 + " - " + tarefas[i]);
                if (concluidas[i]) {
                    console.log(" 'Concluída'\n");
                } else {
                    console.log(" 'Pendente'\n");
                }
                i++;
            }
        }
        
    } else if (opcao == 3) {
        
        if (contador == 0) {
            console.log("Nenhuma tarefa para concluir.\n");
        } else {
            let i = 0;
            while (i < contador) {
                console.log(i + 1 + " - " + tarefas[i]);
                if (concluidas[i]) {
                    console.log(" 'Concluída'\n");
                } else {
                    console.log(" 'Pendente'\n");
                }
                i++;
            }

            let escolhas = Number(prompt("Digite o número da tarefa: "));
            
            if (escolhas < 1 || escolhas > contador) {
                console.log("Número inválido.\n");
            } else {
                let posicao = escolhas - 1;
                concluidas[posicao] = true;
                console.log("Tarefa concluída com sucesso!\n");
            }
        }
        
    } else if (opcao == 4) {
        
        if (contador == 0) {
            console.log("Nenhuma tarefa para remover.\n");
        } else {
            let i = 0;
            while (i < contador) {
                console.log(i + 1 + " - " + tarefas[i]);
                if (concluidas[i]) {
                    console.log(" 'Concluída'\n");
                } else {
                    console.log(" 'Pendente'\n");
                } 
                i++;
            }

            let escolhas = Number(prompt("Digite o número da tarefa: "));
            
            if (escolhas < 1 || escolhas > contador) {
                console.log("Número inválido.\n");
            } else {
                let posicao = escolhas - 1;
                let i = posicao;
                
                while (i < contador - 1) {
                    tarefas[i] = tarefas[i + 1];
                    concluidas[i] = concluidas[i + 1];
                    i++;
                }
                
                contador--;
                console.log("Tarefa removida com sucesso!\n");
            }
        }
    }
}
