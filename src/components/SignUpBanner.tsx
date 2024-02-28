interface Props {
    className: String
}

const SignUpBanner = ( {className} : Props) => {
  return (
    <div className={`flex flex-row justify-between ${className}`}>
        <div className="text-3xl text-[#5C6874]">
            <p className="mb-3">Sign up and get exclusive</p> 
            <p>special deals</p>
        </div>
        <div>
            <input type="text" className="rounded-l-md p-4 m-1 mr-0 hover:m-0 hover:border hover:border-solid hover:border-blue-500"></input>
            <button className="text-white bg-blue-500 rounded-r-md p-4 m-1 ml-0 hover:m-0 hover:border hover:border-solid hover:border-blue-500">Sign Up</button>
        </div>
    </div>
  )
}

export default SignUpBanner