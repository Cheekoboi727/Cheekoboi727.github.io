import React from "react";
import { FaInstagram, FaLinkedin, FaGithub, FaReddit } from "react-icons/fa";

function Header() {
  return (
    <div className="mt-0 md:mt-20">
      <div className="bg-slate-300 py-10 rounded-md ">
        <div className="">
          <div className="text-center text-[30px] md:text-[40px] bold poppins">
            Contact information
          </div>
          <ul className="flex flex-row gap-14 md:gap-20 justify-center mt-10">
            <li>
              <a href="https://www.instagram.com/muhammadorable">
                <FaInstagram className="text-[30px] md:text-[80px]" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/muhammad-bin-nasir">
                <FaLinkedin className="text-[30px] md:text-[80px]" />
              </a>
            </li>
            <li>
              <a href="https://github.com/cheekoboi727">
                <FaGithub className="text-[30px] md:text-[80px]" />
              </a>
            </li>
            <li>
              <a href="https://www.reddit.com/user/MolesDontDie/">
                <FaReddit className="text-[30px] md:text-[80px]" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
