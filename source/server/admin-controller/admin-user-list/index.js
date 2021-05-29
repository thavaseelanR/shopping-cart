const { AdminLogin } = require('../../model/index');
const response = require('../../common-service/response');

async function adminUserList(req, res) {
    try {
        const initialRecord = 1;
        const { perPage, pageNumber } = req.body;
        let startNumber = (pageNumber - initialRecord) * 10
        const totalRecord = await AdminLogin.find({}).count();
        const getAllAdminUserList = await AdminLogin.find({}, { adminFirstName: 1, adminLastName: 1, adminUserName: 1, adminRole: 1, date: 1, active: 1, _id: 0 }).skip(startNumber).limit(perPage);
        if (getAllAdminUserList.length > 0) {
            response.successResponse('Successfully Get User', getAllAdminUserList, totalRecord, statusCode = 200, req, res)
        }
        else {
            response.failedResponse('No Record Fount', null, statusCode = 400, req, res)
        }
    }
    catch (e) {
        console.log(e);
    }
}

module.exports = adminUserList;