import React from 'react'

const SectionWrapper = ({children, border}:{children:React.ReactNode, border:boolean}) => {
  return (
    <div className={`w-full h-fit p-14 ${border? 'border border-black border-opacity-70 rounded-[15px]': ''} `}>
        {children}
    </div>
  )
}

export default SectionWrapper