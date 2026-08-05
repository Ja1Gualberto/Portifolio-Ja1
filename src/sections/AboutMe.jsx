const AboutMe = () => {
  return (
    // <section className="right-0 left-0 w-full ">
    <section className="c-space my-20 ">
      <div className="grid xl:grid-cols-3 grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="/assets/grid1.png" alt="" className="w-full sm:h-[276px] h-fit object-contain"/>
          </div>
          
          <div>
            <p className="">Hi, I'm João</p>
          </div>
          
        </div>
      </div>
    </section>
  );
}
export default AboutMe;