import { useEffect, FormEventHandler } from 'react';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }: { status?: string, canResetPassword: boolean }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

            <div className="d-flex flex-column align-items-center w-100 h-100 px-3 px-lg-5 pt-5">
                <div className="w-100 mt-auto" style={{ maxWidth: "526px" }}>
                    <h1>Sign in</h1>
                    <p className="pb-3 mb-3 mb-lg-4">Don't have an account yet?&nbsp;&nbsp;
                        <Link href={route('register')}>Register here!</Link>
                    </p>
                    <form onSubmit={submit}>
                        <div className="pb-3 mb-3">
                            <div className="position-relative">
                                <InputLabel htmlFor="email" value="Email" />

                                <TextInput
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    className="form-control"
                                    autoComplete="username"
                                    isFocused={true}
                                    onChange={(e) => setData('email', e.target.value)}
                                    placeholder="Email address"
                                />

                                <InputError message={errors.email} className="mt-2" />
                            </div>
                        </div>

                        <div className="mt-4">
                            <InputLabel htmlFor="password" value="Password" />

                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                className="form-control"
                                autoComplete="current-password"
                                onChange={(e) => setData('password', e.target.value)}
                                placeholder="Password"
                            />

                            <InputError message={errors.password} className="mt-2" />
                        </div>

                        <div className="d-flex flex-wrap align-items-center justify-content-between pb-4 mt-4">
                            <div className="my-1">
                                <label className="flex items-center">
                                    <Checkbox
                                        name="remember"
                                        checked={data.remember}
                                        onChange={(e) => setData('remember', e.target.checked)}
                                    />
                                    <span className="form-check-label ms-1">Remember me</span>
                                </label>
                            </div>
                            {canResetPassword && (
                                <Link
                                    href={route('password.request')}
                                    className="fs-sm fw-semibold text-decoration-none my-1"
                                >
                                    Forgot your password?
                                </Link>
                            )}
                        </div>

                        <div className="d-flex align-items-center justify-content-end mt-4">
                            <PrimaryButton className="mb-4 w-100" disabled={processing}>
                                Log in
                            </PrimaryButton>
                        </div>
                    </form>
                </div>
            </div>
        </GuestLayout>
    );
}
