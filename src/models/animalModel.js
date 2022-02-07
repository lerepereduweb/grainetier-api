module.exports = (sequelize, DataTypes) => {

    const Animal = sequelize.define("animal", {

        type_anim:  {
            type: DataTypes.STRING, 
            allowNull: false, 
            enum: ["CHIEN", "CHAT", "NAC"]           
        },

        situ_anim:  {
            type: DataTypes.STRING, 
            allowNull: false, 
            enum: ["A ADOPTER", "ADOPTE", "DECEDE", "EN ATTENTE", "FALD", "PENSION PAYANTE", "PERDU", "RESERVE"]           
        },

        parrains:  {
            type: DataTypes.INTEGER, 
            allowNull: true,            
        },

        dte_situ:  {
            type: DataTypes.DATE, 
            allowNull: true,            
        },

        race_chien:  {
            type: DataTypes.STRING, 
            allowNull: true,            
        },

        nom_anim:  {
            type: DataTypes.STRING, 
            allowNull: false,            
        },

        sex_anim:  {
            type: DataTypes.BOOLEAN, 
            allowNull: true,            
        },

        dte_nai:  {
            type: DataTypes.DATE, 
            allowNull: true,            
        },

        desc_anim:  {
            type: DataTypes.TEXT, 
            allowNull: false,            
        },

        desc2_anim:  {
            type: DataTypes.TEXT, 
            allowNull: false,            
        },

        identifie:  {
            type: DataTypes.BOOLEAN, 
            allowNull: true,            
        },

        vaccine:  {
            type: DataTypes.BOOLEAN, 
            allowNull: true,            
        },
  
        sterilise:  {
            type: DataTypes.BOOLEAN, 
            allowNull: true,            
        },

        deparasite:  {
            type: DataTypes.BOOLEAN, 
            allowNull: true,            
        },

        test_fiv:  {
            type: DataTypes.BOOLEAN, 
            allowNull: true,            
        },

        ok_chat:  {
            type: DataTypes.BOOLEAN, 
            allowNull: true,            
        },

        ok_chien:  {
            type: DataTypes.BOOLEAN, 
            allowNull: true,            
        },

        ok_enfant:  {
            type: DataTypes.BOOLEAN, 
            allowNull: true,            
        },

        jrd_obl:  {
            type: DataTypes.BOOLEAN, 
            allowNull: true,            
        },

        clot_obl:  {
            type: DataTypes.BOOLEAN, 
            allowNull: true,            
        },

        rest_lieu:  {
            type: DataTypes.STRING, 
            allowNull: true,            
        },

        minimg_anim:  {
            type: DataTypes.STRING, 
            allowNull: false,            
        },

        imgs_anim:  {
            type: DataTypes.STRING, 
            allowNull: false,            
        },

        fav_anim:  {
            type: DataTypes.BOOLEAN, 
            allowNull: true,            
        },

        perdu_lieu:  {
            type: DataTypes.BOOLEAN, 
            allowNull: true,            
        },

        modif_anim:  {
            type: DataTypes.DATE, 
            allowNull: false,            
        },
    });   

  return Animal;
};
