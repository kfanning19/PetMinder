var models=require("./Models");
module.exports=function(){
    models.User.findById(1).then((user)=>{
        if(!user){console.log("no user")}
            else{
                console.log(user);
            }

        models.Pet.findById(1).then((pet)=>{
            console.log(pet)
            user.addPet([pet]);
        });
    });
}