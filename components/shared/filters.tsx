'use client'

import React from 'react';
import { Title } from './title';
import { Input } from '../ui';
import { RangeSlider } from './range-slider';
import { CheckboxFiltersGroup } from './checkbox-filters-group';
import { useQueryFilters, useFacilities, useFilters } from '@/hooks';

interface Props {
    className?: string
}

export const Filters: React.FC<Props> = ({ className }) => {

    const { facilities, loading } = useFacilities();
    const filters = useFilters();

    useQueryFilters(filters);

    const items = facilities.map((item) => ({ value: String(item.id), text: item.name }));

    const updatePrices = (prices: number[]) => {
        filters.setPrices('priceFrom', prices[0]);
        filters.setPrices('priceTo', prices[1]);
    }

    const updateRooms = (rooms: number[]) => {

        filters.setRooms('roomFrom', rooms[0]);
        filters.setRooms('roomTo', rooms[1]);
    }

    return (
        <div className={className}>
            <Title text='Фильтрация' size='sm' className='mb-5 font-bold' />

            <CheckboxFiltersGroup
                title='Дополнения'
                name='additions'
                className='mb-5'
                onClickCheckbox={filters.setAdditions}
                selected={filters.additions}
                items={[
                    { value: '1', text: 'Рядом с метро' }
                ]}
            />

            {/* Фильтр цен */}
            <div className='mt-5 border-y border-y-neutral-100 py-6 pb-7'>
                <p className='font-bold mb-3'>Цена от и до:</p>
                <div className='flex gap-3 mb-5'>
                    <Input
                        type="number"
                        placeholder='0'
                        min={0}
                        max={5000}
                        // value={String(filters.prices.priceFrom)}
                        value={filters.prices.priceFrom !== undefined ? String(filters.prices.priceFrom) : ""}
                        onChange={(e) => filters.setPrices('priceFrom', Number(e.target.value))}
                    />
                    <Input
                        type="number"
                        min={100}
                        max={5000}
                        placeholder='5000'
                        // value={String(filters.prices.priceTo)}
                        value={filters.prices.priceTo !== undefined ? String(filters.prices.priceTo) : ""}
                        onChange={(e) => filters.setPrices('priceTo', Number(e.target.value))}
                    />
                </div>

                <RangeSlider
                    min={0}
                    max={5000}
                    step={10}
                    value={[filters.prices.priceFrom || 0, filters.prices.priceTo || 5000]}
                    onValueChange={updatePrices}
                />
            </div>


            {/* Верхние чекбоксы */}
            <CheckboxFiltersGroup
                title='Ремонт'
                name='repairs'
                className='mt-5 mb-5'
                onClickCheckbox={filters.setRepairs}
                selected={filters.repairs}
                items={[
                    { value: '1', text: 'Хороший' },
                    { value: '2', text: 'Нормальный' },
                    { value: '3', text: 'Плохое состояние' },
                ]}
            />


            {/* Количество комнат */}
            <div className='mt-5 border-y border-y-neutral-100 py-6 pb-7'>
                <p className='font-bold mb-3'>Количество комнат:</p>
                <div className='flex gap-3 mb-5'>
                    <Input
                        type="number"
                        placeholder='1'
                        min={1}
                        max={4}
                        // value={String(filters.prices.priceFrom)}
                        value={filters.rooms.roomFrom !== undefined ? String(filters.rooms.roomFrom) : ""}
                        onChange={(e) => filters.setRooms('roomFrom', Number(e.target.value))}
                    />
                    <Input
                        type="number"
                        min={1}
                        max={4}
                        placeholder='4'
                        // value={String(filters.prices.priceTo)}
                        value={filters.rooms.roomTo !== undefined ? String(filters.rooms.roomTo) : ""}
                        onChange={(e) => filters.setRooms('roomTo', Number(e.target.value))}
                    />
                </div>

                <RangeSlider
                    min={1}
                    max={4}
                    step={1}
                    value={[filters.rooms.roomFrom || 1, filters.rooms.roomTo || 4]}
                    onValueChange={updateRooms}
                />
            </div>

            <CheckboxFiltersGroup
                title='Удобства'
                name='facilities'
                className='mt-5'
                limit={6}
                defaultItems={items.slice(0, 6)}
                items={items}
                loading={loading}
                onClickCheckbox={filters.setSelectedFacilities}
                selected={filters.selectedFacilities}

            />

            {/* Фильтр количества комнат */}
        </div>
    );
};