const userCtrl = {}

const  bcrypt = require('bcrypt-nodejs')
const User = require('../models/User')

userCtrl.getUsers = async (req, res)=>{
    const results = await User.find()
    res.json(results);
}
userCtrl.updateUser = async(req, res)=>{
    const userFound = req.body
    const id = req.params.id
    try {

        await bcrypt.genSalt(10, async function(err, salt){
            if(err){
                console.log(err);
            }
            await bcrypt.hash(userFound.password, salt, null, function(err, hash){               
                if(err){
                    console.log(err);
                }
                console.log(hash);
                userFound.password = hash
                console.log(userFound.password);

            })
        })
        console.log(userFound)
        //Buscar al usuario para actualizar y mandarle el objeto de usuario a actualizar 
        await User.findByIdAndUpdate(id,userFound)
        res.json({
            message:"OK"
        })
    } catch (error) {
        console.log(error)
    }

}
userCtrl.createUser = async(req, res)=>{
    const body = req.body
    try{
        const newUser = new User(body)
        bcrypt.genSalt(10, function(err, salt){
            if (err) {
                return next(err);
            }
            bcrypt.hash(body.password, salt,null, function(err, hash){
                if(err){
                    return next(err)
                }
                newUser.password = hash;
            })
        });
        await newUser.save();
        res.json({
            message: "user saved"
        })
    }catch(e){
        console.log(e)
    }
    
}
userCtrl.deleteUser = async(req, res)=>{
    await User.findByIdAndDelete(req.params.id)
    res.json({
        message: "user deleted"
    }) 
}
userCtrl.loginUser = async (req, res)=>{
    const userFind = req.body;
    const results = await User.find()
    let passFound = {}
    results.forEach((user)=>{
        if(userFind.userName === user.userName){
            passFound = user
        }
    })
    bcrypt.compare(userFind.password,passFound.password, (err, result)=>{
        if(result){
            res.json({
                message:"OK",
                user: passFound
            })
        }else{
            res.json({
                message:"Error"
            })
        }
        
    })
}


module.exports = userCtrl