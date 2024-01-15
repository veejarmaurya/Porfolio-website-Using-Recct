
const Footer =()=>{
    return(
        <>
         <div className=" bg-red-300 h-96 flex flex-col  ">
             <div className="font-bold text-2xl text-center mt-20">    
                  <h2>Rajeev Ratan Maurya</h2>            
             </div>
             <div className="flex font-semibold text-xl justify-center space-x-4 mt-12">

               
                    <a href="/#home">Home</a>
                    <a href="/#about">About</a>
                    <a href="/#contact">Contact</a>
                 
             </div>
             <div className="flex justify-center space-x-4 mt-6 text-3xl">
                  <a href="https://github.com/veejarmaurya" target="blank"><i class="fa-brands fa-github"></i></a>
                    <a href="http://twitter.com/rajeev_mratan" target="blank"><i class="fa-brands fa-twitter ml-1"></i></a>
                    <a href="https://www.linkedin.com/in/rajeevratanmaurya" target="blank"> <i class="fa-brands fa-linkedin mt-1"></i></a> 
             </div>

               <h5 className="text-center mt-24"><i class="fa-solid fa-copyright"></i> &nbsp;Rajeev Ratan Maurya. All rigths reserved</h5>

   </div>
        </>
    )
}
export default Footer