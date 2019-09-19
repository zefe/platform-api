const config = {
    port: process.env.PORT || 3000,
    database_url: 'mongodb://localhost:27017/bdplatform'
    //database_url: process.env.STRING_CONNECTION || 'mongodb+srv://eda-user:pVo8wlh2ruY6scK5@natcluster-uquuf.mongodb.net/eda?retryWrites=true'
};

module.exports = { config };