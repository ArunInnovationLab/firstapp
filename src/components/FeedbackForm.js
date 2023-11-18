import { useEffect, useState } from "react";

export default function FeedbackForm() {
  const [score, setScore] = useState(0);
  const [comment, setComment] = useState("");

  useEffect(()=>{
    document.title = "Feedback"
  })

  const handleSubmit = (e) => {
    if (Number(score) < 5 && comment.length <= 10) {
      alert("Please provide a comment explaining why the experience was poor.");
      return;
    }

    e.preventDefault();
    setScore(10);
    setComment("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2 className="text-6xl">Feedback Form</h2>
          <div className="Field">
            <div>
              {" "}
              <label>Score: {score} </label>
            </div>

            <input
              type="range"
              min="1"
              max="10"
              value={score}
              onChange={(e) => setScore(e.target.value)}
            />
          </div>
          <div className="Field">
            <label htmlFor="comment">Comment: </label>
            <textarea
              id="comment"
              type="text"
              name="comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </div>

          <button type="submit">submit</button>
        </fieldset>
      </form>
    </div>
  );
}
