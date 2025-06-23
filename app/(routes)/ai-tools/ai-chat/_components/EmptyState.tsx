"use client"
import React from 'react'

const questionList = [
    'What skills do I need for a data analyst role?',
    'How do I switch careers to UX design'
]

function EmptyState({selectedQuestion}: any) {
  return (
    <div>
      <h2 className='font-bold text-xl text-center'>ask anything to AI career agent</h2>
      { questionList.map((question , index)=> (
        <h2 className='text-center p-4 border rounded-lg my-3 hover:border-primary cursor-pointer'
        key= {index}
        onClick ={()=> selectedQuestion(question)}>{question}</h2>
      ))}
    </div>
  )
}

export default EmptyState
