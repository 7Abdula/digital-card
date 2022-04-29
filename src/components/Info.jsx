import React from "react";
import profile from '../images/profile-img.png'
import email from '../images/email-icon.svg'
import linkedin from '../images/linkedin-icon.svg'

const Info = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img src={profile} alt="Profile" />
      <h1 className="mt-[21px] font-bold text-white text-[25px] leading-[30px]">Laura Smith</h1>
      <p className="text-[#F3BF99] text-[12.8px] leading-[15.49px] mt-[6.19px]">Frontend Developer</p>
      <p className="cursor-pointer text-[10.24px] leading-[15.36px] text-[#F5F5F5] mt-[9px]">laurasmith.website</p>
      <div className="flex gap-[17px] mt-[15px]">
        <button className="flex items-center gap-[9.6px] py-[9px] px-[28px] bg-white rounded-md border border-[#D1D5DB] text-[14px] font-medium text-[#374151]">
          <img src={email} alt="email" />Email</button>
        <button className="py-[9px] px-[18px] bg-[#5093E2] text-white font-medium text-[14px] rounded-md flex items-center gap-[9.3px]">
          <img src={linkedin} alt="linkedin" className="w-[13.33px]" />LinkedIn</button>
      </div>
    </div>
  )
}

export default Info;