/* eslint-disable react/prop-types */

const FeatureCard = ({text}) => {
  const textMap = {
    negative: <p className="text-[#4D5254]" key={Math.random()}>Negative Ion Technology may <span className="font-bold">help with allergens</span></p>,
    designed:<p className="text-[#4D5254]" key={Math.random()}>Designed for <span className="font-bold">air rejuvenation</span></p>,
    perfect: <p className="text-[#4D5254]" key={Math.random()}><span className="font-bold">Perfect for every room </span> in all types of places.</p>
  }
  const actualFeat = textMap[text]
  return (
    <div className="flex gap-3">
      <img alt="tick" src="/assets/others/tick.svg" width={22} height={22} />
      {actualFeat}
    </div>
  )
}

export default FeatureCard