const {gets, print} = require('./funcauxiliares')
const media = gets()

if (media < 5){
     print ("Reprovado")
}
    else if (media >= 5 && media < 7){
         print ("Em recuperacao")
    }
        else  {
             print("Aprovado")
        }
    