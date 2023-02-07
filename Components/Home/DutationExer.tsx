import Image from 'next/image';
import React from 'react';

const DutationExer = () => {
    return (
        <div className='bg-slate-300 rounded-box ml-20 mr-20'>
            <div className='flex flex-col lg:flex-row justify-evenly p-12 lg:pt-16'>
                <div className='flex mb-6'>
                    <div>
                    <Image src="/workout1.png" alt='bg3' width="100" height="100"></Image>
                    </div>
                    <div className="ml-8">
                        <h6> Get that 11 line <br /> in 30 days</h6>
                        <button className='mt-11'>Learn more<Image className='inline ml-4' src="/Arrowsmall.png" alt='bg3' width="14" height="3"></Image></button>
                    </div>
                </div>
                <div className='flex mb-6'>
                    <div>
                        <Image src="/workout1.png" alt='bg3' width="100" height="100"></Image>
                    </div>
                    <div className="ml-8 ">
                        <h6>14 Days <br /> sherd challenge</h6>
                        <button className='mt-11'>Learn more<Image className='inline ml-4' src="/Arrowsmall.png" alt='bg3' width="14" height="3"></Image></button>
                    </div>
                </div>
                <div className='flex'>
                    <div>
                       <Image src="/workout1.png" alt='bg3' width="100" height="100"></Image>
                    </div>
                    <div className="ml-8">
                        <h6> Get flat belly <br /> in 30 days</h6>
                        <button className='mt-11'>Learn more<Image className='inline ml-4' src="/Arrowsmall.png" alt='bg3' width="14" height="3"></Image></button>
                    </div>
                </div>
            </div>   
        </div>
    );
};

export default DutationExer;