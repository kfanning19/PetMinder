module.exports = function(sequelize, DataTypes) {
    var Messages = sequelize.define("Messages", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 140]
            }
        },
        // image: {
        //     type: DataTypes.STRING,
        // },
        contents: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    });
    Messages.associate = function(models) {
                Messages.belongsTo(models.Pet, {
                    foreignKey: {
                        allowNull: false
                    }
                });
            }
    return Messages;
};
