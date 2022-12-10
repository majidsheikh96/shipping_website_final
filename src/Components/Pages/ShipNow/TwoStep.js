import React from 'react';

const TwoStep = () => {
  return (
    <div>
      <div className='md:w-[80%] mx-auto flex justify-center'>
           <div className="flex w-full max-w-3xl justify-center text-gray-4 text-sm">
            <div className='bg-white w-full md:rounded-xl'>
<div className='w-[85%] md:w-[50%] mx-auto pt-6 md:pt-8 pb-3'> 
 <div className='w-full flex flex-col group'>
 <label for="recipientName" class="font-normal text-subheading-gray w-max group-focus-within:text-dark-purple">Recipient's Name</label>
 <div id="recipientNamecontainer" class="mt-1 mb-6 relative border rounded-xl flex items-center h-10 focus-within:border-light-purple focus:shadow-border-focus border-error-red shadow-border-error"><div class="relative flex items-center h-full z-[2] w-full"><input class="focus:outline-none pl-3 w-full h-full rounded-xl pr-8" type="text" defaultValue="Master Recieve"/></div><p class="min-h-[1rem] text-xs text-error-red absolute top-10 mt-0.5 ml-0.5 ">Required</p></div>
 </div>
 <div class="w-full flex flex-col group"><label for="recipientEmail" class="font-normal text-subheading-gray w-max group-focus-within:text-dark-purple">Recipient's Email</label><div id="recipientEmailcontainer" class="mt-1 mb-6 relative border rounded-xl flex items-center h-10 focus-within:border-light-purple focus:shadow-border-focus border-border-dark-gray shadow-border"><div class="relative flex items-center h-full z-[2] w-full"><input class="focus:outline-none pl-3 w-full h-full rounded-xl pr-8" maxlength="80" id="recipientEmail" type="email" defaultValue="Recieve@mail.com"/></div><p class="min-h-[1rem] text-xs text-error-red absolute top-10 mt-0.5 ml-0.5 hidden"></p></div></div>
</div>

              </div>
            </div>
           </div>
      </div>
  );
};

export default TwoStep;