module.exports = function(sequelize, DataTypes) {
    var Caretaker = sequelize.define("Caretaker", {
        invite_string: {
            type: DataTypes.STRING,
            allowNull: false,
            isAlphanumeric: true,
            validate: {
                len: [15]
            }
        },
        email: {
            type: DataTypes.STRING,
            isEmail: true,
            allowNull: false
        },
        owner: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    }, {
        classMethods: {
            associate: function(models) {
                Caretaker.belongsTo(models.Pet, {
                    foreignKey: {
                        allowNull: false
                    }
                });
            }
        }
    });
    return Caretaker;
};
