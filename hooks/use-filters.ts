import { useSearchParams } from "next/navigation";
import { useSet } from "react-use";
import React from "react";

interface PriceProps {
    priceFrom?: number;
    priceTo?: number;
}

interface RoomProps {
    roomFrom?: number;
    roomTo?: number;
}

interface QueryFilters extends PriceProps, RoomProps {
    repairs: string;
    lodgers: string;
    additions: string;
    facilities: string;
}

export interface Filters {
    repairs: Set<string>;
    lodgers: Set<string>;
    additions: Set<string>;
    selectedFacilities: Set<string>;
    prices: PriceProps;
    rooms: RoomProps;
}

interface ReturnProps extends Filters {
    setPrices: (name: keyof PriceProps, value: number) => void;
    setRooms: (name: keyof RoomProps, value: number) => void;
    setRepairs: (value: string) => void;
    setLodgers: (value: string) => void;
    setAdditions: (value: string) => void;
    setSelectedFacilities: (value: string) => void;
}

export const useFilters = (): ReturnProps => {
    const searchParams = useSearchParams() as unknown as Map<keyof QueryFilters, string>;


    /* Фильтр по удобствам */
    const [selectedFacilities, { toggle: toggleFacilities }] = useSet(
        new Set<string>(searchParams.get('facilities')?.split(',')),
    );

    /* Фильтр по ремонту */
    const [repairs, { toggle: toggleRepairs }] = useSet(new Set<string>(
        searchParams.has('repairs') ? searchParams.get('repairs')?.split(',') : []
    ));

    /* Фильтр квартирантов */
    const [lodgers, { toggle: toggleLodgers }] = useSet(new Set<string>(
        searchParams.has('lodgers') ? searchParams.get('lodgers')?.split(',') : []
    ));

    /* Фильтр дополнительных характеристик */
    const [additions, { toggle: toggleAdditions }] = useSet(new Set<string>(
        searchParams.has('additions') ? searchParams.get('additions')?.split(',') : []
    ));

    /* Фильтр стоимости */
    const [prices, setPrices] = React.useState<PriceProps>({
        priceFrom: Number(searchParams.get('priceFrom')) || undefined,
        priceTo: Number(searchParams.get('priceTo')) || undefined,
    });

    const [rooms, setRooms] = React.useState<RoomProps>({
        roomFrom: Number(searchParams.get('roomFrom')) || undefined,
        roomTo: Number(searchParams.get('roomTo')) || undefined,
    });

    const updatePrice = (name: keyof PriceProps, value: number) => {
        setPrices((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    const updateRoom = (name: keyof RoomProps, value: number) => {
        setRooms((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    return {
        repairs,
        lodgers,
        selectedFacilities,
        additions,
        prices,
        rooms,
        setPrices: updatePrice,
        setRooms: updateRoom,
        setRepairs: toggleRepairs,
        setLodgers: toggleLodgers,
        setAdditions: toggleAdditions,
        setSelectedFacilities: toggleFacilities,
    }
}