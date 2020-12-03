# Milestone Project 2 - Fest Finder
View live project <a href="">here
***
## Table of Contents:
* [What does it do and what does it need to fulfill?](#what-does-it-do-and-what-does-it-need-to-fulfill)
* [User Experience](#user-experience)
   * [User Stories](#user-stories)
   * [Design](#design)
       * [1. Colour Scheme](#1-color-scheme)
       * [2. Font](#2-font)
       * [3. Logo](#3-logo)
       * [4. Geometry](#4-geometry)
       * [5. Wireframes](#5-wireframes)
* [Technologies Used](#technologies-used)
* [Features](#features)
   * [Existing Features](#future-features)
   * [Future Features](#removed-features)
* [Testing](#testing)
* [Deployment](#deployment)
    * [Hosting on Github Pages](#hosting-on-github-pages)
    * [Running Project Locally](#running-project-locally)
* [Credits](#credits)
    * [Content](#content)
    * [Code](#code)
    * [Media](#media)
* [Acknowledgements](#acknowledgements)
***

## ![Fest Finder Logo](images/logo2.png)

### Fest Finder Logo

***
## **What does it do and what does it need to fulfill?**
This is my second milestone project where I have designed, created and built a fully responsive and interactive website for Music Festival go-ers. 
My goals with this website are to attract new people to the world of Music Festival's and to give present Music Festival go-ers an insight into my 4 favorite festivals and why they should visit them !

I have taken my knowledge learned from the first five modules of the Full Stack Web Developer course, (HTML, CSS Fundamentals, User Centric Frontend 
Development, JavaScript Fundamentals and Interactive Frontend Development Modules) to provide a clear, functioning and responsive website that 
demonstrates a proficient use of HTML5, CSS3 and JavaScript. The Bootstrap Framework was used along side these programming languages to help give
the site a clear strucutre and ensure the site has a high standard of responsiveness on desktop, tablet and
mobile. The jQuery framework was used amoungst my own JavaScript code for easier implementation of some code.


## **User Experience**
<div style="text-align:center"><img src="assets/images/response.png" alt="Fest Finder Am I Responsive image"></div>

#### User Stories:

* User Goals:
    * As a user, I want to be able to navigate through the entire site, comfortably and securely.
    * As a user, I want to be able to easily contact the site with any initial queres that I may have, submit questions, and recieve an
    acknowledgement of my message being received, and a due response.
    * As a user, I want to learn more about the festivals and where they are situated, and what can be seen and done there. This includes information
    such as where to eat and where to stay.
    * As a user, I want to be able to follow links from the designated festival to the main website of interest.
    * As a user, I want to learn about what genres of music are played at the festivals.
    * As a user, I want to feel comfortable and informed about visiting the festival.
    * As a user, I want to be able to access the site's social media accounts in order to learn more.
    
* For the user, the site assists in meeting the user goals by:
    * Presenting a clean website that's easy-on-the-eye, providing smooth navigation with the use of a fixed navbar.
    This enables them to click between the pages at all times. The user can also click on the logo from
    any page to take them back to the home page.
    * Providing a clean, basic form that doesn't overwhelm or confuse the user which they can fill out to submit any questions they may have.
    Upon submission the user gets a modal pop up providing them with feedback that their query has been submitted successfully.



    * The footer contains all the social media links the user will need to use for follwing and learning more about this site.
  

[Back to Top](#table-of-contents)

#### Design
##### 1. Colour Scheme

I chose colors that would be soothing and calming on first glance of the website, and not intrusive. The muted tones give the page a serene look
and feel. This was important to me as my aim was to create an online space that promotes and represents a feeling of what colours can be found
throughout Cornwall, from the shades of blue in the ocean to the rolling greens of the countryside, and golds of soft sand beaches.

Colours I used are:
* f5f5f5 - Light Gray - Primary Color
* bbbdf2 - Light Purple - Header Colour
* 848d9c - Lighter Purple - Secondary Footer Colour
* 95a0cf - Light Baby Blue - Button Hover color

The primary colour, Light Grey (f5f5f5), was used throughout the pages to give the whole site consistency. I found that it gives the page a nicer
overall feeling and makes the text less harsh on the eye and therefoere easier to read.
<br>
The secondary color, Light Purple (bbbdf2), was used for the Navbar and the footer. I felt as if this was an appropriate color as it fits nicely with the colors from the festival hero images.

<br>

I also used a lighter shade of Purple (848d9c) for the footer also, to give it nice contrast. I think it went well with the original color of purple I have already selected throughout the site.
<br>
I used Light Baby Blue (95a0cf) as a color for when the user hovers over a button, I used a psuedo class for this.

##### 2. Font

I decided to use two fonts throught my site. I included these fonts by inserting an _import_ link of Google Fonts API into the top of my 
style.css.<br>
The font I chose for the body text on the pages was 'Raleway', with a fall back of 'Sans-serif' should the site not load the import correctly. I
found the 'Raleway' font was clear, easy to read and fed into the simple, minimal look and feel I was trying to achieve with the site.<br>
The second font I used was 'Lato', again with the fallback of 'Sans-serif'. I used this for anything I wanted to stand out a little more as I felt
it had a more structured, bold format. This included the navbar, footer, headlines, sub-headings, buttons and forms. I used this font for all
of the form as I felt that with basic content it didn't need different fonts. Overall, I wanted a font that complemented the body text without
being wildly different from it. This would have made the page too busy and drawn attention away from the beautiful, peace-invoking imagery it was
sitting alongside. Clarity was key and the combination of Raleway and Lato helped me achieve that objective.
When it came to font weight, between the two fonts, I varied between 300 and 500 for differnt factors across the pages. 400 took precendent as the
average font weight, and then card heads were given 500 to stand out more. Whereas, the page headings, info window headings, and modal content
looked best with using 300.

##### 3. Logo

The logo was created using an online design tool called Canva. I created a custom canvas to fit my required dimensions and set the background to
be transparent as I was using a transparent navbar. When it came to designing the logo I wanted a symbol that represented Cornwall, and decided
that an engine house is the embodiment of Cornish culture. I selected the engine house from Google's selection of free images and played with the
contrast and saturation to turn it into a silhouette that would stand out clearly against the transparent/white background of the navbar. It also
matched the black font of the logo "Experience Cornwall". I chose the font 'Lato' for this text to match the font used for headings throughout the
site, keeping a clear consistency. It suited the site's branding and complemented all my other design choices well. 

##### 4. Composition

There is a clear structure throughout the site. Each of the main pages has a hero image at the top to engage the user. I also implemented content
hinting on all the pages to encourage scrolling and more user interaction. 
To help me keep the design neat and consistent, I had all content displayed central, with good margins for desktop use to avoid anything being cut
off the screen. I ensured all the content is full width for mobile sizes, utilising all of the space available. I found that having to scroll down
the home page made it feel like the story was unfolding which I thought was a nice touch. The Google map on the expereince page has been set to full
width to keep the map easily readable across all screen sizes. I made use of the 'Rule of Thirds" in the 'Top 3 Recommendations' section to help
draw the viewer's eye into the composition, rather than just glancing at the center.

##### 5. Wireframes

Wireframes for this project were created using Figma. I initially sketched rough ideas down on paper and then further constructed them on the 
computer using Figma to create a more detailed mockup. The final pages I ended up with on the website did not vary too much from the wireframes I
made during the planning stages. Find the links to these wireframes below:

* [Home Page Wireframe](https://github.com/Gregory4321/milestone-project-2/blob/master/assets/images/wire-home.png)

* [Activities Page Wireframe](https://github.com/Gregory4321/milestone-project-2/blob/master/assets/images/wire-activity.png)

* [Contact Page Wireframe](https://github.com/Gregory4321/milestone-project-2/blob/master/assets/images/wire-contact.png)

[Back to Top](#table-of-contents)

 ## **Technologies Used**

 #### Languages

 * [HTML5](https://en.wikipedia.org/wiki/HTML5) - Language used to create the structure of the pages.

 * [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets) - Language used to add styling across all pages.

* [JavaScript](https://en.wikipedia.org/wiki/JavaScript) - Language used to create interactivity across the pages.

#### Libraries, Frameworks and Editors

* [Bootstrap 4.5.0](https://getbootstrap.com/) - used to create basic HTML layout and structure and using Bootstrap's CSS Framwework. The
resposnsive grid system was utilised well.

* [Google Fonts](https://fonts.google.com/) - was used to import the 'Roboto' and 'Noto Sans' fonts, that were used across all pages.

* [Font Awesome](https://fontawesome.com/) - was used for the social icons and the calender link found in the footer.

* [jQuery](https://jquery.com/) - was used in conjunction with Bootstrap to create the navbar collapse element, opacity of the navbar on the scroll
of the page, and the modal pop up on submission of the contact form.

* [EmailJS](https://www.emailjs.com/) - was used to send an email from JavaScript to my Gmail account.

* [Favicon.io](https://favicon.io/) - was used to generate the favicon image.

* [Git](https://git-scm.com/) - used for version control by making use of the Gitpod terminal to add, commit and push to Github.

* [Github](https://github.com) - used to host the project's repository and store the code, as well as host the website on Github pages.

* [Unsplash](https://unsplash.com/) - used to find images for use across the site.

* [Pexels](https://www.pexels.com/) - used to find images for use across the site.

* [Pixbay](https://pixabay.com/) - used to find images for use across the site.

* [Google Images](https://google.com) - used to find images for use across the site.

* [YouTube](https://www.youtube.com/) - used to source and embed a video into the home page.

#### Tools

* [Google](https://www.google.co.uk/) - was used for researching various techniques, styles and information.

* [Google Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools) - used for testing and debugging.

* [Google Maps](https://www.google.co.uk/maps) - used to grab the coordinates of locations and get details of locations - phone numbers, address and
websites.

* [Google Developers](https://developers.google.com/maps/documentation/?_ga=2.257569803.1237416838.1604925384-1643581518.1600963572) - used for
reading and learning the documentation best advised by Google to implement Google Maps API.

* [Figma](https://www.figma.com/) - used for creating the wireframes in the design stage.

* [Coolors](https://coolors.co/) - used to find and compare colours that complimented one another, and retrieve names of colours.

* [Canva](https://www.canva.com/) - was used to design and create the logo, create the favicon logo, and also to resize images to specific dimensions.

* [Picresize](https://picresize.com/) - was also used to resize images for less specific wants, such as 25% or 50% smaller.

* [Am I Responsive](http://ami.responsivedesign.is/) - used for showing the responsiveness of the site across different screen sizes and providing
the image at the top of this document.

* [Free Online HTML Formatter](https://www.freeformatter.com/html-formatter.html#ad-output) - used to format the HTML code in a neater and more
organised fashion.

* [Free Online CSS Formatter](https://www.freeformatter.com/css-beautifier.html) - used to format the CSS code in a neater and more organised
fashion.

* [Free Online JS Formatter](https://www.freeformatter.com/javascript-beautifier.html) - used to format the JavaScript code in a neater and more
organised fashion.

## **Features**

#### Existing Features

* Navbar - Featured across all pages. Site visitors can use the links on the left to navigate between all pages on the website. These links also
collapse down into a hamburger icon at smaller screen sizes. The logo, found on the left, can be clicked on all pages to take users back to the
home page. The navbar is also fixed, which enables the user to easily navigate between the pages of the website. The navbar starts off as transparent,
and then becomes white as the user scrolls to ensure it is always clear and legible.

* Footer - Also featured across all pages. Users will find clickable social icons linking to the corresponding social media pages.

* Hero images -  These can be found across the three main pages (History, Experience and Contact), and provide a visual reference to what the user
can expect to find and experience in Cornwall.

* Home Page - This page showcases a beginner's guide to Cornwall, teaching and informing the user about the history of Cornwall. It contains
corresponding images to the story being told, and an embedded YouTube video that will help the user learn how to make a Cornish pasty.

* Experience Page - This page was created to help the user understand what Cornwall has to offer. It makes use of Google Maps API, incorporating
clickable buttons above the map to make the user interact with the map. On the click of each button, markers will drop on the map, and then the
markers themselves once clicked will open an info window. The info windows contain information on each location such as the name and
address of the placed marker. The info windows also showcase a phone number and a clickable link to a corresponding website (other than the beach
locations which didn't have websites). I felt the user would be overwhelmed if the map presented them with every single beach, restaurant, hotel
etc. so I used my own extensove knowledge of Cornwall to help me hand pick the best locations in each category. I felt this added to the user
expereince because it meant the map would be clearer and provide them with a more streamlined set of recommendations.<br>
Also, upon clicking each button, 'Top 3 Recommendations' will appear below the map for each category. These are presented as cards, with images at
the head and then brief descriptions and/or encouraging statements followed by clickable buttons to the corresponding websites. I felt this added
a personal touch and gave the user encouragement when choosing what and where to visit on their trip to Cornwall.<br>
I had an issue with the positioning of my markers that I wasn't able to solve. All of the markers' coordinates were pulled from the respective
locations on Google Maps. However, once they were set and zoomed in on, I noticed that all my markers were positioned slighlty to the left of each
location. Through talks with tutor support, it concluded that this may be due to some default code written for Google Maps. I did attempt to
override it using various techniques that I found during my research, but I was ultimately unable todo so. That being said, it does not prove to be
a major issue for my site as the location coordinates I set match the 'true' positon of the locations' coordinates.

* Contact Page - This page provides a form users can fill out to contact the site. They can use this for general enquiries. Once the user submits
the form, they will be presented with a modal pop up thanking them for their message and informing them to check their email account. They're also
made aware that a response will be with them shortly. This provides the user with feedback that the query has gone through successfully. It is
important to provide feedback to the user so they feel their actions have been validated.<br>
I used the word 'Dreckly', which is a Cornish colloquialism that implies something will be done 'Directly' i.e. 'soon'. I did include in brackets
next to the word 'Dreckly' that this means 'Directly', so the user does not feel confused about the terminology.

* Back-to-Top Button - Each page contains a back-to-top button that will appear when the user scrolls to a set pixel height down the page, giving
the user easier navigation around the pages and the site. 

* Favicon Icon - When the user loads the web pages, a favicon image of the logo for Experience Cornwall appears in the tab at the top next to the
name of the site.

#### Future Features

* On the home/hisory page, I'd like to create a quiz that the user can take part in to test their knowledge about Cornwall after reading the
'Beginner's Guide To Cornwall'.

* Display a clickable icon as a link to a forum page where the user can dicsuss Cornwall further with other friendly visitors.

* Gallery Page - A seperate page to showcase images of Cornwall and visitors' experiences of the range of activities, beach walks etc. on offer.
This would give the user a more concrete idea of what to expect from a visit to Cornwall.

* Include more markers and information to give the user an even more extensive view of what Cornwall has to offer.

* On the scroll of the page, the hero image would zoom in.

[Back to Top](#table-of-contents)

## **Testing**

Testing can be found via this [link](https://github.com/Gregory4321/milestone-project-2/blob/master/testing.md)

## **Deployment**

This multi-page website was developed in Gitpod and pushed to the remote repository on Github.

#### Hosting on Github Pages

The project was deployed through Github pages. This was achieved by following these steps:

* Login in to Github and locate and click the Github repository on the left side of the screen.
* At the top of the repository, locate and select the 'Settings' button.
* Scroll down to the 'Github Pages' section.
* Use the drop-down menu under 'Source' to change from 'none' and select 'master branch'.
* The page then automatically refreshes and takes the user back to the top of the page.
* Scroll back down to the 'Github Pages' section. A ribbon notification is now displayed containing the link to the deployed site.
* The ribbon notification displays this message:  'Your site is published at https://gregory4321.github.io/milestone-project-2/'
* I have provided this link at the top of the README file.

#### Running Project Locally 

To run your own version of this project, it can be cloned or downloaded from Github by following these steps:

* Select the repository from the Github dashboard.
* Click on the green 'Code' button, and click the 'clipboard icon' to copy the URL. It may also be displayed as a 'Clone or Download' green button.
* Open the terminal window of your desired local IDE (Integrated Development Environment).
* Choose the working directory to the location you would like to have the cloned repository.
* Type 'git clone' in the terminal window, and then paste the URL you copied.
* Press enter and the clone will be created.

## **Credits**

#### Content

All content on the website was written by me, the developer, with inspiration taken from other travel and informational sites. 

#### Code

* The code throughout the project used [Bootstrap4](https://getbootstrap.com/docs/4.4/getting-started/introduction/) as its base to create a
responsive site, utilising the Bootstrap grid system.

* Inspiration on how to place and style the hero images, as well as the cards used in the Top 3 Recommendations, was taken from my previous
Milestone 1 Project.

* Tutor support provided me with pointers and curve balls that helped me within the maps.js file to get started with my markers and understand how
best to implement my code.

* The code for the EmailJS was a mixture of using the documentation found on the website, following the CI tutorial videos on EmailJS, and my own
knowledge and practice put into place.

* The navbar-opacity-on-scroll code and the back-to-top button code was found on 'Codepen', and then tailored to my sites needs.

* The YouTube video embedded on the home page was taken from YouTube using the import from the share screen, and the iframe tag inserted. I want to
highlight that this video is being used for training purposes, and does not infringe copyright or ownership of the video.

* All other code was written by me, the developer.

#### Media

The images used on the website were taken from the listed image librarie:

* [Google Images](https://google.com)

These images were then resized to suit the needs of me, the developer, using these two sites:

* [Picresize](https://picresize.com/)

The logo image was created and exported to my computer using the site [Canva](https://www.canva.com/)

The favicon image was created and exported to my computer using the site [Canva](https://www.canva.com/), and then uploaded to the site [Favicon.io]
(https://favicon.io/) to be generated as an ico image, to then be exported back to my computer and then added to my root directory on gitpod.

The embedded video on the home page was imported using the iframe tag taken from online video-sharing platform:

* [YouTube](https://www.youtube.com/)

## **Acknowledgements**

#### Pages used for inspiration

* [Visit Cornwall](https://www.visitcornwall.com/)

* [Condé Nast Traveller](https://www.cntraveller.com/gallery/cornwall-beaches)

* [Cornwall Guide](https://www.cornwalls.co.uk/)

#### Pages used for information

* [Stack overflow](https://stackoverflow.com/)

* [W3schools](https://www.w3schools.com/)

* [CSS-Tricks](https://css-tricks.com/)

* [Code Institute](https://codeinstitute.net/)

* [Code Institute Sample README](https://github.com/Code-Institute-Solutions/SampleREADME)

* [Slack](https://slack.com/intl/en-gb/)

* [YouTube](https://www.youtube.com/)

* [Code Pen](https://codepen.io/)

* [Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

* [Tripadvisor](https://www.tripadvisor.co.uk/)

* [National Trust](https://www.nationaltrust.org.uk/)

* [MDN web docs](https://developer.mozilla.org/en-US/)

* [Codepen](https://codepen.io/)

#### Special thanks

* Seun Owonikoko @seun_mentor, my mentor, for the support and guidance she gave thoughout the build of this project.

* Tutor Support at Code Institute for accepting my request for more time and giving me the initial push that really got me going. 
All of the tutors that helped me from tutor support, your advice and guidance helped me more than I think you know. 

* Code Institute for the informative lessons and teachings they provided.

[Back to Top](#table-of-contents)

## Disclaimer

This project was created for educational use only. It has been part of studying at the Code Institute as part of their Full Stack Web Developer
Course.