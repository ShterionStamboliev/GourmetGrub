import { restaurantOptionsList } from "@/utils/restaurantOptions";
import { Label } from "./ui/label";
import { Check, ChevronDown, ChevronUp } from "lucide-react";
import { ChangeEvent } from "react";
import { Button } from "./ui/button";
import { spawn } from "child_process";

type CuisinesFilterProps = {
    onChange: (cuisines: string[]) => void;
    selectedCuisines: string[];
    isExpanded: boolean;
    onExpanded: () => void;
}

const CuisinesFilter = ({ isExpanded, onChange, selectedCuisines, onExpanded }: CuisinesFilterProps) => {

    const handleCuisineReset = () => {
        onChange([]);
    };

    const handleCuisineChange = (event: ChangeEvent<HTMLInputElement>) => {
        const clickedCuisine = event.target.value;
        const isChecked = event.target.checked;

        const cuisineArray = isChecked
            ? [...selectedCuisines, clickedCuisine]
            : selectedCuisines.filter((cuisine) => cuisine !== clickedCuisine);

        onChange(cuisineArray);
    };

    return (
        <>
            <div className="flex justify-between items-center px-2">
                <div className="text-md font-semibold mb-2">Filter by cuisines</div>
                <div onClick={handleCuisineReset} className="text-sm font-semibold mb-2 underline cursor-pointer text-blue-500">Reset filter</div>
            </div>

            <div className="space-y-2 flex flex-col">
                {restaurantOptionsList
                    .slice(0, isExpanded ? restaurantOptionsList.length : 7)
                    .map((cuisine) => {
                        const isSelected = selectedCuisines.includes(cuisine);
                        return <div className="flex">
                            <input id={`cuisine_${cuisine}`}
                                type="checkbox"
                                className="hidden"
                                value={cuisine}
                                checked={isSelected}
                                onChange={handleCuisineChange}
                            />
                            <Label
                                htmlFor={`cuisine_${cuisine}`}
                                className={`flex flex-1 items-center cursor-pointer text-sm rounded-full px-4 py-2 font-semibold ${isSelected
                                    ? 'border border-green-600 text-green-600'
                                    : 'border border-slate-300'}`}
                            >
                                {isSelected && <Check size={20} strokeWidth={3} />}
                                {cuisine}
                            </Label>
                        </div>
                    })}
                <Button
                    onClick={onExpanded}
                    variant='link'
                    className='mt-4 flex-1'
                >
                    {isExpanded ? (
                        <span className="flex flex-row items-center">
                            View less <ChevronUp />
                        </span>
                    ) : (
                        <span className="flex flex-row items-center">
                            View more <ChevronDown />
                        </span>
                    )
                    }
                </Button>
            </div>
        </>
    )
}

export default CuisinesFilter