import React from 'react'
import Slider from "react-slick";

const SliderComponent = () => {

    const settings = {
        // dots: true,
        infinite: true,
        // autoplay:true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };


    return (
        <div>
            <h2> Single Item</h2>
            <Slider {...settings}>

                <div className='!flex items-center bg-gray-100 px-6 py-10'>
                    <div className=''>
                        <div className='text-6xl font-bold'>Most Quality Formas Lorem ipsum dolor sit.</div>
                        <div className='text-lg my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium repellendus maiores tempora commodi quo neque?</div>
                        <div className='border rounded-full cursor-pointer text-3xl w-[200px] h-16 flex items-center justify-center bg-gray-200'>More</div>
                    </div>

                    <div className='w-1/2 h-15'>
                        <img className='w-full' src="https://th.bing.com/th/id/R.e841666a278ad7c77d3fc15ade100922?rik=8reBw%2beKzZBIEA&pid=ImgRaw&r=0" alt="" />
                    </div>
                </div>

                <div className='!flex items-center bg-gray-100 px-6 py-10'>
                    <div className=''>
                        <div className='text-6xl font-bold'>Most Quality Formas Lorem ipsum dolor sit.</div>
                        <div className='text-lg my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium repellendus maiores tempora commodi quo neque?</div>
                        <div className='border rounded-full cursor-pointer text-3xl w-[200px] h-16 flex items-center justify-center bg-gray-200'>More</div>
                    </div>

                    <div className='w-15 h-15'>
                        <img src="https://i.pinimg.com/originals/da/a1/72/daa172abd77510dbccaf1c77ab6a7502.jpg" alt="" />
                    </div>
                </div>
            </Slider>
        </div>
    )
}

export default SliderComponent