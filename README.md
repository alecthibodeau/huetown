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

[Moon Space](https://huetown.com/moon-space) is a lunar calendar interface at Huetown. It's a digital interpretation of the lunar calendar prints on paper that are available at the site. When a user lands at Moon Space they see the current date for the Eastern Time Zone, the name of this date's moon phase and a visualization of the phase: a bright moon against a dark sky.

Moon phase data for the entire current year are available. Phases include the four principal ones &mdash; new moon, first quarter moon, full moon and third quarter moon &mdash; as well as variations of intermediate ones &mdash; crescent moon and gibbous moon. Users can click arrow buttons to increment forward or backward in time through hundreds of these phases.

The **Info** button launches a modal that briefly describes the digital lunar calendar. Within the modal users can select New Year's Day and then animate through all 365 phases of the year &mdash; or 366 in the case of a leap year.

Compared to the arrow buttons the animation offers an automated, more rapid visualization through time by playing a quick succession of twelve [synodic months](https://en.wikipedia.org/wiki/Lunar_month#Synodic_month). The animation concludes on December 31st. Clicking the **Today** button resets the interface to display the current day.

For context and approximate scale a looped animation of clouds appears when the user clicks the **Clouds** button. This animation is independent from the moon phase animation, meaning each can play individually or concurrently.

Another visual effect is twinkling stars, visible when the user clicks the **Stars** button. This animation is independent from the other two for moon phases and clouds.

A final feature is the **Chart** button. When clicked it navigates to the corresponding lunar calendar print for the current year. Users can compare the two different approaches to visualizing the same data: a paper chart intended for wall display and an interactive interface that's available in web browsers on mobile devices and desktop machines.

### Data

I considered different features for how the code would work. Calling an API for the data could be ideal, were it reliable, accurate and affordable. Because I wanted to prioritize the visualization of the data I instead started by transcribing phase dates from [timeanddate.com](https://www.timeanddate.com/calendar/?year=2024&country=1) for the Eastern Time Zone. That source provided the four principal phases for each [synodic month](https://en.wikipedia.org/wiki/Lunar_month#Synodic_month), which totaled about 48 per year. I would have to generate the other hundreds of intermediate phases per year myself.

I wrote helper functions in React to fill the gaps between principal phases with intermediate ones. This data would become a JavaScript object of the type `LunarPhaseDates`, a custom TypeScript interface I made. Once I knew which phases to put where I had to find a way to visualize them on screen.

### Visualization

In addition to the principal phases themselves I needed to make sequences of crescent and gibbous phases that would account for the varying number of days between principal phases, which could be anywhere between five and eight. I briefly thought of reusing the moon shapes from the printed lunar calendar, which existed as bitmaps of scanned drawings. But these didn't provide the desired effect.

From working with SVGs for many years I knew I could produce accurate shapes in Adobe Illustrator. I also knew I could then export them as code rather than image files. Doing this avoided having a large directory of images in the repository. Now the codebase would only require a single constants file to store the moon phases as SVG strings.

### Future features

While I'm happy with Moon Space as it is now, there are more features I'd like to add when the time is right. These include the following:
- Allowing the user to regulate animation speed
- Calling an API for moon phase data
- Handling different time zones
- Adding more responsive web design to expand the interface for larger viewport widths

Software and content Copyright (C) Alec Thibodeau. Copyright year is by commit date.
