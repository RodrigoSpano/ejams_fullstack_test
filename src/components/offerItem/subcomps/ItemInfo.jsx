
const ItemInfo = () => {
  return (
    <div className="flex">
      <div className="w-[134px] h-[134px] bg-[#2C7EF8] rounded-[10px] grid place-content-center">
        <img alt="clarifion air ionizer" src="/assets/others/clarifionitem.png" />
      </div>

      {/* //right side */}
      <div className="flex flex-col w-full px-3 gap-1">

      <div className="flex justify-between items-center w-full">
        <h4 className="text-xl">Clarifion Air Ionizer</h4>  
        <div className="flex items-center gap-2">
          <span className="line-through font-semibold text-[#969696]">$180</span>
          <p className="text-[22px] text-[#2C7EF8] font-semibold">$84</p>
        </div>
      </div>

      <img src="/assets/others/Stars.svg" alt="stars" className="h-[18px] w-[98px]" />

      <div className="flex gap-4">
        <img alt="point" src="/assets/others/point.svg" width={16} height={16} />
        <span className="text-[#37465A] font-light">12 left in Stock</span>
      </div>

      <p className="text-[#4D5254]">Simply plug a Clarifion into any standard outlet and replace bulky, expensive air purifiers with a simple.</p>

      </div>
    </div>
  )
}

export default ItemInfo