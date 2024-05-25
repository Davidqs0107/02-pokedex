export const EnvConfiguration = () => ({
    environment: process.env.NODE_ENV || 'dev',
    mongoDB: process.env.MONGODB,
    port: process.env.PORT || 3000,
    defaultLimit: process.env.DEFAULT_LIMIT || 7
})