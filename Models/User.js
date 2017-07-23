module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 140]
            }
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 140]
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true,
                len: [1, 140]
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 15]
            }
        },
        image: {
            type: DataTypes.STRING,
            defaultValue: "photo.png"
        }
    });
    User.associate = function(models) {
        User.belongsToMany(models.Pet, {
            through: {
                model: models.UserPets,
                unique: false
            },
            foreignKey: 'userId'
        });
        User.hasMany(models.Messages, { onDelete: "cascade" });
    }
    return User;
};