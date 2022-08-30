/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 */
module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost',
  {
    id: { primaryKey: true, type: DataTypes.INTEGER },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: { foreignKey: true, type: DataTypes.INTEGER },
    published: DataTypes.DATE,
    updated: DataTypes.DATE
  },
  {
    timestamps: false,
    tableName: 'BlogPosts'
  });

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, {
      foreignKey: 'userId', as: 'user'
    });
  };

  return BlogPost;
}