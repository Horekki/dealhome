'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { useCategoryStore } from '@/store/category';

interface Props {
    className?: string
}

const cats = [
    { id: 1, name: 'Аренда' },
    // { id: 2, name: 'Покупка' }
];
const other = [
    'Сдача',
    // 'Продажа',
];

export const Categories: React.FC<Props> = ({ className }) => {
    const categoryActiveId = useCategoryStore((state) => state.activeId);
    return (
        <div className={cn('inline-flex items-center gap-1 bg-gray-50 p-1 rounded-2xl', className)}>
            {cats.map(({ name, id }) => (
                <a
                    className={cn(
                        'flex items-center font-bold h-11 rounded-2xl px-5 group cursor-pointer hover:bg-secondary transition duration-200',
                        categoryActiveId === id && 'bg-white shadow-md shadow-gray-200 text-primary hover:bg-white'
                    )}
                    href={`/#${name}`}
                    key={id} // Используем id как ключ
                >
                    <button>{name}</button>
                </a>
            ))}
            <span className="h-8 w-px bg-gray-300 mx-2" />
            {other.map((item, index) => (
                <a
                    key={index} // Добавляем ключ
                    className={cn(
                        'flex items-center font-bold h-11 rounded-2xl px-5 cursor-pointer hover:bg-secondary transition duration-200'
                    )}
                >
                    <button>{item}</button>
                </a>
            ))}

            {/* {cats.map(({ name, id }, index) => (
                <a
                    className={cn(
                        'flex items-center font-bold h-11 rounded-2xl px-5 group cursor-pointer hover:bg-secondary transition duration-200',
                        categoryActiveId === id && 'bg-white shadow-md shadow-gray-200 text-primary hover:bg-white'
                    )}
                    href={`/#${name}`}
                    key={index}
                    >
                    <button>{name}</button>
                </a>
            ))
            }
            <span className="h-8 w-px bg-gray-300 mx-2" />
            {other.map((item, index) => (
                <a className={cn(
                    'flex items-center font-bold h-11 rounded-2xl px-5 cursor-pointer hover:bg-secondary  transition duration-200',
                )}>
                    <button>{item}</button>
                </a>
            ))} */}

        </div>
    );
};