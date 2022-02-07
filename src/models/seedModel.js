module.exports = (sequelize, DataTypes) => {

    const Seed = sequelize.define("seed", {

        category:  {
            type: DataTypes.STRING, 
            allowNull: false, 
            enum: ["LEGUMES", "FRUITS", "CEREALES", "FLEURS", "AROMATES", "AUTRES"]           
        },

        type:  {
            type: DataTypes.STRING, 
            allowNull: false, 
        },

        variety:  {
            type: DataTypes.STRING, 
            allowNull: true, 
        },

        detail:  {
            type: DataTypes.STRING, 
            allowNull: false, 
        },

        color:  {
            type: DataTypes.STRING, 
            allowNull: false, 
        },

    });   

  return Seed;
};
