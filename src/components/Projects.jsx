import { useState } from "react"
import portfolioimg from '../assets/portfolio.jpg'
import livechatimg from '../assets/livechat.jpg'
import shopcartimg from '../assets/shopingcart.jpg'
import ecourseimg from '../assets/ecourse.jpg'
const Projects =()=>{
 
    const[Activelink, setActivelink] = useState("All");

    const handleclick=(e,link)=>{
        e.preventDefault();
           setActivelink(link);
    }
const projectlink = [
         {string:"https://rajeevratan.netlify.app/"},
        {string:"https://github.com/veejarmaurya/E-Learning-Website"},
        {string:"https://github.com/veejarmaurya/Shoping-Cart-using-React-Context-API-"},
        {string:"https://github.com/veejarmaurya/Live-Chat-Application"}
    
    ]
     return(
        <>
           <div id="projects"  className="bg-lime-200 w-full h-full">
                        <h3 className="font-bold text-center text-indigo-900 text-3xl pt-16 underline">Recent Projects</h3>
                        <div className="w-96 h-10 rounded-2xl bg-lime-200 flex items-center mx-auto mt-4">
                            <a className={`font-semi-bold rounded-2xl h-12 space-x-2 m-2 p-2 text-2xl ${Activelink=== 'All' ?'bg-amber-500': 'bg-lime-200'}`} href="" onClick={(e)=>handleclick(e,'All')}>All</a>
                            <a className={`font-semi-bold rounded-2xl h-12 space-x-2 m-2 p-2 text-2xl ${Activelink=== 'Shoping Cart' ?'bg-amber-500': 'bg-lime-200'}`} href="#"  onClick={(e)=>handleclick(e,'Shoping Cart')}>Shopping Cart</a>
                            <a className={`font-semi-bold rounded-2xl h-12 space-x-2 m-2 p-2 text-2xl ${Activelink=== 'Chat' ?'bg-amber-500': 'bg-lime-200'}`} href="#"  onClick={(e)=>handleclick(e,'Chat')}>Chat</a>
                        </div>
                        <div className=" w-full md:w-3/4 h-full flex flex-col md:flex-row flex-wrap justify-center ml-36 mt-5">
                            <div className="w-1/2 md:w-2/5 h-80 rounded-3xl overflow-hidden bg-white border-2 border-black shadow-2xl shadow-slate-500 m-2 ">
                                <img className="w-full h-3/5" src={portfolioimg} alt="" /><br />
                                 <h4 className="font-black text-2xl ml-8">Portfolio</h4>  &nbsp; 
                                <a className="text-2xl text-blue-900 ml-8 hover:text-red-600" href={projectlink[0].string} target="blank" >Demo &nbsp; <i class="fa-solid fa-arrow-right "></i></a>
                            </div>
                            <div className="w-1/2 md:w-2/5 h-80 rounded-3xl overflow-hidden bg-white border-2 border-black m-2">
                              <img className="w-full h-3/5" src={ecourseimg} alt="" /><br />
                                 <h4 className="font-black text-2xl ml-8">E-Com Api</h4>  &nbsp; 
                                <a className="text-2xl text-blue-900 ml-8 hover:text-red-600" href={projectlink[1].string} target="blank">Demo &nbsp; <i class="fa-solid fa-arrow-right "></i></a>
                            </div>
                            <div className="w-1/2 md:w-2/5 h-80 rounded-3xl overflow-hidden bg-white border-2  border-black m-2 ">
                              <img className="w-full h-3/5" src={shopcartimg} alt="" /><br />
                                 <h4 className="font-black text-2xl ml-8">Shoping Cart</h4>  &nbsp; 
                                <a className="text-2xl text-blue-900 ml-8 hover:text-red-600" href={projectlink[2].string} target="blank">Demo &nbsp; <i class="fa-solid fa-arrow-right "></i></a>
                            </div>
                            <div className="w-1/2 md:w-2/5 h-80 rounded-3xl overflow-hidden bg-white border-2 border-black m-2 "> 
                            <img className="w-full h-3/5" src={livechatimg} alt="" /><br />
                                 <h4 className="font-black text-2xl ml-8">Live Chat</h4>  &nbsp; 
                                <a className="text-2xl text-blue-900 ml-8 hover:text-red-600" href={projectlink[3].string} target="blank" >Demo &nbsp; <i class="fa-solid fa-arrow-right "></i></a>
                          </div>
                        </div> 
          </div>
        </>
     )
}
export default Projects