import React from 'react'

type Props = {}

const EmploymentHistory = (props: Props) => {
    return (
        <div className="mt-10">
            <div className="flex flex-col justify-between">
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
            </div>
        </div>
    )
}

export default EmploymentHistory