import call from '../../../public/img/call.png'
import Ictn from '../../../public/img/lctn.png'
import msg from '../../../public/img/msg.png'
const Content = () => {
  return (
            <div className='grid place-items-center'>
                <div className='text-center'>
                    <h1 className='text-5xl text-[#37393F] pt-3'>Get in touch with us</h1>
                    <p className='text-[#7D7D7D] max-sm:mx-2'>Completely synergize resource taxing relationships via <br/> premier niche ynamically innovate state of the art customer service.</p>
                </div>

                <div className='lg:flex'>
                    
                    <div className='flex my-[30px] lg:mr-[30px]'>                    
                        <img src={call} alt="call"  className='pr-4'/>
                        <p className='pt-2'>Have any question? <br/> <p>Free +01 569  896 654</p></p>
                    </div>

                    <div className='flex my-[30px] lg:mr-[30px]'>
                    <img src={msg} alt="msg" className='pr-4' />
                    <p className='pt-2'>Write email<br/><p>Info@whitecollar.com</p></p>
                    </div>

                    <div className='flex my-[30px] lg:mr-[30px]'>
                    <img src={Ictn} alt="Ictn" className='pr-4' />
                    <p className=''>Visit anytime <br/><p>King Street,Prior Lake, New York</p></p>
                    </div>

                </div>
            </div>
    )
}

export default Content
