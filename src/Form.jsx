import React from 'react';
import { useForm } from 'react-hook-form';

const Form = () => {
    const  {register,handleSubmit} = useForm(
      {
        defaultValues: async () =>{
          const responsePromise  = await fetch("https://jsonplaceholder.typicode.com/users/1")
          const user = await responsePromise.json()
          return  { 
          fullName: user.name ,
          email: user.email,
          age: Math.random() * 4,
          password: "testest",
          country: "MA"
          }
        }
      }
    )
    const submitForm = (data) => {
      console.log(data)
  }
    return (
        <div className="container h-100">
            <div className="row h-100 justify-content-center align-items-center">
                <div className="col-md-6">
                <h1 className="ml-4">Create new user</h1>
                    <hr className='text-primary'/>
                    <form onSubmit={handleSubmit(submitForm)}>
                        <div className="form-group">
                            <label>Full name</label>
                            <input className='form-control' type="text"  {...register("fullName" , {
                              required:true,
                              minLength:5,
                            } )} />
                        </div>

                        <div className="form-group">
                            <label>Age</label>
                            <input className='form-control' type="text" {...register("age" , {...register("fullName" ,{
                              required:true,
                              minLength:5
                            } )})}/>
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input className='form-control' type="password" {...register("password" , {...register("fullName" , {
                                  required:true,
                                  minLength:5
                            } 
                            )})}/>
                        </div>

                        <div className="form-group">
                            <label>Email</label>
                            <input className='form-control' type="email" {...register("email" ,{
                                  required:true,
                                  minLength:5
                            }  )}/>
                        </div>

                        <div className="form-group">
                            <label>Country</label>
                            <select className='form-select' {...register("country", {
                                  required:true,
                                  minLength:2
                            } )}>
                                <option value="">Select your country</option>
                                <option value="MA">Morocco</option>
                                <option value="DZ">Algeria</option>
                                <option value="TN">Tunisia</option>
                            </select>
                        </div>

                        <div className="my-3">
                            <input className='btn btn-primary'
                                   type="submit" value='Submit'/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Form;
