import { SpecialDealProduct } from "./Interfaces/interface"
import Image from "next/image";

interface DealCardVerticalProps {
product: SpecialDealProduct;
className: String;
}
  
const DealCardVertical: React.FC<DealCardVerticalProps> = ({ product }) => {
    return (
        <div className="mx-2 w-[80%] m-5 p-5 sm:m-10 sm:p-5 sm:w-auto hover:shadow-lg flex-shrink-0 sm:flex-shrink rounded-md flex flex-col items-center ">
            <div className='sm:m-10 '>
                <Image src={product.image} alt="product image" width={564} height={412} className='w-full p-5 sm:p-0'/>
            </div>
            <div className="flex flex-row">
                {
                    product.special.map((tab)=>(
                        <div className="p-2 text-sm text-[#074786] mx-1 my-2 sm:m-2 bg-[#F2F4F7] rounded-md items-center justify-center">
                            {tab}
                        </div>
                    ))
                }
            </div>
            <div>
                <p className="text-[#626E79] font-bold text-sm sm:text-lg ">{product.title}</p>
            </div>
            <div>
                <p className="text-[#626E79] text-wrap text-sm sm:text-lg items-center">{product.description}</p>
            </div>
            <div className="sm:ml-1 flex flex-row justify-start w-full items-end">
                <p className="text-md sm:text-lg mr-2 text-[#5C6874]">${product.discounted_price}</p>
                <p className="text-xs text-weight-100 text-[#9FA9B3] mr-2">{product.original_price}</p>
                <p className="text-xs text-red-600">({product.discount_percentage}% Off)</p>
            </div>
            <div className="w-full mt-2">
                <button className="bg-blue-500 ml-0 text-white w-full rounded-md p-3 m-1 hover:m-0 hover:border hover:border-solid hover:border-blue-500">
                    View Deal
                </button>
            </div>
        </div>
    ) 
}

export default DealCardVertical