import { Facility } from '@prisma/client';
import { axiosInstance } from './instance';
import { ApiRoutes } from './constants';

export const getAll = async (): Promise<Facility[]> => {
    return (await axiosInstance.get<Facility[]>(ApiRoutes.FACILITIES))
        .data;
};