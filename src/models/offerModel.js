module.exports = (sequelize, DataTypes) => {

    const Offer = sequelize.define("offer", {

        id_user: { 
            type: DataTypes.INTEGER, 
            allowNull: false
        },
      
        id_seed: {
            type: DataTypes.INTEGER, 
            allowNull: false, 
        },
      
        package: {
            type: DataTypes.STRING,
            allowNull: false            
        },
      
        type: {
            type: DataTypes.STRING, 
            allowNull: false, 
            enum: ["ECHANGE", "DON"]    
        },
      
        comment: {
            type: DataTypes.TEXT,
            allowNull: true            
        },

        date_offer: {
            type: DataTypes.DATE,
            allowNull: false            
        },

    });

    return Offer;
};