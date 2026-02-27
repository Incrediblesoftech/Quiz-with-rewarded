import Layout from '@components/Layout';
import { useRouter } from 'next/router';
import React, { useEffect, useMemo, useState } from 'react';
import { BiCoinStack } from 'react-icons/bi';
import questions from 'data/questions';
import { useScore } from 'context/ScoreContext';
import Ads from '@components/Ads';

function PlayQuiz() {
  const router = useRouter();
  const { category, subcategory } = router.query
  const { score, setScore } = useScore();
  const [rightAns, SetRightAns] = useState(0)
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [wrong, setWrong] = useState(0);
  const [timeLeft, setTimeLeft] = useState(180); // 3 minutes = 180 seconds
  const [shuffledQuestion, setShuffledQuestion] = useState([]);

  useEffect(() => {
    if (!category) return;
    const filtered = questions.filter((q) => q.category === category);
    const shuffled = filtered.sort(() => 0.5 - Math.random()).slice(0, 10);
    setShuffledQuestion(shuffled);
  }, [category]);

  const currentQuestion = shuffledQuestion[current];

  // ✅ Start 3-minute countdown when page loads
  useEffect(() => {
    if (timeLeft <= 0) {
      router.push(`/scoreboard?score=${score}`);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, score]); // ✅ include score here


  const handleAnswer = (opt) => {
    if (selected) return;

    setSelected(opt);

    const isCorrect = opt === currentQuestion.answer;
    const newScore = isCorrect ? rightAns + 1 * 200 : rightAns;

    if (isCorrect) {
      SetRightAns(newScore);
    } else {
      setWrong(wrong + 1);
    }

    setTimeout(() => {
      if (current + 1 < shuffledQuestion.length) {
        setCurrent(current + 1);
        setSelected(null);
      } else {
        setScore(newScore)
        router.push(`/scoreboard?score=${newScore}`);
      }
    }, 800);
  };


  // ✅ Format timer (mm:ss)
  const formatTime = () => {
    const minutes = Math.floor(timeLeft / 60)
      .toString()
      .padStart(2, '0');
    const seconds = (timeLeft % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  return (
    <Layout>
      <div>
        <div className='flex flex-col items-center m-2'>
          <div className='text-center text-primary4 font-[600] text-[24px]'>
            {category} | {subcategory}
          </div>

          <div className='flex text-[20px] mt-2 text-center font-[500] items-center gap-1'>
            Play and Win <span><BiCoinStack color='#ffb540' /></span> 2000
          </div>

          <div className="relative mt-[50px] flex flex-col bg-primary3 w-full p-4 rounded-xl">
            {/* ⏱️ Timer Circle */}
            <div className="absolute -top-[45px] p-1 rounded-full bg-primary3 left-1/2 transform -translate-x-1/2">
              <div className="bg-primary1 text-[18px] px-4 py-1 w-[80px] h-[80px] rounded-full font-bold shadow-md flex items-center justify-center">
                {formatTime()}
              </div>
            </div>

            {/* Score bubbles */}
            <div className='flex items-center justify-between mb-2'>
              <div className='flex items-center justify-center bg-green-700 w-[40px] h-[40px] rounded-full'>
                {rightAns / 200}
              </div>
              <div className='flex items-center justify-center bg-red-700 w-[40px] h-[40px] rounded-full'>
                {wrong}
              </div>
            </div>

            {/* Progress */}
            <div className="bg-primary1 rounded-full py-2 px-4 text-[15px] mt-5 font-semibold  w-fit mx-auto">
              {current + 1}/{shuffledQuestion.length} Questions
            </div>

            {/* Current Question */}
            {currentQuestion && (
              <div className='p-4 text-white'>
                <div className='font-semibold text-center  mb-3'>{currentQuestion.question}</div>
                <div className='grid grid-cols-2 gap-5 text-center'>
                  {currentQuestion.options.map((opt, i) => (
                    <div
                      key={i}
                      onClick={() => handleAnswer(opt)}
                      className={`py-2 px-4 cursor-pointer rounded transition-all duration-300 ${selected
                        ? opt === currentQuestion.answer
                          ? "bg-green-500 text-white"
                          : opt === selected
                            ? "bg-red-500 text-white"
                            : "bg-primary1 opacity-60 text-white"
                        : "bg-primary1 hover:bg-blue-950 hover:text-white"
                        }`}>
                      {opt}
                    </div>
                  ))}
                </div>

              </div>
            )}
          </div>

          {currentQuestion && currentQuestion.explanation && (
            <div className="flex flex-col items-center justify-center text-center mt-[20px] bg-primary3 w-full p-2 rounded-xl">
              <div className="text-[18px] font-bold text-center">{"#Fun Fact"}</div>
              <div>{currentQuestion.explanation}</div>
            </div>
          )}

          <div className='text-primary4 mt-4 font-[700] text-[16px]'>
            Your Score Is {rightAns}
          </div>


        </div>
        <div className='px-3 pt-5' >
          <Ads
            data-ad-format="auto"
            data-ad-slot="8433272954"
            data-full-width-responsive="true"
          />
        </div>
      </div>


    </Layout>
  );
}

export default PlayQuiz;
