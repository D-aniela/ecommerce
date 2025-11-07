interface ColorsBtnProps {
  colors: string[]
}

const ColorsBtn = ({ colors }: ColorsBtnProps) => {
  return (
    <div className='flex gap-3'>
      {colors.map((color, index) => {
        return (
          <button
            key={index}
            className={`rounded-full border-gray-400 border-2 bg-[#${color}] w-7 h-7 mt-5 cursor-pointer`}
          />
        )
      })}
    </div>
  )
}

export default ColorsBtn
