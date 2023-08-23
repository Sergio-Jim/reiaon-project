import React from 'react'

type Props = {}

const MembershipRegistration = (props: Props) => {
  return (
    <div>
      <div className="flex flex-col justify-between">
        <div className="mt-3 w-full">

          <div>
            <label htmlFor="" className="mb-[5px] text-[#A9AFB5] text-[12px] leading-[18px]" >
              Tell us a bit more about yourself. Feel free to share any relavent documents about your history and job experiences to better stand a chance at becoming a REIAoN Member
            </label>
            <form>
              <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-700 dark:border-gray-600">
                <div className="flex items-center justify-between px-3 py-2 border-b border-gray-600">
                  <div className="flex flex-wrap items-center  sm:divide-x divide-gray-600">
                    <div className="flex items-center space-x-1 sm:pr-4">
                      <button
                        type="button"
                        className="p-2 text-gray-500 rounded cursor-pointer hover:bg-gray-600 dark:text-gray-400 hover:text-white dark:hover:bg-gray-600"
                      >
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span className="sr-only">Attach file</span>
                      </button>
                      <button
                        type="button"
                        className="p-2 text-gray-500 rounded cursor-pointer hover:bg-gray-600 dark:text-gray-400 hover:text-white dark:hover:bg-gray-600"
                      >
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span className="sr-only">Embed map</span>
                      </button>
                      <button
                        type="button"
                        className="p-2 text-gray-500 rounded cursor-pointer hover:bg-gray-600 dark:text-gray-400 hover:text-white dark:hover:bg-gray-600"
                      >
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span className="sr-only">Upload image</span>
                      </button>
                      <button
                        type="button"
                        className="p-2 text-gray-500 rounded cursor-pointer hover:bg-gray-600 dark:text-gray-400 hover:text-white dark:hover:bg-gray-600"
                      >
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span className="sr-only">Format code</span>
                      </button>
                      <button
                        type="button"
                        className="p-2 text-gray-500 rounded cursor-pointer hover:bg-gray-600 dark:text-gray-400 hover:text-white dark:hover:bg-gray-600"
                      >
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span className="sr-only">Add emoji</span>
                      </button>
                    </div>
                    <div className="flex flex-wrap items-center space-x-1 sm:pl-4">
                      <button
                        type="button"
                        className="p-2 text-gray-500 rounded cursor-pointer hover:bg-gray-600 dark:text-gray-400 hover:text-white dark:hover:bg-gray-600"
                      >
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span className="sr-only">Add list</span>
                      </button>
                      <button
                        type="button"
                        className="p-2 text-gray-500 rounded cursor-pointer hover:bg-gray-600 dark:text-gray-400 hover:text-white dark:hover:bg-gray-600"
                      >
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span className="sr-only">Settings</span>
                      </button>
                      <button
                        type="button"
                        className="p-2 text-gray-500 rounded cursor-pointer hover:bg-gray-600 dark:text-gray-400 hover:text-white dark:hover:bg-gray-600"
                      >
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span className="sr-only">Timeline</span>
                      </button>
                      <button
                        type="button"
                        className="p-2 text-gray-500 rounded cursor-pointer hover:bg-gray-600 dark:text-gray-400 hover:text-white dark:hover:bg-gray-600"
                      >
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span className="sr-only">Download</span>
                      </button>
                    </div>
                  </div>
                  <button
                    type="button"
                    data-tooltip-target="tooltip-fullscreen"
                    className="p-2 text-gray-500 rounded cursor-pointer hover:bg-gray-600 dark:text-gray-400 hover:text-white dark:hover:bg-gray-600"
                  >
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 11-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="sr-only">Full screen</span>
                  </button>
                  <div
                    id="tooltip-fullscreen"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                  >
                    Show full screen
                    <div className="tooltip-arrow" data-popper-arrow></div>
                  </div>
                </div>
                <div className="px-4 py-2 rounded-b-lg bg-gray-800">
                  <label htmlFor="editor" className="sr-only">
                    Publish post
                  </label>
                  <textarea
                    id="editor"
                    rows={8}
                    className="block w-full px-0 text-sm border-0 bg-gray-800 focus:ring-0 dark:text-white placeholder-gray-400"
                    placeholder="Write an article..."
                    required
                  ></textarea>
                </div>
              </div>
            </form>
          </div>

          <div>
            <div className="mt-10">
              <div className="flex flex-col">
                <span>
                  Additional Questions
                </span>
              </div>
              <div>
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
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row mt-10 mb-20 justify-center">
          <button className="w-1/4 bg-[#003F6C] hover:bg-[#002743] text-white rounded-[10px] montserrat font-semibold text-[14px] leading-[17px] px-[37px] py-[15px]">
            Submit Membership Registration
          </button>
        </div>

      </div>
    </div>
  )
}

export default MembershipRegistration