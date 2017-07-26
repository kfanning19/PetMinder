module.exports = function(sequelize, DataTypes) {
    var Diet = sequelize.define("Diet", {
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
        },
        treat: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        location: {
            type: DataTypes.STRING
        },
        store: {
            type: DataTypes.STRING
        }
    });
    Diet.associate = function(models) {
        Diet.belongsTo(models.Pet, {
            foreignKey: {
                allowNull: false
            }
        });
    }
    return Diet;
};