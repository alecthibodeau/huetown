# Huetown

## A web shop and more

Huetown is a web shop that consumes PayPal and Mailchimp APIs to, respectively, process orders and record email list subscribers. Users can browse items, make purchases and sign up for the email list. They can also learn about upcoming events and find links to Huetown's social media presence.

## Moon Space

[Moon Space](https://huetown.com/moon-space) is a lunar calendar interface at Huetown. It's a digital interpretation of the lunar calendar prints on paper that are available at the site. When a user lands at Moon Space they see the current date for the Eastern Time Zone, the name of this date's moon phase and a visualization of the phase: a bright moon against a dark sky.

Moon phase data for the entire current year are available. Phases include the four principal ones &mdash; new moon, first quarter moon, full moon and third quarter moon &mdash; as well as variations of intermediate ones &mdash; crescent moon and gibbous moon. Users can click arrow buttons to increment forward or backward in time through hundreds of these phases.

The **Info** button launches a modal that briefly describes the digital lunar calendar. Within the modal users can select New Year's Day and then animate through all 365 phases of the year &mdash; or 366 in the case of a leap year.

Compared to the arrow buttons the animation offers an automated, more rapid visualization through time by playing a quick succession of twelve [synodic months](https://en.wikipedia.org/wiki/Lunar_month#Synodic_month). The animation concludes on December 31st. Clicking the **Today** button resets the interface to display the current day &mdash; a feature that also works when using the arrow buttons.

For context and approximate scale a looped animation of clouds appears when the user clicks the **Clouds** button. This animation is independent from the moon phase animation, meaning each can play individually or concurrently.

A final feature is the **Chart** button. When clicked it navigates to the corresponding lunar calendar print for the current year. Users can compare the two different approaches to visualizing the same data: a paper chart intended for wall display and an interactive interface that's available in web browsers on mobile devices and desktop machines.

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

Software and content Copyright (C) Alec Thibodeau. Copyright year is by commit date.