import React from 'react'

type Props = {}

const EducationHistory = (props: Props) => {
  return (
    <div className="mt-10">
      <div>
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
      </div>
    </div>
  )
}

export default EducationHistory