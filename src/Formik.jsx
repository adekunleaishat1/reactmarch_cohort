import React, {useEffect, useState} from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import axios from 'axios'

const Formik = () => {
    const [alluser, setAlluser] = useState([])
    const [loading, setloading] = useState(false)

    useEffect(() => {
      axios.get("http://localhost:4563/users")
      .then((res)=>{
        console.log(res);
        setAlluser(res.data)
      }).catch((err)=>{
        console.log(err);
        
      })
    }, [loading])
    
    const formik  = useFormik({
        initialValues:{
            username:"",
            email:"",
            password:""
        },
        validationSchema:yup.object({
            username:yup.string().min(4,"username cannot be less than 4 characters").required("username is required"),
            email:yup.string().email("must be a valid email").required("email is required"),
            password:yup.string().trim().min(8, "password cannot be less than 8 characters").required("password is required")
        }),
        onSubmit:(value)=>{
            setloading(true)
           console.log(value);
           const {username, email, password} = value
          const existuser = alluser.find((user)=> user.email === email)
          if (existuser) {
            alert("user already exist")
            setloading(false)
          }else{
            axios.post("http://localhost:4563/users", value)
            .then((res)=>{
             console.log(res);
             setloading(false)
            }).catch((err)=>{
             console.log(err);
             setloading(false)
             
            })
          }
        }
    })
    console.log(formik.errors);
    
  return (
    <div>
        <form className='px-3 py-3 w-50 mx-auto' onSubmit={formik.handleSubmit} action="">
            <h1>Sign up</h1>
            <input onChange={formik.handleChange} className='form-control mt-3'  type="text" name="username"  />
            <input onChange={formik.handleChange}  className='form-control mt-3'  type="text" name="email"  />
            <input onChange={formik.handleChange}  className='form-control mt-3'  type="text" name="password"  />
            <button disabled={loading} className='mt-3 btn btn-dark' type='submit'>Register</button>
        </form>
    </div>
  )
}

export default Formik