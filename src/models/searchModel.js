module.exports = (sequelize, DataTypes) => {

    const Search = sequelize.define("search", {

        id_user: { 
            type: DataTypes.INTEGER, 
            allowNull: false
        },
      
        id_seed: {
            type: DataTypes.INTEGER, 
            allowNull: false, 
        },
      
        comment: {
            type: DataTypes.TEXT,
            allowNull: true            
        },

        date_search: {
            type: DataTypes.DATE,
            allowNull: true            
        },
    });

    return Search;
};