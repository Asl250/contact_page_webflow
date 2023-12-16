 const Input = () => {
  return (
    <>
        <form className="mt-[50px] lg:mx-[10%] md:mx-[15%] sm:mx-[15%] max-sm:mx-[10%] mb-[50px]">
            <h1 className='md:text-5xl text-[#37393F] text-center pb-10 pr-[50px] max-sm:text-2xl max-sm:font-bold'>Request A Call Back</h1>
            <div>
                <div>
                    <input type="text" placeholder="Your Name" className="2xl:w-[45%] h-[65px] border-2 border-[#DDD] mr-[35px] bg-[#F8F8F8] lg:w-full lg:mb-[35px] md:w-full md:mb-[35px] max-sm:w-[100%] max-sm:mb-[35px] sm:w-[100%] sm:mb-[35px]"/>
                    <input type="email" placeholder="Email Address" className="2xl:w-[45%] h-[65px] border-2 border-[#DDD] mr-[35px] bg-[#F8F8F8] lg:w-full md:w-full max-sm:w-[100%] sm:w-[100%]"/>
                </div>
                <br />
                <div>
                    <input type="number" placeholder="Phone Number" className="2xl:w-[45%] h-[65px] border-2 border-[#DDD] mr-[35px] bg-[#F8F8F8] lg:w-full lg:mb-[35px] md:w-full md:mb-[35px] max-sm:w-[100%] max-sm:mb-[35px] sm:w-[100%] sm:mb-[35px]"/>
                    <input type="text" placeholder="Subject" className="2xl:w-[45%] h-[65px] border-2 border-[#DDD] mr-[35px] bg-[#F8F8F8] lg:w-full md:w-full max-sm:w-[100%] sm:w-[100%]"/>
                </div>
                <textarea placeholder="Message..." className="2xl:w-[calc(90%+35px)] h-[222px] border-2 border-[#DDD] mt-[28px] mb-[50px] bg-[#F8F8F8] lg:w-full md:w-full max-sm:w-[100%] sm:w-[100%]"/>
            </div>
            <button className="grid place-items-center py-[22px] px-[60px] bg-[#6B77E5] hover:bg-white hover:text-[#6B77E5] hover:border-[#6B77E5] hover:border-[3px] text-[20px]">Submit</button>
        </form>
    </>
  )
}

export default Input
