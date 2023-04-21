import { useState, PropsWithChildren, ReactNode } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link } from '@inertiajs/react';
import { User } from '@/types';

export default function Authenticated({ user, header, children }: PropsWithChildren<{ user: User, header?: ReactNode }>) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return (
        <div className="min-vh-100 bg-gray-100">
            <nav className="bg-white border-bottom">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="d-flex justify-content-between" style={{ height: '4rem' }}>
                        <div className="d-flex">
                            <div className="shrink-0 d-flex align-items-center">
                                <Link href="/">
                                    <ApplicationLogo style={{ height: '3rem' }} className="d-block w-auto fill-current" />
                                </Link>
                            </div>

                            <div className="d-none mx-3 d-sm-flex">
                                <NavLink href={route('dashboard')} active={route().current('dashboard')}>
                                    Dashboard
                                </NavLink>
                            </div>
                        </div>

                        <div className="d-none d-sm-flex align-items-sm-center ml-6">
                            <div className="ml-3 relative">
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="d-inline-flex rounded-md">
                                            <button
                                                type="button"
                                                className="d-inline-flex align-items-center px-3 py-2 border-0 text-sm font-medium rounded-md bg-white"
                                            >
                                                {user.name}

                                                <svg
                                                    className="ml-2 -mr-0.5"
                                                    style={{ width: '20px', height: '20px' }}
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="#000000"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </span>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content>
                                        <Dropdown.Link href={route('profile.edit')}>Profile</Dropdown.Link>
                                        <Dropdown.Link href={route('logout')} method="post" as="button" className="border-0 bg-white">
                                            Log Out
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>
                        </div>

                        <div className="-mr-2 d-flex align-items-center d-sm-none">
                            <button
                                onClick={() => setShowingNavigationDropdown((previousState) => !previousState)}
                                className="d-inline-flex align-items-center justify-content-center border-0 bg-white p-2 rounded-md"
                            >
                                <svg style={{ width: '20px', height: '20px' }} fill="none" stroke="#000000" viewBox="0 0 24 24">
                                    <path
                                        className={!showingNavigationDropdown ? 'd-inline-flex' : 'd-none'}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        className={showingNavigationDropdown ? 'd-inline-flex' : 'd-none'}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div className={(showingNavigationDropdown ? 'd-block' : 'd-none') + ' d-sm-none'}>
                    <div className="pt-2 pb-3 px-3">
                        <ResponsiveNavLink href={route('dashboard')} active={route().current('dashboard')}>
                            Dashboard
                        </ResponsiveNavLink>
                    </div>

                    <div className="pt-4 pb-1 border-top">
                        <div className="px-4">
                            <div>
                                {user.name}
                            </div>
                            <div>{user.email}</div>
                        </div>

                        <div className="my-3 px-4">
                            <ResponsiveNavLink href={route('profile.edit')}>Profile</ResponsiveNavLink>
                            <ResponsiveNavLink method="post" href={route('logout')} as="button" className="bg-white">
                                Log Out
                            </ResponsiveNavLink>
                        </div>
                    </div>
                </div>
            </nav>

            {header && (
                <header className="bg-white shadow">
                    <div className="mx-auto py-4 px-4 sm:px-6 lg:px-8" style={{}}>{header}</div>
                </header>
            )}

            <main className="container mt-4">{children}</main>
        </div>
    );
}
