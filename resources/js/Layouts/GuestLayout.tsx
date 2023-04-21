import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import { PropsWithChildren } from 'react';

export default function Guest({ children }: PropsWithChildren) {
    return (
        <main className="page-wrapper">
            <div className="d-lg-flex position-relative h-100">
                {children}
            </div>
        </main>
    );
}
