

function acionar(){


var diasem=document.getElementById("diasem")


var res=document.getElementById("res")

dia=Number(diasem.value)

res.innerHTML="O dia da semana é:"+dia




/*0-Domingo

  1-Segunda

  2-Terça

  3-Quarta

  4-Quinta

  5-Sexta

  6-Sabado

  */




switch(dia){



   case 0:

    res.innerHTML="Domingo"
    break

    case 1:

     res.innerHTML="segunda"
     break

     case 2:

     res.innerHTML="Terça"
     break

     case 3:

     res.innerHTML="Quarta"
     break

     case 4:

     res.innerHTML="Quinta"
     break

     case 5:
     res.innerHTML="sexta"
     break

     case 6:

     res.innerHTML="Sabado"
     break

}




}