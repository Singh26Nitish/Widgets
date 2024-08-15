import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Header(){
    return(
        <div className='flex w-full mt-4'>
            <div className='w-1/2'>
                <p className='font-bold text-blue-900 ml-4'>Home</p>
            </div>
            <div className='flex w-1/2 '>
                <div className='border-2 border-blue-200 bg-blue-100 rounded-md w-1/2 mx-4'>
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <input className='bg-blue-100 ml-2' type="text" placeholder="Search anything..." />
                </div>
                <div className='flex w-1/2'>
                    <div className='flex w-1/2'>
                        <div className='mx-auto text-blue-200 hover:text-blue-900 items-center'>
                            <i class="fa-regular fa-bell fa-lg"></i>
                        </div>
                    </div>
                    <div className='flex w-1/2'>
                        <div className='flex mx-auto items-center text-blue-200 hover:text-blue-900'>
                            <i class="fa-regular fa-circle-user fa-lg"></i><p className='ml-2 text-black font-bold'>User</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;