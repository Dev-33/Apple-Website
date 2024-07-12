import React from 'react'
import "./Footer.css"
import { footer_sections } from '../constant'
import { footer_more } from '../utils'

const Footer = () => {
  return (
    <div className='footer  min-h-[50vh] border-2  flex justify-center mt-4 relative max-820:min-h-[145vh] max-sm:h-[165vh] max-500:h-[180vh] max-435:h-[200vh] max-350:h-[230vh]'>
    <div className=' h-full w-[65vw] bg-gray-100  p-3 text-[12px] text-gray-500 flex flex-col gap-2'>
      <p>
      ‡No Cost EMI is available with the purchase of an <a className='underline text-gray-600'>eligible product</a> made using qualifying cards on 3- or 6-month tenures from most leading banks. Until 6 August 2024, No Cost EMI is available with the purchase of an eligible iPhone made using qualifying cards on 3-, 6-, 9-, 12-, 18- or 24-month tenures from most leadings banks. Monthly pricing is rounded to the nearest rupee. Exact pricing will be provided by your bank, subject to your bank's terms and conditions. Minimum order spend applies as per your card-issuing bank threshold. Offer cannot be combined with Apple Store for Education or Corporate Employee Purchase Plan pricing. Card eligibility is subject to terms and conditions between you and your card-issuing bank. Offer may be revised or withdrawn at any time without any prior notice. <a className='underline text-gray-600'>Terms apply</a>.
      </p>
      <p>Representative example:</p>
      <p>Based on a 6-month tenure. ₹79900.00 total cost includes 15% p.a. and No Cost EMI savings of ₹3380.00, paid over 6 months as six monthly payments of ₹13317.00.</p>
      <p>Based on a 24-month tenure. ₹79900.00 total cost includes 15% p.a. and No Cost EMI savings of ₹11242.00, paid over 24 months as 24 monthly payments of ₹3329.00.</p>
      <p>1. Apple Intelligence will be available in beta on iPhone 15 Pro, iPhone 15 Pro Max, and iPad and Mac with M1 and later, with Siri and device language set to US English, as part of iOS 18, iPadOS 18 and macOS Sequoia later this year.</p>
      <p>Some features, additional languages and platforms will be coming over the course of the next year.
      *Qualified purchasers can receive promotion savings when they purchase an eligible product with promotion product at a qualifying location. Only one promotion product per eligible product per qualified purchaser.Offer is subject to availability. Subject to terms and conditions <a className='underline text-gray-600'>herein</a></p>
      <p>A subscription is required for Apple TV+.</p>
      <hr  className='border-gray-300 mt-2'/>



      <div className="bg-gray-100 py-3 ">
      <div className="max-w-screen-xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 max-1120:gap-2  px-3 sm:px-6 lg:px-8 relative right-[3%] max-820:hidden">
        {footer_sections.map((section, index) => (
          <div key={index} id={`for-${index}`} className='max-1120:mx-2'>
            <h2 className="font-semibold text-gray-800 mb-1">{section.heading}</h2>
            <ul className="space-y-1">
              {section.items.map((item, i) => (
                <li key={i} className="text-gray-700">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className=" right-[3%] min-820:hidden flex flex-col gap-4">
        {footer_sections.map((section, index) => (
          <div key={index} id={`for-${index}`} className='border-2 border-t-0 border-l-0 border-r-0'>
            <h2 className="font-semibold text-gray-800 mb-2 flex  justify-between items-center"><span>{section.heading}</span><img src={footer_more}/></h2>
           
          </div>
        ))}
      </div>

      <div className="downtown  text-[11px] text-gray-500 ">
        <p>More ways to shop: <a href="#" className="text-blue-500 underline">Find an Apple Store</a> or <a href="#" className="text-blue-500 underline">other retailer</a> near you. Or call 000800 040 1966.</p>
        <hr className='my-4 border-gray-300'/>
        <p className="mt-2">&copy; 2024 Apple Inc. All rights reserved.</p>
        <div className='flex justify-between w-[60vw] '>
        <div className="space-x-4 mt-2">
          <a href="#" className="text-gray-500">Privacy Policy</a>
          <a href="#" className="text-gray-500">Terms of Use</a>
          <a href="#" className="text-gray-500">Sales Policy</a>
          <a href="#" className="text-gray-500">Legal</a>
          <a href="#" className="text-gray-500">Site Map</a>
        </div>
        <p className="mt-2">India</p>
    </div>
    </div>
    </div>

    


      
      </div>
    </div>
  )
}

export default Footer
