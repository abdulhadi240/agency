import React from 'react'
import Link from 'next/link'
const page = () => {
  return (
    <Link href={'/'}><div className="text-4xl text-white">
      about
    </div></Link>
  )
}

export default page