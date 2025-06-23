import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Send } from 'lucide-react'
import React from 'react'
import EmptyState from './_components/EmptyState'

function AiChat() {
    return (
        <div className='px-10 md:px-24 lg:px-36 xl:px-48'>
            <div className='flex items-center justify-between gap-8'>
                <div>
                    <h2 className='font-bold text-lg'>AI Career Q-A Chat</h2>
                    <p>Similar Career decisions start here --  and a roadmap built just for you with the power of AI</p>
                </div>
                <Button>+ New Chat</Button> 
            </div>

            <div className='flex flex-col h-[75vh]'>
                <div className='mt-5'>
                    {/* empty state options */}
                    <EmptyState/>
                </div>

                <div className='flex-1'>
                    {/* message list */}
                </div>

                <div className='flex items-center justify-between mt-2 gap-6'>
                    {/* input field */}
                    <Input placeholder='Type your message here...' />
                    <Button><Send/></Button>
                </div>
            </div>
        </div>
    )
}

export default AiChat
