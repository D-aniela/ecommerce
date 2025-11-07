const Subtitle = ({ text }: { text: string }) => {
  return (
    <div className='pl-10'>
      <h3 className='text-xl md:text-xl text-gray-600 mb-4'>{text}</h3>
    </div>
  )
}

export default Subtitle
