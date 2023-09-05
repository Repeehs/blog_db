module.exports = {
    DBConnectors: {
        host: process.env.DB_HOST || 'db4free.net',
        port: process.env.DB_PORT || 443,
        username: process.env.DB_USER || 'sheeper',
        password: process.env.DB_PASSWORD || 'H.S20T.H04',
        database: process.env.DB_NAME || "test_api",
        dialect: process.env.DB_DIALECT || "mysql",
    },
    jwtAuthKey: 'abcxyz',
    tokenLoginExpireDays: '30 days'
};