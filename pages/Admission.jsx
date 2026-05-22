import { useState } from "react";

function Admission() {
const [checkedDocs, setCheckedDocs] = useState([]);
const [openQuestion, setOpenQuestion] = useState(null);
const documents = [
"Copy of ID or passport",
"Passport-size photo",
"Official school certificate",
"School transcript",
"Completed application form",];

const faqs= [
    {
      question: "How can I apply to LIU?",
      answer:
        "Students can apply by preparing the required documents and submitting the application form to the admission office.",
    },
    {
      question: "What documents are required?",
      answer:
        "Students usually need an ID copy, passport photo, school certificate, transcript, and application form.",
    },
    {
      question: "Can I choose my major during registration?",
      answer:
        "Yes, students can select their preferred major during the registration process.",
    },
  ];

  function handleCheck(documentName) {
    if (checkedDocs.includes(documentName)) {
      setCheckedDocs(checkedDocs.filter((doc) => doc !== documentName));
    } else {
      setCheckedDocs([...checkedDocs, documentName]);
    }
  }

  function toggleQuestion(index) {
    if (openQuestion === index) {
      setOpenQuestion(null);
    } else {
      setOpenQuestion(index);
    }
  }

  return (
    <main className="main-box">
      <div className="wrap">
        <section className="title-box">
          <h2>Admission</h2>
        </section>

        <section className="content-box">
          <p>
            Lebanese International University welcomes students who want to
            continue their education and build a successful future.
          </p>

          <h3>Admission Steps</h3>
          <ol>
            <li>Choose the program or major you want to study.</li>
            <li>Prepare the required admission documents.</li>
            <li>Submit your application to the admission office.</li>
            <li>Wait for application review and approval.</li>
            <li>Complete your registration.</li>
          </ol>
        </section>

        <section className="title-box">
          <h2>Required Documents Checklist</h2>
        </section>

        <section className="content-box">
          {documents.map((documentName) => (
            <label className="check-item" key={documentName}>
              <input
                type="checkbox"
                checked={checkedDocs.includes(documentName)}
                onChange={() => handleCheck(documentName)}
              />
              {documentName}
            </label>
          ))}

          <p className="message">
            Completed: {checkedDocs.length} / {documents.length}
          </p>

          {checkedDocs.length === documents.length && (
            <p className="message">All required documents are ready.</p>
          )}
        </section>

        <section className="title-box">
          <h2>Admission FAQ</h2>
        </section>

        <section className="content-box">
          {faqs.map((faq, index) => (
            <div className="faq-item" key={faq.question}>
              <button
                className="faq-question"
                onClick={() => toggleQuestion(index)}
              >
                {faq.question}
              </button>

              {openQuestion === index && <p className="faq-answer">{faq.answer}</p>}
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}

export default Admission;