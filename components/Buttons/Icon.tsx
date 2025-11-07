import Image from 'next/image'

interface IconBtnProps {
  src: string
  alt: string
}

const IconButton = ({ src, alt }: IconBtnProps) => {
  return (
    <button className='flex items-center justify-center bg-gray-200 rounded-2xl w-1/10 h-9'>
      <Image src={src} alt={alt} width={24} height={24} />
    </button>
  )
}

export default IconButton
