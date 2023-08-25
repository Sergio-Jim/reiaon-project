import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "assets/img/logo.png";
import save from "assets/img/icon-save.png"
// import MembershipRegistration from "components/common/Tabs/MembershipRegistration";
import TrainingRegistration from "components/common/Tabs/TrainingRegistration";
import EmploymentApplication from "components/common/Tabs/EmploymentApplication";

type Props = {};

const DashboardPage = (props: Props) => {
  const location = useLocation();
  const path = location.pathname;

  const [activeTab, setActiveTab] = useState("training-registration");

  const renderTabContent = () => {
    switch (activeTab) {
      // case "membership-registration":
      //   return <MembershipRegistration />;
      case "training-registration":
        return <TrainingRegistration />;
      case "employment-application":
        return <EmploymentApplication />;
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="flex-col mx-20">
        <div className="flex flex-col">
          <div className="flex flex-row mt-20 mb-8 w-full justify-center"><img src={logo} alt="logo" /></div>
          <div className="flex flex-col mt-3 mb-10 w-full justify-center items-center">
            <span>
              REIAoN Interested Candidate Registration
            </span>
            <p className="w-3/4 flex flex-row justify-center items-center">
              1) You can register for both training and employment, but submit separately. <br></br>
              2) You can save and submit later if you need to find a document. <br></br>
              3) You can submit more than once. <br></br>
              4) Ensure press "Submit" once you are complete so that you are added to the database list.
            </p>
          </div>
        </div>
        <div>
          <div className="flex flex-row justify-around mb-10">
            {/* <Link
              to={`${path}#membership-registration`}
              className={`text-[#003F6C] tab-btn-choose font-semibold text-[14px] leading-[21px] flex items-center justify-center bg-white rounded-[20px] min-w-[190px] py-[10px] m-auto mb-[21px] ${activeTab === "membership-registration" ? "active-tab-btn" : "border-2 border-black"
                }`}
              onClick={() => {
                setActiveTab("membership-registration");
              }}
            >
              <button>
                Register Membership
              </button>
            </Link> */}

            <div className="flex flex-col w-auto justify-center items-center">
              <span>
                Interested in Training?
              </span>
              <Link
                to={`${path}#training-registration`}
                className={`text-[#003F6C] tab-btn-choose font-semibold text-[14px] leading-[21px] flex items-center justify-center bg-white rounded-[20px] min-w-[190px] py-[10px] m-auto mb-[21px] ${activeTab === "training-registration" ? "active-tab-btn" : "border-2 border-black"
                  }`}
                onClick={() => {
                  setActiveTab("training-registration");
                }}
              >
                <button>
                  Register On REIAoN Training Database
                </button>
              </Link>
            </div>

            <div className="flex flex-col items-center">
              <span>
                Interested in Employment?
              </span>
              <Link
                to={`${path}#employment-application`}
                className={`text-[#003F6C] tab-btn-choose font-semibold text-[14px] leading-[21px] flex items-center justify-center bg-white rounded-[20px] min-w-[190px] py-[10px] m-auto mb-[21px] ${activeTab === "employment-application" ? "active-tab-btn" : "border-2 border-black"
                  }`}
                onClick={() => {
                  setActiveTab("employment-application");
                }}
              >
                <button>
                  Register on the REIAON Employment Database.
                </button>
              </Link>
            </div>
          </div>
          <div className="flex flex-row justify-between">
            <span>
              Personal Information
            </span>
            <button className="flex flex-row bg-[#003F6C] hover:bg-[#002743] text-white rounded-[10px] montserrat font-semibold text-[14px] leading-[17px] px-[37px] py-[15px]">
              <img className='h-4 w-4 mr-1' src={save} alt="save" />
              Save
            </button>
            <button className="fixed bottom-3 right-14 bg-[#003F6C] hover:bg-[#002743] rounded-[10px] px-[25px] py-[15px]">
              <img className='h-4 w-4' src={save} alt="save" />
            </button>
          </div>
          <div className="flex flex-col">
            <label htmlFor="Name" className="mb-[5px] text-[#A9AFB5] text-[12px] leading-[18px]" >
              Name
            </label>
            <div className="flex flex-row w-full mb-7">
              <input type="text" className="mr-3 w-1/2 rounded-[5px] h-10 bg-[#003F6C0D] border-2 border-[#003F6C0D] focus:bg-white focus:border-[#0D7AFF] p-3 placeholder:text-[#003F6C] outline-0 text-[#003F6C]" />
              <input type="text" className="mx-3 w-1/2 rounded-[5px] h-10 bg-[#003F6C0D] border-2 border-[#003F6C0D] focus:bg-white focus:border-[#0D7AFF] p-3 placeholder:text-[#003F6C] outline-0 text-[#003F6C]" />
            </div>

            <div className="flex flex-row w-full mb-7">
              <div className="flex flex-col w-full mr-3">
                <label htmlFor="" className="mb-[5px] text-[#A9AFB5] text-[12px] leading-[18px]" >
                  Nationality
                </label>
                <select id="nations" className="w-full rounded-[5px] h-10 bg-[#003F6C0D] border-2 border-[#003F6C0D] focus:bg-white focus:border-[#0D7AFF] placeholder:text-[#003F6C] outline-0 text-[#003F6C]">
                  <option selected>Namibian</option>
                  <option value="South African">South African</option>
                  <option value="Angolan">Angolan</option>
                  <option value="Zambian">Other</option>
                </select>
              </div>
              <div className="flex flex-col w-full mx-3">
                <label htmlFor="" className="mb-[5px] text-[#A9AFB5] text-[12px] leading-[18px]" >
                  Gender
                </label>
                <select id="gender" className="w-full rounded-[5px] h-10 bg-[#003F6C0D] border-2 border-[#003F6C0D] focus:bg-white focus:border-[#0D7AFF] placeholder:text-[#003F6C] outline-0 text-[#003F6C]">
                  <option selected>Male</option>
                  <option value="Female">Female</option>
                  <option value="None">Prefer Not To Say</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col w-full mb-7">
              <label htmlFor="Name" className="mb-[5px] text-[#A9AFB5] text-[12px] leading-[18px]" >
                Language
              </label>

              <div className="flex flex-row justify-between w-11/12">
                <label >
                  <input type="checkbox" />
                  English
                </label>

                <label>
                  <input type="checkbox" />
                  Afrikaans
                </label>

                <label>
                  <input type="checkbox" />
                  German
                </label>

                <label>
                  <input type="checkbox" />
                  Otjiherero
                </label>

                <label>
                  <input type="checkbox" />
                  Khoekhoegowab
                </label>

                <label>
                  <input type="checkbox" />
                  Oshiwambo
                </label>

                <label>
                  <input type="checkbox" />
                  siLozi
                </label>

                <label>
                  <input type="checkbox" />
                  Setswana
                </label>

                <label>
                  <input type="checkbox" />
                  RuKwangali
                </label>

                <label>
                  <input type="checkbox" />
                  Portuguese
                </label>
              </div>
            </div>

            <div className="flex flex-row w-full mb-7">
              <div className="flex flex-col w-full mr-3">
                <label htmlFor="" className="mb-[5px] text-[#A9AFB5] text-[12px] leading-[18px]" >
                  ID Number
                </label>
                <input type="text" className="w-full rounded-[5px] h-10 bg-[#003F6C0D] border-2 border-[#003F6C0D] focus:bg-white focus:border-[#0D7AFF] placeholder:text-[#003F6C] outline-0 text-[#003F6C]" />
              </div>
              <div className="flex flex-col w-full mx-3">
                <label htmlFor="" className="mb-[5px] text-[#A9AFB5] text-[12px] leading-[18px]" >
                  Copy of ID/Passport
                </label>
                <input type="file" id="file-btn" name="filename" className="w-full p-1 rounded-[5px] h-10 bg-[#003F6C0D] border-2 border-[#003F6C0D] focus:bg-white focus:border-[#0D7AFF] placeholder:text-[#003F6C] outline-0 text-[#003F6C]" />
              </div>
            </div>

            <div className="flex flex-row w-full mb-7">
              <div className="flex flex-col w-full mr-3">
                <label htmlFor="" className="mb-[5px] text-[#A9AFB5] text-[12px] leading-[18px]" >
                  Mobile Number
                </label>
                <input type="text" className="w-full rounded-[5px] h-10 bg-[#003F6C0D] border-2 border-[#003F6C0D] focus:bg-white focus:border-[#0D7AFF] placeholder:text-[#003F6C] outline-0 text-[#003F6C]" />
              </div>
              <div className="flex flex-col w-full mx-3">
                <label htmlFor="" className="mb-[5px] text-[#A9AFB5] text-[12px] leading-[18px]" >
                  WhatsApp Number
                </label>
                <input type="text" className="w-full rounded-[5px] h-10 bg-[#003F6C0D] border-2 border-[#003F6C0D] focus:bg-white focus:border-[#0D7AFF] placeholder:text-[#003F6C] outline-0 text-[#003F6C]" />
              </div>
            </div>

            <div className="flex flex-row w-full mb-7">
              <div className="flex flex-col w-full mr-3">
                <label htmlFor="" className="mb-[5px] text-[#A9AFB5] text-[12px] leading-[18px]" >
                  Email Address
                </label>
                <input type="text" className="w-full rounded-[5px] h-10 bg-[#003F6C0D] border-2 border-[#003F6C0D] focus:bg-white focus:border-[#0D7AFF] placeholder:text-[#003F6C] outline-0 text-[#003F6C]" />
              </div>
              <div className="flex flex-col w-full mx-3">
                <label htmlFor="" className="mb-[5px] text-[#A9AFB5] text-[12px] leading-[18px]" >
                  Residential Address
                </label>
                <input type="text" className="w-full rounded-[5px] h-10 bg-[#003F6C0D] border-2 border-[#003F6C0D] focus:bg-white focus:border-[#0D7AFF] placeholder:text-[#003F6C] outline-0 text-[#003F6C]" />
              </div>
            </div>
          </div>
          <div id="tabs">{renderTabContent()}</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
