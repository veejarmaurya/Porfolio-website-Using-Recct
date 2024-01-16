
const Contact =()=>{
    return(
        <>
            <div id="contact" className="w-full h-auto  bg-lime-200">
                 <h3 className="text-center py-16 underline font-extrabold text-3xl  text-indigo-900">Contact Me </h3>
                 <div className="w-4/5 h-10  item-center flex  justify-around  ml-48 ">
                    <div className="mb-5 md:mb-0 md:p-2 font-bold text-xl">Talk to Me </div>
                    <div className="p-2 invisible md:visible font-bold text-xl"> Give me Details of your Project </div>
                 </div>

                 <div className="w-4/5 h-auto ml-20 md:ml-48  flex flex-col sm:flex-row justify-around">
                    <div className="w-2/5 ml-20 md:ml-auto h-auto flex flex-col">
                            <div className="w-full h-40 rounded-2xl bg-white border-2 shadow-xl shadow-red-500 m-4">
                                 <div className="text-center p-4">
                                  <i class="fa-regular fa-envelope"></i>
                                    <h3>Email</h3>
                                    <h4 className="underline  overflow-hidden">mrajeevratan@gmail.com</h4> <br />
                                    <a className="text-xl text-blue-900 ml-2 font-serif  hover:text-red-600" href="mailto:mrajeevratan@gmail.com" >Write Me &nbsp; <i class="fa-solid fa-arrow-right "></i></a>
                                 </div>
                                
                            </div>
                            <div className="w-full h-40  rounded-2xl bg-white border-2 shadow-xl shadow-red-400  m-4">
                                <div className="text-center p-4">
                                <i class="fa-brands fa-linkedin"></i>
                                    <h3>LinkedIn</h3>
                                    <h4 className="underline  overflow-hidden">rajeevratanmaurya</h4> <br />
                                    <a className="text-xl text-blue-900 ml-2 font-serif  hover:text-red-600" href="https://www.linkedin.com/in/rajeevratanmaurya" target="blank">Connect Me &nbsp; <i class="fa-solid fa-arrow-right "></i></a>
                                 </div>
                            </div>
                           <div className="w-full h-40  rounded-2xl bg-white border-2 shadow-xl shadow-red-400 m-4"> 
                               <div className="text-center p-4">
                               <i class="fa-brands fa-twitter"></i>
                                    <h3>Twitter</h3>
                                    <h4 className="underline  overflow-hidden">@rajeev_mratan</h4> <br />
                                    <a className="text-xl text-blue-900 ml-2 font-serif hover:text-red-600" href="http://twitter.com/rajeev_mratan" target="blank">Write Me &nbsp; <i class="fa-solid fa-arrow-right "></i></a>
                                 </div>
                            </div>
                          </div>
                   
                          <div className="p-2 visible md:invisible ml-[40px] mt-5 font-bold text-xl"> Give me Details of your Project </div>
                        <div className="w-3/5 h-auto mt-4  flex flex-col ml-12 md:ml-0 border-black">
                            <form action="">
                              <input type="text" name="Name" id="" placeholder="Write your Name here..." 
                              className="border-2 rounded-xl border-black w-full h-20  mt-2 p-4" />
                              <input type="email" name="email" placeholder="Write Email here...."
                               className="border-2 rounded-xl border-black w-full h-20 mt-16 px-4" />  
                                     <textarea
                                            id="message"
                                            name="message"
                                            placeholder="Write your Message here...."
                                            className="border-2 rounded-xl border-black border-b w-full h-40 p-4 mt-16"
                                            ></textarea>
                               <button className="text-center w-3/5 h-8 m-10 ml-12 md:ml-28 word-wrap rounded-2xl bg-orange-500 overflow-hidden break-words md:break-before-avoid " type="submit">Send</button>
                          </form>          
                        </div>

                 </div>





            </div>
        </>
    )
}
export default Contact