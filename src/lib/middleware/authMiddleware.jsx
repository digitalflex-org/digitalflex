// // middleware.ts
// import { NextResponse } from 'next/server';
// import { jwtDecode } from 'jwt-decode';

// const roleProtectedRoutes = [
//     {
//         path: '/admin',
//         roles: ['admin'],
//     },
//     {
//         path: '/dashboard',
//         roles: ['admin'],
//     },
//     {
//         path: '/onboarding',
//         roles: ['admin', 'user', 'applicant'],
//     },
// ];

// function getUserRoleFromToken(token) {
//     if (!token) return null;
//     try
//     {
//         const decoded = jwtDecode(token);
//         console.log('decodedData:', decoded);
//         return decoded?.role || null;
//     } catch (err)
//     {
//         console.error('JWT decode failed:', err);
//         return null;
//     }
// }

// export function middleware(request) {
//     const { pathname } = request.nextUrl;

//     const protectedRoute = roleProtectedRoutes.find(route =>
//         pathname.startsWith(route.path)
//     );

//     if (!protectedRoute)
//     {
//         return NextResponse.next();
//     }

//     const token = request.cookies.get('auth_token')?.value;

//     const userRole = getUserRoleFromToken(token);

//     if (!userRole)
//     {
//         // Unauthenticated
//         const loginUrl = new URL('/auth', request.url);
//         loginUrl.searchParams.set('tab', 'signin');
//         loginUrl.searchParams.set('callbackUrl', request.nextUrl.pathname);
//         return NextResponse.redirect(loginUrl);
//     }

//     if (!protectedRoute.roles.includes(userRole))
//     {
//         // Unauthorized role
//         const redirectUrl = new URL('/auth', request.url);
//         redirectUrl.searchParams.set('tab', 'signin');
//         redirectUrl.searchParams.set('callbackUrl', request.nextUrl.pathname);
//         return NextResponse.redirect(redirectUrl);
//     }

//     return NextResponse.next();
// }

// export const config = {
//     matcher: ['/admin/:path*', '/dashboard/:path*', '/onboarding/:path*'],
// };
