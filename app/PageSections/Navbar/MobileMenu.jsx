import Link from "next/link";

const MobileMenu = () => {
  return (
    <div
      className="w-full md:block lg:hidden md:w-auto mt-4 absolute top-[60px] left-0 z-50 p-2"
      id="navbar-default">
      <div className="bg-[#f3f8ff] p-[8px] rounded-[16px] shadow-[0px_18px_60px_0px_rgba(0,0,1,0.05)] border-[0.5px] border-solid border-[#D0E4FD]">
        <div className="pb-6">
          <div>
            <div>
              <div className="pt-6 px-3">
                <Link
                  href="#"
                  className="text-[14px] text-[#394762] font-[600]">
                  About us
                </Link>
              </div>
              <div className="pt-6 px-3">
                <Link
                  href="#"
                  className="text-[14px] text-[#394762] font-[600]">
                  Docs
                </Link>
              </div>
              <div className="pt-6 px-3">
                <Link
                  href="#"
                  className="text-[14px] text-[#394762] font-[600]">
                  Integrations
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
