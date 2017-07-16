module.exports = function(sequelize, DataTypes) {
    var Medications = sequelize.define("Medications", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len[1, 140]
            }
        },
        dosage: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len[1, 140]
            }
        },
        frequency: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len[1, 140]
            }
        },
        start: {
            type: DataTypes.DATE,
            allowNull: true
        },
        stop: {
            type: DataTypes.DATE,
            allowNull: true
        },
        last_dose:{
            type: DataTypes.DATE,
            allowNull: true
        },
        purpose: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        symptoms: {
            type: DataTypes.TEXT,
            allowNull: false

        },
        active: {
            type: DataTypes.BOOLEAN,
            defaultValue: true

        }
    }, {
        classMethods: {
            associate: function(models) {
                Medications.belongsTo(models.Pet, {
                    foreignKey: {
                        allowNull: false
                    }
                });
            }
        }
    });
    return Medications;
};
