function getCount(str) {
    let nsfarray = str.split("");
    let contt = 0;
    for(let x = 0; x < nsfarray.length; x++){
      if(nsfarray[x] === 'a' ||nsfarray[x] ===  'e' ||nsfarray[x] ===  'i' ||nsfarray[x] ===  'o' ||nsfarray[x] ===  'u' ){
        contt++;
      }
    } 
    
    return contt;
  }

console.log(getCount('abracadabra'));