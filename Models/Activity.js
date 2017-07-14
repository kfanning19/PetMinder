module.exports = function(sequelize, DataTypes) {
    var Activity = sequelize.define("Activity", {
        event: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 140]
            }
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false
        }
    }, {
        classMethods: {
            associate: function(models) {
                Activity.belongsTo(models.Pet, {
                    foreignKey: {
                        allowNull: false
                    }
                });
                Activity.belongsTo(models.User, {
                    foreignKey: {
                        allowNull: false
                    }
                });
            }
        }
    });
    return Activity;
};
