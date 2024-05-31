import { useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";

function ChatAIComponent() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [generatingAnswer, setGeneratingAnswer] = useState(false);

  async function generateAnswer(e) {
    setGeneratingAnswer(true);
    e.preventDefault();
    setAnswer("Cevabınız yükleniyor... 10 saniye kadar sürebilir");
    try {
      const response = await axios({
        url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${"AIzaSyCMB5BJymSC5RicnW6K507P9GseSVB2uUc"}`,
        method: "post",
        data: {
          contents: [{ parts: [{ text: question }] }],
        },
      });

      setAnswer(
        response["data"]["candidates"][0]["content"]["parts"][0]["text"]
      );
    } catch (error) {
      console.log(error);
      setAnswer("Sorry - Something went wrong. Please try again!");
    }

    setGeneratingAnswer(false);
  }

  return (
    <>
      <div className="w-100 h-100 d-flex flex-column justify-content-between align-items-center">
        <div>
          <a>
            <h1 className="text-36-700-yellow text-center">
              Seyahat Düşleri AI{" "}
            </h1>
          </a>

          <p className="mt-4 text-28-700-black  ">
            Gezilecek yerler hakkında veya canın ne sormak isterse işte burdayım
            kutucuğa sorunu yaz ve butona tıkla!
          </p>
          {answer && (
            <div
              style={{
                background: "#2f3a4b",
                maxHeight: "500px",
                overflowY: "scroll",
                color: "#fff",
                borderRadius: 12,
                opacity: "0.8",
              }}
              className=" p-3"
            >
              <ReactMarkdown>{answer}</ReactMarkdown>
            </div>
          )}
        </div>
        <form onSubmit={generateAnswer} className="w-50 ">
          <textarea
            required
            className="form-control my-2"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Birşeyler yaz.."
          ></textarea>
          <button
            type="submit"
            className="btn-pill-v2"
            disabled={generatingAnswer}
          >
            Gönder
          </button>
        </form>
      </div>
    </>
  );
}

export default ChatAIComponent;
