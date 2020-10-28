import React from "react";
import { Row, Col } from "react-bootstrap";

const FAQdata = [
  {
    qn: "How to create a personalised book?",
    ans:
      "A personalized book is a very special possession to every kid. When a kid receives a book with his name on it, his face glows up and his heart is filled with joy. Follow these simple steps to create a personalized book today!",
  },
  {
    qn:
      "I unknowingly made a spelling mistake. Is there a possibility to correct it?",
    ans:
      "Well once your order is confirmed, then there is no possibility to make changes. Please make sure that the name of the child and the small written message has no spelling and grammatical errors.",
  },
  {
    qn:
      "What is the character limit allowed in required fields while personalizing the book?",
    ans:
      "All the character limits have been decided keeping in mind the font and spaces. The limit has been set to make sure the finished book looks perfect. You can easily check the characters in the field boxes.We have set a limit of ____characters for the name of the child and ___characters for the sender’s name. The small message can be written within____ characters",
  },
  {
    qn: "My child’s name is more than 15 characters. What do I do?",
    ans:
      "We have set the limit of 15 characters for the name of the child, keeping in mind the best presentation on the cover page. If it is exceeding 15 characters, then we are afraid we cannot help you. You can come up with a nickname or shorten the name.",
  },
  {
    qn:
      "Is it possible that my child’s name is printed differently on the cover page and in the pages inside the book?",
    ans:
      "The name that you have entered in the required fields will appear throughout the book. We make changes in certain pages. Sometimes we shorten the name or modify it to fit it into the page.",
  },
  {
    qn:
      "Is it possible that my child’s name is printed differently on the cover page and in the pages inside the book?",
    ans:
      "No, the invoice or receipt is not included with the package. The package will only have the name of the child and address which is given by you at the time of placing the order.",
  },
];

const Question = ({ data }) => {
  return (
    <div className="px-5">
      <p className="asapbold p-0">{data.qn}</p>
      <p className="asapbold f10 text-muted">{data.ans}</p>
    </div>
  );
};

export const FAQ = () => {
  return (
    <>
      <Row>
        <Col
          md={12}
          className="d-flex justify-content-center align-items-center mb-5"
        >
          <h6 className="chelsea teal f15 text-center">
            FAQ ABOUT YOU GO BACK TO SCHOOL{" "}
          </h6>
        </Col>
        {FAQdata.map((query, i) => {
          return (
            <Col md={12} className="px-4">
              <Question data={query} />
            </Col>
          );
        })}
      </Row>
    </>
  );
};
