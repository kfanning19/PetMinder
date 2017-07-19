module.exports= function(sequelize, DataTypes){
	var UserPets= sequelize.define("UserPets",{
		id:{
			type:DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement:true
		},
		petId:{
			type:DataTypes.INTEGER
		},
		userId:{
			type:DataTypes.INTEGER
		}
	});
	return UserPets;
}