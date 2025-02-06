const userModel=require('../models/user.model');

module.exports.createUser=async({
    fullname,email,password
})=>{

    console.log("recieved data in usercreate", fullname,email,password);
    if(!fullname||!fullname.firstname || !fullname.lastname ||!email|| !password){
        console.error("Missing fields:", { fullname, email, password });
        throw new Error('All fields are required');
    }

    const {firstname,lastname}=fullname;
    const user=userModel. create({
        fullname:{

            firstname,
            lastname
        },
        email,
        password
    })
    return user;
}
