 const apiRequest = async (url='',optionsObj=null,errMsg=null) => {
   try{
        const response =  await fetch(url,optionsObj)
        if(!response.ok) throw  Error('please reload the app') //response.ok => 400 , ! more than 400
   } catch (err){
        errMsg=err.Message
   } finally{
        return errMsg
   }
}

export default apiRequest