let main = (i)=>{
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
          return 2
        }
      }
    }
  }
}

main(3987)