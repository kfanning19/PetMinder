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
        breed: {
            type: DataTypes.STRING,
            defaultValue: "mutt"
        }
        dob: {
            type: DataTypes.DATE,
            allowNull: false
        },
        favorite_toy: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 140]
            }
        },
        image: {
            type: DataTypes.STRING,
            defaultValue: photo.png
        }
    }, {
        classMethods:{
            associate: fuction(models){
                Pet.belongsToMany(models.User, {through: 'UserPets', foreignKey: 'UserId'})
                Pet.hasMany(models.Activity, {onDelete: "cascade"})
                Pet.hasMany(models.Food, {onDelete: "cascade"})
                Pet.hasMany(models.Health, {onDelete: "cascade"})
                Pet.hasMany(models.Illness, {onDelete: "cascade"})
                Pet.hasMany(models.Medications, {onDelete: "cascade"})
                Pet.hasMany(models.Messages, {onDelete: "cascade"})
                Pet.hasMany(models.Professional, {onDelete: "cascade"})
                Pet.hasMany(models.Weight, {onDelete: "cascade"})
            }
        }
    });
    return Pet;
};
