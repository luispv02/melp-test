
export const SortRestaurant = ({sortBy, onSortChange}) => {

  return (
    <div className="flex justify-end">
      <select value={sortBy} onChange={(e) => onSortChange(e.target.value)} className="border border-gray-400 p-2 rounded-lg text-gray-800 outline-none cursor-pointer">
        <option value="" disabled>Ordenar</option>
        <option value="name-asc">A-Z</option>
        <option value="name-desc">Z-A</option>
        <option value="rating-desc">Mayor rating</option>
        <option value="rating-asc">Menor rating</option>
      </select>
    </div>
  )
}

