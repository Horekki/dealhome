import { cn } from '@/lib/utils';
import React from 'react';
import { Container } from './container';
import Image from 'next/image';
import { Button } from '../ui';
import { ArrowRight, Heart, Notebook, User } from 'lucide-react';
import Link from 'next/link';
import { SearchInput } from './search-input';

interface Props {
  className?: string
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn('border border-b', className)}>
      <Container className='flex items-center justify-between py-8'>

        {/* Левая часть */}
        <Link href="/">
          <div className='flex items-center gap-4'>
            <Image src={"/logo.png"} alt="Logo" width={35} height={35}></Image>
            <div>
              <h1 className='text-2xl font-black'>DealHome</h1>
              <p className='text-sm text-gray-400 leading-3'>Любая недвижимость</p>
            </div>
          </div>
        </Link>

        {/* Средняя часть */}
        <div className='mx-10 flex-1'>
          <SearchInput />
        </div>

        {/* Правая часть */}
        <div className='flex items-center gap-3'>
          <Button variant={"outline"} className='flex items-center gap-1'>
            <Notebook size={16} />
            Каталог
          </Button>

          <Button variant={"outline"} className='flex items-center gap-1'>
            <User size={16} />
            Войти
          </Button>

          <div>
            <Button className='group relative'>
              <div className='flex items-center gap-1 transition duration-300 group-hover:opacity-0'>
                <Heart size={16} className='relative' strokeWidth={2} />
                <b>3</b>
              </div>
              <ArrowRight
                size={20}
                className='absolute right-5 transition duration-300 translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0' />
            </Button>
          </div>

        </div>

      </Container>
    </header>
  );
};