import React from 'react'
import Header from './UI/Header'

interface Props {
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({children}) => {
  return (
    <>
    <Header/>
      <div className='main'>
        <div className='layout pt-[80px] md:pt-[100px]'>
          {children}
            </div>
      </div>
    </>
  )
}

export default Layout