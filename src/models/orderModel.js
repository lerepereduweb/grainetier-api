module.exports = (sequelize, DataTypes) => {

    const Order = sequelize.define("order", {

        id_user_ask: { 
            type: DataTypes.INTEGER,
            allowNull: false
        },

        id_user_answer: { 
            type: DataTypes.INTEGER,
            allowNull: false
        },

        id_offer_ask: {
            type: DataTypes.INTEGER, 
            allowNull: true, 
        },

        id_offer_answer: {
            type: DataTypes.INTEGER, 
            allowNull: true, 
        },

        comment_ask: {
            type: DataTypes.TEXT,
            allowNull: true            
        },

        comment_answer: {
            type: DataTypes.TEXT,
            allowNull: true            
        },

        date_order: {
            type: DataTypes.DATE,
            allowNull: false            
        },

        modif_order: {
            type: DataTypes.DATE,
            allowNull: false            
        },

        vxf_valid: {
            type: DataTypes.BOOLEAN,
            allowNull: false            
        },

        vxf_send: {
            type: DataTypes.BOOLEAN,
            allowNull: false            
        },

        vxf_deliver: {
            type: DataTypes.BOOLEAN,
            allowNull: false            
        },

        vxf_pb: {
            type: DataTypes.BOOLEAN,
            allowNull: false            
        },

        comment_pb: {
            type: DataTypes.BOOLEAN,
            allowNull: false            
        },

        state_order: {
            type: DataTypes.BOOLEAN,
            allowNull: false            
        },

    });

    return Order;
};