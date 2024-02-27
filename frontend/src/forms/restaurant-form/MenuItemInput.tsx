import { Button } from '@/components/ui/button';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useFormContext } from 'react-hook-form';

type MenuItemProps = {
    index: number,
    removeMenuItem: () => void;
}

const MenuItemInput = ({ index, removeMenuItem }: MenuItemProps) => {
    const { control } = useFormContext();


    return (
        <div className='flex flex-row items-end gap-2'>
            <FormField control={control} name={`menuItems.${index}.name`} render={({ field }) =>
                <FormItem>
                    <FormLabel className='flex items-center gap-1'>
                        Name <FormMessage />
                    </FormLabel>
                    <FormControl>
                        <Input {...field} placeholder='Cheeseburger' className='bg-white' />
                    </FormControl>
                </FormItem>
            }
            />
            <FormField control={control} name={`menuItems.${index}.price`} render={({ field }) =>
                <FormItem>
                    <FormLabel className='flex items-center gap-1'>
                        Price ($) <FormMessage />
                    </FormLabel>
                    <FormControl>
                        <Input {...field} placeholder='9.99' className='bg-white' />
                    </FormControl>
                </FormItem>
            }
            />
            <Button type='button' className='bg-red-500 max-h-fit' onClick={removeMenuItem}>
                Remove item
            </Button>
        </div>
    )
}

export default MenuItemInput