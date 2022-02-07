module.exports = (sequelize, DataTypes) => {

    const Subsection = sequelize.define("subsection", {

        type_ssc: { 
            type: DataTypes.STRING,
            allowNull: false
        },

        no_ssc: {
            type: DataTypes.INTEGER, 
            allowNull: false, 
        },
      
        titre_ssc: {
            type: DataTypes.STRING, 
            allowNull: false, 
        },
      
        stitre_ssc: {
            type: DataTypes.STRING,
            allowNull: true            
        },
      
        lbl_ssc: {
            type: DataTypes.STRING, 
            allowNull: true, 
        },
      
        deb_ssc: {
            type: DataTypes.DATE,
            allowNull: false            
        },

        fin_ssc: {
            type: DataTypes.DATE,
            allowNull: true            
        },

        desc_ssc: {
            type: DataTypes.TEXT,
            allowNull: true            
        },

        lien_ssc: {
            type: DataTypes.STRING,
            allowNull: true            
        },

        pdf_ssc: {
            type: DataTypes.STRING,
            allowNull: true            
        },

        img_ssc: {
            type: DataTypes.STRING,
            allowNull: false            
        },

        modif_ssc: {
            type: DataTypes.DATE,
            allowNull: false            
        },
    });

    return Subsection;
};