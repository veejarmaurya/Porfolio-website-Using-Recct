
const Contact =()=>{
    return(
        <>
            <div id="contact" className="w-full h-auto  bg-lime-200">
                 <h3 className="text-center py-16 underline font-extrabold text-3xl  text-indigo-900">Contact Me </h3>
                 <div className="w-4/5 h-10  item-center flex justify-around ml-48 ">
                    <div className="p-2 font-bold text-xl">Talk to Me </div>
                    <div className="p-2 font-bold text-xl"> Give me Details of your Project </div>
                 </div>

                 <div className="w-4/5 h-auto ml-48  flex flex-row justify-around">
                    <div className="w-2/5 h-auto flex flex-col">
                            <div className="w-full h-40 rounded-2xl bg-white border-2 shadow-xl shadow-red-500 m-4">
                                 <div className="text-center p-4">
                                  <i class="fa-regular fa-envelope"></i>
                                    <h3>Email</h3>
                                    <h4 className="underline">mrajeevratan@gmail.com</h4> <br />
                                    <a className="text-xl text-blue-900 ml-2 font-serif  hover:text-red-600" href="mailto:mrajeevratan@gmail.com" >Write Me &nbsp; <i class="fa-solid fa-arrow-right "></i></a>
                                 </div>
                                
                            </div>
                            <div className="w-full h-40  rounded-2xl bg-white border-2 shadow-xl shadow-red-400  m-4">
                                <div className="text-center p-4">
                                <i class="fa-brands fa-linkedin"></i>
                                    <h3>LinkedIn</h3>
                                    <h4 className="underline">rajeevratanmaurya</h4> <br />
                                    <a className="text-xl text-blue-900 ml-2 font-serif  hover:text-red-600" href="https://www.linkedin.com/in/rajeevratanmaurya" target="blank">Connect Me &nbsp; <i class="fa-solid fa-arrow-right "></i></a>
                                 </div>
                            </div>
                           <div className="w-full h-40  rounded-2xl bg-white border-2 shadow-xl shadow-red-400 m-4"> 
                               <div className="text-center p-4">
                               <i class="fa-brands fa-twitter"></i>
                                    <h3>Twitter</h3>
                                    <h4 className="underline">@rajeev_mratan</h4> <br />
                                    <a className="text-xl text-blue-900 ml-2 font-serif hover:text-red-600" href="http://twitter.com/rajeev_mratan" target="blank">Write Me &nbsp; <i class="fa-solid fa-arrow-right "></i></a>
                                 </div>
                            </div>
                          </div>
                   
                           
                        <div className="w-3/5 h-auto mt-4  flex flex-col ml-20 border-black">
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
                               <button className="text-center w-3/5 h-8 m-10 ml-32 rounded-2xl bg-orange-500 " type="submit">Send Message</button>
                          </form>          
                        </div>

                 </div>





            </div>
        </>
    )
}
export default Contact