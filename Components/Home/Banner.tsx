import React from 'react';
import Image from 'next/image';

const Banner = () => {
    return (
        <div className='mt-12'>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                
                    <Image src="/banerImg.png" alt='bg3' width="584" height="580"></Image>
                    
                    <div>
                       <div>
                            <h3 className='text-3xl text-black pb-4'>Health in side <span className='text-primary'>fresh</span> out side</h3>
                            <p className="py-6">Exercise is a very important need for our body. Health and <br /> fitness will be obtained if you can do regular exercise and <br /> run a healthy routine.</p>
                        </div>
                        <div className='flex'>
                            <button className='btn bg-base-200'>Get started
                            <span className='pl-20'><Image className='' src="/media-play.png" alt='media' width='30' height='30'></Image></span>
                            </button>
                            <button className='btn base-200 btn-outline ml-9'> 
                            <Image className='' src="/media2.png" alt='media' width='30' height='30'></Image>
                            <span className='ml-5 text-black'>Learn more</span></button>
                        </div>

                        <div className='pt-12'>
                            <p>Brands:</p>
                            <div className='pt-8 flex'>
                                <Image className='' src="/nike.png" alt='brand-logo' width='60' height='20'></Image>
                                <Image className='ml-12' src="/adidas.png" alt='brand-logo' width='60' height='20'></Image>
                                <Image className='ml-12' src="/puma.png" alt='brand-logo' width='60' height='20'></Image>
                                <Image className='ml-12' src="/reebok.png" alt='brand-logo' width='60' height='20'></Image>                               
                            </div>
                        </div>
                    
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;