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
                <Link className="text-sm font-semibold underline cursor-pointer text-blue-500" to='/'>
                    Change search location
                </Link>
            </span>
            insert dropdown menu here
        </div>
    )
}

export default SearchResult