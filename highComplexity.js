let highComplexity = (i)=>{
  if(i < 100){
    if(i < 100){
      return 1
    } else if(i < 50) {
      return 2
    }
  } else if(i < 50) {
    if(i < 100){
      return 1
    } else if(i < 50) {
      if(i < 100){
        return 1
      } else if(i < 50) {
        if(i < 100){
          return 1
        } else if(i < 50) {
          if(i < 100){
            return 1
          } else if(i < 50) {
            if(i < 200){
              return 1 + 1 - 1
            } else if(i < 50) {
              return 2
            }
          }
        }
      }
    }
  }
}

highComplexity(3987)
