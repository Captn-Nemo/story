import React, { Component } from "react";
import { jsPDF } from "jspdf";
import "./PDF.css";
import htmlToImage from "html-to-image";
import { CustomButton } from "../customFormElements/customButton";
import { Row, Col, ProgressBar } from "react-bootstrap";
export default class BookGenerator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isloading: false,
      loadedBook: [],
      idNumbers: 0,
      data: [],
      finished: false,
    };
  }
  componentWillMount() {
    document.querySelector("body").scrollTo(0, 0);
    this.setState({ loadedBook: JSON.parse(localStorage.getItem("book")) });
  }
  async generatePDF() {
    this.setState({ isloading: true });
    const { loadedBook, data } = this.state;
    let x = loadedBook.loadedBook[0].pages.length;
    let y = 0;
    while (x !== 0) {
      //   await html2canvas(document.getElementById(`page${y}`), {
      //     scale: 1,
      //     allowTaint: true,
      //     scrollX: 0,
      //     backgroundColor: "#dadada",
      //     scrollY: -window.scrollY,
      //     height: 1024,
      //     windowHeight: 1024,
      //   }).then((canvas) => {
      //     var imgHeight = 870;
      //     var imgWidth = 576;
      //     var imgData = canvas.toDataURL("image/jpeg", 0.8);
      //     data.push(imgData);
      //     var width = book.internal.pageSize.getWidth();
      //     var height = book.internal.pageSize.getHeight();
      //     book.addImage(imgData, "PNG", 0, 0, width, height);
      //     var heightLeft = imgHeight;
      //     var position = 0;
      //     // book.addImage(image, "PNG", 0.2, 0.2, "", "FAST");
      //     book.addPage();
      //   });
      let node = document.getElementById(`page${y}`);
      await htmlToImage
        .toJpeg(node, { quality: 0.6, backgroundColor: "#fff" })
        .then(function (canvas) {
          data.push(canvas);
          // document.appendChild(img);
        })
        .catch(function (error) {
          console.error("oops, something went wrong!", error);
        });
      y = y + 1;
      x = x - 1;
    }
    this.setState({ finished: true, isloading: false });
    // book.save(`MYPdf.pdf`);
  }
  createMarkup(svgtxt, id) {
    let svgid = this.cleanCode(svgtxt, 0);
    return { __html: svgid };
  }

  cleanCode = (code, id) => {
    const { loadedBook } = this.state;
    let newcode = code;
    newcode = newcode
      .replace(/Mohammed/g, loadedBook.fname)
      .replace(/MOHAMMED/g, loadedBook.fname)
      .replace(/\bhe\b/g, "she")
      .replace(/\bhim\b/g, "her")
      .replace(/\bhis\b/g, "her");
    newcode =
      loadedBook.gender === "m"
        ? newcode
            .replace(/\bShe\b/g, "He")
            .replace(/\bHer\b/g, "Him")
            .replace(/\bher\b/g, "his")
            .replace(/\hherself\b/g, "himself")
        : newcode
            .replace(/\bHe\b/g, "She")
            .replace(/\bHim\b/g, "Her")
            .replace(/\bHis\b/g, "Her")
            .replace(/\bhimself\b/g, "herself");
    newcode = newcode.replace(/cls-/g, "pg" + id + "-");
    return newcode;
  };
  getFile = () => {
    const { loadedBook, data } = this.state;
    var book = new jsPDF("l", "pt", "a4", true);
    var width = book.internal.pageSize.getWidth();
    var height = book.internal.pageSize.getHeight();
    data.map((image) => {
      book.addImage(image, "PNG", 0, 0, width, height, "", "FAST");
      book.addPage();
    });
    book.deletePage(book.internal.getNumberOfPages());
    book.save(`MYPdf.pdf`);
    console.log(data.length);
  };
  render() {
    const { loadedBook, finished, isloading } = this.state;
    return (
      <div className="mt-5">
        {loadedBook ? (
          <div>
            <Row className="">
              <Col
                md={12}
                className="mx-auto d-flex justify-content-center align-items-center"
              >
                <div className="div">
                  <h2> Welcome {loadedBook.fname}</h2>
                  <p>Please click on Generate Book to prepare your pdf file</p>
                  <CustomButton
                    orange
                    onClick={() => {
                      this.generatePDF();
                    }}
                    disabled={isloading}
                  >
                    {" "}
                    Generate Book{" "}
                  </CustomButton>
                  {this.state.isloading ? (
                    <Col>
                      <ProgressBar variant="info" animated now={45} />
                    </Col>
                  ) : null}

                  {finished && !this.state.isloading ? (
                    <CustomButton
                      teal
                      onClick={() => {
                        this.getFile();
                      }}
                    >
                      {" "}
                      Download Book{" "}
                    </CustomButton>
                  ) : null}
                </div>
              </Col>

              <Col
                md={12}
                className="mx-auto d-flex justify-content-center align-items-center"
              >
                <p>Please Scroll Down To See the Book Pages</p>
              </Col>
            </Row>{" "}
            <div>
              {loadedBook.loadedBook.map((flipb, flipid) => (
                <div>
                  {flipb.pages.map((flip, id) => (
                    <div>
                      <article key={"article" + id} id={"page" + id}>
                        {id === 0 && (
                          <div style={{ position: "relative" }}>
                            {loadedBook.kid === "girl1" && flip.girl1 && (
                              <img
                                style={{
                                  position: "absolute",
                                  margin: "0 50%",
                                }}
                                src={require(`../../assets/books/${flip.girl1}`)}
                                alt="page{id}"
                                height="100%"
                                width="50%"
                              />
                            )}
                            {loadedBook.kid === "girl2" && flip.girl2 && (
                              <img
                                style={{
                                  position: "absolute",
                                  margin: "0 50%",
                                }}
                                src={require(`../../assets/books/${flip.girl2}`)}
                                alt="page{id}"
                                height="100%"
                                width="50%"
                              />
                            )}
                            {loadedBook.kid === "girl3" && flip.girl3 && (
                              <img
                                style={{
                                  position: "absolute",
                                  margin: "0 50%",
                                }}
                                src={require(`../../assets/books/${flip.girl3}`)}
                                alt="page{id}"
                                height="100%"
                                width="50%"
                              />
                            )}
                            {loadedBook.kid === "girl4" && flip.girl4 && (
                              <img
                                style={{
                                  position: "absolute",
                                  margin: "0 50%",
                                }}
                                src={require(`../../assets/books/${flip.girl4}`)}
                                alt="page{id}"
                                height="100%"
                                width="50%"
                              />
                            )}
                            {loadedBook.kid === "boy1" && flip.boy1 && (
                              <img
                                style={{
                                  position: "absolute",
                                  margin: "0 50%",
                                }}
                                src={require(`../../assets/books/${flip.boy1}`)}
                                alt="page{id}"
                                height="100%"
                                width="50%"
                              />
                            )}
                            {loadedBook.kid === "boy2" && flip.boy2 && (
                              <img
                                style={{
                                  position: "absolute",
                                  margin: "0 50%",
                                }}
                                src={require(`../../assets/books/${flip.boy2}`)}
                                alt="page{id}"
                                height="100%"
                                width="50%"
                              />
                            )}
                            {loadedBook.kid === "boy3" && flip.boy3 && (
                              <img
                                style={{
                                  position: "absolute",
                                  margin: "0 50%",
                                }}
                                src={require(`../../assets/books/${flip.boy3}`)}
                                alt="page{id}"
                                height="100%"
                                width="50%"
                              />
                            )}
                            {loadedBook.kid === "boy4" && flip.boy4 && (
                              <img
                                style={{
                                  position: "absolute",
                                  margin: "0 50%",
                                }}
                                src={require(`../../assets/books/${flip.boy4}`)}
                                alt="page{id}"
                                height="100%"
                                width="50%"
                              />
                            )}
                            <div
                              dangerouslySetInnerHTML={this.createMarkup(
                                flip.txt,
                                id
                              )}
                              style={{
                                position: "absolute",
                                left: "50%",
                                top: "0px",
                                width: "50%",
                                height: "100%",
                              }}
                            />
                            <img
                              src={require(`../../assets/books/${flip.bg}`)}
                              alt="{id}"
                              style={{
                                height: "100%",
                                width: "50%",
                                marginLeft: "50%",
                                boxShadow: "-2px 2px 4px black",
                              }}
                            />
                          </div>
                        )}
                        {id === flipb.pages.length - 1 && (
                          <div style={{ position: "relative" }}>
                            <img
                              src={require(`../../assets/books/${flip.bg}`)}
                              alt="page{id}"
                              style={{
                                height: "100%",
                                width: "50%",
                                // marginLeft: "-50%",
                                boxShadow: "2px 2px 4px black",
                              }}
                            />
                          </div>
                        )}
                        {id > 0 && id < flipb.pages.length - 1 && (
                          <div style={{ position: "relative" }}>
                            {loadedBook.kid === "girl1" && flip.girl1 && (
                              <img
                                style={{
                                  height: "calc( 100% - 4px )",
                                  width: "calc( 100% - 4px )",
                                  marginLeft: "2px",
                                  marginTop: "0px",
                                  position: "absolute",
                                }}
                                src={require(`../../assets/books/${flip.girl1}`)}
                                alt="page{id}"
                                height="100%"
                                width="100%"
                              />
                            )}
                            {loadedBook.kid === "girl2" && flip.girl2 && (
                              <img
                                style={{
                                  height: "calc( 100% - 4px )",
                                  width: "calc( 100% - 4px )",
                                  marginLeft: "2px",
                                  marginTop: "0px",
                                  position: "absolute",
                                }}
                                src={require(`../../assets/books/${flip.girl2}`)}
                                alt="page{id}"
                                height="100%"
                                width="100%"
                              />
                            )}
                            {loadedBook.kid === "girl3" && flip.girl3 && (
                              <img
                                style={{
                                  height: "calc( 100% - 4px )",
                                  width: "calc( 100% - 4px )",
                                  marginLeft: "2px",
                                  marginTop: "0px",
                                  position: "absolute",
                                }}
                                src={require(`../../assets/books/${flip.girl3}`)}
                                alt="page{id}"
                                height="100%"
                                width="100%"
                              />
                            )}
                            {loadedBook.kid === "girl4" && flip.girl4 && (
                              <img
                                style={{
                                  height: "calc( 100% - 4px )",
                                  width: "calc( 100% - 4px )",
                                  marginLeft: "2px",
                                  marginTop: "0px",
                                  position: "absolute",
                                }}
                                src={require(`../../assets/books/${flip.girl4}`)}
                                alt="page{id}"
                                height="100%"
                                width="100%"
                              />
                            )}
                            {loadedBook.kid === "boy1" && flip.boy1 && (
                              <img
                                style={{
                                  height: "calc( 100% - 4px )",
                                  width: "calc( 100% - 4px )",
                                  marginLeft: "2px",
                                  marginTop: "0px",
                                  position: "absolute",
                                }}
                                src={require(`../../assets/books/${flip.boy1}`)}
                                alt="page{id}"
                                height="100%"
                                width="100%"
                              />
                            )}
                            {loadedBook.kid === "boy2" && flip.boy2 && (
                              <img
                                style={{
                                  height: "calc( 100% - 4px )",
                                  width: "calc( 100% - 4px )",
                                  marginLeft: "2px",
                                  marginTop: "0px",
                                  position: "absolute",
                                }}
                                src={require(`../../assets/books/${flip.boy2}`)}
                                alt="page{id}"
                                height="100%"
                                width="100%"
                              />
                            )}
                            {loadedBook.kid === "boy3" && flip.boy3 && (
                              <img
                                style={{
                                  height: "calc( 100% - 4px )",
                                  width: "calc( 100% - 4px )",
                                  marginLeft: "2px",
                                  marginTop: "0px",
                                  position: "absolute",
                                }}
                                src={require(`../../assets/books/${flip.boy3}`)}
                                alt="page{id}"
                                height="100%"
                                width="100%"
                              />
                            )}
                            {loadedBook.kid === "boy4" && flip.boy4 && (
                              <img
                                style={{
                                  height: "calc( 100% - 4px )",
                                  width: "calc( 100% - 4px )",
                                  marginLeft: "2px",
                                  marginTop: "0px",
                                  position: "absolute",
                                }}
                                src={require(`../../assets/books/${flip.boy4}`)}
                                alt="page{id}"
                                height="100%"
                                width="100%"
                              />
                            )}
                            <div
                              dangerouslySetInnerHTML={this.createMarkup(
                                flip.txt,
                                id
                              )}
                              style={{
                                position: "absolute",
                                width: "100%",
                                height: "100%",
                              }}
                            />
                            <img
                              src={require(`../../assets/books/${flip.bg}`)}
                              alt="page{id}"
                              style={{
                                height: "calc( 100% - 4px )",
                                width: "calc( 100% - 4px )",
                                marginLeft: "2px",
                                marginTop: "0px",
                                boxShadow:
                                  "2px 2px 4px black,-2px 0px 2px black",
                              }}
                            />
                          </div>
                        )}
                      </article>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ) : null}
        {/* {loadedBook ? <div >
                        
                    </div> : null} */}
      </div>
    );
  }
}
