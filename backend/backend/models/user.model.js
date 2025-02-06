const moongoose=require('mongoose');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');

const userSchema=new mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            required: true,
            minlength: [ 3, 'First name must be at least 3 characters long' ],
        },
        lastname: {
            type: String,
            minlength: [ 3, 'Last name must be at least 3 characters long' ],
        }
    },
    email:{
        type:String,
        required:true,
        unique:true,
        minlength:[5,'email  must be atleast 4 characters']
    },
    password:{
        type:String,
        required:true,
        select:false,
    },
    socketId:{
        type:String,
    }
})

userSchema.methods.generateAuthToken=function(){
    const token=jwt.sign(
        {_id:this._id},
        process.env.JWT_SECRET,
       {expiresIn: '1h' }
        );

    return token;
}

userSchema.methods.comparePassword=async function(){
    return await bcrypt.compare(password,this.password);
}

userSchema.methods.hashPassword=async function (){
    return await bcrypt.hash(this.password,10);
}

const userModel=mongoose.model('user',userSchema);
module.exports=userModel;