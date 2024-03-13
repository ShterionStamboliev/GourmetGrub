import { Link } from "react-router-dom";

type SearchResultProps = {
    total: number;
    city: string;
}

const SearchResult = ({ city, total }: SearchResultProps) => {

    return (
        <div className="text-xl font-bold flex flex-col gap-3 justify-between lg:items-center lg:flex-row">
            <span>
                {total} Restaurants found in {city}
                <Link to='/' className="text-sm ml-2 font-semibold underline cursor-pointer text-blue-500">
                    Change search location for city
                </Link>
            </span>
            
        </div>
    )
}

export default SearchResult