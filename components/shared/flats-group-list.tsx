'use client';

import React from 'react';
import { useIntersection } from 'react-use'

import { Title } from './title';
import { cn } from '@/lib/utils';
import { FlatCard } from './flat-card';
import { useCategoryStore } from '@/store/category';

interface Props {
    title: string;
    items: any[];
    categoryId: number;
    className?: string;
    listClassName?: string;
}

export const FlatsGroupList: React.FC<Props> = ({
    title,
    items,
    categoryId,
    listClassName,
    className
}) => {
    const setActiveCategoryId = useCategoryStore((state) => state.setActiveId);
    const intersectionRef = React.useRef(null);
    const intersection = useIntersection(intersectionRef, {
        threshold: 0.4,
    });

    React.useEffect(() => {
        if (intersection?.isIntersecting) {
            setActiveCategoryId(categoryId);
        }
    }, [categoryId, intersection?.isIntersecting, title]);

    return (
        <div className={className} id={title} ref={intersectionRef}>
            <Title text={title} size='lg' className='font-extrabold mb-5' />

            <div className={cn('grid grid-cols-3 gap-[30px]', listClassName)}>
                {items.map((flat, i) => (
                    <FlatCard
                        key={flat.id}
                        id={flat.id}
                        name={flat.name}
                        imageUrl={flat.imageUrl}
                        price={flat.price}
                    />
                ))}
            </div>
        </div>
    );
};