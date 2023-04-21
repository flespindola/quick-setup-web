import { Link, InertiaLinkProps } from '@inertiajs/react';

export default function NavLink({ active = false, className = '', children, ...props }: InertiaLinkProps & { active: boolean }) {
    return (
        <Link
            {...props}
            className={
                'd-inline-flex align-items-center px-1 pt-1 border-bottom text-decoration-none ' +
                (active
                    ? 'border-primary border-bottom '
                    : 'border-0 ') +
                className
            }
        >
            {children}
        </Link>
    );
}
