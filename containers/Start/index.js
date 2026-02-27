import Layout from '@components/Layout';
import { useRouter } from 'next/router';
import React, { useMemo, useRef, useState, useEffect } from 'react';
import questions from 'data/questions';
import { FaPlayCircle } from 'react-icons/fa';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import { useScore } from 'context/ScoreContext';
import Ads from '@components/Ads';

function Start() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const scrollRef = useRef();
  const difficulties = ['Easy', 'Intermediate', 'Hard'];
  const { score, setScore } = useScore();
  const [showPopup, SetShowPopup] = useState(false)
  const [shuffledList, setShuffledList] = useState([]);

  const categories = useMemo(() => {
    return [...new Set(questions.map((q) => q.category))];
  }, []);

  useEffect(() => {
    const combinations = [];
    categories.forEach((category) => {
      difficulties.forEach((difficulty) => {
        combinations.push({ category, difficulty });
      });
    });

    const shuffled = combinations
      .map((item) => ({ ...item, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ category, difficulty }) => ({ category, difficulty }));

    setShuffledList(shuffled);
  }, [categories]);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const scrollAmount = 150;
    if (direction === 'left') {
      scrollRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

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
    <Layout title="QuizStorm">
      <div className='px-2'>
        <Ads
          data-ad-format="auto"
          data-ad-slot="8433272954"
          data-full-width-responsive="true"
        />
      </div>
      <div className="flex flex-col items-center pt-10 pb-10 px-2 w-full">


        {/* Category Scroll Filter */}
        <div className="flex items-center w-full mb-4">
          <button onClick={() => scroll('left')} className="text-white">
            <BiChevronLeft size={30} />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-hidden whitespace-nowrap w-full"
          >
            <button
              onClick={() => setSelectedCategory(null)}
              className={`bg-primary1 hover:bg-blue-900 text-white font-semibold py-2 px-4 rounded-xl flex-shrink-0 ${!selectedCategory ? 'border-[2px] border-solid border-primary7' : ''
                }`}
            >
              All
            </button>

            {categories.map((cat, i) => (
              <button
                key={i}
                onClick={() => setSelectedCategory(cat)}
                className={`bg-primary1  text-white font-semibold py-2 px-4 rounded-xl flex-shrink-0 ${selectedCategory === cat ? 'border-[2px] border-solid border-primary7' : ''
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <button onClick={() => scroll('right')} className="text-white">
            <BiChevronRight size={30} />
          </button>
        </div>

        {/* Quiz Cards */}
        <div className="w-full mt-4">
          <div className="flex flex-col w-full gap-4">
            {shuffledList
              .filter((item) => !selectedCategory || item.category === selectedCategory)
              .map((item, idx) => (
                <React.Fragment key={idx}>
                  <div
                    onClick={() => {
                      if (score >= 100) {
                        setScore(score - 100);
                        router.push(`/start/${item.category}-${item.difficulty}`);
                      } else {
                        SetShowPopup(true);
                      }
                    }}
                    className="flex items-center justify-between bg-primary1 shadow-md rounded-xl p-4 cursor-pointer border border-white"
                  >
                    <div className="flex-shrink-0 w-[50px] h-[50px]">
                      <img
                        src={categoryImages[item.category]?.[item.difficulty] || '/assets/image/environment.png'}
                        alt={item.category}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    <div className="flex flex-col flex-grow px-4">
                      <div className="text-[12px] text-white">
                        {item.category} | <span>{item.difficulty}</span>
                      </div>
                      <div className="text-[18px] text-yellow-300 font-bold">
                        Play And Win 2000
                      </div>
                      <div className="flex gap-1 text-[13px] items-center bg-primary5 p-1 px-2 rounded-full w-fit mt-1">
                        Entry Free
                        <img src="/assets/image/coin.png" className="w-[13px] h-[13px]" />
                        100
                      </div>
                    </div>

                    <div className="flex-shrink-0">
                      <FaPlayCircle size={50} color="#6DCD01" />
                    </div>
                  </div>

                  {/* Show Ads after 18 and 36 cards if All is selected */}
                  {selectedCategory === null && (idx + 1 === 18 || idx + 1 === 36) && (
                    <div>
                      <Ads
                        data-ad-format="auto"
                        data-ad-slot="8433272954"
                        data-full-width-responsive="true"
                      />
                    </div>

                  )}
                </React.Fragment>
              ))}
          </div>
        </div>
      </div>

      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white  rounded-xl p-6 text-center w-[350px] shadow-lg">
            <h2 className="text-xl font-bold text-red-600 mb-4">You don't have enough coins to play this contest.</h2>
            <p className="text-gray-700 mb-4">You need at least <strong>100 coins</strong> to play this quiz.</p>
            <a href='/'>
              <button
                onClick={() => SetShowPopup(false)}
                className="text-black mt-5 text-xl hover:text-primary4 border-[2px] border-primary4 hover:border-primary4 hover:bg-white bg-primary4 rounded-3xl px-5 py-2 w-[250px] text-center"
              >
                Okay
              </button>
            </a>
          </div>
        </div>
      )}

      <div className='px-2'>
        <Ads
          data-ad-format="auto"
          data-ad-slot="8433272954"
          data-full-width-responsive="true"
        />
      </div>
    </Layout>
  );
}

export default Start;
