import * as React from 'react';

export default function Form(){
    return (
        <div className=' bg-white px-10 py-20 rounded-3xl border-2 border-gray-100'>
          <h1 className=' text-5xl font-semibold'>Welcome Back</h1>
          <p className=' font-medium text-lg text-gray-500 mt-4'>Welcome back § Please enter your details.</p>
        <div className=" mt-8  ">

            <div className=" text-lg font-medium"> 
                <label >Email</label>
                <input  
                
                className=' w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                placeholder='entre your email'
                
                />
            </div>
            <div className=" text-lg font-medium"> 
                <label >Password</label>
                <input  
                
                className=' w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                placeholder='entre your Password'
                
                />
            </div>

            <div  className=' mt-8 flex justify-between '  >
                <div> 
                    <input type="checkbox" 
                    
                    id='remember'

                    />
                </div>
                <label className=' ml-2 font-medium text-base ' for="remember"> Remember for 30 days </label>
            <button className=' font-medium text-base text-violet-500  '> Forget password </button>
            </div>


        </div>
        </div>
    )
}