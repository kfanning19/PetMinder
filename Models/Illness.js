module.exports = function(sequelize, DataTypes) {
    var Illness = sequelize.define("Illness", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        active: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true
        },
        start: {
            type: DataTypes.DATE,
            allowNull: true
        },
        end: {
            type: DataTypes.DATE,
            allowNull: true
        }
        allergy: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        symptoms: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    }, {
        classMethods: {
            associate: function(models) {
                Illness.belongsTo(models.Pet, {
                    foreignKey: {
                        allowNull: false
                    }
                });
            }
        }
    });
    return Illness;
};
