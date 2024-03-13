import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem } from "./ui/dropdown-menu";
import { Button } from "./ui/button";

type SortOptionsFilterProps = {
    onChange: (value: string) => void;
    sortOption: string;
};

const SORT_OPTIONS = [
    {
        label: 'Best match',
        value: 'bestMatch'
    },
    {
        label: 'Delivery price',
        value: 'deliveryPrice'
    },
    {
        label: 'Delivery time',
        value: 'deliveryTime'
    },
]

const SortOptionsFilter = ({ onChange, sortOption }: SortOptionsFilterProps) => {
    const selectedLabel = SORT_OPTIONS.find((option) => option.value === sortOption)?.label || SORT_OPTIONS[0].label;

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="cursor-pointer">
                <Button variant='outline' className="w-full">
                    Sort by: {selectedLabel}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                {SORT_OPTIONS.map((option) => (
                    <DropdownMenuItem className="cursor-pointer" onClick={() => onChange(option.value)}>
                        {option.label}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default SortOptionsFilter