import { useQuiz } from "../Contexts/QuizContext";
import Options from "./Options";

function Question() {
  const { dispatch, answer, questions, index } = useQuiz();
  const question = questions.at(index);
  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
}

export default Question;
