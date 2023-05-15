import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleUser,faBook,faLocationDot,faBox,faCoins,faCircleDollarToSlot} from '@fortawesome/free-solid-svg-icons'
import {faArrowUpRightDots,faSackDollar,faBagShopping,faFileCircleXmark,faCalendarDays} from '@fortawesome/free-solid-svg-icons'
import BarChart from "./BarChart";
import LineChart from "./LineChart";
import Image from "next/image";
import lays from './images/lays.png'
import doritos from './images/doritos.png'

type topSelling ={
    id:string,
    name:string,
    soldQuantity: number,
    RemQuantity:number,
    price:number,
}
const topSellings:topSelling[]=[
    {
    id:'m1',
    name:'Surf Excel',
    soldQuantity: 30,
    RemQuantity:12,
    price:100,
    },
    {
    id:'m2',
    name:'Rin',
    soldQuantity: 21,
    RemQuantity:15,
    price:207,
    },
    {
    id:'m3',
    name:'Parie G',
    soldQuantity: 19,
    RemQuantity:17,
    price:105,
    },
]

const ContentDash=()=>{
    
    // const [tops, setTops] = useState>([topSellings])
    return<>
    <div>
        <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="p-4 col-span-2 h-40 rounded bg-white">
                <div className="mb-2">
                    <h1 className="text-lg text-gray-600 font-semibold">Sales Overview</h1>
                </div>
                <div className="grid grid-cols-4 ">
                    <div dir="rtl">
                        <div className="border-s-2 border-gray-100 rounded-md h-full">
                            <div className='flex justify-center mb-1'>
                                <div className="mb-2 mx-2"><FontAwesomeIcon className='w-6 text-cyan-400' icon={faCoins} /></div>
                            </div>
                            <div className="flex flex-row-reverse items-center justify-between mx-2">
                                <div className="font-medium text-gray-500 text-sm text-left">
                                    <p>Rp 832</p>
                                </div>
                                <div className="font-medium text-gray-400 text-sm"><p>Sales</p></div>
                            </div>
                        </div>
                    </div>
                    <div dir="rtl">
                        <div className="border-s-2 border-gray-100 rounded-md h-full">
                            <div className='flex justify-center mb-1'>
                                <div className="mb-2 mx-2"><FontAwesomeIcon className='w-6 text-indigo-500' icon={faCircleDollarToSlot} /></div>
                            </div>
                            <div className="flex flex-row-reverse justify-between mx-2">
                                <div className="font-medium text-gray-500 text-sm text-left">
                                    <p>Rp 18,300</p>
                                </div>
                                <div className="font-medium text-gray-400 text-sm"><p>Revenue</p></div>
                            </div>
                        </div>
                    </div>
                    <div dir="rtl">
                        <div className="border-s-2 border-gray-100 rounded-md h-full">
                            <div className='flex justify-center mb-1'>
                                <div className="mb-2 mx-2"><FontAwesomeIcon className='w-6 text-orange-300' icon={faArrowUpRightDots} /></div>
                            </div>
                            <div className="flex flex-row-reverse items-center justify-between mx-2">
                                <div className="font-medium text-gray-500 text-sm text-left">
                                    <p>Rp 868</p>
                                </div>
                                <div className="font-medium text-gray-400 text-sm"><p>Profit</p></div>
                            </div>
                        </div>
                    </div>
                    <div dir="">
                        <div className="h-full">
                            <div className='flex justify-center mb-1'>
                                <div className="mb-2 mx-2"><FontAwesomeIcon className='w-6 text-green-400' icon={faSackDollar}/></div>
                            </div>
                            <div className="flex items-center justify-between mx-2">
                                <div className="font-medium text-gray-500 text-sm text-left">
                                    <p>Rp 17.432</p>
                                </div>
                                <div className="font-medium text-gray-400 text-sm"><p>Cost</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-4 rounded bg-white">
                <div className="mb-2">
                    <h1 className="text-lg text-gray-600 font-semibold">Inventory Summary</h1>
                </div>
                <div className="grid grid-cols-2 ">
                    <div dir="rtl">
                        <div className="border-s-2 border-gray-100 rounded-md h-full">
                            <div className="flex flex-col items-center text-center">
                                <div className=" mx-2 mb-2 "><FontAwesomeIcon className='w-6 text-orange-300' icon={faBox} /></div>
                                <div className="font-semibold text-gray-500 text-md"><p>868</p></div>
                                <div className="font-semibold text-gray-500 text-sm"><p>Quantity in Hand</p></div>
                            </div>
                        </div>
                    </div>
                    <div dir="">
                        <div className="">
                            <div className="flex flex-col items-center text-center">
                                <div className=" mx-2 mb-2"><FontAwesomeIcon className='w-6 text-indigo-500' icon={faLocationDot} /></div>
                                <div className="font-semibold text-gray-500 text-md"><p>200</p></div>
                                <div className="font-semibold text-gray-500 text-sm"><p>To be received</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="p-4 col-span-2 h-40 rounded bg-white">
                <div className="mb-2">
                    <h1 className="text-lg text-gray-600 font-semibold">Purchase Overview</h1>
                </div>
                <div className="grid grid-cols-4 ">
                    <div dir="rtl">
                        <div className="border-s-2 border-gray-100 rounded-md h-full">
                            <div className='flex justify-center mb-1'>
                                <div className="text-center mb-2 mx-2"><FontAwesomeIcon className='w-6 text-cyan-400' icon={faBagShopping} /></div>
                            </div>
                            <div className="flex flex-row-reverse items-center justify-between mx-2">
                                <div className="font-medium text-gray-500 text-sm text-left">
                                    <p>82</p>
                                </div>
                                <div className="font-medium text-gray-400 text-sm"><p>Purchase</p></div>
                            </div>
                        </div>
                    </div>
                    <div dir="rtl">
                        <div className="border-s-2 border-gray-100 rounded-md h-full">
                            <div className='flex justify-center mb-1'>
                                <div className="text-center mb-2 mx-2"><FontAwesomeIcon className='w-6 text-green-400' icon={faSackDollar}/></div>
                            </div>
                            <div className="flex flex-row-reverse items-center justify-between mx-2">
                                <div className="font-medium text-gray-500 text-sm text-left">
                                    <p>Rp 13.573</p>
                                </div>
                                <div className="font-medium text-gray-400 text-sm"><p>Cost</p></div>
                            </div>
                        </div>
                    </div>
                    <div dir="rtl">
                        <div className="border-s-2 border-gray-100 rounded-md h-full">
                            <div className='flex justify-center mb-1'>
                                <div className="text-center mb-2 mx-2"><FontAwesomeIcon className='w-6 text-indigo-500' icon={faFileCircleXmark} /></div>
                            </div>
                            <div className="flex flex-row-reverse items-center justify-between mx-2">
                                <div className="font-medium text-gray-500 text-sm text-left">
                                    <p>5</p>
                                </div>
                                <div className="font-medium text-gray-400 text-sm"><p>Cancel</p></div>
                            </div>
                        </div>
                    </div>
                    <div dir="">
                        <div className="h-full">
                            <div className='flex justify-center mb-1'>
                                <div className="text-center mb-2 mx-2"><FontAwesomeIcon className='w-6 text-orange-300' icon={faArrowUpRightDots} /></div>
                            </div>
                            <div className="flex items-center justify-between mx-2">
                                <div className="font-medium text-gray-500 text-sm text-left">
                                    <p>Rp 17.432</p>
                                </div>
                                <div className="font-medium text-gray-400 text-sm"><p>Return</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-4 rounded bg-white">
                <div className="mb-2">
                    <h1 className="text-lg text-gray-600 font-semibold">Product Summary</h1>
                </div>
                <div className="grid grid-cols-2 ">
                    <div dir="rtl">
                        <div className="border-s-2 border-gray-100 rounded-md h-full">
                            <div className="flex flex-col items-center text-center ">
                                <div className=" mx-2 mb-2 "><FontAwesomeIcon className='w-6 text-cyan-400' icon={faCircleUser} /></div>
                                <div className="font-semibold text-gray-500 text-md"><p>31</p></div>
                                <div className="font-semibold text-gray-500 text-sm"><p>Number of Supliers</p></div>
                            </div>
                        </div>
                    </div>
                    <div dir="">
                        <div className="">
                            <div className="flex flex-col items-center text-center">
                                <div className=" mx-2 mb-2"><FontAwesomeIcon className='w-6 text-indigo-500' icon={faBook} /></div>
                                <div className="font-semibold text-gray-500 text-md"><p>200</p></div>
                                <div className="font-semibold text-gray-500 text-sm"><p>Number of Categories</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="p-4 col-span-2 h-82 rounded bg-white">
                <div className="flex items-center justify-between mb-2">
                    <div className="">
                        <h1 className="text-lg text-gray-600 font-semibold">Sales & Purchase</h1>
                    </div>
                    <div className="text-sm text-gray-500 flex flex-row items-center gap-2 border border-bg-gray-500 pt-1 pb-1 pl-2 pr-2 hover:bg-gray-100">
                        <div>
                            <FontAwesomeIcon className='w-4' icon={faCalendarDays} />
                        </div>
                        <div>
                            <p>weekly</p>
                        </div>
                    </div>
                </div>
                <BarChart/>
            </div>
            <div className="p-4 h-82 rounded bg-white">
                <div className="mb-2">
                    <div className="">
                        <h1 className="text-lg text-gray-600 font-semibold">Order Summary</h1>
                    </div>
                </div>
                <LineChart/>
            </div>
        </div>
        <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="p-4 col-span-2 justify-center h-62 rounded bg-white">
                <div className="flex items-center justify-between mb-2">
                    <div className="">
                        <h1 className="text-lg text-gray-600 font-semibold">Top Selling Stock</h1>
                    </div>
                    <div className="text-sm text-cyan-600">
                        <p>See All</p>
                    </div>
                </div>
                <div className="sm:rounded-lg">
                    <table className="w-full text-left  ">
                        <thead className="font-medium text-gray-500 text-sm text-left">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                Sold Quantity
                                </th>
                                <th scope="col" className="px-6 py-3">
                                Remaining Quantity
                                </th>
                                <th scope="col" className="px-6 py-3">
                                Price
                                </th>
                            </tr>
                        </thead>
                        <tbody className="font-medium text-gray-500 text-sm text-left">
                            {topSellings.map(item=>{
                                return<tr key={item.id} className="bg-white border-b hover:bg-gray-50">
                                    <th scope="row" className="px-6 py-4 whitespace-nowrap ">
                                    <p>{item.name}</p>
                                    </th>
                                    <th className="px-6 py-4">
                                    <p>{item.soldQuantity}</p>
                                    </th>
                                    <td className="px-6 py-4">
                                    <p>{item.RemQuantity}</p>
                                    </td>
                                    <td className="px-6 py-4">
                                    <p>{`$ ${item.price}`}</p>
                                    </td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </div> 
            </div>
            <div className="p-4 justify-center h-62 rounded bg-white">
                <div className="grid grid-cols-4 gap-4 mb-2">
                    <div className="col-span-3">
                        <h1 className="text-lg text-gray-600 font-semibold">Low Quantity Stock</h1>
                    </div>
                    <div className="text-sm text-cyan-600 text-center">
                        <p>See All</p>
                    </div>
                </div>
                <div className='flex flex-col gap-y-2'>
                    <div className="grid grid-cols-4 gap-4 items-center">
                        <div><Image src={lays} alt="lays"/></div>
                        <div className="col-span-2">
                            <div className="text-gray-600 font-semibold"><h1>Lays</h1></div>
                            <div><p className=" text-gray-400 text-sm">Remaining Quantity : 10 Packet</p></div>
                        </div>
                        <div className="">
                            <div className="bg-red-100 rounded-lg p-1">
                                <p className="text-red-700 text-xs font-bold text-center">Low</p></div>
                            </div>
                    </div>
                    <div className="grid grid-cols-4 gap-4 items-center">
                        <div><Image src={doritos} alt="lays"/></div>
                        <div className="col-span-2">
                            <div className="text-gray-600 font-semibold"><h1>Doritos</h1></div>
                            <div><p className=" text-gray-400 text-sm">Remaining Quantity : 15 Packet</p></div>
                        </div>
                        <div className="">
                            <div className="bg-red-100 rounded-lg p-1">
                                <p className="text-red-700 text-xs font-bold text-center">Low</p></div>
                            </div>
                    </div>
                    <div className="grid grid-cols-4 gap-4 items-center">
                        <div><Image src={doritos} alt="lays"/></div>
                        <div className="col-span-2">
                            <div className="text-gray-600 font-semibold"><h1>Doritos</h1></div>
                            <div><p className=" text-gray-400 text-sm">Remaining Quantity : 15 Packet</p></div>
                        </div>
                        <div className="">
                            <div className="bg-red-100 rounded-lg p-1">
                                <p className="text-red-700 text-xs font-bold text-center">Low</p></div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
}
export default ContentDash;