import React, { Component } from 'react';
class Home extends Component {
  render() {
      return (
  <div>
    //   Navigation
<nav class="navbar navbar-custom navbar-fixed-top" role="navigation">
    <div class="container">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-main-collapse">
                Menu <i class="fa fa-bars"></i>
            </button>
            <a class="navbar-brand page-scroll" href="#page-top">
                <i class="fa fa-graduation-cap"></i> <span class="light"></span>Nurture In Literacy
            </a>
        </div>

        <div class="collapse navbar-collapse navbar-right navbar-main-collapse">
            <ul class="nav navbar-nav">
                // Hidden li included to remove active class from about link when scrolled up past about section
                <li class="hidden">
                    <a href="#page-top"></a>
                </li>
                <li>
                    <a class="page-scroll" href="#about">About</a>
                </li>
                <li>
                    <a class="page-scroll" href="#Services">Services</a>
                </li>
                <li>
                    <a class="page-scroll" href="#publications">Publications</a>
                </li>
    <li>
                    <a class="page-scroll" href="#contact">Submissions</a>
                </li>
                <li>
                    <a class="page-scroll" href="#download">Contact</a>
                </li>


            </ul>
        </div>
        //   /.navbar-collapse
    </div>
    //   /.container
</nav>

//   Intro Header
<header class="intro">

    <div class="intro-body">
        <div class="container">
            <div class="row">
                <div class="col-md-8 col-md-offset-2">
                    <br/> <br/> <br/> <br/>
                    <img src="img/slog.png" width="250" height="280" />
                    <p class="intro-text, ikarus" style="font-size: 24px">Success Is Our Motive</p>
                    <a href="#about" class="btn btn-circle page-scroll">
                        <i class="fa fa-angle-double-down animated"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
</header>

//   About Section
<section id="about" class="container content-section text-center">

      <div class="row">

        <div class="col-lg-3 ">
              <img src="img/Golden_Globe.png" height="310px" width="300px" />
          </div>

        <div class="col-lg-6 ">
              <h2 class="ikaros">About</h2>
              <p class="courier">The philosophical pedagogy of our site courteously invites learners to submit manuscripts, short and lengthy; however, not to just get grammatical errors rectified, rather to additionally learn the art of writing and achieve stronger rhetoric and prose. The intention is to alleviate your stress and sculpt you into a proficient and confident writer.</p>
              <p class="courier">We aim to have an academic discourse and collaboratively master innovation with valiant individuals globally.</p>
          </div>

          <div class="col-lg-3 ">
              <img src="img/help.png" height="300px" width="290px" />
          </div>


      </div>

</section>

  //   Services Section
<section id="Services" class="content-section text-center">
    <div class="services-section">

        <div class="container">
<div class="row text-center">
<h2 class="ikaros">What Sets Us Apart </h2>

</div>
<div class="row">

    <div class="col-lg-2" >
          <div class="cuadro_intro_hover " style="background-color:#cccccc;">
        <p style="text-align:center;">
          <img src="img/globe.png" class="img-responsive" alt="" />
        </p>
        <div class="caption">
          <div class="blur"></div>
          <div class="caption-text">
            <h3 class="moon" style="border-top:2px solid white; border-bottom:2px solid white; padding:10px;">Resumes</h3>
            <p style="font-size: 14px; margin-top: -20px;">Submit your accomplishments and qualifications to be organized into a first class curriculum vitae.</p>

          </div>
        </div>
      </div>

  </div>

  <div class="col-lg-2">
          <div class="cuadro_intro_hover " style="background-color:#cccccc;">
        <p style="text-align:center;">
          <img src="img/letter.jpg" class="img-responsive" alt="" />
        </p>
        <div class="caption">
          <div class="blur"></div>
          <div class="caption-text">
            <h3 class="moon" style="border-top:2px solid white; border-bottom:2px solid white; padding:10px;">Cover Letters</h3>
            <p style="font-size: 14px">Submit your cover letter and it will be revised with feedback.</p>

          </div>
        </div>
      </div>

  </div>

  <div class="col-lg-2">
        <div class="cuadro_intro_hover " style="background-color:#cccccc;">
        <p style="text-align:center;">
          <img src="img/writer.png" class="img-responsive" alt="" />
        </p>
        <div class="caption">
          <div class="blur"></div>
          <div class="caption-text">
            <h3 class="moon" style="border-top:2px solid white; border-bottom:2px solid white; padding:10px;">Academic Essays</h3>
            <p style="font-size: 14px; margin-top: -10px;">Submit your academic essay with a brief abstract of what you need assistance with.</p>

          </div>
        </div>
      </div>

  </div>

    <div class="col-lg-2">
          <div class="cuadro_intro_hover" style="background-color:#cccccc;">
        <p style="text-align:center;">
          <img src="img/thetree.png" class="img-responsive" alt="" />
        </p>
        <div class="caption">
          <div class="blur"></div>
          <div class="caption-text">
            <h3 class="moon" style="border-top:2px solid white; border-bottom:2px solid white; padding:10px;">Film Scripts</h3>
            <p style="font-size: 14px;margin-top: -20px;">Submit your film scripts and your aspirations for assistance, and your script will be annotated with feedback.</p>

          </div>
        </div>
      </div>

  </div>
  <div class="col-lg-2">
          <div class="cuadro_intro_hover " style="background-color:#cccccc;">
        <p style="text-align:center;">
          <img src="img/books.png" class="img-responsive" alt="" />
        </p>
        <div class="caption">
          <div class="blur"></div>
          <div class="caption-text">
            <h3 class="moon" style="border-top:2px solid white; border-bottom:2px solid white; padding:10px;">Dissertations</h3>
            <p style="font-size: 14px;margin-top: -20px;">Reserved for graduate students to submit their theses and dissertations with brief abstracts.</p>

          </div>
        </div>
      </div>

  </div>

   <div class="col-lg-2">
          <div class="cuadro_intro_hover " style="background-color:#cccccc;">
        <p style="text-align:center;">
          <img src="img/gold-lion.png" class="img-responsive" alt="" />
        </p>
        <div class="caption">
          <div class="blur"></div>
          <div class="caption-text">
            <h3 class="moon" style="border-top:2px solid white; border-bottom:2px solid white; padding:10px;">Poetry</h3>
            <p style="font-size: 14px; margin-top: -20px;">Submit your creative writing manuscripts (Poetry, Fiction, & Non-Fiction) and explain what you need assistance with.</p>

          </div>
        </div>
      </div>

  </div>
</div>
</div>


    </div>
</section>


//   Publications Section
<section id="publications" class="container content-section text-center">

<div class="pub-head">
<h2 class="ikaros">Publications</h2>
</div>

<div class="publications-header">
<div class="pub-img">
  <img src="img/chinese-book.png" width="306px" height="210px" />
</div>
<div class="pub-intro">
  <p class="moon">Something you want to say about your works</p>
</div>
<div class="pub-img">
  <img src="img/pen-quill.png" width="250px" height="300px" />
</div>
</div>
    <div class="publications-body">
<div class="pub-lit">
  <a class="btn btn-default btn-lg" id="expand-btn">Literacy</a>
</div>
<div class="pub-ped">
  <a class="btn btn-default btn-lg" id="expand-btn">Pedagogical</a>
</div>
<div class="pub-cre">
  <a class="btn btn-default btn-lg" id="expand-btn">Creative</a>
</div>
</div>

</section>


    //   Contact Section
<section id="contact" class="container content-section text-center">
    <div class="row">

      <div class="col-lg-4 ">
                <img src="img/key.png" height="200px" width="320px" />
            </div>


        <div class="col-lg-4 ">
                <h2 class="ikaros">Submissions</h2>
                <p class="moon">You can submit your document in DOC format. All payments are processed via PayPal.</p>
                <a href="./store/" class="btn btn-default btn-lg">Upload File</a>
        </div>

        <div class="col-lg-4 ">
                <img src="img/success.png" height="240px" width="240px" />
            </div>

    </div>
</section>


//   Download Section
<section id="download" class="content-section text-center">
    <div class="download-section">
        <div class="container">
          <div class="col-lg-8 col-lg-offset-2">
            <h2>Contact Sethunya</h2>
            <p class="moon">Feel free to email us to provide some feedback or give us suggestions, or to just say hello!</p>
            <p><a href="mailto:sethunya@nurtureinliteracy.com">sethunya@nurtureinliteracy.com</a>
            </p>
            <ul class="list-inline banner-social-buttons">
                <li>
                    <a href="#" class="btn btn-default btn-lg"><i class="fa fa-twitter fa-fw"></i> <span class="network-name">Twitter</span></a>
                </li>
                <li>
                    <a href="#" class="btn btn-default btn-lg"><i class="fa fa-facebook fa-fw"></i> <span class="network-name">Facebook</span></a>
                </li>
                <li>
                    <a href="#" class="btn btn-default btn-lg"><i class="fa fa-google-plus fa-fw"></i> <span class="network-name">Google+</span></a>
                </li>
            </ul>
        </div>

        </div>

    </div>
</section>
    )}
}
