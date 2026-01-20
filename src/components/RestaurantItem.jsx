import { FaStar } from "react-icons/fa";
import { GoGlobe } from "react-icons/go";
import { IoLocationOutline } from "react-icons/io5";
import { LuPhone } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { FacebookIcon, FacebookShareButton } from "react-share";

export const RestaurantItem = ({ restaurant }) => {
  
  const { name, rating, address, contact } = restaurant;

  return (
    <article className="border border-gray-200 shadow-lg rounded-lg"> 
      <div className="card-header border-b border-gray-300 p-3 md:p-4 space-y-1">
        <div className="font-semibold">{name}</div>

        <div className="flex gap-1">
          {
            [...Array(4)].map((_, index) => (
              <FaStar key={index} className={index < rating ? 'text-yellow-400' : 'text-gray-300'} />
            )) 
          }
        </div>

        <div className="flex items-center gap-2">
          <IoLocationOutline size={25} />
          { address && <div className="text-sm line-clamp-2">{address?.street}, { address?.city }, {address?.state}</div> }
        </div>
      </div>

      <div className="card-body border-b border-gray-300 py-4 px-3 md:p-4 flex-">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <LuPhone />
            <div className="text-sm">{contact?.phone}</div>
          </div>
          <div className="flex items-center gap-2">
            <MdOutlineEmail className=""/>
            <a href={`mailto:${contact?.email}`} className="text-sm truncate flex-1">{contact?.email}</a>
          </div>
        </div>
      </div>
      
      <div className="card-footer p-3 flex flex-col justify-between space-y-2">
        <a href={contact?.site} rel="noopener noreferrer" target="_blank" className="w-full flex items-center border px-1 py-2 gap-2 rounded border-gray-300 shadow cursor-pointer transition hover:bg-gray-100">
          <GoGlobe />
          <span className="text-sm">Visitar página web</span>
        </a>
    
        <div className="border border-gray-300 py-2 px-1 transition hover:bg-gray-100">
          <FacebookShareButton url={contact?.site} className="w-full flex gap-2" hashtag={`#${name.replace(/[^a-zA-Z0-9]/g, '')}`}>
            <FacebookIcon size={18} round /> 
            <span className="text-sm">Compartir</span>
          </FacebookShareButton>
        </div>
      </div>
    </article>
  )
}
