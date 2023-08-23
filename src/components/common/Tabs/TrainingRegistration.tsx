import React from 'react'

type Props = {}

const TrainingRegistration = (props: Props) => {
  return (
    <div>
      <label htmlFor="Name" className="mb-[5px] text-[#A9AFB5] text-[12px] leading-[18px]" >
        Have you worked in renewable energy before?
      </label>
      <div className="flex flex-row w-full mb-3">
        <div className="mr-2">
          <input type="radio" id="q10yes" name="q10yes" value="q10yes" />
          <label htmlFor="q10yes">Yes</label>
        </div>
        <div className="mx-1">
          <input type="radio" id="q10no" name="q10no" value="q10no" />
          <label htmlFor="q10no">No</label>
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

      <div className="flex flex-row mt-10 mb-20 justify-center">
        <button className="w-1/4 bg-[#003F6C] hover:bg-[#002743] text-white rounded-[10px] montserrat font-semibold text-[14px] leading-[17px] px-[37px] py-[15px]">
          Submit Training Registration
        </button>
      </div>
    </div>
  )
}

export default TrainingRegistration