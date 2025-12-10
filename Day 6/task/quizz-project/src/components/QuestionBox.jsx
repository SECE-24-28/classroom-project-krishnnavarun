const QuestionBox = (props) => {
    const { question, selected, setSelected } = props;
    return (
        <>
        <div>
            <p className="text-lg font-medium text-pink-600 mb-4">{question.text}</p>

            <div className="space-y-3">
                {question.options.map((opt, index) => (
                    <button
                        onClick={() => setSelected(index)}
                        className={`w-full py-2 rounded-xl transition 
                        ${
                            selected === index
                                ? "bg-pink-600 text-white bg-pink-600"
                                : "bg-violet-700 text-white hover:bg-pink-600"
                        }`}
                    > {opt} </button>
                ))}
            </div>
        </div>
        </>
    );
};

export default QuestionBox;
