import React from 'react'

type Props = {}

function TrainingInterests({ }: Props) {
  return (
    <div className="mt-10">
      <div>
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

      </div>
    </div>
  )
}

export default TrainingInterests