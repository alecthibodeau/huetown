# Huetown

## A web shop and more

Huetown is a web shop that consumes PayPal and Mailchimp APIs to, respectively, process orders and record email list subscribers. Users can browse items, make purchases and sign up for the email list. They can also learn about upcoming events and find links to Huetown's social media presence.

## Technology features

Huetown is built with [React](https://reactjs.org/) and [TypeScript](https://www.typescriptlang.org/). Other features include:
- Accessibility
  - [Level AAA](https://www.w3.org/WAI/WCAG2AAA-Conformance) color contrast values
  - Semantic HTML tags
  - Responsive web design (mobile-first)
- [React Router](https://reactrouter.com/docs/en/v6)
- [Sass](https://sass-lang.com)
- [Google Fonts](https://fonts.google.com)
- Custom SVG illustrations

## Moon Space

### Overview

[Moon Space](https://huetown.com/moon-space) is a lunar calendar interface at Huetown. It's a digital interpretation of the lunar calendar prints on paper that are available at the site. When a user lands at Moon Space they see the current date for the Eastern Time Zone, the name of this date's moon phase and a visualization of that phase's shape: a bright moon against a hued nighttime sky.

The user can access moon phase data for the entire current year. Phases include the four principal ones (new moon, first quarter moon, full moon and third quarter moon), as well as variations of intermediate ones (crescent moons and gibbous moons). Users can click arrow buttons to increment forward or backward day-by-day within the current year.

The **Info** button launches a modal that briefly describes the digital lunar calendar. Within the modal users can select New Year's Day and then animate through all 365 phases of the year, or 366 in the case of a leap year. Compared to the functionality of the arrow buttons this animation is a rapid visualization through twelve [synodic months](https://en.wikipedia.org/wiki/Lunar_month#Synodic_month). The animation concludes on December 31st. Clicking the modal's **Select Today** button resets the interface to display the current day.

Back outside the modal, when the user clicks the **Clouds** button a looped animation of clouds appears. This animation provides context and approximate scale. It's independent from the moon phase animation: each can play individually or concurrently.

Another visual effect is twinkling stars, visible when the user clicks the **Stars** button. This animation is independent from the other two for moon phases and clouds.

An additional design element is associated with the **Critter** button. Clicking this toggles the sliding in/out of a hippopotamus drawing. This feature is a work in progress, as ideally more animals would join the scene.

A final feature is the **Chart** button. When clicked it navigates to the corresponding lunar calendar print for the current year. Users can compare the two different approaches to visualizing the same data: a paper chart intended for wall display and a digital interface for mobile and desktop web browsers.

### Data

I considered different ways of representing the moon phases. Getting the initial data through an API call would be ideal, were it feasible (reliable, accurate and affordable). Because I wanted to prioritize the visualization of the data I instead started by transcribing phase dates for the Eastern Time Zone from [timeanddate.com](https://www.timeanddate.com/calendar/?year=2024&country=1). That source provided the dates of the four principal phases for each [synodic month](https://en.wikipedia.org/wiki/Lunar_month#Synodic_month), totalling about 48 principal phase dates per year. I then used these to programmatically generate the hundreds of intermediate phase dates for the year.

To accomplish this I wrote helper functions in React to fill the gaps between principal phase dates with intermediate ones. The resulting code aggregated all data into a JavaScript object of the type `LunarPhaseDates`, which was declared in a custom TypeScript interface. With the helper functions handling the sequence of phases, the next task was finding a way to visualize the shapes.

### Visualization

I used Adobe Illustrator to design accurate vector shapes for all principal and intermediate phases. I then exported the shapes as SVG code rather than as image files. This meant the repository required only a constants file to store all phase images as SVG strings, eliminating the need for a large directory of JPG, PNG or SVG files.

### Future features

While I'm happy with Moon Space as it is, there are more features I'd like to incorporate when the time is right. These include the following:
- Allow the user to regulate animation speed
- Add more design elements: multiple critters, for example, possibly with additional animations
- Call an API for moon phase data (if feasible)
- Handle different time zones (if feasible)

Software and content Copyright (C) Alec Thibodeau. Copyright year is by commit date.
