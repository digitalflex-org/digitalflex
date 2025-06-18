import { cookies, headers } from 'next/headers';
import { jwtDecode } from 'jwt-decode';
import { redirect } from 'next/navigation';

export async function isAuthenticated(redirectPath) {
    const cookieStore = await cookies();
    const token = cookieStore.get('auth_token');
    // const sessionId = cookieStore.get('sessionId')
    // console.log('session id:', sessionId);
    // console.log('Server', token?.value);

    if (!token)
    {
        console.error('Not authenticated');
        redirect(`/auth?tab=signin&callbackUrl=${redirectPath}`);
    }

    const decoded = jwtDecode(token);
    console.log(decoded);
    return decoded;
}

export async function isAuthorized(role, requiredRoles) {
    if (!role || !requiredRoles.includes(role))
    {
        return 'unauthorized';
    }
    return 'authorized';
}
