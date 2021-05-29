
module.exports = {
    successResponse: function (message, userInfo, totalRecord = null, statusCode = 200, req, res) {
        res.send({
            message,
            userInfo,
            totalRecord,
            statusCode,
        });
    },
    failedResponse: function (message, userInfo, statusCode, req, res) {
        res.send({
            message: message,
            userInfo: userInfo,
            statusCode: statusCode
        });
    }

};