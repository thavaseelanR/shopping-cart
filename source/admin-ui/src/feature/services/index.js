import { post, get } from '../../utils';


export async function loginService(userName, password) {
    const result = await post('/admin/admin-login', {
        data: { userName, password }
    });
    return result
}


export async function addNewAdminUser(firstName, secondName, email, roleName, date, active = 'active') {
    const result = await post('/admin/admin-register', {
        data: { firstName, secondName, email, roleName, date, active }
    });

    return result
}

export async function adminUserList(perPage, pageNumber) {
    const result = await post('/admin/get-admin-user-list', {
        data: { perPage, pageNumber }
    });
    return result
}



