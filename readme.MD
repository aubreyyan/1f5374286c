# National Park Search Tool
[![Build Status](https://travis-ci.com/joshua-yan/codename-arcane-island.svg?token=CyhsPMjdSgzb7x2ksr3Q&branch=master)](https://travis-ci.com/joshua-yan/codename-arcane-island)
[![Coverage Status](https://coveralls.io/repos/github/joshua-yan/codename-arcane-island/badge.svg)](https://coveralls.io/github/joshua-yan/codename-arcane-island)
[![Known Vulnerabilities](https://snyk.io/test/github/joshua-yan/codename-arcane-island/badge.svg?targetFile=package.json)](https://snyk.io/test/github/joshua-yan/codename-arcane-island?targetFile=package.json)


A refined search UI that allows any user to query National Park Service databases for information.

## Link me.
[No problem.](https://national-park-s.herokuapp.com/)
As a bonus, [here's a short video](https://www.youtube.com/watch?v=0IbrG_dI7dk&feature=youtu.be) of me walking through the application!

## Quick Links
- [Okay, so what did you build it with?](#okay-so-what-did-you-build-it-with)
- [Why these technologies?](#why-these-technologies)
- [What sets your project apart from other submissions?](#what-sets-your-project-apart-from-other-submissions)
- [What were the project requirements and how did you satisfy them?](#what-were-the-project-requirements-and-how-did-you-satisfy-them)
- [Can I fork your Git and run it myself?](#can-i-fork-your-git-and-run-it-myself)

## Okay, so what did you build it with?
I took advantage of my current stack to build an app that allowed me to try new technologies.

Among the technologies I used were:

- [**Node.js**](https://nodejs.org/en/)
- [**React.js**](https://reactjs.org/)
- [**Next.js**](https://nextjs.org/)
- [**Koa.js**](https://koajs.com/)
- [**Algolia React InstantSearch**](https://www.algolia.com/)
- [**Material-UI**](https://material-ui.com/)
- [**Google Static Maps API**](https://developers.google.com/maps/documentation/maps-static/intro)
- [**National Parks Service API**](https://www.nps.gov/subjects/developer/index.htm)
- [**CSS3**](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3)
- [**Jest.js Testing Framework**](https://jestjs.io/)

## Why these technologies?
Having only completed one full year of university, I haven't had as much time as others might have to learn the ins and outs of many different stacks.
Up until January of this year, [my only app](https://github.com/joshua-yan/menumap-redacted) was in HTML with script tags.

I was basically thrown into the deep end this year and was challenged to work with a group of students on [this app](https://github.com/DevPSU/Shopify-App) built off of very similar technologies.

However, **Next.js** grew on me and I have been using it in my apps ever since I started using it. It's a lesser known **React.js** framework
(as compared to the more popular create-react-app framework) that has distinct out-of-the-box benefits like file-system routing
and bootstrapped error feedback.

Not to worry though. This app is very far from being bootstrapped, at least in the conventional sense. I was also able to query
the **National Parks Service API** for latitude-longitude data, which could then be passed into **Google's Static Maps API**.
Everything is displayed using customized React Components from **Material-UI**.

The wild card technology I integrated with this app (that I had never worked with before) was **Algolia**. I had briefly heard
of the API during a Fall 2018 Hackathon, but at that point it proved too difficult to use. I took on the challenge this time
around, and after porting all of the National Park Service's park data to an Algolia Database, was able to query it for key-by-key
input feedback which I took advantage of on my home page along with infinite scrolling.

Unit testing with **Jest.js** was also something new I wanted to try and introduced me to front-end testing.

## What sets your project apart from other submissions?

Unique features of my app start at the home page. Whereas most other projects might have directly queried the National Park
Service API with searches, I take advantage of Algolia to allow for typo-tolerant and instantaneous feedback on user input.
Typing a single letter will pull up search results without having to reload the/another page.

My favorite feature of the app is also on the homepage. There is a big green button at the bottom of the screen inviting
the user to geolocate their devices in order to triangulate (mathematically) the closest destination. An asynchronous
call is made to HTML5's Geolocation API and the user's coordinates are passed through a minimum distance function which
redirects the user automatically to the closest match.

This functionality could be useful if installed at physical
locations, absolving users the need of having to manually search for the associated park. It's also just fun to be able to see
which parks are near you.

One of the big emphases of the webapp is mobile compatibility. You'll find that as you size down the screen, the site's
CSS and React Components that only render depending on the screen size, elements on the page will dynamically react in
order to provide the best possible viewing experience for people who, when visiting places like National Parks, probably
won't have the inconvenience of a 1920x1080 laptop screen with them.

## What were the project requirements and how did you satisfy them?

- [X] Provides tools to assist users in finding specific information, such as state and designation filtering, name and keyword search

Inputting states, designations (e.g. National Park, National Monument, etc.), and/or keywords into the central search
page make it incredibly easy for users to find what they're looking for.

- [X] Utilize latitude and longitude data for map visualization or distance calculations

As mentioned earlier, the home page employs an optional triangulation service to assist the end user in finding the nearest
destination by latitude-longitude coordinates. Coordinates provided by the National Park Service API associated with 
destinations (like on [the park general info page](https://national-park-s.herokuapp.com/details?objectId=arch) and
[the campgrounds page](https://national-park-s.herokuapp.com/campgrounds?objectId=arch)) I am able to use in conjunction
with the Google Static Maps API in order to give the user a visual reference.

- [X] When displaying information, utilize relevant symbols from the NPS Symbol Library to illustrate relevant items

In addition to the sidebar, icons from the NPS Symbol Library are employed extensively on [the campgrounds page](https://national-park-s.herokuapp.com/campgrounds?objectId=arch).

![National Park Service Icons](https://i.imgur.com/HBF8HLE.png)

- [X] Displays **alerts**, **articles**, **events**, and **news releases** about a selected destination

- [X] Lists details about specific **visitor centers**, as well as nearby **campgrounds**

- [X] Provides educational information about a selected destination, utilizing available **lesson plans** as well as relevant **people** and **places** associated with the location

All of these categories are fully represented on the sidebar (and as full pages), as shown below.

![Responsive Drawer Sidebar](https://i.imgur.com/5ogbcgF.png)

## Can I fork your Git and run it myself?

Absolutely. The project comes with several devdependencies you probably won't have to worry about.

Simply run the following commands (in order) in your terminal and you'll be able to see the app locally on your localhost.

# `npm install`

# `npm run dev`

Run the following command to run unit tests with Jest:

# `npm test`

Lastly, run the following command if you ever need to convert icons from .svg to .js:

# `npm run svgr`

I hope you have as much fun using the app as I had making it!

As an added bonus and just for fun, here is a ~1 minute clip of me coding out and debugging the last page of the 
website, to the tune of Nickelback's *How You Remind Me* (it actually took much longer than 1 minute).

[![A description](https://img.youtube.com/vi/DyQxKOtSFxg/maxresdefault.jpg)](https://www.youtube.com/watch?v=DyQxKOtSFxg)
