'use client';

import { AuthProvider } from "@/contexts/authContext";


export default function OnboardingLayout({ children }) {
    return <AuthProvider>{children}</AuthProvider>
}