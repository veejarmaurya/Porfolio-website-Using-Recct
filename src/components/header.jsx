import { useState } from "react";
import { Link, Outlet} from "react-router-dom";
import { useEffect } from "react";
import { saveAs } from "file-saver";
//import { Link } from "react-scroll";

 const Header=()=>{
     

 const [menulink,setmenulink] = useState([
      { 
         title:"Home",
         link:"/#home",
         id:"1"
    },
   { 
    title:"About",
    link:"/#about",
    id:"2"
  },
  { 
    title:"Skills",
    link:"/#skills",
    id:"3"
 },
 { 
    title:"Contact",
    link:"/#contact",
    id:"4"
 },
 {
    title:"Projects",
    link:"/#projects",
    id:"5"
 },
]
);
 
const handleDownload= ()=>{
    const fileUrl = './assets/MyCV.pdf';
    saveAs(fileUrl,'Rajeev_CV.pdf');
}


    return(
        <>
        {/* <ScrollToTopOnMount /> */}
        <div id="1" className="h-20 flex w-full justify-between items-center border px-5 bg-slate-200 scroll-smooth ">
                <div >
                    <h1 className="text-3xl font-bold">Rajeev Ratan Maurya</h1>
                </div>
                <div className="space-x-3">
                    {menulink.map( (link) =>(
                     
                    <a key= {link.id} href={link.link} className="hover:text-orange-600 font-bold">{link.title} </a>

                    )) }
                     </div>
                          
                  {/* <a key={link.id} href={link.link} className="hover:text-orange-600 font-bold ">{link.title}</a> */}
                   

                     {/* <Link to="/#about" className="hover:text-orange-600 font-bold">about</Link> */}
                      
                     {/* <a href="/#home" className="hover:text-orange-600 font-bold">Home</a>
                    <a href="/#about" className="hover:text-orange-600 font-bold">About</a>
                    <a href="/#skills" className="hover:text-orange-600 font-bold">Skills</a>
                    <a href="/#projects" className="hover:text-orange-600 font-bold">Projects</a>
                    <a href="/#contact" className="hover:text-orange-600 font-bold">Contact</a> */}

               
            <div className="">
                <button className="bg-orange-600 rounded-full px-3 py-2 mr-2 shadow text-1xl">
                <a href="/#contact" className=" font-bold">Hire Me</a>
                    </button>
                <button className="bg-orange-600 rounded-full px-3 shadow py-2 text-1xl"
                 onClick={handleDownload}
                >DownLoad CV</button>
            </div>
        </div>
         <Outlet />
        </>
    )
}
export default Header;