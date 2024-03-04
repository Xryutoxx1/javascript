function moveZeros(arr) {
    //mover os zeros de onde estiverem para o final preservando os outros elementos
    
    
    //fazer um loop checando o total de elementos do array para ele percorrer até o ultimo
    //um condicional if perguntando se o indice que o i se encontra é numericoe se é zero 
    //caso seja armazena ele em uma função
    //move ele para o indice -1
    //apaga o zero no indice que ele estava
    //coloca -1 no i para ele não pular o prox numero
    
    let PegaZero = 0;
    for(let i = 0; i < arr.length; i++){
      
      if(arr[i] === 0 ){
        
        arr.splice(i, 1);
        i--;
        PegaZero++;
        
      }
    }
    
    for(a = 0; a<PegaZero; a++){
      arr.push(0);
    }
    
    return arr ; 
  }