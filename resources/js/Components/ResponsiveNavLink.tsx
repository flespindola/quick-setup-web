import { Link, InertiaLinkProps } from '@inertiajs/react';

export default function ResponsiveNavLink({ active = false, className = '', children, ...props }: InertiaLinkProps & { active?: boolean }) {
    return (
        <Link
            {...props}
            className={`w-full d-flex align-items-start pl-3 pr-4 py-2 text-decoration-none ${
                active
                    ? 'border-primary '
                    : 'border-0 '
            } ${className}`}
        >
            {children}
        </Link>
    );
}
