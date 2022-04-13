NASA mission control dashboard to schedule missions targeting those Kepler exoplanets.

Any time we build a full stack web application with many different front end and back end components,
we have pays to think about the structure of our project.the architect or senior developer on the project often does when the project
is just beginning so that the project gets off on the right foot.

HEADER server
folder structure of server,
using our framework express and the pattern of express servers use is MVC.

API Server Setup:- 

CORS:- Cross-Origin Resource Sharing 
how can fix our CORS error ?
How do we enable cross origin requests in API?
as a security feature.Browsers by default, block cross origin requests so that you don't leak your data to a site unintentionally.

->we can allow cross origin requests that we expect by sending this special access control allow origin header From the server.
->using Express setting the course header is just the matter of adding some middleware before our roots.
.-> npm i cors
CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
->we can add cause to our middle where chain cors is going to apply to all of our requests, all of our requests are going to follow the same cross origin behavior.

SUB Morgan:- function that will produce a log entry.(that allows us to redirect our logs to various different streams streams like, for example, files or some log service on the internet.)

HEADER client
NASA Dashboard Front End Setup:-
front end code is ready to be integrated with the back end.
They've handed us this front end application using the popular React framework.
.-> Nasser engineers have set up this React application using Create React app, which is a tool to quickly set up React applications,

.-> 'Arwes' is a web framework to build user interfaces for web applications based on science fiction and cyberpunk
styles guidelines, animations and sounds effects. The idea is to provide an user experience as if you were using futuristic out of a movie interfaces for your project.
(science fiction UI framework)



SUB:- functionality NASA mission control dashboard  

.-> home page
-> in order to launch NASA's missions towards the Kepler exoplanets, on our main page.
   criteria for habitable planets.
   Are only confirmed planets that match the two criterias of having a planetary 
   1.Planetary radius < 1.6 times Earth's radius
   2.stellar flux value,Effective stellar flux > 0.36 times Earth's value and < 1.11 times Earth's value
   which measures the amount of sunlight that those planets get compared to Earth.
   Because then things would get just way too hot.
-> launch date, which we can set, and it needs to be a date in the future compared to today's 
   using calendar picker, we set a mission name.
-> mission name,
->rockets type, 
->destination-exoplanets,This is the list of planets coming in from our API that will populate  
  this dropdown, allowing us to choose the habitable planets that we're targeting for this launch. Destination exo planet list

->launch mission, when we're ready, we can select launch mission to add that launch in upcoming tab. {we have all the data we need to start launching missions. from serv er 1st api call, it takes to launch our mission in the back end.}
.->built in 'streams promises API'. Under the Stream Slash Promises module.
This is built into node, and it automatically converts streams to promises,


SUB Why do we have our models separates from our routers and controllers?


SUB upcoming page:- 
->it includes both Space X missions, And newly scheduled Zero to Mastery rockets.
->For each upcoming launch, i will keep track of the rocket number, the scheduled date for that launch.
The mission name, the rocket being used and of course, the destination that exoplanets.
->I'll also have the ability to abort the mission by clicking on this X symbol somewhere in that list.

SUB history page:-
->Will be able to see all of the launches that have either succeeded or failed in some way.
Maybe they've been aborted from the upcoming list. By clicking that X.
->history list, we include a similar set of data. About our launches, but rather than displaying the destination exoplanets, we show this list of customers
that are paying for or using this mission for some goal.
->So we have future missions under upcoming and previous missions under history.


HEADER packages
(root npm package )project package:- Which wraps the two packages for our server and client.
So that we can run npm commands from our project folder that perform actions like starting the server
on each of our inner packages in our server and our clients.

SUB a.client package
SUB b.server package

