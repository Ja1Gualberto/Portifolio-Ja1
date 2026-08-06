import Button from "../components/Button";

const AboutMe = () => {
  return (
    // <section className="right-0 left-0 w-full ">
    <section className="c-space my-20" id="about">
      <div>
        <p className="head-text mb-10">
          About Me
        </p>
      </div>
      <div className="grid xl:grid-cols-3 xl:grid-rows-1 md:grid-cols-2 grid-cols-1 gap-5">
      {/* <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full"> */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="/assets/AvatarIcon.png" alt="avatarIcon" className="w-full sm:h-[276px] h-fit object-contain"/>
          
            <div className="">
              <p className="grid-headtext">Hi, I'm João</p>
              <p className="grid-subtext">
                With practical experience in web development, I have honed my skills in both frontend and backend dev, creating dynamic and responsive systems. I currently apply my knowledge in technologies like PHP (Laravel), JavaScript, and MySQL to build efficient solutions.
              </p>
            </div>
          </div>
        </div>
        
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
              <img src="/assets/grid2.png" alt="stacks" className="w-full sm:h-[276px] h-fit object-contain"/>
            
            <div className="flex flex-col flex-1">
              <p className="grid-headtext">Stacks</p>
              <p className="grid-subtext">
                I specialize in a variety of languages, frameworks, and tools that allow me to build robust and scalable applications. My technical stack includes backend development with Laravel, CodeIgniter and MySQL, combined with frontend technologies like HTML5, CSS3, JavaScript, React, and Bootstrap. Furthermore, I have knowledge of C and C++, and I utilize Git, Linux, and Windows to manage my development environment effectively.
              </p>
            </div>
          </div>
        </div>
        
        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              
              
            </div>
            
            <div>
              <p className="grid-headtext">I’m very flexible with time zone communications & locations</p>
              <p className="grid-subtext">I&apos;m based in Rondonia, Brasil and open to remote work worldwide</p>
            </div>
          </div>
        </div>
        
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="/assets/grid3.png" alt="" className="w-full sm:h-[266px] h-fit object-contain" />
            
            <div>
              <p className="grid-headtext">teste</p>
              <p className="grid-subtext">testesub</p>
              <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
              
            </div>
          </div>
        </div>
        
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img src="/assets/grid4.png" alt="grid-4" className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"/>
            
            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact Me</p>
              <div className="copy-container" >
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">jguberto@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default AboutMe;