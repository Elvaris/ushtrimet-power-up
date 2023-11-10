const jwt=require('jsonwebtoken');

const verifyToken=async (req,res,next)=>{
    try{
        const token =req.headers.authorization.split('')[1];
        const verify=jwt.verify(token,process.env.SECRET_TOKEN);
        if(verify){
            req.user=verify;
            next();
        }
    }catch(error){
        if (error instanceof jwt.JsonWebTokenError){
            res.status(401).send('Invalid token');
        }else{
            console.log(error);
            res.status(500).send('Internal server error');
        }
    }
};
module.exports=verifyToken;