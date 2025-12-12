
function Footer() {
   
    return (
        <div
            className={`my-10 sm:my-16 lg:my-20 mx-4 sm:mx-6 lg:mx-10 p-3 sm:p-4 lg:p-5 border-t-4 border-[#08fb1d] transition-opacity 
                }`} >
            <div className='text-center space-y-2'>
                <p className='text-gray-300 text-sm sm:text-base'>Designed & Built by Mandeep Singh Mankoo</p>
                <p className='text-gray-300 text-sm sm:text-base'>Crafted with ❤️ by Mandeep</p>
                <p className='text-gray-400 text-xs sm:text-sm'>© {new Date().getFullYear()} Mandeep Singh. All rights reserved.</p>
            </div>

        </div>
    )
}

export default Footer
