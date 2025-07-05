'use client';

import { AuthProvider } from "@/contexts/authContext";

export default function AdminLayout({ children }) {
    return <AuthProvider>{children}</AuthProvider>
}