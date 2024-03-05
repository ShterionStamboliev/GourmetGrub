import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "./ui/pagination";

type PaginationProps = {
    page: number;
    pages: number;
    onPageChange: (page: number) => void;
}

const PagePagination = ({ onPageChange, page, pages }: PaginationProps) => {
    const pageNumbers: number[] = [];
    
    for (let i = 1; i <= pages; i++) {
        pageNumbers.push(i);
    }

    return (
        <Pagination>
            <PaginationContent>
                {page !== 1 && (
                    <PaginationItem>
                        <PaginationPrevious href="#" onClick={() => onPageChange(page - 1)} />
                    </PaginationItem>
                )}

                {pageNumbers.map((number, i) => (
                    <PaginationItem key={i}>
                        <PaginationLink
                            href="#"
                            onClick={() => onPageChange(number)}
                            isActive={page === number}
                        >
                            {number}
                        </PaginationLink>
                    </PaginationItem>
                ))}

                {page !== pageNumbers.length && (
                    <PaginationItem>
                        <PaginationNext href="#" onClick={() => onPageChange(page + 1)} />
                    </PaginationItem>
                )}
            </PaginationContent>
        </Pagination>
    )
}

export default PagePagination