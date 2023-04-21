import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';

export default function Dashboard({ auth }: PageProps) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2>Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div>
                <div className="mx-auto px-4">
                    <div className="bg-white overflow-hidden rounded-lg">
                        <div className="p-4">You're logged in!</div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
