import React from "react";
import { useEffect,useState } from "react";

const setStickNavBar =()=>{
      
  const [isVisible, setisVisible] = useState(false);
 const [scrollpos ,setscrollpos] = useState(0);

   useEffect( ()=>{

    const handleScroll =()=>{
    
       const scrollTop = window.scrollY;
        setscrollpos(scrollTop);
       setisVisible(scrollTop>100);
    };
       window.addEventListener('scroll',handleScroll);

     return () =>{
      window.removeEventListener('scroll',handleScroll);
     };
    
 },[]);


 return(
    <>
         <div className={`md:inline hidden md:fixed bottom-10 left-1/2 transform -translate-x-1/2 rounded-3xl space-x-10 w-fit bg-lime-200 text-gray-800 shadow-red-600 shadow-xl  p-4 ${isVisible ? 'visible' : 'hidden'}`}>
                    <a href="#" className={`hover:text-orange-600 font-bold ${scrollpos<500 ? 'rounded-xl   bg-sky-500':'' }`}><i class="fa-solid fa-house-user"></i></a>
                    <a href="/#about" className={ `hover:text-orange-600 font-bold${scrollpos>=500 && scrollpos<1000 ? 'rounded-xl   bg-sky-500':''}`}><i class="fa-regular fa-address-card"></i></a>
                    <a href="/#skills" className={`hover:text-orange-600 font-bold${scrollpos>=1000 && scrollpos <1500 ? 'rounded-2xl   bg-sky-500':''}`}><i class="fa-solid fa-book"></i></a>
                    <a href="/#projects" className={`hover:text-orange-600 font-bold${scrollpos>=1500 && scrollpos<2000 ? 'rounded-xl   bg-sky-500':''}`}><i class="fa-solid fa-store"></i></a>
                    <a href="/#contact" className={`hover:text-orange-600 font-bold${scrollpos>=2000 ? 'rounded-xl   bg-sky-500':''}`}><i class="fa-regular fa-comment-dots"></i></a>
         </div>
    </>
 )

}
export default setStickNavBar

