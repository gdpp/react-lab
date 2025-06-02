import { useForm, type SubmitHandler } from "react-hook-form"

interface FormData {
    name: string;
    email: string;
    password: string;
}

const Form = () => {
    // register: is used to connect input fields to the form.
    // handleSubmit: is a function to handle form submission.
    // errors: contains validation errors for the form.
    // isSubmitting is a flag.

    const {register, handleSubmit, formState: {errors, isSubmitting} } = useForm<FormData>();

    const onSubmit: SubmitHandler<FormData> = (data) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="m-4">
            <div>
                <label className="floating-label">
                    <span>Name</span>
                    <input className="input input-md" type="text" {...register("name", { required: 'Name is required'})} placeholder="Name" />
                </label>
                {errors.name && <p className="text-error mt-1">{errors.name.message}</p> }
            </div>
            <div>
                <label className="floating-label mt-4">
                    <span>Email</span>
                    <input 
                        className="input input-md" 
                        type="text" {...register("email", { 
                            required: 'Email is required', 
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 
                                message: "Invalid email address"
                            } 
                        })} 
                        placeholder="Email" />
                </label>
                {errors.email && <p className="text-error mt-1">{errors.email.message}</p> }
            </div>
            <div>
                <label className="floating-label mt-4">
                    <span>Password</span>
                    <input className="input input-md" type="text" {...register("name", { minLength: {value: 8, message: "Password must be at least 8 characters"}})} placeholder="Password" />
                </label>
                {errors.name && <p className="text-error mt-1">{errors.name.message}</p> }
            </div>
            <button className="btn btn-md btn-primary mt-2" type="submit" disabled={isSubmitting}>{isSubmitting ? "Loading..." : "Send"}</button>
        </form>
    )
}

export default Form