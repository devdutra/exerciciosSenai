var anoNasc = document.querySelector("#ano-nasc");

var sexo = document.getElementsByName("sexo");

var botao = document.getElementById("botao");

var imagem = document.querySelector("#img");

var texto = document.querySelector("#texto");

botao.addEventListener("click", () => {
  let data = new Date();
  let anoAtual = data.getFullYear();
  let idade = anoAtual - anoNasc.value;

if (anoNasc == "" || sexo[0].selected){
   alert("Prencha os campos corretamente para realizar a consulta")
}
else{

  if (sexo[1].selected) {
    if (idade <= 8) {
      texto.innerHTML = `Criança do sexo Masculino com ${idade} anos`;
      imagem.src = "img/menino.jpg";
    }
  } else if (sexo[2].selected) {
   if (idade <= 8) {
    imagem.src = "img/menina.jpg";
    texto.innerHTML = `Criança do sexo Feminino com: ${idade} anos`;
  }
  }
  if (sexo[1].selected){
  if (idade >= 9 && idade <= 18) { 
      texto.innerHTML = `Adolescente do sexo masculino com ${idade} anos`;
      imagem.src = "img/adola-menino.jpg";
  
  }
  }else if (sexo[2].selected) {
   if (idade >= 9 && idade <= 18){
    texto.innerHTML = `Adolescente do sexo Feminino com ${idade} anos`;
    imagem.src = "img/adola-menina.jpg";
  }


  }
  if (sexo[1].selected){
   if (idade >= 19 && idade <= 30) { 
       texto.innerHTML = `Jovem do sexo masculino com ${idade} anos`;
       imagem.src = "img/jovem-m.jpg";
   
   }
   }else if (sexo[2].selected) {
    if (idade >= 19 && idade <= 30){
     texto.innerHTML = `Jovem do sexo Feminino com ${idade} anos`;
     imagem.src = "img/jovem-f.jpg";
   }
 
   }

   if (sexo[1].selected){
      if (idade > 30){
         texto.innerHTML = `Senhor com ${idade} de idade`
         imagem.src = "img/idoso.jpg"
      }
   }else if(sexo[2].selected){
      if (idade > 30){
         texto.innerHTML = `Senhora com ${idade} de idade`
         imagem.src = "img/idosa.jpg"
      }
   }
 
  

}

});
