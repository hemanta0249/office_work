import React from 'react'

export default function Home() {
  return (

    <>

      <div>

        <header>
          <nav class="navbar navbar-expand-lg my-navbar sticky1" id="navid">

            <div class="container">
              <a class="navbar-brand" href="#">
                <img src="images/LOGO-ROKJ.png" alt="" />
              </a>
              <button class="mybtn1 btn-hover btn-hover2" href="#">SPENDEN</button>

              <button class="navbar-toggler" id="btn-toogle-id" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                aria-expanded="false" aria-label="Toggle navigation">
                <span class="icon-bar bar1" id="b1"></span>
                <span class="icon-bar bar2" id="b2"></span>
                <span class="icon-bar bar3" id="b3" style={{margin:0}}></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto">
                  <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="#">Über uns</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Idee und Zweck</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Erfahrungsberichte</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Antrag stellen</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Kontakt</a>
                  </li>
                  <li class="nav-item">
                    <button class="mybtn1 btn-hover temp-btn" href="#">SPENDEN</button>
                  </li>
                </ul>
                <div class="copyright2 copyright">
                  2024 © ROKJ Illnau-Effretikon |
                  <a href="#">Impressum</a>
                  |
                  <a href="#">Datenschutz</a>
                  <br />
                  Konzept und Design by
                  <a href="#">
                    <img src="images/yellow-loewenmut-logo (2).png" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </header>

        <section>
          {/* style="background-image: url('images/banner-img.png');" */}
          <div class="banner">
            <div class="container">
              <div class="row">
                <div class="col-12">
                  <div class="inside-banner">
                    <h1 class="heading">ROKJ Illnau-Effretikon <br /> kein Kind im Abseits</h1>

                    <p>Durch die individuelle Förderung von wirtschaftlich oder sozial benachteiligten Kindern
                      und Jugendlichen unterstützen wir ihre nachhaltige Integration in unsere Gesellschaft.
                    </p>
                    <div style={{display:'inline'}}>
                      <a class="mybtn1 btn-hover" href="#">SPENDEN</a>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section>
          <div class="container position">
            <div class="row">
              <div class="col-12 col-lg-4 mb-4">
                <div class="items item1">
                  <h3 class="heading">Idee/Zweck</h3>
                  <p>Ziele, Visionen und unser Engagement</p>
                  <a class="my-btn my-btn2 mybtn1" href="#">MEHR ERFAHREN</a>
                </div>
              </div>
              <div class="col-12 col-lg-4 mb-4">
                <div class="items item2">
                  <h3 class="heading">Spenden</h3>
                  <p>Jetzt Jugendliche und Kinder der Region Winterthur unterstützen</p>
                  <a class="my-btn my-btn2 mybtn4" href="#">MEHR ERFAHREN</a>
                </div>
              </div>
              <div class="col-12 col-lg-4 mb-4">
                <div class="items item3">
                  <h3 class="heading">Erfolge</h3>
                  <p>Was ROKJ schon geschafft hatt</p>
                  <a class="my-btn my-btn2 mybtn5" href="#">MEHR ERFAHREN</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="spacing">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-6">
                <div class="main-item1">
                  <div class="title">ROKJ Illnau-Effretikon</div>
                  <h2 class="heading">Über uns</h2>
                  <p>Das Projekt «Rotary und Inner Wheel für Kinder und Jugendliche aus sozial benachteiligten
                    Familien (ROKJ)» wurde im November 2008 auf Initiative von Toni Schönenberger im Kanton
                    Thurgau
                    initiiert. </p>
                  <a class=" btn-hover mybtn2" href="#">MEHR</a>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="main-item2">
                  <img src="images/javier-trueba-iqpr1xkf5f0-unsplash-2560-hq.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="spacing graph-sec">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-12 text-center">
                <h2>Spendenbarometer</h2>
                <p>Damit auch Sie den Fortschritt unserer Unterstützung mitverfolgenden können, zeigen wir Ihnen
                  laufend unseren Spendenerfolg.</p>
              </div>
              <img src="images/barometer-graph-1.svg" alt="" />
              <strong>Vielen Dank für Ihre Unterstützung!</strong>
            </div>
          </div>
        </section>

        <section class="spacing section3">
          <div class="container">
            <div class="row">
              <div class="col-lg-6">
                <div class="info-pic">
                  <img src="images/ashton-bingham-sahbl2upxco-unsplash.png" style={{width:"100%"}} alt="" />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="inside-info2">
                  <div class="title">ROKJ Illnau-Effretikon</div>
                  <h2>«Als Kind ist jeder ein Künstler. Die Schwierigkeit liegt darin, als Erwachsener einer zu
                    bleiben.»
                  </h2>
                  <h3>Pablo Picasso</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div class="container my-4">
            <div class="row justify-content-center">
              <div class="col-12">
                <div class="info3">
                  <div class="title">ROKJ Illnau-Effretikon</div>
                  <h2>Erfahrungsberichte</h2>
                  <p>Hier zeigen wir Ihnen einen kleinen Einblick in unsere Projekte, welche mit Ihrer Hilfe
                    verwirklicht
                    werden konnten.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="spacing">
          <div class="container">
            <div class="row">
              <div class="col-12 col-md-6 col-lg-4 my-3">
                <div class="card">
                  <div class="card-pic">
                    <div class="card-pic2">
                      <img src="images/rokj-erfahrungsbericht-4-610-hq.png" class="card-img-top" alt="..." />
                      <div class="date">
                        23.August 2023
                      </div>
                    </div>
                  </div>
                  <div class="card-body">
                    <h4 class="heading">Robo Sapiens an die WM in Panama</h4>
                    <p class="card-text">Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem
                      quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit</p>
                  </div>

                </div>
              </div>
              <div class="col-12 col-md-6 col-lg-4 my-3">
                <div class="card">
                  <div class="card-pic">
                    <div class="card-pic2">
                      <img src="images/rokj-erfahrungsbericht-1-610-hq.png" class="card-img-top" alt="..." />
                      <div class="date">
                        23.August 2023
                      </div>
                    </div>
                  </div>
                  <div class="card-body">
                    <h4 class="heading">Eine Querflöte für Maria</h4>
                    <p class="card-text">Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non
                      neque elit.</p>
                  </div>

                </div>
              </div>
              <div class="col-12 col-md-6 col-lg-4 my-3">
                <div class="card">
                  <div class="card-pic">
                    <div class="card-pic2">
                      <img src="images/rokj-erfahrungsbericht-2.png" class="card-img-top" alt="..." />
                      <div class="date">
                        23.August 2023
                      </div>
                    </div>
                  </div>
                  <div class="card-body">
                    <h4 class="heading">Sereina geht ins Reitlager</h4>
                    <p class="card-text">Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Etiam
                      pharetra, erat sed fermentum feugiat, velit mauris egestas quam.</p>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="spacing pt-5 last-sec">
          <div class="container">
            <div class="row">
              <div class="col-12 col-lg-6">
                <div class="inside-info4">
                  <h2>Lernen Sie uns <br /> besser kennen</h2>
                  <p>Ein kleiner Einblick in unsere Arbeit…</p>
                </div>
              </div>
              <div class="col-12 col-lg-6">
                <div class="video-box">
                  <img src="images/4uQJ0h1QvGk-HD.png" style={{width:"100%"}} alt="" />

                  <div class="video-button" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <img src="images/Group 12.png" alt="" />
                  </div>

                </div>

                <div class="container">
                  <div class="row">
                    <div class="col-12">
                      <div class="modal fade v-modal" id="exampleModal" tabindex="-1"
                        aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered">
                          <div class="modal-content">
                            <iframe id="ytv" width="100%" height="315"
                              src="https://www.youtube.com/embed/4uQJ0h1QvGk?si=XSMPhkJOkzq42OXc"
                              title="YouTube video player" frameborder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
                            </iframe>
                            <div class="cross">
                              <button type="button" class="btn-close" data-bs-dismiss="modal"
                                aria-label="Close"></button>
                            </div>

                          </div>
                        </div>

                      </div>
                    </div>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </section>

        <footer>
          <div class="container">
            <div class="row">
              <div class="col-12 col-lg-6">
                <div class="footer-image">
                  <a href="#">
                    <img class="footer-logo" src="images/new-logo.svg" alt="" />
                  </a>
                  <a href="#">
                    <img class="footer-logo2" src="images/new-rokj-golftour-logo.svg" alt=""
                       style={{paddingLeft:"30px", borderLeft :"2px solid #eceeee"}}/>
                  </a>
                </div>
                <p class="footer-text">Durch die individuelle Förderung von wirtschaftlich oder sozial
                  benachteiligten Kindern und
                  Jugendlichen unterstützen wir ihre nachhaltige Integration in unsere Gesellschaft.</p>
              </div>
              <div class="col-12 col-lg-6">
                <div class="row">
                  <div class="col-12 col-md-7 footer-item1">
                    <h3 class="heading">Kontakt</h3>
                    <address>
                      Rotary-Stiftung Illnau-Effretikon
                      <br />
                      Kempttalstrasse 52
                      <br />
                      CH-8308 Illnau
                    </address>
                    <a href="#">E-Mail</a>
                  </div>
                  <div class="col-12 col-md-5 footer-item2">
                    <h3 class="heading">Quicklinks</h3>
                    <ul class="navbar-nav ms-auto">
                      <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="#">Über uns</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">Idee und Zweck</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">Erfahrungsberichte</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">Antrag stellen</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">Kontakt</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">Spenden</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <hr class="line" />

            <div class="copyright text-center">
              2024 © ROKJ Illnau-Effretikon |
              <a href="#">Impressum</a>
              |
              <a href="#">Datenschutz</a>
              | Konzept und Design by
              <a href="#">
                <img src="images/yellow-loewenmut-logo (2).png" alt="" />
              </a>
            </div>

          </div>
        </footer>
      </div>

    </>
  )
}
