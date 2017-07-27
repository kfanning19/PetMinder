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
            defaultValue: "N/A"
        },
        dob: {
            type: DataTypes.DATEONLY,
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
            allowNull: false,
            defaultValue: "http://i.imgur.com/QD0LUrV.jpg"
        }
    });
    Pet.associate = function(models) {
        Pet.belongsToMany(models.User, {
            through: {
                model: models.UserPets,
                unique: false
            },
            foreignKey: 'petId'
        });
        Pet.hasMany(models.Activity, { onDelete: "cascade" });
        Pet.hasMany(models.Diet, { onDelete: "cascade" });
        Pet.hasMany(models.Messages, { onDelete: "cascade" });
        Pet.hasMany(models.Contacts, { onDelete: "cascade" });
        Pet.hasMany(models.Weight, { onDelete: "cascade" });
    }
    return Pet;
};