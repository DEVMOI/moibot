export default (error)=>{

  let BreakException = {};
  
  try{
    
    if(true){
      throw BreakException
    };
  }catch(e){
    e = error
    if (e !== BreakException && e !== undefined) {
      throw e
    };
  }
}