import React from 'react'

const AccountDetails = () => {
  return (
    <div className=" w-full h-max flex flex-col items-center justify-start bg-bg_Quaternary px-3 py-[15px]  rounded-md mb-2">
    <h2 className="text-text_Ternary  w-full text-base font-bold font-lato">
      Notes
    </h2>
    <div className="w-full flex items-center justify-start mt-5 gap-y-4 flex-col">
      <div className=" flex w-full flex-row items-start gap-x-2 justify-start">
        <span className=" p-1.5 min-w-3 min-h-3 aspect-square bg-bg_Primary flex items-center justify-center rounded-full text-[10px] font-lato text-text_Quaternary font-bold">
          1
        </span>
        <div className=" flex items-start justify-start flex-col gap-y-1">
          <span className=" text-text_Ternary  font-bold text-sm leading-4">
            Send Amount
          </span>
          <span className=" text-text_Quaternary2 font-medium  text-[13px] leading-4">
            Send your deposit amount on the given bank account.
          </span>
        </div>
      </div>
      <div className=" flex w-full flex-row items-start gap-x-2 justify-start">
        <span className=" p-1.5 min-w-3 min-h-3 aspect-square bg-bg_Primary flex items-center justify-center rounded-full text-[10px] font-lato text-text_Quaternary font-bold">
          2
        </span>
        <div className=" flex items-start justify-start flex-col gap-y-1">
          <span className=" text-text_Ternary  font-bold text-sm leading-4">
            Attach Screenshot
          </span>
          <span className=" text-text_Quaternary2 font-medium  text-[13px] leading-4">
            <div className=" w-full flex flex-col items-start justify-start">
              <span>Copy and Enter the 12 digit UTR Number.</span>
              <div className="mt-4 flex flex-col w-full items-center border border-notesBorderColor rounded-[15px]">
                <div className=" px-4 py-2.5 flex items-start justify-start gap-x-[5px] border-b border-notesBorderColor w-full">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_1689_2290)">
                      <path
                        d="M8 0C3.58862 0 0 3.58862 0 8C0 12.4114 3.58862 16 8 16C12.4114 16 16 12.4114 16 8C16 3.58862 12.4114 0 8 0Z"
                        fill="#C10B32"
                      ></path>
                      <path
                        d="M12.0542 6.30469L7.72083 10.6379C7.59082 10.7679 7.42017 10.8334 7.24951 10.8334C7.07886 10.8334 6.9082 10.7679 6.7782 10.6379L4.61157 8.47131C4.35083 8.21069 4.35083 7.78931 4.61157 7.52869C4.87219 7.26794 5.29346 7.26794 5.5542 7.52869L7.24951 9.224L11.1116 5.36206C11.3722 5.10132 11.7935 5.10132 12.0542 5.36206C12.3148 5.62268 12.3148 6.04395 12.0542 6.30469Z"
                        fill="#FAFAFA"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_1689_2290">
                        <rect width="16" height="16" fill="white"></rect>
                      </clipPath>
                    </defs>
                  </svg>
                  <div className=" flex flex-col w-full">
                    <span className=" font-lato text-sm font-medium text-text_Ternary ">
                      Paid ₹ 10,000{" "}
                    </span>
                    <span className=" font-lato text-[13px] font-medium text-text_Ternary ">
                      90********@indus
                    </span>
                  </div>
                  <div className=" float-right">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M9.99919 13.3334C10.1089 13.334 10.2176 13.313 10.3191 13.2715C10.4206 13.2301 10.513 13.169 10.5909 13.0917L15.5909 8.09174C15.7478 7.93482 15.8359 7.72199 15.8359 7.50007C15.8359 7.27816 15.7478 7.06533 15.5909 6.90841C15.4339 6.75149 15.2211 6.66333 14.9992 6.66333C14.7773 6.66333 14.5644 6.75149 14.4075 6.90841L9.99919 11.3251L5.59086 6.91674C5.43144 6.78022 5.22638 6.70888 5.01665 6.71698C4.80692 6.72508 4.60797 6.81203 4.45956 6.96044C4.31115 7.10885 4.2242 7.3078 4.2161 7.51753C4.208 7.72726 4.27934 7.93232 4.41586 8.09174L9.41586 13.0917C9.57108 13.2457 9.78058 13.3325 9.99919 13.3334Z"
                        fill="black"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className=" mt-3 px-[9px] w-full gap-[3px]">
                  <div className=" px-[9px] py-1.5 border border-primary w-full flex flex-col items-start justify-start rounded-md">
                    <span className=" text-text_Quaternary2 font-lato text-[13px] font-medium leading-4">
                      UPI Transaction Id
                    </span>
                    <span className=" text-text_Ternary  font-lato text-[13px] font-medium leading-4 ">
                      92********98
                    </span>
                  </div>
                </div>
                <div className=" px-[18px] mt-2.5 w-full flex flex-col items-start justify-start">
                  <span className=" text-text_Quaternary2 font-lato text-[13px] font-medium leading-4">
                    To: Shop
                  </span>
                  <span className=" text-text_Ternary  font-lato text-[13px] font-medium leading-4 ">
                    90********@indus
                  </span>
                </div>
                <div className=" px-[18px] mt-2.5 w-full flex flex-col items-start justify-start">
                  <span className=" text-text_Quaternary2 font-lato text-[13px] font-medium leading-4">
                    From: User ( IDFC Bank )
                  </span>
                  <span className=" text-text_Ternary  font-lato text-[13px] font-medium leading-4 ">
                    User18-1@okicici
                  </span>
                </div>
                <div className=" px-[18px] mt-2.5 mb-4 w-full flex flex-col items-start justify-start">
                  <span className=" text-text_Quaternary2 font-lato text-[13px] font-medium leading-4">
                    Google transection ID
                  </span>
                  <span className=" text-text_Ternary  font-lato text-[13px] font-medium leading-4 ">
                    CICAhhkfk-ec
                  </span>
                </div>
              </div>
            </div>
          </span>
        </div>
      </div>
      <div className=" flex w-full flex-row items-start gap-x-2 justify-start">
        <span className=" p-1.5 min-w-3 min-h-3 aspect-square bg-bg_Primary flex items-center justify-center rounded-full text-[10px] font-lato text-text_Quaternary font-bold">
          3
        </span>
        <div className=" flex items-start justify-start flex-col gap-y-1">
          <span className=" text-text_Ternary  font-bold text-sm leading-4">
            Upload Proof
          </span>
          <span className=" text-text_Quaternary2 font-medium  text-[13px] leading-4">
            Upload transaction Screenshot.
          </span>
        </div>
      </div>
      <div className=" flex w-full flex-row items-start gap-x-2 justify-start">
        <span className=" p-1.5 min-w-3 min-h-3 aspect-square bg-bg_Primary flex items-center justify-center rounded-full text-[10px] font-lato text-text_Quaternary font-bold">
          4
        </span>
        <div className=" flex items-start justify-start flex-col gap-y-1">
          <span className=" text-text_Ternary  font-bold text-sm leading-4">
            Submit
          </span>
          <span className=" text-text_Quaternary2 font-medium  text-[13px] leading-4">
            Submit the form &amp; Receive credits instantly.
          </span>
        </div>
      </div>
    </div>
  </div>
  )
}

export default AccountDetails;