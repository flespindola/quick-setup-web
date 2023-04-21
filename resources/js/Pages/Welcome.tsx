import { Link, Head } from '@inertiajs/react';
import { PageProps } from '@/types';

export default function Welcome({ auth, laravelVersion, phpVersion }: PageProps<{ laravelVersion: string, phpVersion: string }>) {
    return (
        <>
            <Head title="Welcome" />
            <div style={{ backgroundColor: "#E6E6E6" }} className="position-relative d-sm-flex justify-content-sm-center align-items-sm-center h-100 bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">
                <div className="position-fixed top-0 end-0 p-3 text-right">
                    {auth.user ? (
                        <Link
                            href={route('dashboard')}
                            className="text-decoration-none"
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={route('login')}
                                className="text-decoration-none mx-2"
                            >
                                Log in
                            </Link>

                            <Link
                                href={route('register')}
                                className="ml-4 text-decoration-none mx-2"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </div>

                <div className="mx-auto p-5" style={{ maxWidth: '80rem' }}>

                    <div className="mt-3">
                        <div className="row">
                            <a
                                href="https://laravel.com/docs"
                                className="my-2 col-lg-6 col-12 p-5 bg-white rounded-lg shadow-2xl shadow d-flex text-decoration-none text-dark"
                            >
                                <div>
                                    <div style={{ width: '12rem', height: '12rem' }} className="d-flex align-items-center justify-content-center rounded">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            style={{ width: '6rem', height: '6rem', stroke: 'black' }}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                                            />
                                        </svg>
                                    </div>

                                    <h2 className="mt-6">
                                        Laravel
                                    </h2>

                                    <p className="mt-4">
                                        Laravel is a free and open-source PHP web framework, created by Taylor Otwell and intended for the development of web applications following the model–view–controller (MVC) architectural pattern and based on Symfony.
                                    </p>

                                    <a className="btn btn-outline-dark" href="https://laravel.com/docs/10.x">
                                        Documentation
                                    </a>
                                </div>
                            </a>

                            <a
                                href="https://react.dev/"
                                className="my-2 col-lg-6 col-12 p-5 bg-white rounded-lg shadow d-flex text-decoration-none text-dark"
                            >
                                <div>
                                    <div style={{ width: '12rem', height: '12rem' }} className="d-flex align-items-center justify-content-center rounded">
                                        <svg style={{ width: '6rem', height: '6rem' }} viewBox="-10.5 -9.45 21 18.9" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-4 mb-3 self-center d-flex"><circle cx="0" cy="0" r="2" fill="currentColor"></circle><g stroke="currentColor" strokeWidth="1" fill="none"><ellipse rx="10" ry="4.5"></ellipse><ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse><ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse></g></svg>
                                    </div>

                                    <h2 className="mt-6">
                                        React
                                    </h2>

                                    <p className="mt-4">
                                        ReactJS is one of the most popular JavaScript libraries for mobile and web application development. Created by Facebook, React contains a collection of reusable JavaScript code snippets used for user interface (UI) building called components.
                                    </p>

                                    <a className="btn btn-outline-dark m-auto" href="https://react.dev/">
                                        Documentation
                                    </a>
                                </div>
                            </a>

                            <a
                                href="https://www.typescriptlang.org/docs/"
                                className="my-2 col-lg-6 col-12 p-5 bg-white rounded-lg shadow d-flex text-decoration-none text-dark"
                            >
                                <div>
                                    <div style={{ width: '12rem', height: '12rem' }} className="d-flex align-items-center justify-content-center rounded">
                                        <svg style={{ width: '6rem', height: '6rem' }} viewBox="-10.5 -9.45 21 18.9" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-4 mb-3 self-center d-flex"><circle cx="0" cy="0" r="2" fill="currentColor"></circle><g stroke="currentColor" strokeWidth="1" fill="none"><ellipse rx="10" ry="4.5"></ellipse><ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse><ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse></g></svg>
                                    </div>

                                    <h2 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">
                                        TypeScript
                                    </h2>

                                    <p className="mt-4">
                                        TypeScript a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale. TypeScript understands JavaScript and uses type inference to give you great tooling without additional code.
                                    </p>

                                    <a className="btn btn-outline-dark m-auto" href="https://www.typescriptlang.org/docs/">
                                        Documentation
                                    </a>
                                </div>
                            </a>

                            <a
                                href="https://getbootstrap.com/docs/5.3/getting-started/introduction/"
                                className="my-2 col-lg-6 col-12 p-5 bg-white rounded-lg shadow d-flex text-decoration-none text-dark"
                            >
                                <div>
                                    <div style={{ width: '12rem', height: '12rem' }} className="d-flex align-items-center justify-content-center rounded">
                                        <svg style={{ width: '6rem', height: '6rem' }} viewBox="-10.5 -9.45 21 18.9" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-4 mb-3 self-center d-flex"><circle cx="0" cy="0" r="2" fill="currentColor"></circle><g stroke="currentColor" strokeWidth="1" fill="none"><ellipse rx="10" ry="4.5"></ellipse><ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse><ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse></g></svg>
                                    </div>

                                    <h2 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">
                                        Bootstrap
                                    </h2>

                                    <p className="mt-4">
                                        Bootstrap is a giant collection of handy, reusable bits of code written in HTML, CSS, and JavaScript. It's also a frontend development framework that enables developers and designers to quickly build fully responsive websites
                                    </p>

                                    <a className="btn btn-outline-dark m-auto" href="https://getbootstrap.com/docs/5.3/getting-started/introduction/">
                                        Documentation
                                    </a>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center mt-5 px-5 align-items-center justify-content-between">

                        <div className="text-muted mx-auto">
                            Setup Made By <a href="https://github.com/flespindola">Fabio Espindola</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
