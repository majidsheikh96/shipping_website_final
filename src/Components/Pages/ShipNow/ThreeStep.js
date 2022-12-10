import React from 'react';

const ThreeStep = () => {
  return (
    <div>
      <div class="bg-background-gray z-0 min-h-screen">

      <div class="md:w-[80%] mx-auto flex justify-center">
        <div class="flex w-full max-w-3xl justify-center text-gray-4 text-sm">
          <div class="w-full ">
            <div id="package-0" class="
         bg-white w-full md:rounded-xl overflow-clip animate-delete max-h-[calc(100%)] mb-8 scroll-mt-24 ">
          <div class="flex justify-between hover:cursor-pointer">
            <p class="text-dark-purple font-bold text-[22px] mt-6 ml-8 whitespace-nowrap">Package 1</p>
            <div class="flex items-center pt-4 mr-6 gap-x-4">
              <div class="place-self-center  rounded-full w-[26px] h-[26px] flex items-center justify-center hover:cursor-pointer hidden">
                <svg width="28" height="28" id="delete-svg" class="w-6" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.5 7H5.83333H24.5" stroke="#FD6C5F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M23.1693 6.99992C23.1693 6.44763 22.7216 5.99992 22.1693 5.99992C21.617 5.99992 21.1693 6.44763 21.1693 6.99992H23.1693ZM6.83594 6.99992C6.83594 6.44763 6.38822 5.99992 5.83594 5.99992C5.28365 5.99992 4.83594 6.44763 4.83594 6.99992H6.83594ZM8.33594 6.99992C8.33594 7.5522 8.78365 7.99992 9.33594 7.99992C9.88822 7.99992 10.3359 7.5522 10.3359 6.99992H8.33594ZM17.6693 6.99992C17.6693 7.5522 18.117 7.99992 18.6693 7.99992C19.2216 7.99992 19.6693 7.5522 19.6693 6.99992H17.6693ZM21.1693 6.99992V23.3333H23.1693V6.99992H21.1693ZM21.1693 23.3333C21.1693 24.0696 20.5723 24.6666 19.8359 24.6666V26.6666C21.6769 26.6666 23.1693 25.1742 23.1693 23.3333H21.1693ZM19.8359 24.6666H8.16927V26.6666H19.8359V24.6666ZM8.16927 24.6666C7.43289 24.6666 6.83594 24.0696 6.83594 23.3333H4.83594C4.83594 25.1742 6.32832 26.6666 8.16927 26.6666V24.6666ZM6.83594 23.3333V6.99992H4.83594V23.3333H6.83594ZM10.3359 6.99992V4.66659H8.33594V6.99992H10.3359ZM10.3359 4.66659C10.3359 3.93021 10.9329 3.33325 11.6693 3.33325V1.33325C9.82832 1.33325 8.33594 2.82564 8.33594 4.66659H10.3359ZM11.6693 3.33325H16.3359V1.33325H11.6693V3.33325ZM16.3359 3.33325C17.0723 3.33325 17.6693 3.93021 17.6693 4.66659H19.6693C19.6693 2.82564 18.1769 1.33325 16.3359 1.33325V3.33325ZM17.6693 4.66659V6.99992H19.6693V4.66659H17.6693Z" fill="#FD6C5F"></path>
                <path d="M11.6641 12.8333V19.8333" stroke="#FD6C5F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16.3359 12.8333V19.8333" stroke="#FD6C5F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
              </div>

              <span><svg width="16px" height="12px" class="w-[18px] h-[10px] transition-transform duration-300 ease-in-out -rotate-180" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"><path d="M1 1L8 9L15 1" stroke="#373F41" stroke-width="2" stroke-linecap="round"></path></svg></span>
            </div>
          </div>
          <div id="p0-minimized" class="opacity-0 max-h-0 overflow-hidden transition-opacity duration-300 ease-in-out font-semibold text-base">
            <p class="my-2"> x  x  cm</p>
          </div>
         <div id="main-content-p0" class=" transition-all duration-500 ease-in-out   opacity-100">
          <p class="invisible  mt-6 md:mt-2  text-center">Please ensure all fields are filled to minimize</p><p class=" hidden  mt-4 md:md-2  text-center">Please select a packing type</p>

          <div class="relative flex flex-col md:flex-row md:justify-evenly px-8 md:px-0 mt-4 mb-10 md:mb-6 gap-y-5  text-[15px]">
            <button type="button" id="no-packing-p0" class="form-input w-full md:w-[28%] h-[55px]  font-semibold bg-light-purple text-white border-transparent ">No Need Packing</button><button type="button" id="need-packing-p0" class="form-input w-full md:w-[28%] h-[55px]  hover:bg-dark-purple hover:text-white hover:border-transparent  ">Need Packing</button><button type="button" id="fragile-packing-p0" class="form-input w-full md:w-[28%] h-[55px] hover:bg-dark-purple hover:text-white hover:border-transparent ">Need Fragile Packing</button>
         </div>

          <div id="box-start" class="bg-bg-purple pt-4 md:pt-8 md:mt-0 scroll-mt-[80px]">
            <div class="md:mb-4">
              <div class="grid md:grid-cols-2 px-6 md:px-8">
                <div class="order-last md:order-first place-self-center"> {/*  package pic goes here  */}
                  {/*
                    <span style="box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;">
                    <span style="box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; max-width: 100%;">

                    <img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27200%27%20height=%27200%27/%3e" style="display: block; max-width: 100%; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px;"/> 

                    </span>

                    <img alt="1:1:1 box" src="/_next/image?url=%2Fboxes%2FNo%2F3x3x3.png&amp;w=640&amp;q=75" decoding="async" data-nimg="intrinsic" style="position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;" srcset="/_next/image?url=%2Fboxes%2FNo%2F3x3x3.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fboxes%2FNo%2F3x3x3.png&amp;w=640&amp;q=75 2x"/>
               
                    < noscript></noscript>
                    </span>
                  */}
                </div>
                <div class="text-sm text-left my-4 mr-4 pb-6 md:pb-0 prose marker:text-subtext-gray">
                  <p class="font-semibold">Don’t want to top-up later?</p><ul><li>Measure from the longest cross-section of each side of your box</li><li>Round up to the nearest 0.5 cm when you measure</li></ul><p>Don’t worry about over-declaring, we will refund you the excess if that happens.</p>
                </div>
              </div>
            </div>

            <hr class="border-border-gray border-t mt-1 mb-0"/>
            <div class="w-full px-8 md:px-16 lg:px-24 pb-2">
              <div class="flex flex-col md:flex-row md:justify-between gap-x-2 md:pt-8 md:pb-8 mt-4 md:mt-0">
                <div class="flex flex-col mb-4 md:mb-0 relative">
                  <p class="mb-2">Estimate Box Size</p>
                  <div class="relative grid grid-cols-[auto_30px] ">
                    <div class="relative bg-white rounded-xl">
                      <select id="box-selection-p0" name="box-selection" class="rounded-xl border border-border-gray shadow-border focus:border-light-purple focus:shadow-border-focus focus:outline-none w-full  h-[40px] appearance-none bg-transparent pl-3 pr-6" defaultValue={0}>
                        <option value="-1">Own Box</option>
                        <option value="0">Slim 1 kg (23 x 15 x 9)</option>
                        <option value="1">Slim 1.5 kg (26 x 26 x 9)</option>
                        <option value="2">Slim 3.5 kg (44 x 39 x 10)</option>
                        <option value="3">Standard 5 kg (33 x 24 x 31)</option>
                        <option value="4">Standard 7 kg (42 x 26 x 32)</option>
                        <option value="5">Standard 12 kg (49 x 34 x 36)</option>
                        <option value="6">Standard 17 kg (56 x 43 x 35)</option>
                        <option value="7">Standard 22.5 kg (43 x 40 x 65)</option>
                        <option value="8">Standard 62 kg (61 x 120 x 42)</option>
                      </select>
                      <svg width="16px" height="12px" class="absolute w-[12px] h-[8px] right-3.5 top-[45%]" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"><path d="M1 1L8 9L15 1" stroke="#373F41" stroke-width="2" stroke-linecap="round"></path></svg>
                    </div>
                  </div>
                </div>

              <div class="flex flex-col">
                <p class="md:mb-2">Box Dimensions</p>
                <div class="grid grid-cols-[auto_30px] items-center mb-4 md:mb-0">
                  <div class="flex items-center justify-between">

                    <input type="text" inputmode="decimal" id="length-p0" class="form-input w-[65px] md:w-[55px] h-[40px] text-center text-dark-purple font-semibold border-transparent shadow-none" defaultValue="44"/>

                    <span class="text-2.5xl font-light text-subtext-gray mt-0">×</span>

                    <input type="text" inputmode="decimal" id="width-p0" class="form-input w-[65px] md:w-[55px] h-[40px] text-center text-dark-purple font-semibold border-transparent" defaultValue="39" />
                    
                    <span class="text-2.5xl font-light text-subtext-gray mt-0">×</span>

                    <input type="text" inputmode="decimal" id="height-p0" class="form-input w-[65px] md:w-[55px] h-[40px] text-center text-dark-purple font-semibold border-transparent" defaultValue="10"/>

                  </div><span class="text-light-purple ml-2 md:ml-1">cm</span>
                </div>
              </div>
              <div class="flex flex-col mb-6 md:mb-0 ">
                <p class="md:mb-2">Weight</p>
                <div class="grid grid-cols-[auto_30px] items-center mb-4 md:mb-0">

                  <input type="text" inputmode="decimal" id="weight-p0" class="form-input w-full md:w-[55px] h-[40px] text-dark-purple font-semibold text-center border-transparent" defaultValue="1"/>

                  <span class="text-light-purple ml-2 md:ml-1">kg</span>
                </div>
              </div>
              </div>

              <p class="text-xs text-subtext-gray ">For large fragile items like paintings, speakers, monitors, and bicycles, please <a href="https://wa.me/6591187971" class="text-dark-purple" target="_blank" rel="noopener noreferrer" tabindex="-1">WhatsApp us</a> for a custom quote.</p>
            </div>
          </div>


          <div class="px-8 hidden pointer-events-none md:block md:pointer-events-auto">
            <div class="grid grid-cols-[38px_auto_18%_15%_15.5%] gap-x-1.5 mt-8 pl-1">
              <p>Qty</p>
              <p>Item Description </p>
              <p>Category</p>
              <p>Total Value</p>
              <p>Total Weight</p>
            </div>
            <div class="flex flex-col my-2">
              <div class="rounded-xl group border border-border-dark-gray shadow-border grid grid-cols-[38px_auto_18%_15%_15.5%] gap-x-1.5 relative h-[36px] w-full">
            <label for="quantity" hidden>quantity</label>

            <input type="text" inputmode="numeric" id="quantity-p0i0" class="focus:outline-none px-1 border-2 border-transparent placeholder:text-placeholder-gray ring-[1.5px] focus:ring-light-purple rounded-xl ring-transparent" placeholder="8" defaultValue="1"/>

            <div class="ring-transparent flex items-center relative ring-[1.5px] focus-within:ring-light-purple rounded-xl group">
              <label for="description" hidden>item description</label>

              <input type="text" id="description-p0i0" class="focus:outline-none placeholder:text-placeholder-gray  px-1 h-full rounded-xl w-full" placeholder="Box of Bengawan Solo Pineapple Tarts" defaultValue="Box of dryfood" />

            </div>
            <div class="flex flex-wrap items-center rounded-xl  ring-[1.5px] focus-within:ring-light-purple relative ring-transparent">
              <select id="category-p0i0" class="focus:outline-none appearance-none bg-transparent w-full h-full rounded-xl mx-0.5 text-placeholder-gray" defaultValue="dryfoodsupplements">
            <option value="none" class="disabled:bg-none" disabled="" selected="">Category</option>
            <option value="mobiles" class="text-black">Mobiles</option>
            <option value="tablets" class="text-black">Tablets</option>
            <option value="computers" class="text-black">Computers</option>
            <option value="cameras" class="text-black">Cameras</option>
            <option value="accessories" class="text-black">Accessories</option>
            <option value="accessoriesbattery" class="text-black">Accessories (Battery)</option>
            <option value="healthbeauty" class="text-black">Health &amp; Beauty</option>
            <option value="fashion" class="text-black">Fashion</option>
            <option value="watches" class="text-black">Watches</option>
            <option value="jewelry" class="text-black">Jewelry</option>
            <option value="petsaccessories" class="text-black">Pets Accessories</option>
            <option value="dryfoodsupplements" class="text-black">Dry Food &amp; Supplements</option>
            <option value="homeappliances" class="text-black">Home Appliances</option>
            <option value="homedecor" class="text-black">Home Decor</option>
            <option value="toys" class="text-black">Toys</option>
            <option value="sports" class="text-black">Sports</option>
            <option value="handbags" class="text-black">Handbags</option>
            <option value="audiovideo" class="text-black">Audio Video</option>
            <option value="documents" class="text-black">Documents</option>
            <option value="gaming" class="text-black">Gaming</option>
            <option value="bookscollectibles" class="text-black">Books &amp; Collectibles</option>
              </select>
              <svg width="16px" height="12px" class="absolute right-3 w-[12px] h-[8px] pointer-events-none" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                <path d="M1 1L8 9L15 1" stroke="#844FFA" stroke-width="2" stroke-linecap="round"></path>
              </svg>
            </div>
          <label for="total value" hidden>item total value</label>
            <div class=" px-1 flex items-center border-transparent ring-[1.5px] focus-within:ring-light-purple rounded-xl ring-transparent">
              <p class="text-dark-purple">S$</p>

              <input type="text" inputmode="decimal" id="total-value-p0i0" class="focus:outline-none placeholder:text-placeholder-gray rounded-xl w-full h-full px-1" placeholder="60" defaultValue="60"/>

            </div>
            <label for="total weight" hidden>item total weight</label>
              <div class=" flex items-center border-transparent   justify-end pr-2 ring-[1.5px] focus-within:ring-light-purple rounded-xl ring-transparent">
                <input type="text" inputmode="decimal" id="total-weight-p0i0" class="focus:outline-none text-right placeholder:text-placeholder-gray rounded-xl w-[60%] h-full px-1 " placeholder="4.0" defaultValue="1.0"/>
                <p class="text-dark-purple">kg</p>
              </div>
              </div>
              <div class="flex mb-6 pl-12 w-full select-none justify-between">
                <p class=" h-1 text-xs invisible">Description must be between 4-30 characters long</p>
              </div>
            </div>
          </div>
          <div class="mt-4 md:mt-0 px-6 md:px-8">
            <button type="button" class="pill-button group flex justify-center items-center bg-bg-purple border-transparent hover:bg-disabled-purple font-normal text-sm text-dark-purple w-full h-10 shadow-none focus:outline-light-purple md:h-9">
              <svg width="19" height="19" class="group-hover:stroke-white stroke-[#844FFA] mx-2 " viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="14" cy="14" r="13" stroke="currentColor" stroke-width="2"></circle>
                <line x1="7.22266" y1="13.1353" x2="20.44" y2="13.1353" stroke="currentColor" stroke-width="2" stroke-linecap="round"></line>
                <line x1="14.3574" y1="7.22217" x2="14.3574" y2="20.4396" stroke="currentColor" stroke-width="2" stroke-linecap="round"></line>
              </svg> Add Item
            </button>
          </div>
          <hr class="border-border-gray border-t my-8"/>
          <div class="grid grid-cols-[78%_22%] items-center font-semibold px-8 pb-8">
            <p class="text-dark-purple ">Total declared <br class="md:hidden"/> value for all items</p>
            <p class="md:text-right text-dark-purple md:mr-5">$60.00</p>
          </div>
        </div>
      </div>
          <div class="mx-8 md:mx-0">
              <button type="button" class="pill-button group flex justify-center items-center bg-bg-purple border-transparent hover:bg-disabled-purple font-normal text-sm text-dark-purple w-full h-10 shadow-none focus:outline-light-purple"><svg width="19" height="19" class="group-hover:stroke-white stroke-[#844FFA] mx-2 " viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="14" cy="14" r="13" stroke="currentColor" stroke-width="2"></circle><line x1="7.22266" y1="13.1353" x2="20.44" y2="13.1353" stroke="currentColor" stroke-width="2" stroke-linecap="round"></line><line x1="14.3574" y1="7.22217" x2="14.3574" y2="20.4396" stroke="currentColor" stroke-width="2" stroke-linecap="round"></line></svg> Add New Package</button>
          </div>
          </div>
          </div>
          </div>
          </div>
    </div>
  );
};
export default ThreeStep;