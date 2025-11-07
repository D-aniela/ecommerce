const Title = ({ title }: { title: string }) => {
  return (
    <div className='pl-10'>
      <h2 className='text-2xl md:text-3xl font-bold mb-4'>{title}</h2>
    </div>
  )
}

export default Title
