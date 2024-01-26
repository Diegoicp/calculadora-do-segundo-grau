
function calcular(){

/*acessando as variaveis*/
var valorA =window.document.querySelector('#a')
var valorB =window.document.querySelector('#b')
var valorC =window.document.querySelector('#c')
var valor=window.document.querySelector('.valor')
/*Convertendo os valores de string para number*/
var va= Number(valorA.value);
var vb=Number(valorB.value);
var vc=Number(valorC.value);

let delta= vb**2-4*va*vc;

/*condição para a equação incompleta em c */
if(vc==0 ) {
    delta = vb*-1;
    valor.innerHTML=`o valor de x1 é 0 \n o valor de x2 é ${delta}`
 }
/*condição para a equação incompleta em b */
if(va!=0 && vb==0){
var divisao =vc*-1/va;
delta=Math.sqrt(divisao)
valor.innerText=`O valor de x1 é : ${delta} \n O valor de x2 é: -${delta}`
}

/*Condição para verificar se o valor de delta é negativo*/ 
if(delta < 0){
   valor.innerText=`O valor de Delta é ${delta} \n x1 e x2 não existem`
   }
/*resto das condições*/
 else{
    var x1=(-vb-Math.sqrt(delta))/(2*va)
    var x2=(-vb+Math.sqrt(delta))/(2*va)
    
    valor.innerText=`O valor de delta é ${delta}
    o valor de x1 é ${x1}
    o valor de x2 é ${x2}`;
 }

 
}
