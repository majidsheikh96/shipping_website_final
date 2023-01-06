import React, { useEffect } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import { useDispatch } from "react-redux";
import { updateTotalCost } from "../../../../store/formSlice";
import AddPackage from "./AddPackage";
import ItemFields from "./ItemFields";
import PackingBlock from "./PackingBlock";
import RemovePackage from "./RemovePackage";
import SelectPacking from "./SelectPacking";

const PackageForm = () => {
    const { fields, append, remove } = useFieldArray({ name: "packages" });
    const { register, formState: { errors }, setValue, clearErrors, getValues, watch } = useFormContext();
    const dispatch = useDispatch();

    const handlePacking = (packing, packageId) => {
        setValue(`packages.${[packageId]}.packing`, packing);
        clearErrors(`packages.${[packageId]}.packing`);
        // console.log(field, packing);
    };

    const handleOptionChange = (e) => {

        const packageId = e.target.name.match(/packages\.(\d+)\.box/)[1];
        const box = e.target.value;
        setValue(`packages.${[packageId]}.box.size`, box);

        if (box !== "Own Box") {
            const array = box.match(/\((\d+) x (\d+) x (\d+)\)/).slice(1);
            setValue(`packages.${[packageId]}.box.length`, array[0]);
            setValue(`packages.${[packageId]}.box.width`, array[1]);
            setValue(`packages.${[packageId]}.box.height`, array[2]);
            clearErrors(`packages.${[packageId]}.box`);
        }
    }

    const packages = (watch("packages"));

    const shippingCost = (packages) => {
        const baseRate = 10; // the base shipping rate
        const ratePerKg = 0.5; // the rate per kg of weight
        const ratePerCm = 0.2; // the rate per cm of size
        const additionalFees = 0; // additional fees for services such as insurance or delivery confirmation

        let totalCost = 0;

        for (let i = 0; i < packages.length; i++) {
            const box = packages[i].box;
            const weight = box.weight;
            const size = box.length + box.width + box.height;
            const cost = baseRate + (weight * ratePerKg) + (size * ratePerCm) + additionalFees;
            totalCost += cost;
        }

        return totalCost;
    }

    useEffect(() => {
        const totalCost = shippingCost(packages);
        setValue(`total_cost`, totalCost);
    }, [packages, setValue])


    return (
        <div className="w-full">
            {fields.map((field, index) => (
                <div
                    key={index}
                    className="bg-white w-full md:rounded-xl overflow-clip animate-delete max-h-[calc(100%)] mb-8 scroll-mt-24 ">
                    <div className="flex justify-between hover:cursor-pointer">
                        <p className="text-dark-purple font-bold text-[22px] mt-6 ml-8 whitespace-nowrap">
                            Package {`${index + 1}`}
                        </p>
                        {fields.length > 1 && (
                            <RemovePackage remove={remove} index={index} />
                        )}
                    </div>
                    <div className="opacity-0 max-h-0 overflow-hidden transition-opacity duration-300 ease-in-out font-semibold text-base">
                        <p className="my-2"> x x cm</p>
                    </div>
                    <div className="transition-all duration-500 ease-in-out opacity-100">
                        <p className="text-error-red h-4  mt-6 md:mt-2  text-center">
                            Please ensure all fields are filled to minimize
                        </p>
                        <SelectPacking handlePacking={handlePacking} packageId={index} />
                        <div className="bg-bg-purple pt-4 md:pt-8 md:mt-0 scroll-mt-[80px]">
                            <div className="md:mb-4">
                                <PackingBlock />
                                <hr className="border-border-gray border-t mt-1 mb-0" />
                                <div className="w-full px-8 md:px-16 lg:px-24 pb-2">
                                    <div className="flex flex-col md:flex-row md:justify-between gap-x-2 md:pt-8 md:pb-8 mt-4 md:mt-0">
                                        <div className="flex flex-col mb-4 md:mb-0 relative">
                                            <p className="mb-2">Estimate Box Size</p>
                                            <div className="relative grid grid-cols-[auto_30px]">
                                                <div className="relative bg-white rounded-xl">
                                                    <select
                                                        className="rounded-xl border border-border-gray shadow-border focus:border-light-purple focus:shadow-border-focus focus:outline-none w-full  h-[40px] appearance-none bg-transparent pl-3 pr-6"
                                                        {...register(`packages.${index}.box.size`, {
                                                            onChange: handleOptionChange
                                                        })}
                                                        defaultValue="Own Box"
                                                    >
                                                        <option value="Own Box">Own Box</option>
                                                        <option value="Slim 1 kg (23 x 15 x 9)">Slim 1 kg (23 x 15 x 9)</option>
                                                        <option value="Slim 1.5 kg (26 x 26 x 9)">Slim 1.5 kg (26 x 26 x 9)</option>
                                                        <option value="Slim 3.5 kg (44 x 39 x 10)">Slim 3.5 kg (44 x 39 x 10)</option>
                                                        <option value="Standard 5 kg (33 x 24 x 31)">
                                                            Standard 5 kg (33 x 24 x 31)
                                                        </option>
                                                        <option value="Standard 7 kg (42 x 26 x 32)">
                                                            Standard 7 kg (42 x 26 x 32)
                                                        </option>
                                                        <option value="Standard 12 kg (49 x 34 x 36)">
                                                            Standard 12 kg (49 x 34 x 36)
                                                        </option>
                                                        <option value="Standard 17 kg (56 x 43 x 35)">
                                                            Standard 17 kg (56 x 43 x 35)
                                                        </option>
                                                        <option value="Standard 22.5 kg (43 x 40 x 65)">
                                                            Standard 22.5 kg (43 x 40 x 65)
                                                        </option>
                                                        <option value="Standard 62 kg (61 x 120 x 42)">
                                                            Standard 62 kg (61 x 120 x 42)
                                                        </option>
                                                    </select>
                                                    <svg
                                                        width="16px"
                                                        height="12px"
                                                        className="absolute w-[12px] h-[8px] right-3.5 top-[45%]"
                                                        viewBox="0 0 16 11"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        preserveAspectRatio="none"
                                                    >
                                                        <path
                                                            d="M1 1L8 9L15 1"
                                                            stroke="#373F41"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                        ></path>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col">
                                            <p className="md:mb-2">Box Dimensions</p>
                                            <div className="grid grid-cols-[auto_30px] items-center mb-4 md:mb-0">
                                                <div className="flex items-center justify-between">
                                                    <input
                                                        type="number"
                                                        min={1}
                                                        inputMode="decimal"
                                                        className={`form-input rounded-xl w-[65px] md:w-[55px] h-[40px] text-center text-dark-purple font-semibold border-error-red shadow-border-error ${(errors.packages) && (errors.packages[index]?.box.length) ? 'ring-1  ring-rose-500' : ""}`}
                                                        {...register(`packages.${index}.box.length`, { required: "Required", min: 1 })}
                                                    />
                                                    <span className="text-2.5xl font-light text-subtext-gray mt-0">
                                                        ×
                                                    </span>
                                                    <input
                                                        type="number"
                                                        inputMode="decimal"
                                                        className={`form-input rounded-xl w-[65px] md:w-[55px] h-[40px] text-center text-dark-purple font-semibold border-transparent ring-1 ring-gray-200 ${(errors.packages) && (errors.packages[index]?.box.width) ? 'ring-1 ring-red-500' : ""}`}
                                                        {...register(`packages.${index}.box.width`, { required: "Required", min: 1 })}
                                                    />
                                                    <span className="text-2.5xl font-light text-subtext-gray mt-0">
                                                        ×
                                                    </span>
                                                    <input
                                                        type="number"
                                                        inputMode="decimal"
                                                        className={`form-input rounded-xl w-[65px] md:w-[55px] h-[40px] text-center text-dark-purple font-semibold border-transparent ${(errors.packages) && (errors.packages[index]?.box.height) ? 'ring-1 ring-rose-500' : ""}`}
                                                        {...register(`packages.${index}.box.height`, { required: "Required", min: 1 })}
                                                    />
                                                </div>
                                                <span className="text-light-purple ml-2 md:ml-1">cm</span>
                                            </div>
                                        </div>
                                        <div className="flex flex-col mb-6 md:mb-0 ">
                                            <p className="md:mb-2">Weight</p>
                                            <div className="grid grid-cols-[auto_30px] items-center mb-4 md:mb-0">
                                                <input
                                                    type="number"
                                                    inputMode="decimal"
                                                    className={`ring-1 ring-gray-200 rounded-xl w-[65px] md:w-[55px] h-[40px] text-center text-dark-purple font-semibold border-transparent ${(errors.packages) && (errors.packages[index]?.box.weight) ? 'ring-1 ring-rose-500' : ""}`}
                                                    {...register(`packages[${index}].box.weight`, { required: "Required", min: 1, onChange: (e) => setValue(`packages[${index}].box.weight`, e.target.value) })}
                                                />
                                                <span className="text-light-purple ml-2 md:ml-1">kg</span>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-xs text-subtext-gray ">
                                        For large fragile items like paintings, speakers, monitors,
                                        and bicycles, please&nbsp;
                                        <a
                                            href="https://wa.me/6591187971"
                                            className="text-dark-purple"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            tabIndex="-1"
                                        >
                                            WhatsApp us&nbsp;
                                        </a>
                                        for a custom quote.
                                    </p>
                                </div>
                            </div>
                            <ItemFields packageIndex={index} />
                        </div>
                    </div>
                </div>
            ))}
            <AddPackage append={append} />
        </div>
    );
};

export default PackageForm;
