import React from 'react';


const showcaseImages = [
    { url: 'https://raw.githubusercontent.com/Alsaef/image/refs/heads/main/cups/Rectangle%209.png', alt: 'Coffee 1' },
    { url: 'https://raw.githubusercontent.com/Alsaef/image/refs/heads/main/cups/Rectangle%2011.png', alt: 'Coffee 2' },
    { url: 'https://raw.githubusercontent.com/Alsaef/image/refs/heads/main/cups/Rectangle%2012.png', alt: 'Coffee 3' },
    { url: 'https://raw.githubusercontent.com/Alsaef/image/refs/heads/main/cups/Rectangle%2013.png', alt: 'Coffee 4' },
    { url: 'https://raw.githubusercontent.com/Alsaef/image/refs/heads/main/cups/Rectangle%2016.png', alt: 'Coffee 5' },
    { url: 'https://raw.githubusercontent.com/Alsaef/image/refs/heads/main/cups/Rectangle%2015.png', alt: 'Coffee 6' },
    { url: 'https://raw.githubusercontent.com/Alsaef/image/refs/heads/main/cups/Rectangle%2014.png', alt: 'Coffee 7' },
    { url: 'https://raw.githubusercontent.com/Alsaef/image/refs/heads/main/cups/Rectangle%2011.png', alt: 'Coffee 8' }
];


const ShowCase = () => {
    return (
        <div className='p-8 mt-[120px]'>
          <div className='text-center mb-5'>
              <p className='text-xl text-[#1B1A1A]'>Follow Us Now</p>
              <h2 className='text-3xl'>Follow on Instagram</h2>
          </div>

          <div className='grid grid-cols-4 gap-3'>
           {
            showcaseImages.map(image=>(
                <div>
                    <img className='w-[312px] h-[320px] rounded-xl' src={image.url} alt={image.alt} />
                </div>
            ))
           }
          </div>
        </div>
    );
};

export default ShowCase;