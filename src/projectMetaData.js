import wikiAnalyserImage1 from '../images/Project/wikiAnalyser/wiki1.png' ;
import wikiAnalyserImage2 from '../images/Project/wikiAnalyser/wiki2.png' ;
import wikiAnalyserImage3 from '../images/Project/wikiAnalyser/wiki3.png' ;
import wikiAnalyserImage4 from '../images/Project/wikiAnalyser/wiki4.png' ;
import askit1 from '../images/Project/askit/askit1.png' ;
import askit2 from '../images/Project/askit/askit2.png' ;
import askit3 from '../images/Project/askit/askit3.png' ;
import askit4 from '../images/Project/askit/askit4.png' ;
import askit5 from '../images/Project/askit/askit5.png' ;
import webCrawler from '../images/Project/webCrawler/webc.png' ;
import mean1 from '../images/Project/mean/mean1.png' ;
import mean2 from '../images/Project/mean/mean2.png' ;
import portfolio1 from '../images/Project/portfolio/portfolio1.png' ;
import portfolio2 from '../images/Project/portfolio/portfolio2.png' ;
import portfolio3 from '../images/Project/portfolio/portfolio3.png' ;
import portfolio4 from '../images/Project/portfolio/portfolio4.png' ;
import portfolio5 from '../images/Project/portfolio/portfolio5.png' ;
import fcc1 from '../images/Project/fcc/fcc1.png' ;
import fcc2 from '../images/Project/fcc/fcc2.png' ;
import fcc3 from '../images/Project/fcc/fcc3.png' ;
import fcc4 from '../images/Project/fcc/fcc4.png' ;
import fcc5 from '../images/Project/fcc/fcc5.png' ;
import fcc6 from '../images/Project/fcc/fcc6.png' ;
import fcc7 from '../images/Project/fcc/fcc7.png' ;
import fcc8 from '../images/Project/fcc/fcc8.png' ;
import ds from '../images/Project/ds/ds.png' ;
import asv1 from '../images/Project/asv/asv1.png' ;
import asv2 from '../images/Project/asv/asv2.png' ;


var projectData = [
  {
    name : "Askit",
    duration : "Jan 2016 to Apr 2016",
    link : "https://github.com/puneet222/Askit.git",
    images : [
        askit1,
        askit2,
        askit3,
        askit4,
        askit5
    ],
    languages : [
      "HTML",
      "CSS",
      "JavaScript",
      "MySQL",
      "PHP"
    ],
    info : "Website for college where students can ask questions related to various topics and anyone can answer them.The front-end was made in HTML, CSS, and JavaScript. MySQL and PHP were used for server side."
  },
  {
    name : "Wiki-Analyser",
    duration : "May 2016 to Jun 2016",
    link : "https://github.com/puneet222/Wiki-Analyser.git",
    images : [
        wikiAnalyserImage1,
        wikiAnalyserImage2,
        wikiAnalyserImage3,
        wikiAnalyserImage4
    ],
    languages : [
      "HTML",
      "CSS",
      "JavaScript",
      "R",
      "PHP",
      "MySQL",
      "AJAX"
    ],
    info : "This is basically a Web-Application by which you can analyse your wikipedia search article on the basis of page-views from the time of creation of that article till today and another analyses is on the basis of extra data related with that article."
  },
  {
    name : "FCC Projects",
    duration : "May 2016 to Jul 2016",
    link : "https://www.freecodecamp.com/puneet222",
    images : [
      fcc1,
      fcc2,
      fcc3,
      fcc4,
      fcc5,
      fcc6,
      fcc7,
      fcc8
    ],
    languages : [
      "HTML",
      "CSS",
      "JavaScript",
      "JQuery"
    ],
    info : "This is basically a Web-Application by which you can analyse your wikipedia search article on the basis of page-views from the time of creation of that article till today and another analyses is on the basis of extra data related with that article."
  },
  {
    name : "Web Crawler",
    duration : "Sep 2016",
    link : "https://github.com/puneet222/WebCrawler",
    images : [
      webCrawler
    ],
    languages : [
      "JAVA"
    ],
    info : "This is class project in which we have to make a java application that crawl the website 'cvedetails.com' and gather the the particular information like Table's last row for every product starts with the name 'p', and generate the output file productOfLetterP.txt."
  },
  {
    name : "ASV",
    duration : "Aug 2016 to Nov 2016",
    link : "https://github.com/puneet222/ASV",
    images : [
      asv1,
      asv2
    ],
    languages : [
      "HTML",
      "CSS",
      "JavaScript",
      "JQuery",
      "Bootstrap",
      "MySQL",
      "PHP"
    ],
    info : "ASV(Automated Survey and Voting) is web application for conducting survey and voting , although it is an old idea but we have a special option for domain specific survey and voting in which you choose people that the user want to fill the survey."
  },
  {
    name : "Data Structures/Algorithm",
    duration : "There is no duration for this.",
    link : "https://github.com/puneet222/Data-Structures",
    images : [
      ds
    ],
    languages : [
      "C",
      "C++"
    ],
    info : "This is a project I made for learning Data Structures and Algorithms. This is the essensial part of Computer Science"
  },
  {
    name : "MEAN Stack App",
    duration : "Jan 2017 to May 2017",
    link : "",
    images : [
      mean1,
      mean2
    ],
    languages : [
      "MongoDB",
      "ExpressJs",
      "AngularJs",
      "NodeJs",
      "Bootstrap",
      "HTML",
      "CSS"
    ],
    info : "This project given to me in my Internship. This is client project which is based on automation and stock management and various other components like sale management.The most difficult part of the project is to maintain consistancy of data due to large number number of manipulations. Now this project is successfully deployed."
  },
  {
    name : "puneet222.github.io",
    duration : "Apr 2017 to May 2017",
    link : "https://github.com/puneet222/puneet222.github.io",
    images : [
      portfolio1,
      portfolio2,
      portfolio3,
      portfolio4,
      portfolio5
    ],
    languages : [
      "ReactJS",
      "Senatic UI"
    ],
    info : "This is my portfolio made from scratch. Made with latest Technologies like ReactJS and Sematic UI"
  }

]

module.exports = projectData ;
