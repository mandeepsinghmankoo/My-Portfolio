
function Footer() {
   
    return (
        <div
            className={`my-20 mx-10 p-5 border-t-4 border-[#08fb1d] transition-opacity 
                }`} >
            <div className='text-center space-y-2'>
                <p className='text-gray-300'>Designed & Built by Mandeep Singh Mankoo</p>
                <p className='text-gray-300'>Crafted with ❤️ by Mandeep</p>
                <p className='text-gray-400 text-sm'>© {new Date().getFullYear()} Mandeep Singh. All rights reserved.</p>
            </div>

        </div>
    )
}

export default Footer
