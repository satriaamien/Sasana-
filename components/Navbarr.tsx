import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBell} from '@fortawesome/free-solid-svg-icons'
const Navbarr = () => {
  return (
    <div className="pb-5 pt-5 drop-shadow-2xl bg-slate-100">
      <div className="flex justify-between wide w-11/12 m-auto">
        <div className="text-lg font-semibold drop-shadow">
          <p>Sasana Digital</p>
        </div>
        <div className="flex justify-between gap-4 items-center ">
          <div className='mr-2'>
          <FontAwesomeIcon icon={faBell} className='w-6 text-red-500' />
          </div>
          <div className='bg-gray-300 p-2 rounded-full'>
            <p>MS</p>
          </div>
          <div>
            <div>
              <p>Muaffa Syukur</p>
            </div>
            <div className="text-xs font-light">
              <p>Hitness Muharram</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbarr;
