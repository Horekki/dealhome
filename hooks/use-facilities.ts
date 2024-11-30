import { Api } from "@/services/api-client";
import { Facility } from "@prisma/client";
import React from "react";

export const useFacilities = () => {
    const [facilities, setFacilities] = React.useState<Facility[]>([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        async function fetchFacilities() {
            try {
                setLoading(true);
                const facilities = await Api.facilities.getAll();
                setFacilities(facilities);
            } catch (e) {
                console.error(e);
            } finally {
                setLoading(false);
            }
        }

        fetchFacilities();
    }, [])
    return {
        facilities,
        loading,
    };
}