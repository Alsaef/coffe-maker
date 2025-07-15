import React from 'react';
import BannerImage from '../assets/images/more/banner.png';
const Banner = () => {
    return (
<div
  style={{
    backgroundImage: `url(${BannerImage})`,
    backgroundColor: 'lightgray',
    backgroundPosition: '50%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '500px',
    width: '100%',
  }}
  className="flex justify-end items-center p-8"
>
  <div className="text-start max-w-xl  space-y-4">
    <h1 className="text-3xl font-bold text-white">
      Would you like a Cup of Delicious Coffee?
    </h1>
    <p className='text-[#FFFFFF] font-[300px]'>
      It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!!
      Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.
    </p>
    <div>
      <button className="bg-[#E3B577] text-black px-4 py-2 rounded btn">Learn More</button>
    </div>
  </div>
</div>
    )
};

export default Banner;