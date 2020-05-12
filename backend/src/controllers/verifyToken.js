const jwt = require('jsonwebtoken')
function verifyToken(req, res, next){
    try{
        const token = req.headers['x-access-token']
        if(!token){
            return res.status(404).json({
                message: "Error Token"
            })

        }
        
        jwt.verify(token, process.env.SECRET_TOKEN, (err, decoded)=>{
            if(err){
                return res.status(403).json({
                    message:"Error en Token"
                })
            }
            req.decoded = decoded
            next()
            
        })
        
    }catch(e){
        return {
            message:"Error token"    
        }
    }
}

module.exports = verifyToken