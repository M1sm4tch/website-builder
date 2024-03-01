import DealsBanner from "./DealsBanner"
import LastUpdated from "./LastUpdated"
import SignUpBanner from "./SignUpBanner"
import ProductDropdown from "./ProductDropDown"
import ProductSection from "./ProductSection"
import MenuBar from "./MenuBar"

const SitePage = () => {
  return ( 
    <div className="flex flex-col justify-evenly mt-20 sm:mt-30 text-[#4B5665] w-auto mx-2 sm:mx-10 z-0 ">
      <h1 className="text-[#2C384A] text-3xl sm:text-5xl my-auto">Best Website Builder in the US</h1>
      <div className="text-xs sm:flex flex-col sm:flex-row justify-between text-[#4B5665] sm:my-3 w-full sm:text-sm sm:items-center">
        <LastUpdated className={'justify-start gap-2'}/>
        <ProductDropdown />
      </div>
      <MenuBar />
      <ProductSection />
      <DealsBanner />
      <div className="flex flex-row justify-center m-10 mb-14">
        <SignUpBanner className={'w-[80vw]'}/>
      </div>
    </div> 
  )
}

export default SitePage