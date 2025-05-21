# 4G_SILAWAN_PORTFOLIO
Incase you are wondering what are it's user interactive features - here is a by yours truly.
1. Menu toggle
Trigger: Click on the menu icon (hamburger icon)
Effect:

When you click the menu icon (the three horizontal lines on smaller screens), it toggles the mobile navigation menu’s visibility.

It adds or removes the active class on the .navbar, which slides the menu in or out.

The icon itself toggles between the hamburger (bx-menu) and a close icon (bx-x) by toggling the bx-x class on the icon element.

This allows users on mobile or small screens to open and close the navigation menu easily.

2. Close menu on scroll
Trigger: Scrolling the page
Effect:

When the user scrolls the page, if the mobile menu is open, it will automatically close.

This is done by removing the active class from the navbar and removing the bx-x class from the menu icon.

This prevents the menu from staying open while the user scrolls through content, improving UX by keeping the screen clear.

3. Typing effect animation
Trigger: Page load (DOMContentLoaded event)
Effect:

On the home section, there’s a dynamic text effect on the .multiple-text span.

Using the Typed.js library, it types out a series of phrases: "Frontend Developer", "Web Designer", and "Problem Solver".

The text appears as if it’s being typed and erased repeatedly with typing speed and backspace speed set to 100 milliseconds, and a 1-second delay before switching.

This adds a modern, engaging visual element to the introduction, highlighting your roles dynamically.

4. Form validation
Trigger: When the user submits the contact form
Effect:

Before submitting the form, the script checks every input and the textarea to make sure none are empty or only whitespace.

If any field is empty:

The border color of the empty field turns red to visually alert the user.

Form submission is prevented (no page reload or send happens).

An alert pops up with the message: "Please fill in all fields."

If fields are filled correctly, the border color resets to the main color and the form submits normally.

This client-side validation ensures users fill out all required contact information before submitting.

5. Project button click
Trigger: Click on the "View Project" button inside a project box
Effect:

When clicking the button for a project (e.g., MINI_QUEST), the user is navigated to the project’s detail page URL (Portfolio_Silawan/index.html).

This navigation happens via the inline onclick attribute on the button, which uses window.location.href.

It lets users explore individual projects in more detail, improving engagement with your portfolio.

6. Navigation link click (smooth scroll)
Trigger: Clicking on any navigation link (<a href="#section">)
Effect:

Clicking on the navbar links smoothly scrolls the page to the corresponding section with the matching id (e.g., #about, #projects).

This is handled by the CSS rule html { scroll-behavior: smooth; }.

It creates a smooth scrolling animation instead of an abrupt jump, which is visually nicer and improves user experience when navigating your one-page portfolio.

7. Downloadable CV
Trigger: Click on the "Download CV" button
Effect:

When the user clicks the "Download CV" button (often a button or link labeled like "Download CV" or "Get Resume"), the browser initiates a download of your CV file.

This is usually done with an anchor (<a>) element that links directly to your CV file (commonly a PDF), and includes the download attribute to prompt the browser to download instead of opening it. The download starts immediately, allowing the user to save your CV to their device.

This feature makes it easy for potential employers or clients to quickly get a copy of your CV without navigating away from your portfolio.
