 import Typed from 'typed.js'
import Bannerimage from '../assets/image1.jpg'
import { useState ,useRef, useEffect} from 'react'
const banner =()=>{
  
    const el = useRef(null);
  
    useEffect(() => {
        const typed = new Typed(el.current, {
          strings: ["Front End Developer", "Back End Developer", "Full Stack Developer"], // Strings to display
          // Speed settings, try diffrent values untill you get good results
          startDelay: 100,
          typeSpeed: 50,
          backSpeed: 10,
          backDelay: 50,
          loop:true
        });
    
        // Destropying
        return () => {
          typed.destroy();
        };
      }, []);


    return(
        <>
           <div className="flex items-center"> 
                  {/* text area */}

               <div className="w-full h-full flex justify-center relative inset-0 bg-gradient-to-r from-yellow-500 to-green-500 m-0 p-0">
        
  {/* <svg className="absolute inset-0 w-full h-full" viewBox="0 0 55 120" xmlns="http://www.w3.org/2000/svg"  >
  
  <path fill="#FF0066" d="M41.6,-63.9C54.6,-56.4,66.2,-46,74.7,-32.6C83.2,-19.2,88.5,-2.9,84.7,11C80.9,24.9,67.9,36.2,56.6,48.7C45.2,61.1,35.6,74.6,22.9,78.7C10.2,82.7,-5.5,77.3,-18.4,70.2C-31.4,63,-41.8,54.1,-50.6,43.8C-59.4,33.6,-66.7,22.1,-70.8,8.8C-75,-4.6,-75.8,-19.8,-69.5,-30.9C-63.1,-42,-49.5,-48.9,-36.7,-56.5C-23.9,-64.1,-12,-72.4,1.2,-74.2C14.3,-76,28.6,-71.4,41.6,-63.9Z" transform="translate(100 100)" />
</svg> */}
                     <div  className="w-2/3 z-10 h-[400px]">
                            <h3 className="mt-4 text-3xl font-semibold">Hi I am </h3>
                            <h1 className="mt-4 text-5xl font-bold">Rajeev Ratan Maurya</h1>
                            <h2 className="mt-4 text-3xl">I am <span className="font-bold" ref={el}></span></h2>
                            <p className="mt-4">Software Developer <br />B. tech. in ECE from NIT Jaipur
                            </p>
                            <div className='icons-container flex space-x-5 mt-3'>
                             <a className="px-3 py-3 border cursor-pointer rounded-full w-10 h-10 flex justify-center hover:bg-blue-900 bg-red-600" href="https://www.facebook.com/rajeevratanmaurya" target='blank'><i class="fa-brands fa-facebook fa-beat"></i></a>
                             <a className="px-3 py-3 border cursor-pointer rounded-full w-10 h-10 flex justify-center hover:bg-blue-900 bg-red-600" href="https://www.linkedin.com/in/rajeevratanmaurya" target="blank"><i class="fa-brands fa-linkedin fa-fade"></i></a>
                             <a className="px-3 py-3 border cursor-pointer rounded-full w-10 h-10 flex justify-center hover:bg-blue-900 bg-red-600" href="https://github.com/veejarmaurya" target='blank'><i class="fa-brands fa-github fa-spin"></i></a>
                             <a className="px-3 py-3 border cursor-pointer rounded-full w-10 h-10 flex justify-center hover:bg-blue-900 bg-red-600" href="http://twitter.com/rajeev_mratan" target='blank'><i class="fa-brands fa-twitter fa-flip"></i></a>
                            </div>
                            <div className="mt-4 ">
                            <a className="bg-white hover:bg-orange-600 hover:text-white font-bold text-black rounded-full px-3 py-2 " href="/#contact">Contact Me..</a>
                            </div>
                     </div>
                     
               </div>
               {/* image area */}
               <div className="w-full flex justify-center  bg-gradient-to-r from-green-500 to-yellow-500 m-0 p-0">
                  <img className="rounded-shadow-green-700 h-[400px]" src={Bannerimage} alt=""/>
               </div>
           </div>
          
        </>
    )
}
export default banner