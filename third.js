function pigIt(str){
    //mover a primeira letra de cada palavra para o final e adicionar um ay após a mesma
    
    //vou pegar a string e dividir em palavras e armazenando em um array
    //preciso ter um loop que vai inteirar sobre o array e pegar cada palavra pelo índice
    //preciso transformar a palavra em um array
    //preciso pegar o indice zero da palavra 
    //preciso adicionar ao ultimo indice da palavra e colocar um ay após a letra
    //preciso transformar novamente em uma string
    
    let SeparaFrase = [];
    let JuntaFrase = [];
    let TransformaPalavra; //transforma palavra em array de letras
    let RemoveLetra; //remove a primeira letra do array
    let PalavraFinal;
    
    
    SeparaFrase = str.split(' ');//separa as palavras da frase
    
    for(let i = 0; i < SeparaFrase.length; i++){ //loop que vai iteirar sobre o array de palavras procurando o primeiro indice de cada uma
      TransformaPalavra = SeparaFrase[i].split(''); //Transforma a palavra em um Array
      RemoveLetra = TransformaPalavra.slice(0, 1); //retira a letra de TransformaPalavra deixando ele sem a inicial
      TransformaPalavra.splice(0, 1); //retira a letra inicial do indice 0
      TransformaPalavra.push(RemoveLetra); //adiciona a letra removida ao final
      console.log('ele n ta entrando no if');
  
      
      
      
      if (TransformaPalavra[TransformaPalavra.length - 1].includes("!" )|| TransformaPalavra[TransformaPalavra.length - 1].includes("?" )) {
        //TransformaPalavra.push('!');
        
        }
      
      else{
        TransformaPalavra.push('ay');//adiciona ay após a letra adicionada
        
      }   
      
      
      
      
      
      JuntaFrase.push(TransformaPalavra.join('')); //junta as letras em uma palavra novamente
      PalavraFinal = JuntaFrase.join(' ');
      
    }
    return PalavraFinal;
    
  }