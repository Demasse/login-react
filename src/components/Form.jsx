import * as React from 'react';

export default function Form(){
    return (
        <div>
          <h1 className=' text-5xl font-semibold'>Welcome Back</h1>
          <p className=' font-medium text-lg text-gray-500 mt-4'>Welcome back § Please enter your details.</p>
        <div className="">

            <div className=""> 
                <label >Email</label>
                <input  
                
                className=''
                placeholder='entre your email'
                
                />
            </div>

            <div className=""> 
                <label >Password</label>
                <input  
                
                className=''
                placeholder='entre your password'
                type='password'
                
                />
            </div>
            <div>
                <div>
                    <input type="checkbox" />
                </div>
                <label for="remember"> Rememer for 30 days </label>
            </div>

            <button> Forget password </button>

        </div>
        </div>
    )
}