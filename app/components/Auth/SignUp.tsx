import React, { useEffect, useState } from 'react'
import {useFormik} from "formik";
import * as Yup from "yup";
import {AiOutlineEye, AiOutlineEyeInvisible,AiFillGithub} from "react-icons/ai";
import {FcGoogle} from "react-icons/fc"
import {styles} from "../../../app/styles/style"
import { error } from 'console';
import { useRegisterMutation } from '@/redux/features/auth/authApi';
import toast from 'react-hot-toast';

type Props = {
    setRoute:(route: string)=>void;
};

const schema=Yup.object().shape({
    name:Yup.string().required("Please enter your name!"),
    email:Yup.string().email("Invalid email").required("Please enter your email"),
    password:Yup.string().required("Please enter your password!").min(6),
});

const Signup: React.FC<Props> = ({setRoute}) => {
    const [show, setShow]=useState(false);
    const [register,{data,error,isSuccess}]= useRegisterMutation();

    useEffect(()=>{
        if(isSuccess){
            const message=data?.message || "Registration successful";
            toast.success(message);
            setRoute("Verification");
        }

        if(error){
            if('data' in error){
                const errorData=error as any;
                toast.error(errorData.data.message);
            }
        }
    },[isSuccess,error,data,setRoute]);

    const formik=useFormik({
        initialValues:{name:"",email:"",password:""},
        validationSchema:schema,
        onSubmit:async({name,email,password})=>{
            const data={
                name,email,password
            };
            await register(data);
        }
    });

    const {errors,touched,values,handleChange,handleSubmit}=formik;

  return (
    <div className='w-full'>
        <h1 className={`${styles.title}`}>
            Join LMS now!        </h1>
        <form onSubmit={handleSubmit}>
            <div className='mb-3'>
            <label
            className={`${styles.label}`}
            htmlFor='name'>
                Enter your Name
            </label>
            
            <input
            type="text"
            name=""
            value={values.name}
            onChange={handleChange}
            id="name"
            placeholder='Your Name Here'
            className={`${
                errors.name && touched.name && "border-red-500"
            }${styles.input}`}
            />
            {errors.name && touched.name &&(
                <span className="text-red-500 pt-2 block mx-auto text-center">{errors.email}</span>
            )}
            </div>
            <label
            className={`${styles.label}`}
            htmlFor='email'>
                Enter your Email
            </label>
            
            <input
            type="email"
            name=""
            value={values.email}
            onChange={handleChange}
            id="email"
            placeholder='loginmail@gmail.com'
            className={`${
                errors.email && touched.email && "border-red-500"
            }${styles.input}`}
            />
            {errors.email && touched.email &&(
                <span className="text-red-500 pt-2 block mx-auto text-center">{errors.email}</span>
            )}
            <div className="w-full mt-5 relative mb-1">
            <label
            className={`${styles.label}`}
            htmlFor='password'>
                Enter your Password
            </label>
            <input
            type={!show ? "password":"text"}
            name="password"
            value={values.password}
            onChange={handleChange}
            id="pasword"
            placeholder='password!@#$'
            className={`${
                errors.password && touched.password && "border-red-500"
            }${styles.input}`}
            />
            {!show ? (
                <AiOutlineEyeInvisible
                className="absolute bottom-3 right-2 z-1 cursor-pointer text-black dark:text-white"
                size={20}
                onClick={()=>setShow(true)}
                />
            ):(
                <AiOutlineEye
                className={`absolute bottom-3 right-2 z-1 cursor-pointer text-black dark:text-white`}
                size={20}
                onClick={()=>setShow(false)}
                />
            )}
            
            </div>
            {errors.password && touched.password && (
                <span className="text-red-500 pt-2 block mx-auto text-center">{errors.password}</span>
            )}
            <div className="w-full mt-5">
                <input
                type="submit"
                value="Sign Up"
                className={`${styles.button}`}></input>
            </div>
            <br/>
            <h5 className="text-center block text-color pt-4 font-Poppins text-[14px] text-black dark:text-white">
                Or Join With
            </h5>
            <div className='flex items-center justify-center my-3'>
                <FcGoogle size={30} className="cursor-pointer mr-2"/>
                <AiFillGithub size={30} className="cursor-pointer ml-2"/>
            </div>
            <h5 className="text-center text-white pt-4 font-Poppins text-[14px]">
                Already have any account?{" "}
                <span
                className="text-[#2190ff] pl-1 cursor-pointer"
                onClick={()=>setRoute("Login")}
                >
                    Sign in
                </span>

            </h5>
        </form>
    </div>
  )
}

export default Signup