import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFileInvoice,faChartColumn,faCube,faBoxArchive,faUserGroup,faPercent,faShop,faBarsStaggered} from '@fortawesome/free-solid-svg-icons'

import ContentDash from "./ContentDash"
const Sidebar=()=>{
    return<>
    <div className="flex flex-row ">
        <div className="h-inherit top-0 left-0 z-40 w-1/4 " aria-label="Sidebar">
            <div className="h-full pl-10 pr-2 py-4 overflow-y-auto bg-red-700 dark:bg-red-600 h-full">
            <ul className="space-y-2 font-medium">
            <li>
                <a href="#" className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-slate-400 dark:hover:bg-gray-700">
                    <FontAwesomeIcon icon={faShop}  className='w-10 h-10'/>
                    <div className="flex flex-1 flex-col gap-1">
                        <div className="flex-1 ml-3 text-sm  whitespace-nowrap font-normal"><p>Outlet</p></div>
                        <div className="flex-1 ml-3 text-sm whitespace-nowrap font-normal">
                            <div className='flex gap-x-2 items-center'>
                                <div>
                                    <p>Semua Outlet</p>
                                </div>
                                <div>
                                    <svg sidebar-toggle-item="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-1 rounded-full">
                    <FontAwesomeIcon icon={faBarsStaggered} className='w-4 h-4 text-red-700' />
                    </div>

                </a>
            </li>
            <li>
            <a href="#" className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-slate-400 dark:hover:bg-gray-700">
                <svg aria-hidden="true" className="w-6 h-6 text-white transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" /><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" /></svg>
                <span className="ml-3 hover:font-bold w-full">Dashboard</span>
            </a>
            </li>
                <li>
                <button type="button" className="flex items-center w-full p-2 text-white transition duration-75 rounded-lg group hover:bg-slate-400 dark:text-white dark:hover:bg-gray-700" aria-controls="" data-collapse-toggle="">
                    <FontAwesomeIcon icon={faFileInvoice} className='w-4 h-4' />
                    <span className="flex-1 ml-3 text-left whitespace-nowrap font-normal hover:font-bold" sidebar-toggle-item>Laporan</span>
                    <svg sidebar-toggle-item className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                </button>
                </li>
                <li>
                <button type="button" className="flex items-center w-full p-2 text-white transition duration-75 rounded-lg group hover:bg-slate-400 dark:text-white dark:hover:bg-gray-700" aria-controls="" data-collapse-toggle="">
                    <FontAwesomeIcon icon={faChartColumn} className='w-4 h-4' />
                    <span className="flex-1 ml-3 text-left whitespace-nowrap font-normal hover:font-bold" sidebar-toggle-item>Analisis Keuangan</span>
                    <svg sidebar-toggle-item className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                </button>
                </li>
                <li>
                <button type="button" className="flex items-center w-full p-2 text-white transition duration-75 rounded-lg group hover:bg-slate-400 dark:text-white dark:hover:bg-gray-700" aria-controls="" data-collapse-toggle="">
                    <FontAwesomeIcon icon={faCube} className='w-4 h-4' />
                    <span className="flex-1 ml-3 text-left whitespace-nowrap font-normal hover:font-bold" sidebar-toggle-item>Produk</span>
                    <svg sidebar-toggle-item className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                </button>
                </li>
                <li>
                <button type="button" className="flex items-center w-full p-2 text-white transition duration-75 rounded-lg group hover:bg-slate-400 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example2" data-collapse-toggle="dropdown-example2">
                    <FontAwesomeIcon icon={faBoxArchive} className='w-4 h-4' />
                    <span className="flex-1 ml-3 text-left whitespace-nowrap font-normal hover:font-bold" sidebar-toggle-item>Inventori</span>
                    <svg sidebar-toggle-item className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                </button>
                <ul id="dropdown-example2" className="hidden py-2 space-y-2">
                    <li>
                    <a href="#" className="flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-11 group hover:bg-slate-400 dark:text-white dark:hover:bg-gray-700"><p>Pembelian Stok</p></a>
                    </li>
                    <li>
                    <a href="#" className="flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-11 group hover:bg-slate-400 dark:text-white dark:hover:bg-gray-700"><p>Kelola Stok</p></a>
                    </li>
                    <li>
                    <a href="#" className="flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-11 group hover:bg-slate-400 dark:text-white dark:hover:bg-gray-700"><p>Daftar Pemasok (Suplier)</p></a>
                    </li>
                </ul>
                </li>
                <li>
                <button type="button" className="flex items-center w-full p-2 text-white transition duration-75 rounded-lg group hover:bg-slate-400 dark:text-white dark:hover:bg-gray-700" aria-controls="" data-collapse-toggle="">
                    <FontAwesomeIcon icon={faUserGroup} className='w-4 h-4' />
                    <span className="flex-1 ml-3 text-left whitespace-nowrap font-normal hover:font-bold" sidebar-toggle-item>Pelanggan</span>
                    <svg sidebar-toggle-item className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                </button>
                </li>
                <li>
                <button type="button" className="flex items-center w-full p-2 text-white transition duration-75 rounded-lg group hover:bg-slate-400 dark:text-white dark:hover:bg-gray-700" aria-controls="" data-collapse-toggle="">
                    <FontAwesomeIcon icon={faPercent} className='w-4 h-4'/>
                    <span className="flex-1 ml-3 text-left whitespace-nowrap font-normal hover:font-bold" sidebar-toggle-item>Promosi</span>
                    <svg sidebar-toggle-item className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                </button>
                </li>
            </ul>
            </div>
        </div>
        <div className="p-5 w-3/4 bg-slate-50">
            <div className="pr-8 rounded-lg">
                <ContentDash/>
            </div>
        </div>
    </div>
    </>
}
export default Sidebar