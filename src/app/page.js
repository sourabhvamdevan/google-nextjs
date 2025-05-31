

import HomeHeader from '@/components/HomeHeader'
import React from 'react'
import Image from 'next/image'

import { ImageError } from 'next/dist/server/image-optimizer'
import { TbHomeSearch } from 'react-icons/tb'
import HomeSearch from '@/components/HomeSearch'
function page() {
  return (
    <div>
     
      <HomeHeader/>
      <div className='flex flex-col items-center mt-24'>
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/500px-Google_2015_logo.svg.png"
          width={300}
          height={100}
          alt="Google logo"
          priority
          style={{width:"auto"}}
        />
        <HomeSearch/>
      </div>
    </div>
  )
}

export default page
