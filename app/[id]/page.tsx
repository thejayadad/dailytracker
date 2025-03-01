'use client'
import { useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';
import React from 'react';
import { Id } from '@/convex/_generated/dataModel';import { useParams } from 'next/navigation';


const SingleBookPage = () => {
    const params = useParams();
    const bookId = params?.id as string;
  return (
    <div>SingleBookPage</div>
  )
}

export default SingleBookPage