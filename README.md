<a href="http://imgur.com/nUOIt3o"><img src="http://i.imgur.com/nUOIt3o.png" title="source: imgur.com" /></a>

<a href="https://batonrougecrimewatch.herokuapp.com">Baton Rouge Crime Watch</a>

<h3>Problem to solve:</h3> 
<p>The problem I wanted to solve was the issue of city police station technology. It is outdated and can make it difficult to get information you may need quickly. I wanted users to be able to see populated areas of the city for specific crimes and get details about each one.

<p> While building the app I realized it could also be valuable to families moving to cities who want to decide which part of town would be best to live in. The Socrata API was built out for a lot of major cities with some of the same API endpoints, so with a few changes in the code and some additional error handling, you can make the app work for cities other than Baton Rouge.


<h3>How I solved the problem:</h3>
<p>I used the Google Maps API along with the Socrata Open Data API for the City of Baton Rouge to build this app. Any crime that included a geolocation is placed on the map and by clicking a specific marker it gives the user those crime details, such as the address, complete district, what type of crime it was, if it was attempted or committed, etc.<p>

<h3>Technologies I used:</h3>

This app was built using the following technologies:

<h4>-Express.js</h4>
<h4>-Node.js</h4>
<h4>-React.js </h4>
<h4>-Pace.js</h4>
<h4>-Bootstrap</h4>
<h4>-Google Maps API</h4>
<h4>-Socrata Open Data API for the City of Baton Rouge</h4>
<h4>-Webpack</h4>
    
<h3>Instructions on how to use app:</h3>

Select a crime from the drop down menu that you want to place markers on the map for and hit the "Search" button.

Click on a marker to open a modal and get more information about that specific crime.
You can click out of the modal or click the "x" to close the modal and continue to click others or search for a different crime type to re-render a fresh map with fresh markers.

Results are currently capped at 2000.

<h3>Wireframe:</h3>

<a href="http://imgur.com/HfrpuHf"><img src="http://i.imgur.com/HfrpuHf.png" title="source: imgur.com" /></a>

<h3>User Stories:</h3>

<a href="http://imgur.com/YJq3PDp"><img src="http://i.imgur.com/YJq3PDp.png" title="source: imgur.com" /></a>

<h3>Component Mapping:</h3> 

<a href="http://imgur.com/DpI9yvO"><img src="http://i.imgur.com/DpI9yvO.png" title="source: imgur.com" /></a>

<h3>Unsolved problems:</h3> 
    
<p>Give users the ability to search within a specific date range. This way users could get more specific with the results.</p>
<p>Have a user login and maybe introduce Firebase as a database layer so users can save specific events to a list if they needed to re-visit them for details later on.</p>
<p>Have modal email button generate crime details in body of email automatically.</p>

    
