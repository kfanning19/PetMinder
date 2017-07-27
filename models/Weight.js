module.exports = function(sequelize, DataTypes) {
    var Weight = sequelize.define("Weight", {
        weight: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 140]
            }
        },
        date: {
            type: DataTypes.DATEONLY,
            defaultValue: Date.Now
        }
    });
    Weight.associate = function(models) {
        Weight.belongsTo(models.Pet, {
            foreignKey: {
                allowNull: false
            }
        });
    }

    return Weight;
};