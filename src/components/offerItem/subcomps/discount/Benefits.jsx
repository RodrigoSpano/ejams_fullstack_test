
const Benefits = () => {
  return (
    <div className="h-[33px] w-[542px] rounded-[4px] flex justify-evenly text-xs items-center capitalize">
      <span>Free shipping</span>
      {/* divider */}
      <span className="w-[1px] h-[16px] bg-[#CFCFCF] "></span>
      <div className="flex gap-1">
        <img src="/assets/others/lock.svg" alt="lock icon" />
        <span className="">Secure 256-bit SSL encryption.</span>
      </div>
      {/* divider */}
      <span className="w-[1px] h-[16px] bg-[#CFCFCF] "></span>
      <img src="/assets/others/cards.svg" alt="credit cards"  height={14} />
    </div>
  )
}

export default Benefits