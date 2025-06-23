"use client"

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React, { useState } from 'react'


// This is a placeholder for the user history data, you can replace it with actual data fetching logic
function History() {
    const [userHistory, setUserHistory] = useState([])
    return (
        <div className='mt-5 p-5 border rounded-xl' >
            <h2 className='font-bold text-lg'>Previous History</h2>
            <p>What your work previously work on, You can find here</p>

            {userHistory.length == 0 &&
                <div className='flex items-center justify-center flex-col  mt-5' >
                    <Image src={'/idea.png'} alt='empty history' 
                    width={50} 
                    height={50}  />
                    <h2>You do not have any history</h2>
                    <Button className='mt-2'>explore AI tool</Button>
                </div>
            }

            {/* // ANother way to show empty history */}

            {/* {userHistory.length ===0 ?(<div>
                <Image src={'/idea.png'} alt='empty history' width={50} height={50}></Image>
            </div>) : null} */}
           
        </div>
    )
}

export default History
