import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.scss";
import Earth from "./Earth.jpg";
import Image from "./Image.png";
import Image2 from "./Image2.png";
import Image3 from "./Image3.png";

class App extends Component {
  render() {
    return (
      
      <body>
        
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12  top-container">
          <a className="navbar-brand title">
            <img
              className="logo"
              src="https://www.drugs.com/feo-cdn/p/t/Udr6879Js.webp"
            />
          </a>
          <nav className="navbar navbar-primary">
            <div className="container-fluid ">
              <div className="navbar-header"></div>
              <ul className="nav navbar-nav navbar1">
                <li className="active">
                  <a href="#">Drug A-Z</a>
                </li>
                <li>
                  <a href="#">Pill Identifier</a>
                </li>
                <li>
                  <a href="#">Interactions Checker</a>
                </li>
                <li>
                  <a href="#">New Drugs</a>
                </li>
                <li>
                  <a href="#">Pro Edition</a>
                </li>
                <li>
                  <a href="#">More</a>
                </li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <a href="#" className="a1">
                    <span className="glyphicon glyphicon-user"></span> Register
                  </a>
                </li>
                <li>
                  <a href="#" className="a2">
                    <span className="glyphicon glyphicon-log-in"></span> Login
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        {/* div top-container */}

        <div className="container">
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 search">
              <h1>Find Drugs & Conditions</h1>
              <div className="input-group">
                <input
                  id="add"
                  type="text"
                  className="form-control  search-input"
                  placeholder="Search with drug ..."
                />

                <button type="button" class="btn btn-default icon">
                  <span>
                    <i className="fa fa-search"></i>
                  </span>
                </button>

                <p>
                  Trending searches: gabapentin, amlodipine, lisinopril,
                  hydroxychloroquine, metformin
                </p>
              </div>
            </div>
          </div>
          {/* search */}
        </div>

        <div class="next-container">
          <div class="col-xs-6 col-md-10 col-centered">
            <div
              id="carousel"
              class="carousel slide"
              data-ride="carousel"
              data-type="multi"
              data-interval="2500"
            >
              <div class="carousel-inner">
                <div class="item active">
                  <div class="carousel-col">
                    <div class="block red img-responsive"></div>
                  </div>
                </div>
                <div class="item">
                  <div class="carousel-col">
                    <div class="block green img-responsive"></div>
                  </div>
                </div>
                <div class="item">
                  <div class="carousel-col">
                    <div class="block blue img-responsive"></div>
                  </div>
                </div>
                <div class="item">
                  <div class="carousel-col">
                    <div class="block yellow img-responsive"></div>
                  </div>
                </div>
              </div>

              <div class="left carousel-control">
                <a href="#carousel" role="button" data-slide="prev">
                  <span
                    class="glyphicon glyphicon-chevron-left"
                    aria-hidden="true"
                  ></span>
                  <span class="sr-only">Previous</span>
                </a>
              </div>
              <div class="right carousel-control">
                <a href="#carousel" role="button" data-slide="next">
                  <span
                    class="glyphicon glyphicon-chevron-right"
                    aria-hidden="true"
                  ></span>
                  <span class="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="next-container2">
          <section>
            <div class="container">
              <div class="row">
                <div class="board">
                  <div class="board-inner">
                    <ul class="nav nav-tabs" id="myTab">
                      <div class="liner"></div>
                      <li class="active">
                        <a href="#home" data-toggle="tab" title="welcome">
                          <span class="round-tabs one">
                            <i class="glyphicon glyphicon-home"></i>
                          </span>
                        </a>
                      </li>

                      <li>
                        <a href="#profile" data-toggle="tab" title="profile">
                          <span class="round-tabs two">
                            <i class="glyphicon glyphicon-search"></i>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#messages"
                          data-toggle="tab"
                          title="bootsnipp goodies"
                        >
                          <span class="round-tabs three">
                            <i class="glyphicon glyphicon-th"></i>
                          </span>
                        </a>
                      </li>

                      <li>
                        <a href="#settings" data-toggle="tab" title="blah blah">
                          <span class="round-tabs four">
                            <i class="glyphicon glyphicon-comment"></i>
                          </span>
                        </a>
                      </li>

                      <li>
                        <a href="#doner" data-toggle="tab" title="completed">
                          <span class="round-tabs five">
                            <i class="glyphicon glyphicon-ok"></i>
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div class="tab-content">
                    <div class="tab-pane fade in active" id="home">
                      <h3 class="head text-center">
                        Welcome to Drug.com<sup>™</sup>
                        <span>♥</span>
                      </h3>
                      <p class="narrow text-center">
                        A pandemic, a slew of protests -- and now a huge blanket
                        of Sahara Desert dust will engulf parts of the United
                        States this week.
                      </p>
                      <p class="narrow text-center">States this week. That's what some weary Americans will
                        have to brace themselves for by Wednesday or Thursday,
                        meteorologists and health experts warn.</p>
                      
                      <br />
                      <div className="ifa">
                        <i className="fa fa-circle"></i>
                        <i className="fa fa-circle"></i>
                        <i className="fa fa-circle"></i>
                        <i className="fa fa-circle"></i>
                        <i className="fa fa-circle"></i>
                      </div>
                    </div>
                    <div class="tab-pane fade" id="profile">
                      <h3 class="head text-center">
                        Browser Drug<sup>™</sup>
                      </h3>
                      <p class="narrow text-center">
                        <button className="abc">
                          <span>A</span>
                        </button>
                        <button className="abc">
                          <span>B</span>
                        </button>
                        <button className="abc">
                          <span>C</span>
                        </button>
                        <button className="abc">
                          <span>D</span>
                        </button>
                        <button className="abc">
                          <span>E</span>
                        </button>
                        <button className="abc">
                          <span>F</span>
                        </button>
                        <button className="abc">
                          <span>G</span>
                        </button>
                        <button className="abc">
                          <span>H</span>
                        </button>
                        <button className="abc">
                          <span>I</span>
                        </button>
                        <button className="abc">
                          <span>J</span>
                        </button>
                        <button className="abc">
                          <span>K</span>
                        </button>
                        <button className="abc">
                          <span>L</span>
                        </button>
                        <button className="abc">
                          <span>M</span>
                        </button>

                        <br />
                        <br />
                        <button className="abc">
                          <span>N</span>
                        </button>
                        <button className="abc">
                          <span>O</span>
                        </button>
                        <button className="abc">
                          <span>P</span>
                        </button>
                        <button className="abc">
                          <span>Q</span>
                        </button>
                        <button className="abc">
                          <span>R</span>
                        </button>
                        <button className="abc">
                          <span>S</span>
                        </button>
                        <button className="abc">
                          <span>T</span>
                        </button>
                        <button className="abc">
                          <span>U</span>
                        </button>
                        <button className="abc">
                          <span>V</span>
                        </button>
                        <button className="abc">
                          <span>W</span>
                        </button>
                        <button className="abc">
                          <span>X</span>
                        </button>
                        <button className="abc">
                          <span>Y</span>
                        </button>
                        <button className="abc">
                          <span>Z</span>
                        </button>
                      </p>
                      <p class="text-center">
                        <a
                          href=""
                          class="btn btn-success btn-outline-rounded green"
                        >
                          <span class="glyphicon glyphicon-search mr1"></span>
                        </a>
                      </p>
                    </div>

                    <div class="tab-pane fade" id="messages">
                      <h3 class="head text-center">News Feed</h3>
                      <p class="narrow text-center">
                        Lorem ipsum dolor sit amet, his ea mollis fabellas
                        principes. Quo mazim facilis tincidunt ut, utinam
                        saperet facilisi an vim.
                      </p>

                      <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 content">
                        <h4>Drug Information</h4>
                        <div className="left">
                          <a>A to Z Drug List</a>
                          <br />
                          <br />
                          <a>Treatment Options</a>
                          <br />
                          <br />
                          <a>Drugs by Class</a>
                          <br />
                          <br />
                          <a>Dosage</a>
                          <br />
                          <br />
                          <a>Medical Q & A</a>
                        </div>
                        <div className="right">
                          <a>Phonetic Search</a>
                          <br />
                          <br />
                          <a>Pregnancy Warnings</a>
                          <br />
                          <br />
                          <a>OTC Database</a>
                          <br />
                          <br />
                          <a>Inactive Ingredients</a>
                          <br />
                          <br />
                          <a>International Drugs</a>
                        </div>
                        <img className="img2" src={Image2} />
                      </div>
                      <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 content">
                        <p>
                          Drugs.com is the most popular, comprehensive and
                          up-to-date source of drug information online.
                          Providing free, peer-reviewed, accurate and
                          independent data on more than 24,000 prescription
                          drugs, over-the-counter medicines & natural products.
                        </p>
                        <br />

                        <h3>
                          <a>
                            Huge Saharan Dust Plume Will Affect Americans'
                            Health
                          </a>
                        </h3>

                        <img className="earth" src={Earth} />
                        <div className="con">
                          <p>
                            <strong>M</strong>eteorologists and health experts
                            are warning that a huge blanket of Sahara Desert
                            dust will engulf parts of the United States this
                            week. The dust plume, drifting from North Africa
                            across the Atlantic to North America, occurs a few
                            times every year, the experts said. But this week,
                            the cloud of dust is especially huge, and it has
                            already hit the Caribbean.<br/> <strong><a>"This...</a></strong>
                          </p>
                        </div>
                      </div>
                      <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 content">
                        <img src="https://www.drugs.com/feo-cdn/p/t/Udr6879Js.webp" />
                        <br />
                        <img src={Image} />
                      </div>
                    </div>

                    <div class="tab-pane fade" id="settings">
                      <h3 class="head text-center">Comments!</h3>
                      <p class="narrow text-center">
                        Lorem ipsum dolor sit amet, his ea mollis fabellas
                        principes. Quo mazim facilis tincidunt ut, utinam
                        saperet facilisi an vim.
                      </p>

                      <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8 lst">
                        <h3>Pill Identifier</h3>
                        <p>
                          In order to proceed to the Pill Identification Wizard,
                          you must read and accept the following terms:
                          Disclaimer
                        </p>
                        <textarea className="form-control t-rea">
                          This Service is intended for use by consumers in the
                          United States. Your use of this product acknowledges
                          acceptance of these restrictions, disclaimers, and
                          limitations. You expressly acknowledge and agree that
                          Multum, Truven Health Analytics, Inc., National
                          Library of Medicine and Drugs.com are not responsible
                          for the results of your decisions resulting from the
                          use of the Service, including, but not limited to,
                          your choosing to seek or not to seek professional
                          medical care, or from choosing or not choosing
                          specific treatment based on the Service. Every effort
                          has been made to ensure that the information provided
                          in the Service is
                        </textarea>
                        <a className="btn btn-primary">Accept</a>
                        <h3>As a general rule:</h3>
                        <ul>
                          <li>
                          Periodically check your medicine cabinets
                           for expired, re-bottled, or unidentified pills
                          </li>
                          <li>To avoid confusion and mistakes, keep all medications 
                            in their original bottles or 
                            packets with pertinent labeling and instructions attached
                            </li>
                            <li>
                            If you do not find a match, contact your healthcare provider
                            </li>
                        </ul>
                      </div>
                      
                      <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 lst1">
                        <h3>Need help to identify that pill?</h3>
                        <p>Worried about some capsules found in your teenager's room? 
                          Not sure about those leftover pills still in the bathroom cabinet? 
                          There's a good chance that our 
                          Pill Identification Wizard (Pill Finder) can help you match the imprint, size, shape, or 
                          color and lead you to the detailed description in our drug database.</p>
                      </div>
                      
                    </div>
                    <div class="tab-pane fade" id="doner">
                      <div class="text-center">
                        <i class="img-intro icon-checkmark-circle"></i>
                      </div>
                      <h3 class="head text-center">
                        thanks so much!!!
                        <span>♥</span>
                      </h3>
                      <p class="narrow text-center">
                        Lorem ipsum dolor sit amet, his ea mollis fabellas
                        principes. Quo mazim facilis tincidunt ut, utinam
                        saperet facilisi an vim.
                      </p>
                      <p class="narrow text-center">
                        Lorem ipsum dolor sit amet, his ea mollis fabellas
                        principes. Quo mazim facilis tincidunt ut, utinam
                        saperet facilisi an vim.
                      </p>
                      <p class="narrow text-center">
                        Lorem ipsum dolor sit amet, his ea mollis fabellas
                        principes. Quo mazim facilis tincidunt ut, utinam
                        saperet facilisi an vim.
                      </p>
                    </div>
                    <div class="clearfix"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="content-3">
            <img src={Image3} />
            <div className="try">
              <h3>Drugs.com Mobile Apps</h3>
              <p>
                The easiest way to lookup drug information, identify pills,
                <br />
                check interactions and set up your own personal medication
                records.
                <br />
                Available for Android and iOS devices.
              </p>
              <a className="btn btn-success">Explore Apps</a>
            </div>
          </div>
          <footer className="container-fluid text-center">
            <div className="footer-sections">
              <div className="brand-symbol">
                {/* <img className="imgfooter" src="https://www.drugs.com/feo-cdn/p/t/Udr6879Js.webp" /> */}
              </div>

              <div class="container text-center">
                <div class="row">
                  <div class="col-lg-12 footerdiv">
                    <div class="col-md-3 element">
                      <ul class="nav nav-pills nav-stacked">
                        <li>
                          <h3>SUPPORT</h3>
                          <a href="#">Help Center</a>
                        </li>
                        <li>
                          <a href="#">Frequent Questions</a>
                        </li>
                        <li>
                          <a href="#">Site Map</a>
                        </li>
                        <li>
                          <a href="#"> Contact Us</a>
                        </li>
                      </ul>
                    </div>
                    <div class="col-md-3 element">
                      <ul class="nav nav-pills nav-stacked">
                        <li>
                          <h3>ABOUT</h3>
                          <a href="#">About Drugs.com</a>
                        </li>
                        <li>
                          <a href="#">Advertising Policy</a>
                        </li>
                        <li>
                          <a href="#">Attribution & Citations</a>
                        </li>
                        <li>
                          <a href="#">Drugs.com Blog</a>
                        </li>
                      </ul>
                    </div>
                    <div class="col-md-3 element">
                      <ul class="nav nav-pills nav-stacked">
                        <li>
                          <h3>TERM & PRIVACY</h3>
                          <a href="#">Editorial Policy</a>
                        </li>
                        <li>
                          <a href="#">Privacy Policy</a>
                        </li>
                        <li>
                          <a href="#">Terms of Use</a>
                        </li>
                        <li>
                          <a href="#">Policy</a>
                        </li>
                      </ul>
                    </div>
                    <div class="col-md-3 element">
                      <h3>SUBCRIBRE</h3>
                      <i class="fa fa-facebook-official "></i>&nbsp;&nbsp;
                      <i class="fa fa-twitter "></i>&nbsp;&nbsp;
                      <i class="fa fa-youtube "></i>&nbsp;&nbsp;
                      <i class="fa fa-wifi "></i>
                      <br />
                      <br />
                      <p>
                        <a>Subscribe</a> to Drugs.com newsletters for the latest
                        medication news, alerts, new drug approvals and more.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 pre-ls"></div>
                <div className="row">
                  <div className="col-lg-12 footerdiv2">
                    <a id="text" href="#">
                      © 2020 Company manager with my team.
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    );
  }
}

export default App;
