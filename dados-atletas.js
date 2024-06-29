class Atletas {
    constructor(nome, idade, peso, altura, notas){
        this.nome = nome
        this.idade = idade
        this.peso = peso
        this.altura = altura
        this.notas = notas
    }
    calculaCategoria(){
        let categoria = ['Infantil','Juvenil','Itermédiario','Adulto','Sem categoria']
        if (this.idade <= 11 && this.idade >= 9){
            return `${categoria[0]}`
        }else if(this.idade <= 13 && this.idade >= 12){
            return `${categoria[1]}`
        }else if(this.idade <= 15 && this.idade >= 14){
            return `${categoria[2]}`
        }else if(this.idade <= 30 && this.idade >= 16){
            return `${categoria[3]}`
        }else{
            return `${categoria[4]}`
        }
    }
    calculaMediaValida(){
        let organizaMatriz = this.notas.sort((a, b)=>{
            return a - b
        });
        let notasModificadas = organizaMatriz.slice(1,4)
        let soma = 0
        notasModificadas.forEach((nota)=>{
            soma += nota
        })
        let mediaNotas = soma/notasModificadas.length
        return mediaNotas
    }
    calculaIMC(){
        let imc = this.peso/ (this.altura * this.altura)
        return imc
    }
    obtemNomeAtleta(){
        return `Nome: ${this.nome}`
    }
    obtemIdadeAtleta(){
        return `Idade: ${this.idade}`
    }
    obtemPesoAtleta(){
        return `Peso: ${this.peso}`
    }
    obtemAltura(){
        return `Altura: ${this.altura}`
    }
    obtemNotasAtleta(){
        return `Notas: ${this.notas}`
    }
    obtemCategoria(){
        return `Categoria: ${this.calculaCategoria()}`
    }
    obtemIMC(){
        return this.calculaIMC()
    }
    obtemMediaValida(){
        return this.calculaMediaValida()
    }
}
let atleta = new Atletas('Cesar Abascal', 30, 80,1.7,[10,9.34,8.42,10,7.88])
console.log(atleta.obtemNomeAtleta())
console.log(atleta.obtemIdadeAtleta())
console.log(atleta.obtemPesoAtleta())
console.log(atleta.obtemNotasAtleta())
console.log(atleta.obtemCategoria())
console.log(`IMC: `+ atleta.calculaIMC())
console.log(`Media Válida: `+ atleta.calculaMediaValida())