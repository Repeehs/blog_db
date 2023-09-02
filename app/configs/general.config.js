module.exports = {
    DBConnectors: {
        host: process.env.DB_HOST || "db4free.net" || "localhost",
        port: process.env.DB_PORT || 3306,
        username: process.env.DB_USER || "root",
        password: process.env.DB_PASSWORD || "",
        database: process.env.DB_NAME || "blog_database",
        dialect: process.env.DB_DIALECT || "mysql",
    },
    jwtAuthKey: 'abcxyz',
    tokenLoginExpireDays: '30 days'
};