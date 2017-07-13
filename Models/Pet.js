module.exports = function(sequelize, DataTypes) {
    var Pet = sequelize.define("Pet", {
        name: {
type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 140]
            }
        },
        animal_type: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 140]
            }
        },
        breed:{
        	type: DataTypes.STRING,
        	defaultValue: "mutt" 
        }
        dob: {
            type: DataTypes.DATE,
            allowNull: false
        },
        favorite_toy:{
        	type: DataTypes.STRING,
        	allowNull:false, 
        	validate:{
        		len:[1, 140]
        	}
        },
        image:{
        	type:DataTypes.STRING, 
        	defaultValue: photo.png
        }
    });
    return Pet;
};
