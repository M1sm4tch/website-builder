import { SpecialDealProduct } from "./Interfaces/interface"
import Image from "next/image";

interface DealCardVerticalProps {
product: SpecialDealProduct;
className: String;
}
  
const DealCardVertical: React.FC<DealCardVerticalProps> = ({ product }) => {
    return (
        <div className="m-10 w-auto hover:shadow-lg">
            <div className="rounded-md flex flex-col items-center">
                <div>
                    <div className='m-20'>
                        <Image src={product.image} alt="product image" height={103} width={144}/>
                    </div>
                </div>
                <div className="flex flex-row">
                    {
                        product.special.map((tab)=>(
                            <div className="p-2 text-sm text-[#074786] m-2 bg-[#F2F4F7] rounded-md">
                                {tab}
                            </div>
                        ))
                    }
                </div>
                <div>
                    <p className="text-[#626E79] font-bold">{product.title}</p>
                </div>
                <div>
                    <p className="text-[#626E79] text-wrap">{product.description}</p>
                </div>
                <div className=" ml-1 flex flex-row justify-start w-full items-baseline">
                    <p className="text-lg mr-2 text-[#5C6874]">{product.discounted_price}</p>
                    <p className="text-xs text-weight-100 text-[#9FA9B3] mr-2">{product.original_price}</p>
                    <p className="text-xs text-red-600">({product.discount_percentage}% Off)</p>
                </div>
                <div className="w-full mt-2">
                    <button className="bg-blue-500 ml-0 text-white w-full rounded-md p-3 m-1 hover:m-0 hover:border hover:border-solid hover:border-blue-500">
                        View Deal
                    </button>
                </div>
            </div>
        </div>
    ) 
}

export default DealCardVertical