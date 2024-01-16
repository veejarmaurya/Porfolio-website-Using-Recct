import aboutimage from '../assets/Dp2.jpeg'
const About =()=>{

    return(
        <> 
        <div id="about" className="w-full h-full   items-center bg-lime-200 md:flex   md:flex-col md:justify-between">
          <h2 className="font-bold text-3xl text-indigo-900 underline text-center py-8 bg-lime-200">About Me</h2>
           <div className="md:w-full md:h-full md:flex md:items-center bg-lime-200">
                  <div className=" w-full flex justify-center">
                    <img className="rounded-full w-72 h-72" src={aboutimage} alt="" />
                  </div>
                  <div className="flex justify-center w-full h-30 mt-8">
                       <div className="w-[85%] h-full">
                           <h2 className="mt-4 text-5xl font-bold">Full Stack Developer</h2>
                           <h3 className="mt-2 text-3xl font-bold">From NIT Jaipur</h3>
                            <h4 className="mt-2 text-2xl font-semi-bold">B.Tech in Electronics & communication Engeeniering</h4>
                            <p>I'm <span className='font-bold'>Rajeev Ratan Maurya</span>, a software developer with a Bachelor's degree from NIT Jaipur. My proficiency extends across front-end technologies like <span className='font-bold'>React</span> and Angular, complemented by expertise in <span className='font-bold'>Back-End</span> technologies such as <span className='font-bold'>Node.js</span>, <span className='font-bold'>Express.js</span>, and <span className='font-bold'>Rest API</span>. I also possess hands-on experience working with databases like <span className='font-bold'>Firebase and MongoDB</span>. Known for my passion for problem-solving and a keen eye for detail, I thrive in collaborative environments. Eager to take on new challenges, I am committed to delivering high-quality solutions and making a valuable impact on real-world projects.</p>
                            <br />
                            <button className="bg-blue-400 hover:bg-orange-600 hover:text-white font-bold text-black rounded-full px-3 py-2"><a href="/#contact"> Contact Me..</a></button>
                       </div>
                  </div>
           </div>
     </div>
        </>
    )
}
export default About