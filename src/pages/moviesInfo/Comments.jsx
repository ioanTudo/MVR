import { useEffect, useState } from "react";
import { Rating } from "../../components/ratingComponent/Rating";

export const Comments = () => {
  const [comments, setComments] = useState([]);
  const [input, setInput] = useState("");
  const [name, setName] = useState([]);

  const addComment = () => {
    if (String(input).trim() !== "") {
      setComments([...comments, input]);

      setInput("");
    }
  };

  useEffect(() => {
    console.log(input);
  }, [input]);
  return (
    <>
      <h2>Leave a comment</h2>
      <div className="commentGrid_container">
        <div className="commentDisplay_container">
          <ul
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              padding: "15px",
              gap: "15px",
            }}
          >
            {comments.map((comment, index) => (
              <li style={{ listStyleType: "none" }} key={index}>
                <div
                  style={{
                    padding: "15px",
                    border: "1px solid black",
                    borderRadius: "10px",
                  }}
                >
                  User{index}: {comment}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="comment_container">
          <textarea
            placeholder="Your comment"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
          <div className="buttonAndRating_container">
            <button disabled={input.length === 0} onClick={addComment}>
              add comment
            </button>
            <Rating />
          </div>
        </div>
      </div>
    </>
  );
};
