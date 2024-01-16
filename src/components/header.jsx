import { useState } from "react";
import { Link, Outlet} from "react-router-dom";
import { useEffect } from "react";
import { saveAs } from "file-saver";
 
//import { Link } from "react-scroll";

 const Header=()=>{
     

 const [menulink,setmenulink] = useState([
      { 
         title:"Home",
         link:"#",
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
    import('/mycv.pdf').then(({ default: pdf }) => {
        saveAs(pdf, 'Rajeev_CV.pdf');
      });
}


    return(
        <>
        {/* <ScrollToTopOnMount /> */}
        <div id="1" className="h-20 flex w-full justify-between items-center border px-5 bg-slate-200  scroll-smooth ">
                <div className=" md:max-w-full md:h-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="47.999" height="48"><g fill="#1a171b"><circle cx="23.999" cy="38.545" r=".728"/><path d="M44.363 4.85H32.309A9.015 9.015 0 0 0 24 0a9.017 9.017 0 0 0-8.309 4.85H3.636A3.64 3.64 0 0 0 0 8.485v30.061a3.64 3.64 0 0 0 3.636 3.635h10.91v4.365H9.455a.727.727 0 1 0 0 1.454h29.09a.727.727 0 1 0 0-1.454h-5.091v-4.365h10.909A3.64 3.64 0 0 0 48 38.546V8.485a3.64 3.64 0 0 0-3.637-3.635zM24 1.456a7.644 7.644 0 0 1 6.952 3.885 21.281 21.281 0 0 0-3.78 1.377 13.1 13.1 0 0 1-2.844 1.021c-3.825.676-6.146-.645-7.474-2.016A7.609 7.609 0 0 1 24 1.456zm-7.691 5.757c.006.006.019.006.025.01a8.75 8.75 0 0 0 5.981 2.156 12.859 12.859 0 0 0 2.266-.209 14.279 14.279 0 0 0 3.177-1.123 18.94 18.94 0 0 1 3.784-1.332 10.029 10.029 0 0 1 .478 3.137c0 5.4-3.6 9.8-8.02 9.8s-8.021-4.4-8.021-9.8a10.286 10.286 0 0 1 .33-2.639zM24 27.139c-2.649-.9-6.152-2.645-6.788-4.137a6.033 6.033 0 0 0 2.706-3.01 8.042 8.042 0 0 0 8.174-.006 6.222 6.222 0 0 0 2.7 2.982c-.63 1.497-4.141 3.263-6.792 4.171zm8.1-3.578c.155.055.309.109.47.152.641.152 1.271.326 1.9.512a29.678 29.678 0 0 1 4.2 1.578A5.039 5.039 0 0 1 41.7 30.3v4.607H24.728v-6.481c1.777-.626 6.294-2.441 7.372-4.865zm-8.826 4.867v6.48H6.3V30.3a5.029 5.029 0 0 1 3.028-4.49 29.7 29.7 0 0 1 4.19-1.578 34.827 34.827 0 0 1 1.9-.512c.157-.039.315-.09.475-.143 1.069 2.423 5.596 4.223 7.379 4.851zM1.454 8.485A2.185 2.185 0 0 1 3.636 6.3h11.436a11.479 11.479 0 0 0-.548 3.549 11.954 11.954 0 0 0 4.151 9.3 4.645 4.645 0 0 1-2.591 2.789 5.393 5.393 0 0 1-1 .357c-.671.16-1.32.34-1.976.535a31.093 31.093 0 0 0-4.4 1.656A6.47 6.47 0 0 0 4.849 30.3v4.611h-3.4V8.485zM32 46.546H16v-4.365h16zm14.546-8a2.185 2.185 0 0 1-2.182 2.182H3.635a2.185 2.185 0 0 1-2.182-2.182v-2.182h45.091v2.182zm0-3.637h-3.395V30.3a6.478 6.478 0 0 0-3.868-5.813 30.752 30.752 0 0 0-4.405-1.658 36.468 36.468 0 0 0-1.974-.533 5.741 5.741 0 0 1-.977-.373 4.861 4.861 0 0 1-2.6-2.77 11.945 11.945 0 0 0 4.151-9.3 11.47 11.47 0 0 0-.552-3.553h11.437a2.185 2.185 0 0 1 2.182 2.182z"/></g></svg>
                    {/* <h1 className="text-xl font-medium md:text-3xl md:font-bold  ">Rajeev Ratan Maurya</h1> */}
                     
                </div>
                <div >
                   
                    {menulink.map( (link) =>(
                      
                    <a key= {link.id} href={link.link} className="hover:text-indigo-700 font-bold bg-red-400 sm:rounded-xl md:rounded-2xl m-1 md:px-4 md:py-2">
                        {link.title}  </a>
                   
                    )) }

                     </div>
                          
                  {/* <a key={link.id} href={link.link} className="hover:text-orange-600 font-bold ">{link.title}</a> */}
                   

                     {/* <Link to="/#about" className="hover:text-orange-600 font-bold">about</Link> */}
                      
                     {/* <a href="/#home" className="hover:text-orange-600 font-bold">Home</a>
                    <a href="/#about" className="hover:text-orange-600 font-bold">About</a>
                    <a href="/#skills" className="hover:text-orange-600 font-bold">Skills</a>
                    <a href="/#projects" className="hover:text-orange-600 font-bold">Projects</a>
                    <a href="/#contact" className="hover:text-orange-600 font-bold">Contact</a> */}

               
            <div className="flex:col md:flex-row md:shrink-0 md:space-x-3">
                <button className="bg-orange-600 rounded-xl lg:rounded-full md:px-3 md:py-2 md:mr-2 shadow text-1xl">
                <a href="/#contact" className=" font-semibold md:font-bold">Hire Me</a>
                    </button>
                <button className="bg-orange-600 font-semibold md:font-bold rounded-xl lg:rounded-full md:px-3 shadow  md:py-2 text-xs lg:text-xl"
                 onClick={handleDownload}
                >DownLoad CV</button>
            </div>
        </div>
         <Outlet />
        </>
    )
}
export default Header;