module.exports = (sequelize, DataTypes) => {

    const Section = sequelize.define("section", {

        menu_sec: { 
            type: DataTypes.STRING,
            allowNull: false
        },
      
        no_sec: {
            type: DataTypes.INTEGER, 
            allowNull: false, 
        },
      
        lien_sec: {
            type: DataTypes.STRING,
            allowNull: false            
        },
      
        sous_sec: {
            type: DataTypes.BOOLEAN, 
            allowNull: false, 
        },
      
        titre_sec: {
            type: DataTypes.STRING,
            allowNull: false            
        },

        desc1_sec: {
            type: DataTypes.TEXT,
            allowNull: true            
        },

        desc2_sec: {
            type: DataTypes.TEXT,
            allowNull: true            
        },
    });

    return Section;
};