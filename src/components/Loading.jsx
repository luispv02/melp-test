export const Loading = () => {
  return (
    <div className="flex flex-col items-center pt-10">
        <div className="relative w-8 h-8 mb-2">
          <div className='border-2 border-transparent border-t-black rounded-full absolute inset-0  animate-spin'></div>
        </div>
        
        <p className="text-black font-medium animate-pulse">
          Cargando...
        </p>
    </div>
  )
}