import Ads from '@components/Ads'
import Layout from '@components/Layout'
import { useRouter } from 'next/router'
import React from 'react'

function Scoreboard() {
    const router = useRouter()
    const { score } = router.query
    return (
        <Layout title={"quiz"}>

            <div className=''>
                <div className='px-2  '>
                    <Ads
                        data-ad-format="auto"
                        data-ad-slot="8433272954"
                        data-full-width-responsive="true"
                    />
                </div>
                <div className='flex flex-col items-center m-2 justify-center p-4   border-[1px]  rounded-2xl  border-white border-solid'>
                    <img
                        src='/assets/image/trophy.gif'
                        className='w-[150px]'
                    />
                    <div className='text-center text-white mt-5 text-[18px] font-bold' >{"You Score"}
                        <span className='text-yellow-600'> {score !== null ? (score) : ""}</span>
                    </div>
                    <a href='/start'>
                        <button
                            type='submit'
                            className=" text-white mt-5 text-xl hover:text-primary4 border-[2px] border-primary4 hover:border-primary4 hover:bg-primary1  bg-primary4  rounded px-5 py-2 text-center">{"Go To Home"}
                        </button>
                    </a>
                </div>
            </div>


        </Layout>
    )
}

export default Scoreboard
