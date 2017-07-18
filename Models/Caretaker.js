module.exports = function(sequelize, DataTypes) {
    var Caretaker = sequelize.define("Caretaker", {
            invite_string: {
                type: DataTypes.STRING,
                allowNull: false,
                isAlphanumeric: true,
                validate: {
                    len: [32]
                }
            },
            email: {
                type: DataTypes.STRING,
                isEmail: true,
                allowNull: false
            },
            owner: {
                type: DataTypes.BOOLEAN,
                default: true
            },
            petID: {
                type: DataTypes.STRING,
                allowNull: false
            },
            petName: {
                type: DataTypes.STRING,
                allowNull: false
            }, 
            inviter:{
                type: DataTypes.STRING,
                allowNull: false
            }
        });
return Caretaker;
};
