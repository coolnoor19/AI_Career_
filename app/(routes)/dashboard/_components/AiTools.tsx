
import React from 'react'
import AiToolCard from './AiToolCard'


const aiToolsList = [
    {
        name: 'AI Career Q&A chat',
        desc: 'chat with AI Agent',
        icon: '/chatbot.png',
        button: 'Ask Now',
        path: '/ai-tools/ai-chat'
    },
    {
        name: 'AI rresune analyser',
        desc: 'improve your resume',
        icon: '/resume.png',
        button: 'Analyse now',
        path: '/ai-resume-analyser'
    },
    {
        name: 'Career Roadmap Generator',
        desc: 'build your roadmap',
        icon: '/roadmap.png',
        button: 'Generate now',
        path: '/career-roadmap-generator'
    },
    {
        name: 'Cover Letter Generator',
        desc: 'writer a cover letter',
        icon: '/cover.png',
        button: 'create now',
        path: '/cover-letter-generator'
    },
]


function AiTools() {
    return (
        <div className='mt-7 p-5 bg-white border rounded-xl'>
            <h2 className='font-bold text-lg'>Avaiable AI Tools</h2>
            <p>Start buillding and shape Your Career with this exclusive AI tools </p>

           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-4'>
             {aiToolsList.map((tool : any, index) => (
                <AiToolCard tool={tool} key={index} />
            ))}
           </div>
        </div>
    )
}

export default AiTools
