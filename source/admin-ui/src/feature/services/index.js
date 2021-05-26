import { post } from '../../utils';

export async function loginService(userName, password) {
    const result = await post('/admin-login', {
        data: { userName, password }
    });

    return result
}


export async function addNewAdminUser(firstName, secondName, email, roleName, date, active = 'active') {
    const result = await post('/admin-register', {
        data: { firstName, secondName, email, roleName, date, active }
    });

    return result
}



