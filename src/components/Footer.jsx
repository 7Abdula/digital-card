import React from "react";
import twitter from '../images/twitter-icon.svg'
import facebook from '../images/facebook-icon.svg'
import instagram from '../images/ig-icon.svg'
import github from '../images/github-icon.svg'

const Footer = () => {
  return (
    <div className="mt-[24px] h-[64px] bg-[#161619] rounded-b-[10px] flex justify-center items-center">
      <div className="flex gap-6">
        <img src={twitter} alt="twitter" className="cursor-pointer" />
        <img src={facebook} alt="facebook" className="cursor-pointer" />
        <img src={instagram} alt="instagram" className="cursor-pointer" />
        <img src={github} alt="github" className="cursor-pointer" />
      </div>

    </div>
  )
}

export default Footer;