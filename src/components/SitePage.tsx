import Select from "react-select"
import DealsBanner from "./DealsBanner"
import LastUpdated from "./LastUpdated"
import SignUpBanner from "./SignUpBanner"
import ProductDropdown from "./ProductDropDown"
import ProductSection from "./ProductSection"
import MenuBar from "./MenuBar"

const SitePage = () => {
  return (
    <div className="flex flex-col justify-evenly items-center mt-20 text-[#4B5665]">
      <div className="w-[80vw]">
        <h1 className="text-[#2C384A] text-5xl">Best Website Builder in the US</h1>
        <div className="flex flex-row justify-between text-[#4B5665] my-10 w-full text-sm">
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
    </div>
  )
}

export default SitePage