module.exports = function(sequelize, DataTypes) {
    var Health = sequelize.define("Health", {
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
        },
        purpose: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    }, {
        classMethods: {
            associate: function(models) {
                Health.belongsTo(models.Pet, {
                    foreignKey: {
                        allowNull: false
                    }
                });
            }
        }
    });
    
    return Health;
};
