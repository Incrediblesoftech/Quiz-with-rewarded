import { useState, useEffect, Fragment } from "react";
import { useRouter } from "next/router";
import questions from "data/questions";
import { useScore } from "context/ScoreContext";
import quizData from "data/otherData";
import Modal from "@components/model";
import Ads from "@components/Ads";

function Home() {
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [paragraph, setParagraph] = useState([]);
  const [selected, setSelected] = useState(null);
  const { setScore } = useScore();
  const [rightAns, setRightAns] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const shuffled = [...questions].sort(() => 0.5 - Math.random());
    const picked = shuffled.slice(0, 2);
    setQuizQuestions(picked);

    const quizParagraph = [...quizData].sort(() => 0.5 - Math.random());
    const pick = quizParagraph.slice(0, 1);
    setParagraph(pick);
  }, []);

  const showDisplayAd = () => {
    if (typeof window !== "undefined" && window.adBreak) {
      window.adBreak({
        type: "browse",
        name: "quiz-display-ad",

        beforeAd: () => {
          console.log("Display Ad started");
        },

        afterAd: () => {
          console.log("Display Ad finished");
        },

        adBreakDone: () => {
          // NEXT QUESTION
          setCurrent(1);
          setSelected(null);
        },
      });
    }
  };
  
  const handleAnswer = (option) => {
    setSelected(option);

    const isCorrect = option === quizQuestions[current].answer;

    if (isCorrect) {
      setRightAns((prev) => prev + 100);
    }

    // FIRST QUESTION → SHOW AD
    if (current === 0) {
      setTimeout(() => {
        showDisplayAd();
      }, 800);
      return;
    }

    // SECOND QUESTION → RESULT
    setTimeout(() => {
      const finalScore = rightAns + (isCorrect ? 100 : 0);
      setScore(finalScore);
      router.push(`/start/result?score=${finalScore}`);
    }, 800);
  };

  if (quizQuestions.length === 0) return <div></div>;

  return (
    <Fragment>
      <div className="px-3 pt-2">
        <Ads
          data-ad-format="auto"
          data-ad-slot="4459409396"
          data-full-width-responsive="true"
        />
      </div>

      <div className="flex flex-col items-center justify-start text-center px-3 pt-[50px]">

          <Ads
            data-ad-format="auto"
            data-ad-slot="6894001046"
            data-full-width-responsive="true"
          />


        <div className="text-2xl font-bold">Quick Start!</div>
        <div className="text-primary2 text-[15px]">
          Answer 2 questions and win up to 200 coins.
        </div>

        <div className="relative mt-[50px] flex flex-col bg-primary3 w-full p-4 rounded-xl">

          <div className="absolute -top-4 p-1 rounded-full bg-primary3 left-1/2 transform -translate-x-1/2">
            <div className="bg-primary1 text-sm px-4 py-1 rounded-full font-semibold shadow-md">
              {current + 1}/{quizQuestions.length} Question
            </div>
          </div>

          <h2 className="text-lg mt-5 font-semibold mb-4">
            {quizQuestions[current].question}
          </h2>

          <div className="grid grid-cols-2 gap-4 w-full max-w-md">
            {quizQuestions[current].options.map((option) => (
              <button
                key={option}
                className={`py-2 px-4 rounded ${selected
                  ? option === quizQuestions[current].answer
                    ? "bg-green-500 text-white"
                    : option === selected
                      ? "bg-red-500 text-white"
                      : "bg-primary1 opacity-60 text-white"
                  : "bg-primary1 hover:bg-blue-950 hover:text-white"
                  }`}
                disabled={!!selected}
                onClick={() => handleAnswer(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-center text-center mt-[50px] bg-primary3 w-full p-2 rounded-xl">
          <div className="text-[18px] font-bold text-center">#Fact</div>
          <div>{quizQuestions[current].explanation}</div>
        </div>

        {paragraph.map((item, index) => (
          <div
            key={index}
            className="mt-[50px] bg-primary3 w-full p-4 rounded-xl"
          >
            <div className="text-[18px] font-bold text-center mb-2">
              Learn Something New!
            </div>

            <div className="text-left font-semibold text-[16px] text-white">
              {item.topic}
            </div>

            <div className="text-justify text-[14px] text-primary2 mt-1">
              {item.content}
            </div>
          </div>
        ))}
      </div>

      <div className="px-3 mt-5">
        <Ads
          data-ad-format="auto"
          data-ad-slot="1641674363"
          data-full-width-responsive="true"
        />
      </div>

      <div className="flex justify-center items-center">
        <div className="text-center w-fit text-2xl border-b-2 border-solid">
          Play Quiz and Win Coins!
        </div>
      </div>

      <div className="px-3">
        <ul className="list-disc p-4 text-left text-[15px] space-y-2 text-primary2">
          <li>
            Play quizzes in 25+ categories like GK, Sports, Bollywood,
            Business, Cricket & more!
          </li>
          <li>Compete with lakhs of other players!</li>
          <li>Win coins for every game</li>
          <li>Trusted by millions of other quiz enthusiasts like YOU!</li>
        </ul>
      </div>
    </Fragment>
  );
}

export default Home;