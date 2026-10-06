module.exports = {
  port: process.env.PORT || 3000,
  jwt: {
    secret: process.env.SECRET,
    expiration: process.env.JWT_EXPIRATION_TIME,
  },
  dbconfig: {
    host: process.env.DBHOST,
    port: process.env.DBPORT,
    database: process.env.DBNAME,
    user: process.env.DBUSER,
    passwd: process.env.DBPASS,
    dialect: process.env.DBDIALECT,
    pool: {
      max: 5,
      min: 0,
      acquire: 600000,
      idle: 10000,
    },
    define: {
      underscored: true,
      freezeTableName: true,
      timestamps: true,
      paranoid: false,
    },
  },
};
