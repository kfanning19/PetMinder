    models.User.find({where: {id: 1}}).then((user)=>{
        models.Pet.find({where:{id: 1}}).then((pet)=>{
            user.setPets([pet]);
        });
    });
