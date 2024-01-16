import Dp2 from '../assets/Dp2.jpeg'
const skills =()=>{
    return(
        <>
           <div id="skills" className="w-full h-auto bg-lime-200">
                <h1 className="font-bold text-3xl text-indigo-900 underline text-center py-14">My Skills</h1>
                <div className="flex flex-col grid-cols-2 md:flex-row justify-evenly mt-10">
                    <div className=" border-4  w-64 h-64 rounded-3xl shadow-2xl shadow-black ml-20 md:ml-auto bg-lime-200 hover:-translate-y-1 hover:scale-110 hover:bg-gradient-to-r from-yellow-300 to-green-300">
                           
                        <h3 className="text-black font-extrabold text-2xl mt-3 ml-16 "><i class="fa-solid fa-laptop-code"></i>&nbsp;Front End</h3>
                             
                           <div className="flex-col  justify-between  items-center ml-20 space-y-2 mt-5">
                                    <div className="font-bold text-xl text-pink-600"><img src="" alt="" /><h4>React</h4></div>
                                    <div className="font-bold text-xl text-pink-600"><h4>Redux</h4></div>
                                    <div className="font-bold text-xl text-pink-600"><h4>HTML</h4> </div>
                                    <div className="font-bold text-xl text-pink-600"><h4>Tailwind Css</h4></div>
                                    <div className="font-bold text-xl text-pink-600"><h4>Java Script</h4> </div>
                            </div> 
                        </div>
                        <div className="border-4 w-64 h-64 items-center rounded-3xl shadow-2xl shadow-black ml-20 md:ml-auto bg-lime-200 hover:-translate-y-1 hover:scale-110 hover:bg-gradient-to-r from-yellow-300 to-blue-300">
                            <h3 className="text-black font-extrabold text-2xl items-center mt-3 ml-12"><i class="fa-solid fa-server"></i>&nbsp;Back End</h3>
                           <div className="flex-col justify-between ml-20 space-y-2 mt-5">
                                    <div className="font-bold text-xl text-pink-600"><img src="" alt="" /><h4>Node.Js</h4></div>
                                    <div className="font-bold text-xl text-pink-600"><h4>Express.js</h4></div>
                                    
                                    <div className="font-bold text-xl text-pink-600"><h4>Rest API</h4></div>
                                    <div className="font-bold text-xl text-pink-600"><h4>Socket</h4></div>
                            </div> 
                        </div>
                      
                        <div className="border-4 w-64 h-64 items-center rounded-3xl shadow-2xl shadow-black ml-20 md:ml-auto bg-lime-200 hover:-translate-y-1 hover:scale-110 hover:bg-gradient-to-r from-yellow-300 to-green-300">
                            <h3 className="text-black font-extrabold text-2xl items-center mt-3 ml-12"><i class="fa-solid fa-database"></i>&nbsp;DataBase</h3>
                           <div className="flex-col justify-between ml-20 space-y-2 mt-5">
                                    <div className="font-bold text-xl text-pink-600"><img src="" alt="" /><h4>MongoDB</h4></div>
                                    <div className="font-bold text-xl text-pink-600"><h4>FireBase</h4></div>
                                    
                                    <div className="font-bold text-xl text-pink-600"><h4>SQL</h4></div>
                            </div> 
                        </div>

                        <div className="border-4 w-64 h-64 items-center rounded-3xl shadow-2xl shadow-black ml-20 md:ml-auto bg-lime-200 hover:-translate-y-1 hover:scale-110 hover:bg-gradient-to-r from-yellow-300 to-green-300">
                            <h3 className="text-black font-extrabold text-2xl items-center mt-3 ml-16"><i class="fa-solid fa-code"></i>&nbsp;Others</h3>
                           <div className="flex-col justify-between ml-20 space-y-3 mt-5">
                                    <div className="font-bold text-xl text-pink-600"><img src="" alt="" /><h4>C/C++</h4></div>
                                    <div className="font-bold text-xl text-pink-600"><h4>DSA & Algorithms</h4></div>
                                    <div className="font-bold text-xl text-pink-600"><h4>System Design</h4> </div>
                                    <div className="font-bold text-xl text-pink-600"><h4>OOPS</h4></div>
                            </div> 
                        </div>
                        

                        

                </div>
           </div>


        </>
    )
}
export default skills