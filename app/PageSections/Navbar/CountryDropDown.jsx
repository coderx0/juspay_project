import Link from "next/link";

const CountryDropDown = () => {
  return (
    <div className="absolute pt-4 -right-5 z-50">
      <div id="region-dropdown" className="rounded-lg bg-[#2D2D2D]">
        <div className="py-3 px-6 text-[#888888] text-sm"> REGION</div>
        <div className="w-full border-t border-[#3C3636]"></div>
        <div className="px-6 pt-4 pb-6 flex-col gap-6 flex">
          <div>
            <Link href="#">
              <div className=" flex gap-3 items-center">
                <img className="min-w-8 min-h-8 w-8 h-8 mt-1" src="./sea.svg" />
                <div>
                  <div className=" whitespace-nowrap text-lg hover:text-[#0561E2]">
                    Southeast Asia (SEA)
                  </div>
                  <div className=" flex"></div>
                </div>
              </div>
            </Link>
          </div>
          <div>
            <Link href="#">
              <div className=" flex gap-3 items-center">
                <img
                  className="min-w-8 min-h-8 w-8 h-8 mt-1"
                  src="./latam.svg"
                />
                <div>
                  <div className=" whitespace-nowrap text-lg hover:text-[#0561E2]">
                    Latin America (LATAM)
                  </div>
                  <div className=" flex"> </div>
                </div>
              </div>
            </Link>
          </div>
          <div>
            <a href="https://hyperswitch.io">
              <div className=" flex gap-3 items-center">
                <img
                  className="min-w-8 min-h-8 w-8 h-8 mt-1"
                  src="./north-america.svg"
                />
                <div>
                  <div className=" whitespace-nowrap text-lg hover:text-[#0561E2]">
                    North America
                  </div>
                  <div className=" flex"> </div>
                </div>
              </div>
            </a>
          </div>
          <div>
            <a href="https://hyperswitch.io">
              <div className=" flex gap-3 items-center">
                <img
                  className="min-w-8 min-h-8 w-8 h-8 mt-1"
                  src="./europe.svg"
                />
                <div>
                  <div className=" whitespace-nowrap text-lg hover:text-[#0561E2]">
                    Europe
                  </div>
                  <div className=" flex"> </div>
                </div>
              </div>
            </a>
          </div>
          <div>
            <Link href="#">
              <div className=" flex gap-3 items-center">
                <img
                  className="min-w-8 min-h-8 w-8 h-8 mt-1"
                  src="./india.svg "
                />
                <div>
                  <div className=" whitespace-nowrap text-lg hover:text-[#0561E2]">
                    India
                  </div>
                  <div className=" flex"> </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDropDown;
