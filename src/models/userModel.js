module.exports = (sequelize, DataTypes) => {

    const User = sequelize.define("user", {

        nom_user: { 
            type: DataTypes.STRING,
            allowNull: false
        },

        prenom_user: { 
            type: DataTypes.STRING,
            allowNull: false
        },

        pseudo_user: {
            type: DataTypes.STRING, 
            allowNull: false, 
        },
      
        ctc_user: {
            type: DataTypes.STRING,
            allowNull: false            
        },
      
        adr_user: {
            type: DataTypes.STRING,
            allowNull: false            
        },

        cp_user: {
            type: DataTypes.INTEGER,
            allowNull: false            
        },

      
        ville_user: {
            type: DataTypes.STRING, 
            allowNull: false, 
        },

        pays_user: {
            type: DataTypes.STRING, 
            allowNull: false, 
        },

        tlp_user: {
            type: DataTypes.INTEGER,
            allowNull: true            
        },

        sec_user: {
            type: DataTypes.STRING,
            allowNull: false            
        },
    });

    return User;
};