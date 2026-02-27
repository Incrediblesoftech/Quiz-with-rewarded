import Ads from '@components/Ads';
import Layout from '@components/Layout'
import { useRouter } from 'next/router';
import React from 'react'
import { BiCoinStack } from "react-icons/bi";

function Qwize() {
    const router = useRouter();
    const { category } = router.query;


    if (!category) {
        return null; // or loading spinner, or default UI
    }
    const [cat, subcat] = category.split('-');


    const categoryImages = {
        "General Knowledge & Current Affairs": {
            Easy: "/assets/image/GernalKnowlage.png",
            Intermediate: "/assets/image/gkimi.png",
            Hard: "/assets/image/gkhard.png",
        },
        "Entertainment": {
            Easy: "/assets/image/entertainment.png",
            Intermediate: "/assets/image/Eimi.png",
            Hard: "/assets/image/Ehard.png",
        },
        "Personality & Fun Quizzes": {
            Easy: "/assets/image/personality.png",
            Intermediate: "/assets/image/pfimi.png",
            Hard: "/assets/image/pfhard.png",
        },
        "Geography & World Culture": {
            Easy: "/assets/image/geography.png",
            Intermediate: "/assets/image/geographyImi.png",
            Hard: "/assets/image/geographyHard.png",
        },
        "Science & Technology": {
            Easy: "/assets/image/science.png",
            Intermediate: "/assets/image/simi.png",
            Hard: "/assets/image/shard.png",
        },
        "Gaming & Esports": {
            Easy: "/assets/image/game.png",
            Intermediate: "/assets/image/gimi.png",
            Hard: "/assets/image/ghard.png",
        },
        "Music & Artists": {
            Easy: "/assets/image/music.png",
            Intermediate: "/assets/image/mimi.png",
            Hard: "/assets/image/mhard.png",
        },
        "Language & Vocabulary": {
            Easy: "/assets/image/language.png",
            Intermediate: "/assets/image/limi.png",
            Hard: "/assets/image/lhard.png",
        },
        "Food & Cuisine": {
            Easy: "/assets/image/food.png",
            Intermediate: "/assets/image/fimi.png",
            Hard: "/assets/image/fhard.png",
        },
        "Mathematics & Logic": {
            Easy: "/assets/image/mathematics.png",
            Intermediate: "/assets/image/maimi.png",
            Hard: "/assets/image/mehard.png",
        },
        "Finance & Money": {
            Easy: "/assets/image/finance.png",
            Intermediate: "/assets/image/faimi.png",
            Hard: "/assets/image/fahard.png",
        },
    };
    return (
        <Layout title={"Quiz"}>

            <div>
                <div className='px-3 mt-5' >
                    <Ads
                        data-ad-format="auto"
                        data-ad-slot="8433272954"
                        data-full-width-responsive="true"
                    />
                </div>
                <div className='flex flex-col border-[1px] border-white border-solid rounded-xl m-4 p-3'>
                    <div className='flex items-center  gap-3'>
                        <img
                            className='w-[60px]'
                            src={categoryImages[cat]?.[subcat]}
                            alt="" />
                        <div className='flex flex-col'>
                            <div className='text-primary4'>{cat.toUpperCase()} | {subcat.toUpperCase()} </div>
                            <div className='flex text-[20px] items-center gap-1'>{"Play and Win "} <span><BiCoinStack color='#ffb540' /></span> {"2000"}</div>
                        </div>

                    </div>

                    <div className='flex items-center justify-center'>

                        <button
                            onClick={() => router.push(`/playquiz?category=${encodeURIComponent(cat)}&subcategory=${encodeURIComponent(subcat)}`)}
                            type='submit'
                            className=" text-white mt-5 text-xl hover:text-primary4 border-[2px] border-primary4 hover:border-primary4 hover:bg-primary1  bg-primary4  rounded-full px-5 py-2 text-center">{"Play Now"}</button>

                    </div>

                    <ul className="list-disc mt-5 p-4 text-left text-[15px] space-y-2 text-primary2">
                        <li>You got 200 seconds to answer all questions</li>
                        <li>Answer as many questions as you can</li>
                        <li>For Every Correct answer you will get 100 points and will loose -50 points on every Incorrect answer</li>
                        <li>You can take help by using the lifelines present in the contest.</li>
                        <li>Lifelines can be used for free or by using a given amount of coins for each lifeline.</li>
                    </ul>
                </div>
            </div>

        </Layout>
    )
}

export default Qwize
