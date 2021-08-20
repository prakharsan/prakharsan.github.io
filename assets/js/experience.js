AOS.init();

//  Work experience cards


const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Software Development Intern",
    cardImage: "assets/images/experience-page/petasense.png",
    place: "Petasense, Bangalore",
    time: "(July, 2021 - December, 2021 )",
    desp: "<li>Petasense is an Industrial IoT startup based in San Jose, California. Customers can remotely monitor the health and performance of any industrial asset and predict failures before they happen. </li> <li>Worked on adding snooze feature for alarms that were generated for machines linked to the Petasense system via sensors.</li> <li>Technologies used React, Redux, JavaScript, Flask, PostgreSQL, SQLAlchemy, Celery, Postman, Bitbucket. </li>",
  },
  {
    title: "Software Development Intern",
    cardImage: "assets/images/experience-page/deltastep.jpg",
    place: "DeltaStep, Kolkata",
    time: "(May, 19 - July, 19)",
    desp:"<li>DeltaStep is an interactive, adaptive and highly personalized learning platform that enables students to learn anytime, anywhere - at their own pace and in their own style.</li><li>Designed a landing page for the company using HTML, CSS, and Bootstrap.</li><li>Developed an algorithm which generates customized individual reading speed for students registered on the platform.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);



