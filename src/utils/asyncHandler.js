
const asyncHandler =(requestHandler)=>{

    (req,res,next)=>{
        Promise.resolve(requestHandler(re,res,next))
        .catch((error)=>next(error))
    }   
}

export {asyncHandler};