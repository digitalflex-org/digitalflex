import { z } from "zod";

export const signinValidation = (data) => {
    return z.object({
        email: z.string().email('Invalid email address').trim().nonempty('email is required'),
        password: z.string().min(8, 'Password must be at least 8 characters long').trim().nonempty('Password is required'),
    }).parse(data);
};

export const signUpValidation = (data) => {
    return z.object({
        name: z.string().min(3, 'Name must be at least 3 characters long').nonempty('Name is required'),
        email: z.string().email('Invalid email address').trim().nonempty('A valid email is required'),
        password: z.string().min(8, 'Password must be at least 8 characters long').trim().nonempty('A valid password is required'),
        preferred_name: z.string().min(3, 'Preferred name must be at least 3 characters long').optional(),
    }).parse(data);
}