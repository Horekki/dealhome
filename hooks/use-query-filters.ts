import React from "react";
import { Filters } from "./use-filters";
import qs from "qs";
import { useRouter } from "next/navigation";

export const useQueryFilters = (filters: Filters) => {
    const router = useRouter();
    const prevParams = React.useRef<string>("");

    React.useEffect(() => {
        const params = {
            ...filters.prices,
            ...filters.rooms,
            repairs: Array.from(filters.repairs),
            lodgers: Array.from(filters.lodgers),
            additions: Array.from(filters.additions),
            facilities: Array.from(filters.selectedFacilities),
        }

        const query = qs.stringify(params, {
            arrayFormat: 'comma'
        });


        if (query !== prevParams.current) {
            prevParams.current = query;
            router.push(`?${query}`, { scroll: false });
        }
        // router.push(`?${query}`, { scroll: false });
    }, [filters, router]);
}