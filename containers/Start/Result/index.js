import Ads from '@components/Ads';
import { useScore } from 'context/ScoreContext';
import quizData from 'data/otherData';
import { useRouter } from 'next/router';
import React, { Fragment, useEffect, useState } from 'react'
import { IoClose } from "react-icons/io5";

function Result() {
    const router = useRouter()
    const [showPopup, setShowPopup] = useState(true)
    const { score } = router.query
    const [paragraph, setParagraph] = useState([])
    useEffect(() => {


        const quizParagraph = [...quizData].sort(() => 0.5 - Math.random());
        const pick = quizParagraph.slice(0, 1)
        setParagraph(pick)
    }, []);

    return (
        <Fragment>
            <div className='px-2 pt-2'>
                <Ads
                    data-ad-format="auto"
                    data-ad-slot="8433272954"
                    data-full-width-responsive="true"
                />
            </div>
            {showPopup &&
                <div className='flex flex-col items-center justify-center  '>
                    <div className='flex  flex-col gap-5 m-2 rounded-3xl p-2 border-[2px] border-white border-solid'>
                        <div className='flex cursor-pointer items-end justify-end'>
                            <IoClose
                                onClick={() => setShowPopup(false)}
                                size={25} />
                        </div>
                        <div className='flex items-center justify-center pt-5'>
                            <img src='/assets/image/coin.png'
                                className='animate-coinFlip [transform-style:preserve-3d]'
                            />
                        </div>

                        <div className='flex flex-col items-center'>
                            <div className='flex items-center justify-center text-primary4 text-[1.5rem] font-[600]'>{"New Reward Available"}</div>

                            <div className='flex mt-10 items-center justify-center text-[1.8rem]'>
                                {"Get Instant 100 Coins!"}
                            </div>

                            <div className='flex items-center mt-10 text-sm justify-center text-primary6'>
                                {"Watch a simple ad and get rewarded"}
                            </div>

                            <button
                                onClick={() => setShowPopup(false)}
                                type='submit'
                                className=" text-black   mt-5 text-xl hover:text-primary4 border-[2px] border-primary4 hover:border-primary4 hover:bg-primary1  bg-primary4  rounded-3xl px-5 py-2 w-[250px] text-center">{"Claim "}
                            </button>
                        </div>


                    </div>
                </div>

            }

            {!showPopup &&
                <div>
                    <div className='flex flex-col items-center px-4 mt-[100px] '>

                        <div className='flex flex-col items-center justify-center p-4 bg-white  border-[2px] w-full rounded-2xl  border-white border-solid'>
                            <img
                                src='/assets/image/winner.gif'
                                className='w-[150px]'
                            />
                            <div className='text-center text-black text-[18px] font-bold' >{"You Have got"}
                                <span className='text-yellow-600'> {score}</span> {"Coins"}
                            </div>
                            <a href='/start'>
                                <button type='submit' className="text-white mt-5 text-xl hover:text-primary3 border-[2px] border-white hover:border-primary3 hover:bg-white bg-primary3  rounded-lg px-5 py-2 text-center">{"Play Now"}</button>
                            </a>

                        </div>

                        {paragraph.map((item, index) => (
                            <div key={index} className="mt-[50px] bg-primary3 w-full p-4 rounded-xl">
                                <div className="text-[18px] font-bold text-center mb-2">Learn Something New!</div>

                                <div className="text-left font-semibold text-[16px] text-white">
                                    {item.topic}
                                </div>

                                <div className="text-justify text-[14px] text-primary2 mt-1">
                                    {item.content}
                                </div>
                            </div>
                        ))}
                       
                    </div>

                    <div className='px-3 mt-5' >
                        <Ads
                            data-ad-format="auto"
                            data-ad-slot="8433272954"
                            data-full-width-responsive="true"
                        />
                    </div>

                    <div className="flex justify-center items-center">
                        <div className="text-center w-fit text-2xl border-b-2 border-solid">
                            Play Quiz and Win Coins!
                        </div>
                    </div>



                    <div className="px-3">
                        <ul className="list-disc  p-4 text-left text-[15px] space-y-2 text-primary2">
                            <li>Play quizzes in 25+ categories like GK, Sports, Bollywood, Business, Cricket & more!</li>
                            <li>Compete with lakhs of other players!</li>
                            <li>Win coins for every game</li>
                            <li>Trusted by millions of other quiz enthusiasts like YOU!</li>
                        </ul>
                    </div>
                </div>
            }
        </Fragment>

    )
}

export default Result
