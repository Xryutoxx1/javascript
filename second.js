function capitalize(s){
  let capitalized = []; //vai receber o indice 0 e 1 das palavras em maiusculo
  let separado = s.split(''); //variavel que recebe a frase e transforma em um array ainda sem transformar os membros em maiusculos
  let junto = []; //variavel que vai receber a var separado transformando so as impares em maiusculas e dps enviar para capitalized no indice 0
  let junto2 = [] ;
  
  for(let i = 0; i < s.length; i ++){
    if(i%2 === 0){
      junto[i] = separado[i].toUpperCase();
    
    }
    else{
      junto[i] = separado[i];
    }
    
    junto.join();
  }
  
   capitalized.push(junto.join(''));
  
  ///part 2///////////////////////////////////////////////////////////
  
  
    for(let i = 0; i < s.length; i ++){
    if(i%2 !== 0){
      junto2[i] = separado[i].toUpperCase();
    
    }
    else{
      junto2[i] = separado[i];
    }
    
    junto2.join();
  }
  
  capitalized.push(junto2.join(''));
  
  
  
  
  
  
  return capitalized ;
}