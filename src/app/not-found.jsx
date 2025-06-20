import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[350px] max-w-md mx-auto text-center p-6">
            <h2 className="text-4xl font-semibold text-gray-800 mb-2">Page Not Found</h2>
            <p className="text-gray-600 mb-6">
                Sorry, we couldn’t find the page you’re looking for.
            </p>

            <Link
                href="/"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-white bg-[#004e89] hover:bg-blue-700 transition-colors duration-200"
            >
                <ArrowLeft className="w-5 h-5" />
                Return Home
            </Link>
        </div>
    );
}
