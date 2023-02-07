import Image from 'next/image';
import React from 'react';

const BestWorkout = () => {
    return (
        <div className='mt-12'>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div>
                    <h1 className="text-5xl font-bold">Best full body workout to lose fat</h1>
                    <p className="py-6">Exercise is a very important need for our body. Health and fitness will be obtained if you can do regular exercise and run a healthy routine. Even at home we still have to be diligent in exercising, either alone or with your friends at home.</p>
                    <button className='btn bg-base-200'>Get started
                        <span className='pl-20'><Image className='' src="/ArrowRight.png" alt='media' width='30' height='30'></Image></span>
                    </button>
                    </div>
                    <Image className='mt-10' src="/workout.png" alt='bg3' width="584" height="580"></Image>
                </div>
            </div>
        </div>
    );
};

export default BestWorkout;