import DealsBanner from "./DealsBanner"
import SignUpBanner from "./SignUpBanner"

const SitePage = () => {
  return (
    <div>
      <DealsBanner />
      <div className="flex flex-row justify-center m-10 mb-14">
        <SignUpBanner className={'w-[80vw]'}/>
      </div>
    </div>
  )
}

export default SitePage