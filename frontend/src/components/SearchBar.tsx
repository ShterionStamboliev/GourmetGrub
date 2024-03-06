import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem } from "./ui/form";
import { Search } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useEffect } from "react";

const formSchema = z.object({
    searchQuery: z.string({
        required_error: "Search input is required",
    }),
});

export type SearchForm = z.infer<typeof formSchema>;

type SearchBarProps = {
    onSubmit: (formData: SearchForm) => void;
    onReset?: () => void;
    placeholder?: string;
    searchQuery?: string;
}

const SearchBar = ({ onSubmit, onReset, placeholder, searchQuery }: SearchBarProps) => {
    const form = useForm<SearchForm>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            searchQuery
        }
    });

    useEffect(() => {
        form.reset({ searchQuery });
    }, [form, searchQuery]);

    const handleReset = () => {
        form.reset({
            searchQuery: ''
        });

        if (onReset) {
            onReset();
        }
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}
                className='flex items-center gap-3 justify-between flex-row border-2 rounded-full p-3'
            >
                <Search className="hidden md:block text-orange-500" />
                <FormField control={form.control} name='searchQuery' render={({ field }) => (
                    <FormItem className="flex-1">
                        <FormControl>
                            <Input {...field} className="border-none shadow-none text-xl focus-visible:ring-0" placeholder={placeholder} />
                        </FormControl>
                    </FormItem>
                )}
                />
                <Button onClick={handleReset} type="button" variant='outline' className="rounded-full">
                    Reset
                </Button>
                <Button type="submit" className="rounded-full bg-orange-500">
                    Search
                </Button>
            </form>
        </Form>
    )
};

export default SearchBar