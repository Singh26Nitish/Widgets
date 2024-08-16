import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Header = ({ searchTerm, setSearchTerm }) => {
    const handleSearchChange = (e) => {
      setSearchTerm(e.target.value);
    };
    return(
        <div className='flex w-full mt-4 mb-2'>
            <div className='w-1/2'>
                <p className='font-bold text-blue-900 ml-4'>Home</p>
            </div>
            <div className='flex w-1/2'>
                <div className='border-2 border-blue-200 bg-blue-50 rounded-md w-1/2 mx-4'>
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <input
        type="text"
        placeholder="Search Widgets"
        value={searchTerm}
        onChange={handleSearchChange}
        className=" bg-blue-50 ml-2"
      />
                </div>
                <div className='flex w-1/2'>
                    <div className='flex w-1/2'>
                    <div className='mx-auto text-blue-200 hover:text-blue-900 flex items-center justify-center p-2 rounded-full border-2 border-transparent hover:border-blue-900 transition-all'>
    <i className="fa-regular fa-bell fa-lg"></i>
</div>

                    </div>
                    <div className='flex w-1/2'>
                        <div className='flex mx-auto items-center text-blue-200 hover:text-blue-900 rounded-full border-2 border-transparent hover:border-blue-900 transition-all p-1'>
                            <i class="fa-regular fa-circle-user fa-lg"></i><p className='ml-2 text-black font-bold'>User</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;