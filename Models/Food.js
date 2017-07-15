module.exports = function(sequelize, DataTypes) {
    var Food = sequelize.define("Food", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 140]
            }
        },
        serving: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 140]
            }
        }
        treat: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        location: {
            type: DataTypes.STRING
        },
        store: {
            type: DataTypes.STRING
        }
    }, {
        classMethods: {
            associate: function(models) {
                Food.belongsTo(models.Pet, {
                    foreignKey: {
                        allowNull: false
                    }
                });
            }
        }
    });
    return Food;
};