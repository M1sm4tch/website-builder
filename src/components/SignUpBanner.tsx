interface Props {
    className: String
}

const SignUpBanner = ( {className} : Props) => {
  return (
    <div className={`flex flex-row items-center justify-between ${className}`}>
        <div className="text-base hover:text-blue-500 hover:underline sm:hover:none sm:text-3xl text-[#5C6874]">
            <p className="sm:mb-3">Sign up and get exclusive</p> 
            <p>special deals</p>
        </div>
        <div className='hidden h-auto sm:flex flex-row m-1 items-center rounded-md hover:m-0 hover:border hover:border-solid hover:border-blue-300'>
            <input type="text" className="rounded-l-md p-3 mr-0 h-full"></input>
            <button className="text-white bg-blue-500 rounded-r-md ml-0 h-full p-3">Sign Up</button>
        </div>
    </div>
  )
}

export default SignUpBanner