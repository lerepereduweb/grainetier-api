module.exports = (sequelize, DataTypes) => {

    const User = sequelize.define("user", {

        nom_user: { 
            type: DataTypes.STRING,
            allowNull: true
        },
      
        pseudo_user: {
            type: DataTypes.STRING, 
            allowNull: false, 
        },
      
        ctc_user: {
            type: DataTypes.STRING,
            allowNull: true            
        },
      
        ville_user: {
            type: DataTypes.STRING, 
            allowNull: false, 
        },
      
        adr_user: {
            type: DataTypes.STRING,
            allowNull: true            
        },

        cp_user: {
            type: DataTypes.INTEGER,
            allowNull: true            
        },

        tlp_user: {
            type: DataTypes.INTEGER,
            allowNull: true            
        },

        mer_user: {
            type: DataTypes.BOOLEAN,
            allowNull: false            
        },

        sec_user: {
            type: DataTypes.STRING,
            allowNull: true            
        },
    });

    return User;
};