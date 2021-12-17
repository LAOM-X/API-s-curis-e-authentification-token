const jwt = require('jsonwebtoken');
//function to verify the token 
module.exports = function (req,res,next){
    //recover the token
    const tokenBearer = req.header('Authorization');

    //if the token is not mentionned in the request
    if(!tokenBearer)
    return res.status(401).send('Acces Denied');

    try{
        //remove the prefix 'Bearer' 
       const token = tokenBearer.split(' ')[1];
       //verification of the token
        const verified = jwt.verify(token,process.env.TOKEN_SECRET);
        req.user = verified;
        next();
    }catch(err){
        //when the token is bad(doesn't have the good syntax)
        res.status(400).send('Invalid Token');
  };
}