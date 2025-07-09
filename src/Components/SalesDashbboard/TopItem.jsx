import { FaTshirt, FaHatCowboy, FaShoppingBag, FaSkating, FaCalendar, FaGlasses } from 'react-icons/fa';



const TopItem = () => {
  return (
    <div>
      <div className="w-1/3 bg-white p-4 shadow rounded-lg">
          <h3 className="text-lg font-semibold mb-4">Top item categories</h3>
          <div className="grid grid-cols-3 gap-3 text-xl text-purple-600">
            {[FaTshirt, FaHatCowboy, FaShoppingBag, FaSkating, FaCalendar, FaGlasses].map((Icon, idx) => (
              <div key={idx} className="bg-purple-100 rounded p-4 flex justify-center items-center">
                <Icon />
              </div>
            ))}
          </div>
        </div>
    </div>
  )
}

export default TopItem
