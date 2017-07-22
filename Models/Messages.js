module.exports = function(sequelize, DataTypes) {
    var Messages = sequelize.define("Messages", {
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
                Messages.belongsTo(models.User, {
                    foreignKey: {
                        allowNull: false
                    }
                });
            }
    return Messages;
};
