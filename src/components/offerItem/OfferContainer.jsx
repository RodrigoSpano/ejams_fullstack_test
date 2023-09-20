import ReviewCard from './review/ReviewCard'
import DataOffer from './subcomps/DataOffer'

const OfferContainer = () => {
  return (
    <div className="W-[1245px] h-[879px] bg-[#FAFAFA] self-center flex mt-7 p-7 gap-7">
      <div className="flex flex-col gap-10">
        <img
          src="/assets/others/product.png"
          alt="product"
          className="w-[575px] h-[591px]"
        />
        <ReviewCard />
      </div>
      <DataOffer />
    </div>
  )
}

export default OfferContainer
