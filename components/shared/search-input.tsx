'use client'

import { cn } from '@/lib/utils';
import { Api } from '@/services/api-client';
// import { search } from '@/services/flats';
import { Flat } from '@prisma/client';
import { Search } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { useClickAway, useDebounce } from 'react-use';

interface Props {
    className?: string
}

export const SearchInput: React.FC<Props> = ({ className }) => {
    const [searchQuery, setSearchQuery] = React.useState('');
    const [focused, setFocused] = React.useState(false);
    const [flats, setFlats] = React.useState<Flat[]>([]);
    const ref = React.useRef(null);

    useClickAway(ref, () => {
        setFocused(false);
    });

    useDebounce(
        async () => {
            try {
                const response = await Api.flats.search(searchQuery);
                setFlats(response);
            } catch (e) {
                console.error(e);
            }
        },
        300,
        [searchQuery]
    );

    const onClickItem = () => {
        setFocused(false);
        setSearchQuery('');
        setFlats([]);
    }

    // React.useEffect(() => {
    //     Api.flats.search(searchQuery).then(items => {
    //         setFlats(items);
    //     });
    // }, [searchQuery]);

    return (
        <>
            {focused && <div className='fixed top-0 left-0 bottom-0 right-0 bg-black/50 z-30' />}

            <div
                ref={ref}
                className={cn("flex rounded-2xl flex-1 justify-between relative h-11 z-30", className)}
            >
                <Search className='absolute top-1/2 translate-y-[-50%] left-3 h-5 text-gray-400' />
                <input
                    className='rounded-2xl outline-none w-full bg-gray-100 pl-11'
                    type="text"
                    placeholder='Найти квартиру...'
                    onFocus={() => setFocused(true)}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />

                {flats.length > 0 && <div className={cn(
                    'absolute w-full bg-white rounded-xl py-2 top-14 shadow-md transition-all duration-200 invisible opacity-0 z-30',
                    focused && 'visible opacity-100 top-12'
                )}>
                    {
                        flats.map(flat => (
                            <Link
                                onClick={onClickItem}
                                key={flat.id}
                                className='flex items-center gap-3 px-3 py-2 hover:bg-primary/10'
                                href={`/flat/${flat.id}`}>
                                <img
                                    className='rounded-sm h-8'
                                    src={flat.imageUrl}
                                    alt={flat.name}
                                />
                                <span>{flat.name}</span>
                            </Link>
                        ))
                    }

                </div>}
            </div>
        </>
    );
};