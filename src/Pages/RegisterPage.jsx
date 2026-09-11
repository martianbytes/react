import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";

const schema = z.object({
    username: z
        .string()
        .min(2, "Username must be atleast 2 characters long")
        .max(15, "Username must not exceed 15 characters."),
    email: z.email(),
    password: z
        .string()
        .min(8, "Password must be atleast 8 characters long")
        .max(16, "Password must not exceed 16 characters."),
    confirmPassword: z
        .string()
        .min(8, "Password must be atleast 8 characters long")
        .max(16, "Password must not exceed 16 characters."),
    phoneNumber: z.e164().min(10, 'must be 10 ....')
})
.refine((data) => data.confirmPassword === data.password, { message: "Password didn't match", path: ["confirmPassword"] })

const Register = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: zodResolver(schema) });
    const onSubmit = (data) => console.log(data);
    return (
        <div className="flex-1 flex flex-col justify-center items-center bg-bg text-textMuted">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="rounded-lg flex"
            >
                <fieldset className="border border-border p-4 rounded-lg bg-surface">
                    <legend className="text-sm font-semibold text-textMuted px-2">
                        User Information
                    </legend>
                    <div className="grid grid-cols-1 gap-4 my-4 w-100">
                        {/* username section */}
                        <div className="flex flex-col gap-1">
                            <label htmlFor="username" className="text-text">Username</label>
                            <input
                                type="text"
                                {...register("username")}
                                placeholder="John Doe"
                                className="border-b-2 outline-none"
                            />
                            {errors.username && (
                                <span className="text-error">{errors.username.message}</span>
                            )}
                        </div>

                        {/* email section */}
                        <div className="flex flex-col gap-1">
                            <label htmlFor="email" className="text-text">Email</label>
                            <input
                                type="text"
                                {...register("email")}
                                placeholder="example@example.com"
                                className="border-b-2 outline-none"
                            />
                            {errors.email && <span className="text-error">{errors.email.message}</span>}
                        </div>

                        {/* password section */}
                        <div className="flex flex-col gap-1">
                            <label htmlFor="password" className="text-text">Password</label>
                            <input
                                type="password"
                                {...register("password")}
                                placeholder="**********"
                                className="border-b-2 outline-none"
                            />
                            {errors.password && <span className="text-error">{errors.password.message}</span>}
                        </div>

                        {/* confirm password section */}
                        <div className="flex flex-col gap-1">
                            <label htmlFor="confirmPassword" className="text-text">Confirm Password</label>
                            <input
                                type="password"
                                {...register("confirmPassword")}
                                placeholder="**********"
                                className="border-b-2 outline-none"
                            />
                            {errors.confirmPassword && <span className="text-error">{errors.confirmPassword.message}</span>}
                        </div>

                        <div>
                            <input type="text" {...register('phoneNumber')} placeholder="phonenumber" />
                            {errors.phoneNumber && <span className="text-error">{errors.phoneNumber.message}</span>}

                        </div>
                        <button type="submit" className="px-8 py-4 rounded-xl bg-primary hover:bg-linear-to-br from-primaryHover to-black/20 text-text active:bg-primaryHover/80">Submit</button>
                    </div>
                </fieldset>
            </form>
        </div>
    );
};

export default Register;
