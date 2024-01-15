import { useState } from "react"
import Dp2  from '../assets/DP2.jpeg'
const Projects =()=>{
 
    const[Activelink, setActivelink] = useState("All");

    const handleclick=(e,link)=>{
        e.preventDefault();
           setActivelink(link);
    }

     return(
        <>
           <div id="projects"  className="bg-lime-200 w-full h-full">
                        <h3 className="font-bold text-center text-indigo-900 text-3xl pt-16 underline">Recent Projects</h3>
                        <div className="w-96 h-10 rounded-2xl bg-lime-200 flex items-center mx-auto mt-4">
                            <a className={`font-semi-bold rounded-2xl h-12 space-x-2 m-2 p-2 text-2xl ${Activelink=== 'All' ?'bg-amber-500': 'bg-lime-200'}`} href="" onClick={(e)=>handleclick(e,'All')}>All</a>
                            <a className={`font-semi-bold rounded-2xl h-12 space-x-2 m-2 p-2 text-2xl ${Activelink=== 'Shoping Cart' ?'bg-amber-500': 'bg-lime-200'}`} href="#"  onClick={(e)=>handleclick(e,'Shoping Cart')}>Shopping Cart</a>
                            <a className={`font-semi-bold rounded-2xl h-12 space-x-2 m-2 p-2 text-2xl ${Activelink=== 'Chat' ?'bg-amber-500': 'bg-lime-200'}`} href="#"  onClick={(e)=>handleclick(e,'Chat')}>Chat</a>
                        </div>
                        <div className="w-3/4 h-full flex flex-row flex-wrap justify-center ml-36 mt-5">
                            <div className="w-2/5 h-80 rounded-3xl overflow-hidden bg-white border-2 border-black shadow-2xl shadow-slate-500 m-2 ">
                                <img className="w-full h-3/5" src={Dp2} alt="" /><br />
                                 <h4 className="font-black text-2xl ml-8">Portfolio</h4>  &nbsp; 
                                <a className="text-2xl text-blue-900 ml-8 hover:text-red-600" href="">Demo &nbsp; <i class="fa-solid fa-arrow-right "></i></a>
                            </div>
                            <div className="w-2/5 h-80 rounded-3xl overflow-hidden bg-white border-2 border-black m-2">
                              <img className="w-full h-3/5" src={Dp2} alt="" /><br />
                                 <h4 className="font-black text-2xl ml-8">E-Com Api</h4>  &nbsp; 
                                <a className="text-2xl text-blue-900 ml-8 hover:text-red-600" href="">Demo &nbsp; <i class="fa-solid fa-arrow-right "></i></a>
                            </div>
                            <div className="w-2/5 h-80 rounded-3xl overflow-hidden bg-white border-2  border-black m-2 ">
                              <img className="w-full h-3/5" src={Dp2} alt="" /><br />
                                 <h4 className="font-black text-2xl ml-8">Shoping Cart</h4>  &nbsp; 
                                <a className="text-2xl text-blue-900 ml-8 hover:text-red-600" href="">Demo &nbsp; <i class="fa-solid fa-arrow-right "></i></a>
                            </div>
                            <div className="w-2/5 h-80 rounded-3xl overflow-hidden bg-white border-2 border-black m-2 "> 
                            <img className="w-full h-3/5" src={Dp2} alt="" /><br />
                                 <h4 className="font-black text-2xl ml-8">Live Chat</h4>  &nbsp; 
                                <a className="text-2xl text-blue-900 ml-8 hover:text-red-600" href="">Demo &nbsp; <i class="fa-solid fa-arrow-right "></i></a>
                          </div>
                        </div> 
          </div>
        </>
     )
}
export default Projects