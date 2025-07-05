'use client';
import { AuthProvider } from "@/contexts/authContext";

export default function EditorLayout({ children }) {
    return <AuthProvider>{children}</AuthProvider>
}