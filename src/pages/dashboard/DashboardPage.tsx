import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "assets/img/logo.png";
import save from "assets/img/icon-save.png"
import select from "assets/img/select-icon.svg";
import EducationHistory from "components/common/Tabs/EducationHistory"
import TrainingInterests from "components/common/Tabs/TrainingInterests"
import EmploymentHistory from "components/common/Tabs/EmploymentHistory"

type Props = {};

const DashboardPage = (props: Props) => {

  const [showEducation, setShowEducation] = useState(false);

  const handleShowEducation = () => {
    setShowEducation(!showEducation);
  };

  const [showTraining, setShowTraining] = useState(false);

  const handleShowTraining = () => {
    setShowTraining(!showTraining);
  };

  const [showEmployment, setShowEmployment] = useState(false);

  const handleShowEmployment = () => {
    setShowEmployment(!showEmployment);
  };

  return (
    <div>
      <div className="flex-col mx-20">
        <div className="flex flex-col">
          <div className="flex flex-row mt-20 mb-8 w-full justify-center"><img src={logo} alt="logo" /></div>
          <div className="flex flex-col mt-3 mb-10 w-full justify-center items-center">
            <span className="text-2xl font-semibold">
              REIAoN Interested Candidate Registration
            </span>
            <p className="w-3/4 flex flex-row justify-center items-center">
              1&#41; You can save and submit later if you need to find a document. <br></br>
              2&#41; You can submit more than once. <br></br>
              3&#41; Press "Submit" once you are complete so that you are added to the database list.
            </p>
          </div>
        </div>

        {/* Personal Information */}
        <div>
          <div className="flex flex-row justify-between">
            <span className="text-xl font-semibold">
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
                  Preffered Name
                </label>
                <input type="text" className="w-full rounded-[5px] h-10 bg-[#003F6C0D] border-2 border-[#003F6C0D] focus:bg-white focus:border-[#0D7AFF] placeholder:text-[#003F6C] outline-0 text-[#003F6C]" />
              </div>
              <div className="flex flex-col w-full mx-3">
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
            </div>

            <div className="flex flex-row w-full mb-7">
              <div className="flex flex-col w-full mr-3">
                <label htmlFor="Name" className="mb-[5px] text-[#A9AFB5] text-[12px] leading-[18px]" >
                  Language
                </label>

                <div className="flex flex-row justify-between w-full">
                  <div className="flex flex-row w-1/2 justify-between">
                    <div className="flex flex-col">
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
                        RuKwangali
                      </label>
                    </div>

                    <div className="flex flex-col">
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
                        Portuguese
                      </label>
                    </div>
                  </div>
                </div>
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
        </div>

        {/* Education History (Optional) */}
        <div>
          <div className="mt-10">
            <div className="flex flex-row">
              <span className="text-xl font-semibold">
                Education History &#40;Optional&#41;
              </span>
              <button className="ml-2" onClick={handleShowEducation}>
                <img className="h-7" src={select} alt="save" />
              </button>
            </div>
            {/* <div>
              <div className="flex flex-row w-full mb-7">
                <div className="flex flex-col w-full mr-3">
                  <label htmlFor="" className="mb-[5px] text-[#A9AFB5] text-[12px] leading-[18px]" >
                    Highest Qualification
                  </label>
                  <select id="nations" className="w-full rounded-[5px] h-10 bg-[#003F6C0D] border-2 border-[#003F6C0D] focus:bg-white focus:border-[#0D7AFF] placeholder:text-[#003F6C] outline-0 text-[#003F6C]">
                    <option selected>None</option>
                    <option value="South African">Primary School Grade 7</option>
                    <option value="Angolan">Grade 10</option>
                    <option value="Zambian">Matric Grade 12</option>
                    <option value="Zambian">A Levels</option>
                    <option value="Zambian">IB</option>
                    <option value="Zambian">Diploma</option>
                    <option value="Zambian">Bachelors Degree</option>
                    <option value="Zambian">Honors Degree</option>
                    <option value="Zambian">Masters Degree</option>
                    <option value="Zambian">Doctorate</option>
                  </select>
                </div>
                <div className="flex flex-col w-full mx-3">
                  <label htmlFor="" className="mb-[5px] text-[#A9AFB5] text-[12px] leading-[18px]" >
                    Institution
                  </label>
                  <select id="gender" className="w-full rounded-[5px] h-10 bg-[#003F6C0D] border-2 border-[#003F6C0D] focus:bg-white focus:border-[#0D7AFF] placeholder:text-[#003F6C] outline-0 text-[#003F6C]">
                    <option selected>None</option>
                    <option value="South African">Namibia University of Science and Technology NUST, formerly the Polytechnic of Namibia</option>
                    <option value="Angolan">University of Namibia UNAM</option>
                    <option value="Zambian">International University of Management IUM</option>
                    <option value="Zambian">The University of Cape Town</option>
                    <option value="Zambian">Stellenbosch University</option>
                    <option value="Zambian">University of Pretoria</option>
                    <option value="Zambian">University of the Witwatersrand</option>
                    <option value="Zambian">University of Kwazulu Natal</option>
                    <option value="Zambian">University of the Western Cape</option>
                    <option value="Zambian">Rhodes University</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-row w-full mb-7">
                <div className="flex flex-col w-full mr-3">
                  <label htmlFor="" className="mb-[5px] text-[#A9AFB5] text-[12px] leading-[18px]" >
                    Qualification
                  </label>
                  <input type="file" id="file-btn" name="filename" className="w-full p-1 rounded-[5px] h-10 bg-[#003F6C0D] border-2 border-[#003F6C0D] focus:bg-white focus:border-[#0D7AFF] placeholder:text-[#003F6C] outline-0 text-[#003F6C]" />
                </div>
                <div className="flex flex-col w-full mx-3">
                  <label htmlFor="" className="mb-[5px] text-[#A9AFB5] text-[12px] leading-[18px]" >
                    Recent certificates
                  </label>
                  <input type="file" id="file-btn" name="filename" className="w-full p-1 rounded-[5px] h-10 bg-[#003F6C0D] border-2 border-[#003F6C0D] focus:bg-white focus:border-[#0D7AFF] placeholder:text-[#003F6C] outline-0 text-[#003F6C]" />
                </div>
              </div>
            </div> */}
            {showEducation && (
              <div>
                <EducationHistory />
              </div>
            )}
          </div>
        </div>

        {/* Training Interest (Optional) */}
        <div>
          <div className="mt-10">
            <div className="flex flex-row">
              <span className="text-xl font-semibold">
                Training Interests &#40;Optional&#41;
              </span>
              <button className="ml-2" onClick={handleShowTraining}>
                <img className="h-7" src={select} alt="save" />
              </button>
            </div>
            {/* <div>
              <label htmlFor="Name" className="mb-[5px] text-[#A9AFB5] text-[12px] leading-[18px]" >
                Are you currently seeking training?
              </label>
              <div className="flex flex-row w-full mb-3">
                <div className="mr-2">
                  <input type="radio" id="trainyes" name="trainyes" value="trainyes" />
                  <label htmlFor="trainyes">Yes</label>
                </div>
                <div className="mx-1">
                  <input type="radio" id="trainno" name="trainno" value="trainno" />
                  <label htmlFor="trainno">No</label>
                </div>
              </div>

              <div className="flex flex-col w-full mb-7">
                <label htmlFor="Name" className="mb-[5px] text-[#A9AFB5] text-[12px] leading-[18px]" >
                  Please select which of the following items you seek training in:
                </label>

                <div className='flex flex-row md-7'>
                  <div className="flex flex-col justify-between w-full">
                    <label >
                      <input type="checkbox" />
                      PV tracker installation
                    </label>

                    <label>
                      <input type="checkbox" />
                      PV panel installation
                    </label>

                    <label>
                      <input type="checkbox" />
                      DC wiring
                    </label>
                  </div>

                  <div className="flex flex-col justify-between w-11/12">
                    <label >
                      <input type="checkbox" />
                      Scada or communication
                    </label>

                    <label>
                      <input type="checkbox" />
                      Inverter installation
                    </label>

                    <label>
                      <input type="checkbox" />
                      Transformer installation
                    </label>
                  </div>

                  <div className="flex flex-col justify-between w-11/12">
                    <label >
                      <input type="checkbox" />
                      Medium voltage works
                    </label>

                    <label>
                      <input type="checkbox" />
                      High voltage works
                    </label>

                    <label>
                      <input type="checkbox" />
                      Operations and maintenance
                    </label>
                  </div>

                  <div className="flex flex-col justify-between w-11/12">
                    <label >
                      <input type="checkbox" />
                      Pannel cleaning
                    </label>

                    <label>
                      <input type="checkbox" />
                      Plant design
                    </label>

                    <label>
                      <input type="checkbox" />
                      System testing
                    </label>
                  </div>

                  <div className='flex flex-col justify-between w-11/12'>
                    <label>
                      <input type="checkbox" />
                      AC wiring
                    </label>
                  </div>
                </div>
              </div>

              <div className="flex flex-col w-full mr-3">
                <label htmlFor="" className="mb-[5px] text-[#A9AFB5] text-[12px] leading-[18px]" >
                  I bank with: &#40;optional&#41;
                </label>
                <input type="text" className="w-full rounded-[5px] h-10 bg-[#003F6C0D] border-2 border-[#003F6C0D] focus:bg-white focus:border-[#0D7AFF] placeholder:text-[#003F6C] outline-0 text-[#003F6C]" />
              </div>

            </div> */}
            {showTraining && (
              <div>
                <TrainingInterests />
              </div>
            )}
          </div>
        </div>

        {/* Employment History (Optional) */}
        <div>
          <div className="mt-10">
            <div className="flex flex-row">
              <span className="text-xl font-semibold">
                Employment History &#40;Optional&#41;
              </span>
              <button className="ml-2" onClick={handleShowEmployment}>
                <img className="h-7" src={select} alt="save" />
              </button>
            </div>
            {/* <div className="flex flex-col justify-between">
              <label htmlFor="Name" className="mb-[5px] text-[#A9AFB5] text-[12px] leading-[18px]" >
                Do you possess a valid driving license?
              </label>
              <div className="flex flex-row w-full mb-7">
                <div className="mr-2">
                  <input type="radio" id="drivers" name="drivers" value="drivers" />
                  <label htmlFor="drivers">Yes</label>
                </div>
                <div className="mx-1">
                  <input type="radio" id="nodrivers" name="nodrivers" value="nodrivers" />
                  <label htmlFor="nodrivers">No</label>
                </div>
              </div>

              <div className="flex flex-row w-full mb-7">
                <div className="flex flex-col w-full mr-3">
                  <label htmlFor="" className="mb-[5px] text-[#A9AFB5] text-[12px] leading-[18px]" >
                    Driving license code
                  </label>
                  <div className="flex flex-row justify-between">
                    <label >
                      <input type="checkbox" />
                      A
                    </label>

                    <label>
                      <input type="checkbox" />
                      A1
                    </label>

                    <label>
                      <input type="checkbox" />
                      B
                    </label>

                    <label>
                      <input type="checkbox" />
                      C
                    </label>

                    <label>
                      <input type="checkbox" />
                      BE
                    </label>

                    <label>
                      <input type="checkbox" />
                      C1E
                    </label>

                    <label>
                      <input type="checkbox" />
                      CE
                    </label>

                    <label>
                      <input type="checkbox" />
                      Other
                    </label>
                  </div>
                </div>
                <div className="flex flex-col w-full mx-3">
                  <label htmlFor="" className="mb-[5px] text-[#A9AFB5] text-[12px] leading-[18px]" >
                    Copy of Driver's License
                  </label>
                  <input type="file" id="file-btn" name="filename" className="w-full p-1 rounded-[5px] h-10 bg-[#003F6C0D] border-2 border-[#003F6C0D] focus:bg-white focus:border-[#0D7AFF] placeholder:text-[#003F6C] outline-0 text-[#003F6C]" />
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              <span>Work Experience</span>
              <label htmlFor="Name" className="mb-[5px] text-[#A9AFB5] text-[12px] leading-[18px]" >
                Occupation
              </label>
              <div className="flex flex-row w-full mb-7">
                <input type="text" className="mr-3 w-1/2 rounded-[5px] h-10 bg-[#003F6C0D] border-2 border-[#003F6C0D] focus:bg-white focus:border-[#0D7AFF] p-3 placeholder:text-[#003F6C] outline-0 text-[#003F6C]" />
              </div>

              <div className="flex flex-col w-full mb-7">
                <label htmlFor="Name" className="mb-[5px] text-[#A9AFB5] text-[12px] leading-[18px]" >
                  Industries you have worked in?
                </label>

                <div className='flex flex-row md-7'>
                  <div className="flex flex-col justify-between w-full">
                    <label >
                      <input type="checkbox" />
                      Abnormal Logistics
                    </label>

                    <label>
                      <input type="checkbox" />
                      Accounting
                    </label>

                    <label>
                      <input type="checkbox" />
                      Asset Management
                    </label>

                    <label >
                      <input type="checkbox" />
                      Automotive
                    </label>

                    <label>
                      <input type="checkbox" />
                      Boiler Maker
                    </label>

                    <label>
                      <input type="checkbox" />
                      Brewing
                    </label>

                    <label >
                      <input type="checkbox" />
                      Chemical Industry
                    </label>

                    <label>
                      <input type="checkbox" />
                      Charcoal
                    </label>

                    <label>
                      <input type="checkbox" />
                      Civil Works
                    </label>

                    <label >
                      <input type="checkbox" />
                      Construction
                    </label>

                    <label>
                      <input type="checkbox" />
                      Concrete
                    </label>

                    <label>
                      <input type="checkbox" />
                      Customer Service
                    </label>

                    <label >
                      <input type="checkbox" />
                      Deep Sea Mining
                    </label>

                    <label>
                      <input type="checkbox" />
                      Distribution and Logistics
                    </label>

                    <label>
                      <input type="checkbox" />
                      Drink and Brewing
                    </label>
                  </div>

                  <div className="flex flex-col justify-between w-11/12">
                    <label >
                      <input type="checkbox" />
                      Electrical
                    </label>

                    <label>
                      <input type="checkbox" />
                      Electrical and Instrumentation
                    </label>

                    <label>
                      <input type="checkbox" />
                      Electrical Wholesaler
                    </label>

                    <label >
                      <input type="checkbox" />
                      Engineering
                    </label>

                    <label>
                      <input type="checkbox" />
                      PV panel installation
                    </label>

                    <label>
                      <input type="checkbox" />
                      Finance
                    </label>

                    <label >
                      <input type="checkbox" />
                      Finance Management
                    </label>

                    <label>
                      <input type="checkbox" />
                      Fishing
                    </label>

                    <label>
                      <input type="checkbox" />
                      Health and Safety
                    </label>

                    <label >
                      <input type="checkbox" />
                      Hospitality
                    </label>

                    <label>
                      <input type="checkbox" />
                      Import and Export
                    </label>
                  </div>

                  <div className="flex flex-col justify-between w-11/12">
                    <label >
                      <input type="checkbox" />
                      Medium voltage works
                    </label>

                    <label>
                      <input type="checkbox" />
                      Industrial or Large Piping
                    </label>

                    <label>
                      <input type="checkbox" />
                      Industrial Cooling
                    </label>

                    <label >
                      <input type="checkbox" />
                      Large Solar Installation Less Than 1MW
                    </label>

                    <label>
                      <input type="checkbox" />
                      Industrial Gasses
                    </label>
                  </div>

                  <div className="flex flex-col justify-between w-11/12">
                    <label >
                      <input type="checkbox" />
                      Management
                    </label>

                    <label>
                      <input type="checkbox" />
                      Manufacturing
                    </label>

                    <label>
                      <input type="checkbox" />
                      Mechanical Machinery
                    </label>

                    <label >
                      <input type="checkbox" />
                      Medical
                    </label>

                    <label>
                      <input type="checkbox" />
                      Milling
                    </label>

                    <label>
                      <input type="checkbox" />
                      Mining and Energy
                    </label>

                    <label>
                      <input type="checkbox" />
                      Office Systems
                    </label>

                    <label >
                      <input type="checkbox" />
                      Oil and Gas
                    </label>

                    <label>
                      <input type="checkbox" />
                      Operations/Client Services
                    </label>

                    <label>
                      <input type="checkbox" />
                      Production
                    </label>

                    <label>
                      <input type="checkbox" />
                      Property Management
                    </label>

                    <label>
                      <input type="checkbox" />
                      Pumps and Valves
                    </label>

                    <label>
                      <input type="checkbox" />
                      Renewable Energy Development
                    </label>
                  </div>

                  <div className="flex flex-col justify-between w-11/12">
                    <label >
                      <input type="checkbox" />
                      Renewable Energy Financing
                    </label>

                    <label>
                      <input type="checkbox" />
                      Retail
                    </label>

                    <label>
                      <input type="checkbox" />
                      Reinforcing works
                    </label>

                    <label >
                      <input type="checkbox" />
                      Road Construction
                    </label>

                    <label>
                      <input type="checkbox" />
                      Security
                    </label>

                    <label>
                      <input type="checkbox" />
                      Software
                    </label>

                    <label>
                      <input type="checkbox" />
                      Solar Installation
                    </label>

                    <label >
                      <input type="checkbox" />
                      Steel Works
                    </label>

                    <label>
                      <input type="checkbox" />
                      Telecommunication
                    </label>

                    <label>
                      <input type="checkbox" />
                      Warehousing
                    </label>

                    <label>
                      <input type="checkbox" />
                      Waste Management
                    </label>

                    <label>
                      <input type="checkbox" />
                      Welding
                    </label>

                    <label>
                      <input type="checkbox" />
                      Wholesale
                    </label>

                    <label>
                      <input type="checkbox" />
                      Wind Turbine Installation
                    </label>
                  </div>
                </div>
                <span className="mt-1 text-xs text-gray-400">&#40;Maximum 5&#41;</span>
              </div>

              <div className="flex flex-row w-full mb-7">
                <div className="flex flex-col w-full mr-3">
                  <label htmlFor="" className="mb-[5px] text-[#A9AFB5] text-[12px] leading-[18px]" >
                    Number of years experience
                  </label>
                  <input type="number" className="w-full rounded-[5px] h-10 bg-[#003F6C0D] border-2 border-[#003F6C0D] focus:bg-white focus:border-[#0D7AFF] placeholder:text-[#003F6C] outline-0 text-[#003F6C]" />
                </div>
                <div className="flex flex-col w-full mx-3">
                  <label htmlFor="" className="mb-[5px] text-[#A9AFB5] text-[12px] leading-[18px]" >
                    Current Monthly Salary
                  </label>
                  <select id="salary" className="w-full rounded-[5px] h-10 bg-[#003F6C0D] border-2 border-[#003F6C0D] focus:bg-white focus:border-[#0D7AFF] placeholder:text-[#003F6C] outline-0 text-[#003F6C]">
                    <option selected>0-5000</option>
                    <option value="Female">5000-10000</option>
                    <option value="None">10000-15000</option>
                  </select>
                </div>
              </div>

              <label htmlFor="Name" className="mb-[5px] text-[#A9AFB5] text-[12px] leading-[18px]" >
                Are you willing to relocate?
              </label>
              <div className="flex flex-row w-full mb-7">
                <div className="mr-2">
                  <input type="radio" id="travel" name="travel" value="travel" />
                  <label htmlFor="travel">Yes</label>
                </div>
                <div className="mx-1">
                  <input type="radio" id="notravel" name="notravel" value="notravel" />
                  <label htmlFor="notravel">No</label>
                </div>
              </div>

              <div className="flex flex-row w-full mb-7">
                <div className="flex flex-col w-2/5">
                  <label htmlFor="" className="mb-[5px] text-[#A9AFB5] text-[12px] leading-[18px]" >
                    CV
                  </label>
                  <input type="file" id="file-btn" name="filename" className="w-full p-1 rounded-[5px] h-10 bg-[#003F6C0D] border-2 border-[#003F6C0D] focus:bg-white focus:border-[#0D7AFF] placeholder:text-[#003F6C] outline-0 text-[#003F6C]" />
                </div>
              </div>

              <label htmlFor="Name" className="mb-[5px] text-[#A9AFB5] text-[12px] leading-[18px]" >
                Have you worked in renewable energy before?
              </label>
              <div className="flex flex-row w-full mb-7">
                <div className="mr-2">
                  <input type="radio" id="xp" name="xp" value="xp" />
                  <label htmlFor="travel">Yes</label>
                </div>
                <div className="mx-1">
                  <input type="radio" id="noxp" name="noxp" value="noxp" />
                  <label htmlFor="noxp">No</label>
                </div>
              </div>

              <div className="flex flex-col w-full mb-7">
                <label htmlFor="Name" className="mb-[5px] text-[#A9AFB5] text-[12px] leading-[18px]" >
                  Please select which of the following items you have experience in:
                </label>

                <div className='flex flex-row md-7'>
                  <div className="flex flex-col justify-between w-full">
                    <label >
                      <input type="checkbox" />
                      PV tracker installation
                    </label>

                    <label>
                      <input type="checkbox" />
                      PV panel installation
                    </label>

                    <label>
                      <input type="checkbox" />
                      DC wiring
                    </label>
                  </div>

                  <div className="flex flex-col justify-between w-11/12">
                    <label >
                      <input type="checkbox" />
                      Scada or communication
                    </label>

                    <label>
                      <input type="checkbox" />
                      Inverter installation
                    </label>

                    <label>
                      <input type="checkbox" />
                      Transformer installation
                    </label>
                  </div>

                  <div className="flex flex-col justify-between w-11/12">
                    <label >
                      <input type="checkbox" />
                      Medium voltage works
                    </label>

                    <label>
                      <input type="checkbox" />
                      High voltage works
                    </label>

                    <label>
                      <input type="checkbox" />
                      Operations and maintenance
                    </label>
                  </div>

                  <div className="flex flex-col justify-between w-11/12">
                    <label >
                      <input type="checkbox" />
                      Pannel cleaning
                    </label>

                    <label>
                      <input type="checkbox" />
                      Plant design
                    </label>

                    <label>
                      <input type="checkbox" />
                      System testing
                    </label>
                  </div>

                  <div className='flex flex-col justify-between w-11/12'>
                    <label>
                      <input type="checkbox" />
                      AC wiring
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <div className="flex flex-col">
                <span className="text-lg font-semibold">
                  Most Recent Employment
                </span>
                <span className="mb-5 text-xs italic text-gray-400">
                  If you are a new graduate with no work experience, please only complete one contactable reference
                </span>
              </div>
              <div className="flex flex-col justify-between">
                <div className="flex flex-row w-full mb-7">
                  <div className="flex flex-col w-full mr-3">
                    <label htmlFor="" className="mb-[5px] text-[#A9AFB5] text-[12px] leading-[18px]" >
                      Company Name
                    </label>
                    <input type="text" className="w-full rounded-[5px] h-10 bg-[#003F6C0D] border-2 border-[#003F6C0D] focus:bg-white focus:border-[#0D7AFF] placeholder:text-[#003F6C] outline-0 text-[#003F6C]" />
                  </div>
                  <div className="flex flex-col w-full mx-3">
                    <label htmlFor="Name" className="mb-[5px] text-[#A9AFB5] text-[12px] leading-[18px]" >
                      Do you currently work here?
                    </label>
                    <div className="flex flex-row w-full">
                      <div className="mr-2">
                        <input type="radio" id="workyes" name="workyes" value="workyes" />
                        <label htmlFor="drivers">Yes</label>
                      </div>
                      <div className="mx-1">
                        <input type="radio" id="workno" name="workno" value="workno" />
                        <label htmlFor="workno">No</label>
                      </div>
                    </div>
                    <span className="mt-1 text-xs italic text-gray-400">Please note we will not contact your current employer if you currently work here, the purpose of this question is to form a complete resume of your work experience</span>
                  </div>
                </div>

                <div className="flex flex-row w-full mb-7">
                  <div className="flex flex-col w-full mr-3">
                    <label htmlFor="" className="mb-[5px] text-[#A9AFB5] text-[12px] leading-[18px]" >
                      Duration of Employment
                    </label>
                    <input type="text" className="w-full rounded-[5px] h-10 bg-[#003F6C0D] border-2 border-[#003F6C0D] focus:bg-white focus:border-[#0D7AFF] placeholder:text-[#003F6C] outline-0 text-[#003F6C]" />
                  </div>
                  <div className="flex flex-col w-full mx-3">
                    <label htmlFor="" className="mb-[5px] text-[#A9AFB5] text-[12px] leading-[18px]" >
                      Position
                    </label>
                    <input type="text" className="w-full rounded-[5px] h-10 bg-[#003F6C0D] border-2 border-[#003F6C0D] focus:bg-white focus:border-[#0D7AFF] placeholder:text-[#003F6C] outline-0 text-[#003F6C]" />
                  </div>
                </div>

                <div className="flex flex-row w-full mb-7">
                  <div className="flex flex-col w-full mr-3">
                    <label htmlFor="" className="mb-[5px] text-[#A9AFB5] text-[12px] leading-[18px]" >
                      Summary of Duties Performed
                    </label>
                    <textarea className="w-full rounded-[5px] h-28 bg-[#003F6C0D] border-2 border-[#003F6C0D] focus:bg-white focus:border-[#0D7AFF] placeholder:text-[#003F6C] outline-0 text-[#003F6C]" />
                  </div>
                </div>

                <div className="flex flex-row w-full mb-7">
                  <div className="flex flex-col w-full mr-3">
                    <label htmlFor="" className="mb-[5px] text-[#A9AFB5] text-[12px] leading-[18px]" >
                      Reference Name
                    </label>
                    <input type="text" className="w-full rounded-[5px] h-10 bg-[#003F6C0D] border-2 border-[#003F6C0D] focus:bg-white focus:border-[#0D7AFF] placeholder:text-[#003F6C] outline-0 text-[#003F6C]" />
                  </div>
                  <div className="flex flex-col w-full mx-3">
                    <label htmlFor="" className="mb-[5px] text-[#A9AFB5] text-[12px] leading-[18px]" >
                      Reference Contact Name
                    </label>
                    <input type="text" className="w-full rounded-[5px] h-10 bg-[#003F6C0D] border-2 border-[#003F6C0D] focus:bg-white focus:border-[#0D7AFF] placeholder:text-[#003F6C] outline-0 text-[#003F6C]" />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <div className="flex flex-col">
                <span className="text-lg font-semibold">
                  Second Most Recent Employment
                </span>
              </div>
              <div className="flex flex-col justify-between">
                <div className="flex flex-row w-full mb-7">
                  <div className="flex flex-col w-full mr-3">
                    <label htmlFor="" className="mb-[5px] text-[#A9AFB5] text-[12px] leading-[18px]" >
                      Company Name
                    </label>
                    <input type="text" className="w-full rounded-[5px] h-10 bg-[#003F6C0D] border-2 border-[#003F6C0D] focus:bg-white focus:border-[#0D7AFF] placeholder:text-[#003F6C] outline-0 text-[#003F6C]" />
                  </div>
                </div>

                <div className="flex flex-row w-full mb-7">
                  <div className="flex flex-col w-full mr-3">
                    <label htmlFor="" className="mb-[5px] text-[#A9AFB5] text-[12px] leading-[18px]" >
                      Duration of Employment
                    </label>
                    <input type="text" className="w-full rounded-[5px] h-10 bg-[#003F6C0D] border-2 border-[#003F6C0D] focus:bg-white focus:border-[#0D7AFF] placeholder:text-[#003F6C] outline-0 text-[#003F6C]" />
                  </div>
                  <div className="flex flex-col w-full mx-3">
                    <label htmlFor="" className="mb-[5px] text-[#A9AFB5] text-[12px] leading-[18px]" >
                      Position
                    </label>
                    <input type="text" className="w-full rounded-[5px] h-10 bg-[#003F6C0D] border-2 border-[#003F6C0D] focus:bg-white focus:border-[#0D7AFF] placeholder:text-[#003F6C] outline-0 text-[#003F6C]" />
                  </div>
                </div>

                <div className="flex flex-row w-full mb-7">
                  <div className="flex flex-col w-full mr-3">
                    <label htmlFor="" className="mb-[5px] text-[#A9AFB5] text-[12px] leading-[18px]" >
                      Summary of Duties Performed
                    </label>
                    <textarea className="w-full rounded-[5px] h-28 bg-[#003F6C0D] border-2 border-[#003F6C0D] focus:bg-white focus:border-[#0D7AFF] placeholder:text-[#003F6C] outline-0 text-[#003F6C]" />
                  </div>
                </div>

                <div className="flex flex-row w-full mb-7">
                  <div className="flex flex-col w-full mr-3">
                    <label htmlFor="" className="mb-[5px] text-[#A9AFB5] text-[12px] leading-[18px]" >
                      Reference Name
                    </label>
                    <input type="text" className="w-full rounded-[5px] h-10 bg-[#003F6C0D] border-2 border-[#003F6C0D] focus:bg-white focus:border-[#0D7AFF] placeholder:text-[#003F6C] outline-0 text-[#003F6C]" />
                  </div>
                  <div className="flex flex-col w-full mx-3">
                    <label htmlFor="" className="mb-[5px] text-[#A9AFB5] text-[12px] leading-[18px]" >
                      Reference Contact Name
                    </label>
                    <input type="text" className="w-full rounded-[5px] h-10 bg-[#003F6C0D] border-2 border-[#003F6C0D] focus:bg-white focus:border-[#0D7AFF] placeholder:text-[#003F6C] outline-0 text-[#003F6C]" />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <div className="flex flex-col">
                <span className="text-lg font-semibold">
                  Other Employment
                </span>
              </div>
              <div className="flex flex-col justify-between">
                <div className="flex flex-row w-full mb-7">
                  <div className="flex flex-col w-full mr-3">
                    <label htmlFor="" className="mb-[5px] text-[#A9AFB5] text-[12px] leading-[18px]" >
                      Company Name
                    </label>
                    <input type="text" className="w-full rounded-[5px] h-10 bg-[#003F6C0D] border-2 border-[#003F6C0D] focus:bg-white focus:border-[#0D7AFF] placeholder:text-[#003F6C] outline-0 text-[#003F6C]" />
                  </div>
                </div>

                <div className="flex flex-row w-full mb-7">
                  <div className="flex flex-col w-full mr-3">
                    <label htmlFor="" className="mb-[5px] text-[#A9AFB5] text-[12px] leading-[18px]" >
                      Duration of Employment
                    </label>
                    <input type="text" className="w-full rounded-[5px] h-10 bg-[#003F6C0D] border-2 border-[#003F6C0D] focus:bg-white focus:border-[#0D7AFF] placeholder:text-[#003F6C] outline-0 text-[#003F6C]" />
                  </div>
                  <div className="flex flex-col w-full mx-3">
                    <label htmlFor="" className="mb-[5px] text-[#A9AFB5] text-[12px] leading-[18px]" >
                      Position
                    </label>
                    <input type="text" className="w-full rounded-[5px] h-10 bg-[#003F6C0D] border-2 border-[#003F6C0D] focus:bg-white focus:border-[#0D7AFF] placeholder:text-[#003F6C] outline-0 text-[#003F6C]" />
                  </div>
                </div>

                <div className="flex flex-row w-full mb-7">
                  <div className="flex flex-col w-full mr-3">
                    <label htmlFor="" className="mb-[5px] text-[#A9AFB5] text-[12px] leading-[18px]" >
                      Summary of Duties Performed
                    </label>
                    <textarea className="w-full rounded-[5px] h-28 bg-[#003F6C0D] border-2 border-[#003F6C0D] focus:bg-white focus:border-[#0D7AFF] placeholder:text-[#003F6C] outline-0 text-[#003F6C]" />
                  </div>
                </div>

                <div className="flex flex-row w-full mb-7">
                  <div className="flex flex-col w-full mr-3">
                    <label htmlFor="" className="mb-[5px] text-[#A9AFB5] text-[12px] leading-[18px]" >
                      Reference Name
                    </label>
                    <input type="text" className="w-full rounded-[5px] h-10 bg-[#003F6C0D] border-2 border-[#003F6C0D] focus:bg-white focus:border-[#0D7AFF] placeholder:text-[#003F6C] outline-0 text-[#003F6C]" />
                  </div>
                  <div className="flex flex-col w-full mx-3">
                    <label htmlFor="" className="mb-[5px] text-[#A9AFB5] text-[12px] leading-[18px]" >
                      Reference Contact Name
                    </label>
                    <input type="text" className="w-full rounded-[5px] h-10 bg-[#003F6C0D] border-2 border-[#003F6C0D] focus:bg-white focus:border-[#0D7AFF] placeholder:text-[#003F6C] outline-0 text-[#003F6C]" />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="Name" className="mb-[5px] text-[#A9AFB5] text-[12px] leading-[18px]" >
                Are you currently seeking employment or job opportunities?
              </label>
              <div className="flex flex-row w-full mb-3">
                <div className="mr-2">
                  <input type="radio" id="empyes" name="empyes" value="empyes" />
                  <label htmlFor="empyes">Yes</label>
                </div>
                <div className="mx-1">
                  <input type="radio" id="empno" name="empno" value="empno" />
                  <label htmlFor="empno">No</label>
                </div>
              </div>
            </div> */}
            {showEmployment && (
              <div>
                <EmploymentHistory />
              </div>
            )}
          </div>
        </div>

        {/* Additional Questions */}
        <div>
          <div className="mt-10">
            <div className="flex flex-col">
              <span className="text-xl font-semibold">
                Additional Questions
              </span>
            </div>
            <div>
              <label htmlFor="Name" className="mb-[5px] text-[#A9AFB5] text-[12px] leading-[18px]" >
                Are you interested in receivng more surveys to improve chances of receiving training or job opportunities?
              </label>
              <div className="flex flex-row w-full mb-3">
                <div className="mr-2">
                  <input type="radio" id="q9yes" name="q9yes" value="q9yes" />
                  <label htmlFor="q9yes">Yes</label>
                </div>
                <div className="mx-1">
                  <input type="radio" id="q9no" name="q9no" value="q9no" />
                  <label htmlFor="q9no">No</label>
                </div>
              </div>

              <label htmlFor="Name" className="mb-[5px] text-[#A9AFB5] text-[12px] leading-[18px]" >
                I have worked on a solar revolving fund installations?
              </label>
              <div className="flex flex-row w-full mb-3">
                <div className="mr-2">
                  <input type="radio" id="q1yes" name="q1yes" value="q1yes" />
                  <label htmlFor="q1yes">Yes</label>
                </div>
                <div className="mx-1">
                  <input type="radio" id="q1no" name="q1no" value="q1no" />
                  <label htmlFor="q1no">No</label>
                </div>
              </div>

              <label htmlFor="Name" className="mb-[5px] text-[#A9AFB5] text-[12px] leading-[18px]" >
                I have a company that works on solar revolving fund installations?
              </label>
              <div className="flex flex-row w-full mb-3">
                <div className="mr-2">
                  <input type="radio" id="q2yes" name="q2yes" value="q2yes" />
                  <label htmlFor="q2yes">Yes</label>
                </div>
                <div className="mx-1">
                  <input type="radio" id="q2no" name="q2no" value="q2no" />
                  <label htmlFor="q2no">No</label>
                </div>
              </div>

              <label htmlFor="Name" className="mb-[5px] text-[#A9AFB5] text-[12px] leading-[18px]" >
                I am willing to help REIAoN capture data on solar installations in my area?
              </label>
              <div className="flex flex-row w-full mb-3">
                <div className="mr-2">
                  <input type="radio" id="q3yes" name="q3yes" value="q3yes" />
                  <label htmlFor="q3yes">Yes</label>
                </div>
                <div className="mx-1">
                  <input type="radio" id="q3no" name="q3no" value="q3no" />
                  <label htmlFor="q3no">No</label>
                </div>
              </div>

              <label htmlFor="Name" className="mb-[5px] text-[#A9AFB5] text-[12px] leading-[18px]" >
                I would like to find out more about becoming a REIAoN Member?
              </label>
              <div className="flex flex-row w-full mb-3">
                <div className="mr-2">
                  <input type="radio" id="q4yes" name="q4yes" value="q4yes" />
                  <label htmlFor="q4yes">Yes</label>
                </div>
                <div className="mx-1">
                  <input type="radio" id="q4no" name="q4no" value="q4no" />
                  <label htmlFor="q4no">No</label>
                </div>
              </div>

              <label htmlFor="Name" className="mb-[5px] text-[#A9AFB5] text-[12px] leading-[18px]" >
                Id like to speak to my employer about the company becoming a REIAoN member?
              </label>
              <div className="flex flex-row w-full mb-3">
                <div className="mr-2">
                  <input type="radio" id="q5yes" name="q5yes" value="q5yes" />
                  <label htmlFor="q5yes">Yes</label>
                </div>
                <div className="mx-1">
                  <input type="radio" id="q5no" name="q5no" value="q5no" />
                  <label htmlFor="q5no">No</label>
                </div>
              </div>

              <label htmlFor="Name" className="mb-[5px] text-[#A9AFB5] text-[12px] leading-[18px]" >
                I am interested in becoming involved in either Renewable Energy and/or Green Hydrogen?
              </label>
              <div className="flex flex-row w-full mb-3">
                <div className="mr-2">
                  <input type="radio" id="q6yes" name="q6yes" value="q6yes" />
                  <label htmlFor="q6yes">Yes</label>
                </div>
                <div className="mx-1">
                  <input type="radio" id="q6no" name="q6no" value="q6no" />
                  <label htmlFor="q6no">No</label>
                </div>
              </div>

              <label htmlFor="Name" className="mb-[5px] text-[#A9AFB5] text-[12px] leading-[18px]" >
                There is a solar system at my house/work but it is not currently working?
              </label>
              <div className="flex flex-row w-full mb-3">
                <div className="mr-2">
                  <input type="radio" id="q7yes" name="q7yes" value="q7yes" />
                  <label htmlFor="q7yes">Yes</label>
                </div>
                <div className="mx-1">
                  <input type="radio" id="q7no" name="q7no" value="q7no" />
                  <label htmlFor="q7no">No</label>
                </div>
              </div>

              <label htmlFor="Name" className="mb-[5px] text-[#A9AFB5] text-[12px] leading-[18px]" >
                I am considering to install a solar system at my house/farm/business and would be happy to receive quotes from REIAoN Members?
              </label>
              <div className="flex flex-row w-full mb-3">
                <div className="mr-2">
                  <input type="radio" id="q8yes" name="q8yes" value="q8yes" />
                  <label htmlFor="q8yes">Yes</label>
                </div>
                <div className="mx-1">
                  <input type="radio" id="q8no" name="q8no" value="q8no" />
                  <label htmlFor="q8no">No</label>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Submission Button */}
        <div className="flex flex-row mt-10 mb-20 justify-center">
          <button className="w-1/4 bg-[#003F6C] hover:bg-[#002743] text-white rounded-[10px] montserrat font-semibold text-[14px] leading-[17px] px-[37px] py-[15px]">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
