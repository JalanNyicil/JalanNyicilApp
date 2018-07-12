const User = require('../model/user');
const jwt = require('jsonwebtoken');

module.exports = {
    fbLogin : (req,res)=>{
        console.log('test: ', req.headers)
        console.log(req.headers.fbid, req.headers.name, req.headers.email);
        User.findOne({email:req.headers.email})
        .then(function(user){
            if(user){
                let token = jwt.sign({fbid: user.fbId, name: user.name, email:user.email},process.env.SECRET_KEY,{
                    expiresIn:36000 //expires in 36000 second
                })
                res.status(200).json({message: 'user already exist', token})
            }else{
                let user = new User({
                    fbId : req.headers.fbid,
                    name : req.headers.name,
                    email : req.headers.email
                })
                user.save()
                .then(function(result){
                    let token = jwt.sign({fbid: req.headers.fbid, name: req.headers.name, email:req.headers.email},process.env.SECRET_KEY,{
                        expiresIn:36000 //expires in 3600 second
                    })
                    res.status(201).json({message: 'Create User Success', token, result})
                })
                .catch(function(err){
                    console.log('error',err);
                    res.status(400).json({error : err})
                })

            }
        })
        .catch(err=>{
            res.status(400).json({error:err})
        })
    }
}
