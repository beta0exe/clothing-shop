"use client"
import { useState, useEffect } from 'react';
import BaseForm from "@/components/BaseForm";
import ValidateError from "@/components/ValidateError";
import Link from "next/link";

interface FormValues {
    email: string;
    password: string;
}

interface FormErrors {
    email?: string;
    password?: string;
}

const LoginClient = () => {
    const InitialValues: FormValues = { email: "", password: "" };

    const [formValues, setFormValues] = useState<FormValues>(InitialValues);
    const [formErrors, setFormErrors] = useState<FormErrors>({});
    const [submit, setSubmit] = useState<boolean>(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    }

    const validate = (values: FormValues): FormErrors => {
        const errors: FormErrors = {};
        const regx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!values.email) errors.email = "Email is required";
        else if (!regx.test(values.email)) errors.email = "Invalid email format";
        if (!values.password) errors.password = "Password is required";
        else if (values.password.length < 4) errors.password = "Password must be at least 4 characters";

        return errors;
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const errors = validate(formValues);
        setFormErrors(errors);
        setSubmit(true);
    }

    useEffect(() => {
        if (submit && Object.keys(formErrors).length === 0) {
            console.log("Form submitted successfully", formValues);
            //reminder for api call later
        }
    }, [formErrors, submit, formValues]);

    return (
        <BaseForm className="flex justify-start items-start p-5 md:p-20 h-[45%]" hs={"h-full md:h-[55vw]"}>
            <form className="w-full" onSubmit={handleSubmit}>
                {submit && Object.keys(formErrors).length === 0 ? <p className={"text-green-800 text-base md:text-3xl text-center mb-5 ring-1 ring-green-800 p-3 rounded-2xl"}>Welcome Back :)</p>:""}
                <h1 className="text-3xl md:text-5xl text-white text-center pb-5 md:pb-15 border-b-1 border-white">Login Form</h1>
                <div className="mt-7 flex flex-col gap-10">
                    <div className="flex flex-col gap-4 items-center">
                        <label className="text-3xl self-start md:ml-19.5">Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formValues.email}
                            onChange={handleChange}
                            className="px-5 ring-1 ring-gray-200 h-12 md:h-15 rounded-xl placeholder:text-xl placeholder:text-gray-600 w-full md:w-[80%] focus:outline-none"
                        />
                        <ValidateError error={formErrors.email} />
                    </div>

                    <div className="flex flex-col gap-4 items-center">
                        <label className="text-3xl self-start md:ml-19.5">Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formValues.password}
                            onChange={handleChange}
                            className="px-5 ring-1 ring-gray-200 h-12 md:h-15 rounded-xl placeholder:text-xl placeholder:text-gray-600 w-full md:w-[80%] focus:outline-none"
                        />
                        <ValidateError error={formErrors.password} />
                    </div>

                    <button
                        type="submit"
                        className="self-center mt-3 h-12 w-full md:w-[60%] text-2xl text-white ring-1 ring-gray-200 flex items-center justify-center md:h-15 rounded-2xl hover:bg-red-700"
                    >Submit</button>
                    <Link className={"text-white text-sm md:text-xl ml-5 md:ml-15"} href={"/register"} >Dont have any account ? (click Here)</Link>
                </div>
            </form>
        </BaseForm>
    );
};

export default LoginClient;
