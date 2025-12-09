import { useState } from "react";
import QuestionBox from "./components/QuestionBox";
import bg from "./assets/bg.jpg";
import bg2 from "./assets/bg2.jpg";

const App = () => {
    const questions = [
        {
            text: "Which keyword declares a constant in JavaScript?",
            options: ["var", "let", "const", "static"],
            correctIndex: 2,
        },
        {
            text: "Which method is used to log to the console?",
            options: ["print()", "log()", "console()", "console.log()"],
            correctIndex: 3,
        },
        {
            text: "Which of these is NOT a JavaScript data type?",
            options: ["number", "string", "boolean", "character"],
            correctIndex: 3,
        },
    ];

    const [current, setCurrent] = useState(0);
    const [selected, setSelected] = useState(null);
    const [score, setScore] = useState(0);
    const [completed, setCompleted] = useState(false);

    function nextQuestion() {
        if (selected === null) {
            alert("Select an option!");
            return;
        }

        if (selected === questions[current].correctIndex) {
            setScore(score + 1);
        }

        if (current + 1 < questions.length) {
            setCurrent(current + 1);
            setSelected(null);
        } else {
            setCompleted(true);
        }
    }

    return (
        <div className="min-h-screen flex flex-col justify-center items-center w-full" style={{ backgroundImage: `url(${bg2})`, height: "50vh", backgroundPosition: "center",backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>

            <div className="bg-rose-200 w-[480px] p-6 rounded-2xl shadow-lg text-white">

                {!completed ? (
                    <>
                        <h2 className="text-xl text-slate-900 font-bold mb-2">Simple JS Quiz</h2>

                        <p className="text-md text-slate-600 mb-4 font-semibold">
                            Question {current + 1} of {questions.length}
                        </p>

                        <QuestionBox
                            question={questions[current]}
                            selected={selected}
                            setSelected={setSelected}
                        />

                        <button
                            onClick={nextQuestion}
                            className="mt-6 w-25 bg-red-500 hover:bg-red-700 py-2 rounded-xl font-semibold transition ml-80"
                        >
                            Next
                        </button>
                    </>
                ) : (
                    <div className="text-center text-gray-700">
                        <h2 className="text-2xl font-bold">Quiz Completed!</h2>
                        <p className="text-xl mt-3">
                            Your Score: {score}/{questions.length}
                        </p>
                    </div>
                )}

            </div>
        </div>
    );
};

export default App;
