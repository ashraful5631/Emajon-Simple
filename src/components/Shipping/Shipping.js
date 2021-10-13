import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
import './Shipping.css'

const Shipping = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user } = useAuth();
    const onSubmit = data => console.log(data);
    return (
        <div>
            <form className='shipping-form' onSubmit={handleSubmit(onSubmit)}>


                <input defaultValue={user.displayName} {...register("name", { required: true })} />

                {errors.name && <span className='error'>This field is required</span>}


                <input placeholder='your email' defaultValue={user.email} type="email" {...register("email", { required: true })} />

                {errors.email && <span className='error'>This field is required</span>}

                <input placeholder='your address' type="text" name="Address" id="" />

                <input type="submit" />
            </form>
        </div>
    );
};

export default Shipping;