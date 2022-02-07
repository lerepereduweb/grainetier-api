module.exports = (sequelize, DataTypes) => {

    const ImgAnimal = sequelize.define("imganimals", {

        type_img: {
            type: DataTypes.STRING,
            allowNull: false            
        },

        image: {
            type: DataTypes.STRING,
            allowNull: false            
        },

        thumbimage: {
            type: DataTypes.STRING,
            allowNull: true            
        },

        alt: {
            type: DataTypes.STRING,
            allowNull: true            
        },

        title: {
            type: DataTypes.STRING,
            allowNull: true            
        },
    });

    return ImgAnimal;
};