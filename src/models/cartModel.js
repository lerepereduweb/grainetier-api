module.exports = (sequelize, DataTypes) => {

    const Cart = sequelize.define("cart", {

        id_user: { 
            type: DataTypes.INTEGER,
            allowNull: false
        },

        id_offer: {
            type: DataTypes.INTEGER, 
            allowNull: false, 
        },

        comment: {
            type: DataTypes.TEXT,
            allowNull: true            
        },

        date_cart: {
            type: DataTypes.DATE,
            allowNull: false            
        },
    });

    return Cart;
};