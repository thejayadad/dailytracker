'use client'
import { useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';
import React from 'react';
import { Id } from '@/convex/_generated/dataModel';import { useParams } from 'next/navigation';


const SingleBookPage = () => {
    const params = useParams();
    const bookId = params?.id as string;
  return (
    <div className="w-full h-full">
      <div className="mx-auto max-w-screen-xl p-4 flex flex-col w-full h-full">
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-1 h-full'>
            <div className='col-span-1'>Preview</div>
            <div className='col-span-1'>Content</div>
        </div>
        </div>
    </div>
  )
}

export default SingleBookPage