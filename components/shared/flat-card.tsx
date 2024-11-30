import Link from 'next/link';
import React from 'react';
import { Title } from './title';
import { Button } from '../ui';
import { Plus } from 'lucide-react';

interface Props {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
    className?: string;
}

export const FlatCard: React.FC<Props> = ({ id, name, price, imageUrl, className }) => {
    return (
        <div className={className}>
            <Link href={`/flat/${id}`}>
                {/* <div className='flex justify-center p-3 bg-secondary rounded-lg h-[260px]'> */}
                <div className='flex justify-center p-2 bg-secondary rounded-lg h-[260px]'>
                    <img className='rounded-lg h-[244px] object-cover' src={imageUrl} alt={name} />
                </div>
                {/* </div> */}

                <Title text={name} size='sm' className='mb-1 mt-3 font-bold' />

                <p className='text-sm text-gray-400'>
                    Тут текст в виде описания квартиры, по сути много чего можно накинуть, но я не буду
                </p>

                <div className='flex justify-between items-center mt-4'>
                    <span className='text-[20px]'>
                        от <b>{price} BYN</b>
                    </span>

                    <Button variant="secondary">
                        <Plus size={20} className='mr-1' />
                        Подробнее
                    </Button>

                </div>
            </Link>
        </div>
    );
};