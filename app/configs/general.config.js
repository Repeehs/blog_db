module.exports = {
    DBConnectors: {
        host: process.env.DB_HOST || "127.0.0.1" || 'db4free.net',
        port: process.env.DB_PORT || 3306 || 443,
        username: process.env.DB_USER || "root" || 'sheeper',
        password: process.env.DB_PASSWORD || 'H.S20T.H04',
        database: process.env.DB_NAME || "blog_schema" || "test_api",
        dialect: process.env.DB_DIALECT || "mysql",
    },
    jwtAuthKey: 'abcxyz',
    tokenLoginExpireDays: '30 days'
};
// Im tired