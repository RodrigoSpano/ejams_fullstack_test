import { progressItemsHelper } from "../../utils/helper"
import ProgressItem from "./subcomps/ProgressItem"

const OrderProgress = () => {
  return (
    <div className='xl:w-[1245px] h-[40px] flex justify-between self-center mt-10 gap-3 min:gap-5 md:gap-10'>
      {
        progressItemsHelper?.map((el, i) => <ProgressItem data={el} key={i} />)
      }
    </div>
  )
}

export default OrderProgress