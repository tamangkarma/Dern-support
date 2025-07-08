// layout/Sidebar.jsx
import { Nav } from '../Data/data'
import { NavLink } from 'react-router'

const Sidebar = () => {
  return (
    <div className='h-screen bg-primary text-white w-60 p-4 rounded-lg flex flex-col'>
      <ul className='flex flex-col gap-4'>
        {Nav.map((item, index) => {
          const Icon = item.icon;
          return (
            <li key={index}>
              <NavLink to={item.url} className='flex items-center gap-2'>
                {Icon && <Icon className='text-lg' />}
                <span>{item.title}</span>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
