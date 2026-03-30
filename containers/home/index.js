import { useState, useEffect, Fragment } from "react";
import { useRouter } from "next/router";
import questions from "data/questions";
import { useScore } from "context/ScoreContext";
import quizData from "data/otherData";
import Modal from "@components/model";
import Ads from "@components/Ads";

function Home() {

  const [quizQuestions, setQuizQuestions] = useState([]);
  const [paragraph, setParagraph] = useState([]);
  const [loading, setLoading] = useState(true);

  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [rightAns, setRightAns] = useState(0);

  const { setScore } = useScore();
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(true);
  const [isClient, setIsClient] = useState(false);


  // hydration ready
  useEffect(() => {
    setIsClient(true);
  }, []);


  // load questions
  useEffect(() => {

    const shuffled = [...questions].sort(() => 0.5 - Math.random());
    setQuizQuestions(shuffled.slice(0, 2));

    const quizParagraph = [...quizData].sort(() => 0.5 - Math.random());
    setParagraph(quizParagraph.slice(0, 1));

  }, []);


  // loader wait only for ads render
  useEffect(() => {

    const handleAdsReady = () => {

      // wait ads render time
      setTimeout(() => {

        setLoading(false);

      }, 3000);

    };

    if (document.readyState === "complete") {

      handleAdsReady();

    } else {

      window.addEventListener("load", handleAdsReady);

    }

    return () => {

      window.removeEventListener("load", handleAdsReady);

    };

  }, []);


  const handleAnswer = (option) => {

    setSelected(option);

    const isCorrect = option === quizQuestions[current].answer;

    if (isCorrect) {
      setRightAns((prev) => prev + 100);
    }

    setTimeout(() => {

      if (current + 1 < quizQuestions.length) {

        setCurrent(current + 1);
        setSelected(null);

      } else {

        const finalScore = rightAns + (isCorrect ? 100 : 0);

        setScore(finalScore);

        router.push(`/start/result?score=${finalScore}`);

      }

    }, 800);

  };


  // loader UI
  if (loading) {

    return (

      <div className="bg-primary1 ls:w-[360px] flex flex-col justify-center items-center mx-auto h-screen">

        <div className="relative">

          <div className="relative w-32 h-32">

            <div
              className="absolute w-full h-full rounded-full border-[3px] border-gray-100/10 border-r-[#0ff] border-b-[#0ff] animate-spin"
              style={{ animationDuration: "3s" }}
            ></div>

            <div
              className="absolute w-full h-full rounded-full border-[3px] border-gray-100/10 border-t-[#0ff] animate-spin"
              style={{
                animationDuration: "2s",
                animationDirection: "reverse",
              }}
            ></div>

          </div>

          <div className="absolute inset-0 bg-gradient-to-tr from-[#0ff]/10 via-transparent to-[#0ff]/5 animate-pulse rounded-full blur-sm"></div>

        </div>

        <div className="pt-5">

          Loading Ads ...

        </div>

      </div>

    );

  }


  return (

    <Fragment>

      {/* top ad */}
      <div className='px-3 pt-2'>
        <Ads
          data-ad-format="auto"
          data-ad-slot="4459409396"
          data-full-width-responsive="true"
        />
      </div>


      <div className="flex flex-col items-center justify-start text-center px-3 pt-[50px]">

        {/* second ad */}
        <div className='px-2'>
          <Ads
            data-ad-format="auto"
            data-ad-slot="6894001046"
            data-full-width-responsive="true"
          />
        </div>


        <div className="text-2xl font-bold">
          Quick Start!
        </div>


        <div className="text-primary2 text-[15px]">
          Answer 2 questions and win up to 200 coins.
        </div>


        {/* quiz card */}

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
                className={`py-2 px-4 rounded ${
                  selected
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

      </div>


      {/* bottom ad */}

      <div className='px-3 mt-5'>

        <Ads
          data-ad-format="auto"
          data-ad-slot="1641674363"
          data-full-width-responsive="true"
        />

      </div>


      {/* modal ad */}

      {isClient && (

        <Modal
          outerClassName="border-[1px] border-white"
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        >

          <div className="md:mt-[18px] mt-[20px]">

            <Ads
              display={true}
              data-ad-slot="4285950865"
            />

          </div>

        </Modal>

      )}

    </Fragment>

  );

}

export default Home;