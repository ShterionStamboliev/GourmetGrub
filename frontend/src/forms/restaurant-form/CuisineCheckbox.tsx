import { Checkbox } from "@/components/ui/checkbox";
import { FormControl, FormItem, FormLabel } from "@/components/ui/form";
import { ControllerRenderProps, FieldValues } from "react-hook-form";

type CuisineProps = {
    cuisine: string;
    check: ControllerRenderProps<FieldValues, 'cuisines'>;
}

const CuisineCheckbox = ({ cuisine, check }: CuisineProps) => {
    return (
        <FormItem className="flex flex-row items-center space-x-1 space-y-0 mt-2">
            <FormControl>
                <Checkbox
                    className='bg-white' checked={check.value.includes(cuisine)}
                    onCheckedChange={(checked) => {
                        if (checked) {
                            check.onChange([...check.value, cuisine])
                        } else {
                            check.onChange(check.value.filter((value: string) => value !== cuisine))
                        }
                    }}
                />
            </FormControl>
            <FormLabel className="text-sm font-normal">
                {cuisine}
            </FormLabel>
        </FormItem>
    )
}

export default CuisineCheckbox