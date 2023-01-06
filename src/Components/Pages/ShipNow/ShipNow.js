import React, { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form';
import RecipientForm from './RecipientForm';
import SenderForm from './SenderForm';
import './ShipNow.css'
import PackageForm from './PackageForm/PackageForm';
import { useDispatch, useSelector } from "react-redux";
import { setForm } from "../../../store/formSlice";
import Addons from './Addons';
import ReviewForm from './ReviewForm';

const ShipNow = () => {

    const [formStep, setFormStep] = useState(4);
    const form = useSelector(state => state.form);
    const methods = useForm({ defaultValues: form, mode: 'all' });
    const { trigger, formState: { isValid } } = methods;
    const dispatch = useDispatch();

    const handleBack = () => {
        setFormStep(cur => cur - 1);
    }

    const handleNext = () => {
        if (!isValid) {
            return trigger();
        } else {
            setFormStep(formStep + 1);
        }
    }

    const onSubmit = data => {
        dispatch(setForm(data))
    };


    return (
        <div>
            <div className="bg-background-gray z-0 min-h-screen">
                <div className="max-w-3xl mx-auto pt-8 pb-6 md:pt-10 md:pb-7">
                    <div className="flex items-center justify-between w-[92%] sm:w-[80%] lg:w-[70%] mx-auto relative">
                        <div className="flex flex-col place-items-center w-max">
                            <div className="flex items-center justify-center rounded-full bg-background-gray w-[32px] h-[32px] md:w-[40px] md:h-[40px] z-[1] border border-dark-purple shadow-border-focus">
                                <div className={`flex items-center justify-center rounded-full  w-[26px] h-[26px] md:w-[30px] md:h-[30px] ${formStep === 1 ? "bg-dark-purple" : formStep >= 2 ? "bg-gray-3" : 'bg-dark-purple'}`}>
                                    {
                                        formStep === 1 ? <span className="text-sm md:text-base font-semibold text-white">1</span> : <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path></svg>
                                    }
                                </div>
                            </div>
                            <p className={`mt-2 text-xs md:text-sm ${formStep === 1 ? 'text-light-purple' : "text-black"}`}>Sender</p>
                        </div>
                        <div className="flex flex-col place-items-center w-max">
                            <div className={`flex items-center justify-center rounded-full w-[32px] h-[32px] md:w-[40px] md:h-[40px] z-[1] ${formStep === 2 ? "bg-dark-purple" : ' bg-gray-3'}`} >
                                {
                                    formStep === 2 ? <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path></svg> : <span className="text-sm md:text-base font-semibold rounded-lg text-white">2</span>
                                }
                            </div>
                            <p className={`mt-2 text-xs md:text-sm ${formStep === 2 ? 'text-light-purple' : "text-black"}`}>Recipient</p>
                        </div>
                        <div className="flex flex-col place-items-center w-max">
                            <div className={`flex items-center justify-center rounded-full  w-[32px] h-[32px] md:w-[40px] md:h-[40px] z-[1] ${formStep === 3 ? "bg-dark-purple" : ' bg-gray-3'}`}>
                                {

                                    formStep === 3 ? <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path></svg> : <span className="text-sm md:text-base font-semibold rounded-lg text-white">3</span>

                                }
                            </div>
                            <p className={`mt-2 text-xs md:text-sm ${formStep === 3 ? 'text-light-purple' : "text-black"}`}>Package</p>
                        </div>
                        <div className="flex flex-col place-items-center w-max">
                            <div className={`flex items-center justify-center rounded-full  w-[32px] h-[32px] md:w-[40px] md:h-[40px] z-[1] ${formStep === 4 ? "bg-dark-purple" : ' bg-gray-3'}`} >

                                {

                                    formStep === 4 ? <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path></svg> : <span className="text-sm md:text-base font-semibold">4</span>
                                }

                            </div>
                            <p className={`mt-2 text-xs md:text-sm ${formStep === 4 ? 'text-light-purple' : "text-black"}`}>Add-ons</p>
                        </div>
                        <div className="flex flex-col place-items-center w-max">
                            <div className={`flex items-center justify-center rounded-full  w-[32px] h-[32px] md:w-[40px] md:h-[40px] z-[1] ${formStep === 5 ? "bg-dark-purple" : ' bg-gray-3'}`}>
                                {

                                    formStep === 5 ? <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path></svg> : <span className="text-sm md:text-base font-semibold">5</span>

                                }


                            </div>
                            <p className={`mt-2 text-xs md:text-sm ${formStep === 5 ? 'text-light-purple' : "text-black"}`}>Review</p>
                        </div>
                        <hr className="absolute border-gray-3 w-[90%] top-[16px] md:top-[20px] left-0 right-0 mx-auto" />
                    </div>
                </div>
                <div className="text-center mb-4 md:mb-6">
                    <p id="step-header" className="text-2xl md:text-3xl font-bold">Sender’s Particulars</p>
                    <p className="text-sm">(Point of contact for packing and billing)</p>
                </div>
                <form onSubmit={methods.handleSubmit(onSubmit)}>
                <div className="md:w-[80%] mx-auto flex justify-center">
                <div className="flex w-full max-w-3xl justify-center text-gray-4 text-sm">
                        <FormProvider {...methods}>
                            {/* {formData && <Modal handleNo={handleNo} handleContinue={handleContinue} />} */}
                            {formStep === 1 && <SenderForm />}
                            {formStep === 2 && <RecipientForm />}
                            {formStep === 3 && <PackageForm />}
                            {formStep === 4 && <Addons />}
                            {formStep === 5 && <ReviewForm />}
                        </FormProvider>
                    </div>
                    </div>
                    <div className="flex mx-auto py-8 justify-center gap-4 md:gap-10">

                        {
                            formStep > 1 && formStep <= 5 ? (
                                <button onClick={handleBack} type="button" id="back-button" className="pill-button button-hover border-[#844FFA] border-2   text-[#844FFA] font-bold hover:text-white hover:bg-[#844FFA] w-[160px] md:w-[180px] h-[40px] disabled:bg-disabled-purple disabled:cursor-not-allowed disabled:border-transparent rounded-2xl">Back</button>
                            ) : null
                        }

                        {
                            formStep !== 5 && <button onClick={handleNext} type="button" id="next-button" className="pill-button button-hover bg-light-purple text-white w-[160px] md:w-[180px] h-[40px] disabled:bg-disabled-purple disabled:cursor-not-allowed disabled:border-transparent rounded-2xl">Next</button>
                        }

                        {
                            formStep === 5 ? (
                                <div>
                                    <button type="submit" className="pill-button button-hover bg-light-purple text-white w-[160px] md:w-[180px] h-[40px] disabled:bg-disabled-purple disabled:cursor-not-allowed disabled:border-transparent rounded-2xl">Go to Checkout</button>
                                    <div className="text-center">
                                        <p id="add-to-cart" className="mt-4 underline text-center text-sm font-medium text-light-purple cursor-pointer select-none">Add to Cart</p>
                                    </div>
                                </div>
                            ) : null
                        }

                        {/* {counter >= 2 ? <button onClick={() => setCounter(counter - 1)} type="button" className="pill-button button-hover border-[#844FFA] border-2   text-[#844FFA] font-bold hover:text-white hover:bg-[#844FFA] w-[160px] md:w-[180px] h-[40px] disabled:bg-disabled-purple disabled:cursor-not-allowed disabled:border-transparent rounded-2xl">Back</button> : ""}
                    {
                        counter == 5 ? <div> <button type="button" id="next-button" className="pill-button button-hover bg-light-purple text-white w-[160px] md:w-[180px] h-[40px] disabled:bg-disabled-purple disabled:cursor-not-allowed disabled:border-transparent rounded-2xl">Go To CheckOut</button> <p className='text-center'>Add to Cart</p><br /></div> : <> <button onClick={() => setCounter(counter + 1)} type="button" id="next-button" className="pill-button button-hover bg-light-purple text-white w-[160px] md:w-[180px] h-[40px] disabled:bg-disabled-purple disabled:cursor-not-allowed disabled:border-transparent rounded-2xl">Next</button></>
                    } */}
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ShipNow