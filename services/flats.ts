import { Flat } from "@prisma/client";
import { axiosInstance } from './instance';
import { ApiRoutes } from './constants';

export const search = async (query: string): Promise<Flat[]> => {
    return (await axiosInstance.get<Flat[]>(ApiRoutes.SEARCH_FLATS, { params: { query } }))
        .data;
};