class classePersonagem {
    
    constructor(nome,idade,tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    
    }
   
    Atacar(){
        if (this.tipo == 'guerreiro'){
            console.log("O " + this.tipo + " atacou usando " + "a espada")
        }
        else if (this.tipo == 'mago'){
            console.log("O " + this.tipo + " atacou usando " + "o cajado")
        }
        else if (this.tipo == 'ninja'){
            console.log("O " + this.tipo + " atacou usando " + "a shuriken")
        }
        else if (this.tipo == 'monge'){
            console.log("O " + this.tipo + " atacou usando " + "artes marciais")
        }
        
    }

}

novoPersonagem = new classePersonagem("Edson",24,"guerreiro");
novoPersonagem.Atacar();
