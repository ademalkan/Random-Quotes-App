import React from 'react'
import { Quotes } from '../../interfaces'

interface Props {
    quotes?: Quotes
    refreshData?: () => void
}

export default function QuotesCard({ quotes, refreshData }: Props) {
    return (
        <div className="mx-auto  w-10/12 lg:w-4/12 ">
            <div className=" text-gray-50  bg-light-black rounded shadow-lg p-5 overflow-hidden">
                <div className='text-right opacity-70'>
                    {quotes.dateAdded}
                </div>
                <div className='italic'>
                    <p>
                        {quotes.content}
                    </p>
                    <span className='text-xs'>(Quotes Lenghth: {quotes.length})</span>
                </div>
                <div className='flex items-center  justify-between'>
                    <div className='italic'>
                        {quotes.author}
                    </div>
                    <div className='p-2 bg-dark-black rounded-md my-2 opacity-90 text-xs first-letter:uppercase inline-block hover:opacity-100 transition-all'>
                        #{quotes.tags}
                    </div>
                </div>
                <button className='btn block md:w-1/2 mx-auto py-2 px-4 mt-2 rounded-md font-medium hover:bg-dark-black hover:text-slate-100 transition-all  text-slate-900  bg-custom-grey'
                    onClick={refreshData}>
                    Get New Quotes
                </button>
            </div>
        </div>


    )
}