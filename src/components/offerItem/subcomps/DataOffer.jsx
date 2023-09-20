import Discount from "./Discount"
import DiscountContainer from "./DiscountContainer"
import Features from "./Features"
import ItemInfo from "./ItemInfo"
import OfferTitle from "./OfferTitle"

const DataOffer = () => {
  return (
    <div className="w-[550px] flex flex-col gap-5">
      <OfferTitle />
      <ItemInfo />
      <Features />
      <Discount />
      <DiscountContainer />
    </div>
  )
}

export default DataOffer