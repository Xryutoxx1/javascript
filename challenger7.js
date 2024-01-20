class SmallestIntegerFinder {
    findSmallestInt(args) {
      let minusnumber = args[0];
      for(let x = 0; x<= args.lenght; x++){
        if(args[x] < minusnumber ){
            minusnumber = args[x];
        }
      }
      return minusnumber
    }
  }