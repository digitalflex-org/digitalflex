'use client';
import AdminDashboard from "@/components/admin/dashboard/Dashboard";
import Spinner from "@/components/spinner";
import { useAuthGuard } from "@/components/utilities/hooks/useAuthGuard";


const AdminPage = () => {
    const { checking, user } = useAuthGuard(['admin']);
    if (checking) return <Spinner />
    return (
        <div className="relative">
            <AdminDashboard user={user} />
        </div>
    );
};

export default AdminPage;