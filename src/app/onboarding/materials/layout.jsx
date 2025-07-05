'use client';

import { AuthProvider } from "@/contexts/authContext";


export default function MaterialLayout({ children }) {
    return <AuthProvider>{children}</AuthProvider>
}