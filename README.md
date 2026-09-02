Portfolio Website Template

Thank you for purchasing this portfolio website template! 🎉

This template is built with HTML, CSS, and JavaScript and is designed to be easy to customize without requiring any frameworks.

You can personalize the logo, colors, projects, biography, contact details, and social links to make the website your own.

---

📁 Getting Started

Before customizing the website, make sure you have the complete template folder.

A typical structure looks like:

portfolio-template/
│
├── index.html
├── about.html
├── projects.html
├── contact.html
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
├── images/
│   └── ...
│
└── README.md

Open the folder in your preferred code editor, such as Visual Studio Code, and you're ready to start customizing.

---

1. How to Change the Logo

Your logo can usually be changed directly inside the HTML.

Open "index.html" and look for the logo section:

<a href="index.html" class="logo">
    YourLogo<span>.</span>
</a>

Replace "YourLogo" with your own brand or name.

Using an image logo

If you prefer to use an image instead of text, replace the logo with:

<a href="index.html" class="logo">
    <img src="images/logo.png" alt="Your Brand Logo">
</a>

Place your logo inside the "images" folder and update the file name if necessary.

---

2. How to Change Colors

The main website colors are controlled from the ":root" section of the CSS file.

Open:

css/style.css

At the top of the file, you'll find something similar to:

:root {
    --bg-main: #0b0f12;
    --bg-card: #141b22;
    --accent: #63c174;
    --accent-dark: #439b55;
    --white: #ffffff;
    --text-main: #f3f4f6;
    --text-muted: #9ca3af;
    --border: rgba(255, 255, 255, 0.08);
}

Change the color values to your preferred colors.

For example:

--bg-main: #101010;
--bg-card: #181818;
--accent: #ff6b6b;
--accent-dark: #d94f4f;

💡 Tip

You don't need to search through the entire CSS file to change the main colors. Start with the variables inside ":root".

---

3. How to Change Projects

Your projects are displayed inside the projects section of the website.

Look for the project cards in "index.html" or the relevant projects page.

A project may look similar to:

<div class="project-card">

    <div class="project-img-wrapper">
        <img src="images/project-1.jpg"
             alt="Project Name"
             class="project-img">
    </div>

    <div class="project-overlay">
        <h3>Project Name</h3>

        <p>
            A short description of the project.
        </p>

        <a href="#" class="project-link">
            View Project →
        </a>
    </div>

    <div class="project-tags">
        <span class="tag">Web Design</span>
        <span class="tag">Development</span>
    </div>

</div>

To customize it:

Change the project image

Replace:

src="images/project-1.jpg"

with the location of your own image.

Example:

src="images/my-store.jpg"

Change the project name

Replace:

<h3>Project Name</h3>

with:

<h3>My Fashion Store</h3>

Change the description

Replace the existing paragraph with a short description of your project.

Change the tags

You can change:

<span class="tag">Web Design</span>
<span class="tag">Development</span>

to something like:

<span class="tag">Branding</span>
<span class="tag">UI/UX</span>

Change the project link

Replace:

href="#"

with the URL of your project.

---

4. How to Change Your Bio

Your name, job title, introduction, experience, and expertise can be edited directly in the HTML.

Look for the About section.

For example:

<h2>Creative Developer & Designer</h2>

<p class="about-quote">
    I build digital experiences that feel as good as they work.
</p>

Replace the text with your own information.

Example

<h2>Product Designer & Developer</h2>

<p class="about-quote">
    I create thoughtful digital experiences that help ideas become products.
</p>

You can also update the experience section:

<h3>Senior Frontend Developer</h3>
<span class="timeline-date">2024 — Present</span>

<p>
    Your experience description goes here.
</p>

Replace the placeholder information with your own experience.

Updating your profile picture

Find:

<img src="..." alt="Profile Picture" class="pfp-img">

Replace the image URL with your own image:

<img src="images/profile.jpg"
     alt="Your Name"
     class="pfp-img">

---

5. How to Change Contact Information

Find the Contact section in your HTML.

Update the email address, phone number, location, or other contact information with your own details.

For example:

<a href="mailto:hello@example.com">
    hello@example.com
</a>

Change it to:

<a href="mailto:yourname@example.com">
    yourname@example.com
</a>

Phone number

If the template contains:

<a href="tel:+1234567890">
    +1234567890
</a>

replace the number with your own.

WhatsApp

If a WhatsApp button is included, update the number inside the link.

Example:

<a href="https://wa.me/1234567890">
    Contact Me
</a>

Replace "1234567890" with your WhatsApp number, including your country code.

Do not include the "+" sign or spaces in the WhatsApp URL.

---

6. How to Add Social Links

Social media links can be added to your navigation, contact section, footer, or social icons.

A basic social link looks like:

<a href="https://instagram.com/yourusername">
    Instagram
</a>

Replace the URL with your own profile.

Example social links

<a href="https://github.com/yourusername">
    GitHub
</a>

<a href="https://linkedin.com/in/yourusername">
    LinkedIn
</a>

<a href="https://instagram.com/yourusername">
    Instagram
</a>

<a href="https://x.com/yourusername">
    X
</a>

Using icons

If the template uses Font Awesome icons, you can use:

<a href="https://github.com/yourusername" aria-label="GitHub">
    <i class="fab fa-github"></i>
</a>

Simply replace the username and URL.

Adding another social platform

Copy an existing social link and change:

1. The URL
2. The icon
3. The accessibility label

---

7. How to Deploy

This template is a static website, so it can be hosted on services that support static HTML, CSS, and JavaScript websites.

Option A — GitHub Pages

GitHub Pages can host static HTML, CSS, and JavaScript files directly from a GitHub repository.

Step 1 — Create a repository

Create a new repository on GitHub and upload the template files.

Make sure your main page is named:

index.html

GitHub Pages looks for an entry file such as "index.html" in the publishing source.

Step 2 — Open repository settings

Go to:

Repository
→ Settings
→ Pages

Step 3 — Select the publishing source

Under Build and deployment, select:

Source: Deploy from a branch

Then select:

Branch: main
Folder: / (root)

Click Save.

GitHub's documentation confirms that a repository can be published from a selected branch and either the repository root or "/docs" folder.

Step 4 — Visit your website

After GitHub finishes deploying the site, the Pages section will provide your website URL.

It may take a few minutes for changes to appear after publishing.

---

🎨 Before Publishing — Quick Checklist

Before making your website live, make sure you have changed:

- [ ] Logo
- [ ] Website name
- [ ] Profile picture
- [ ] Bio
- [ ] Job title
- [ ] Experience
- [ ] Projects
- [ ] Project images
- [ ] Project links
- [ ] Contact email
- [ ] Phone/WhatsApp number
- [ ] Social media links
- [ ] Website colors
- [ ] Page title and favicon

---

⚠️ Important

This template is designed to be customized.

You do not need to rebuild the website from scratch. Most personal information can be changed directly in the HTML, while the overall appearance can be customized through the CSS variables.

Always keep a backup of the original template before making major changes.

Enjoy building your portfolio! 🚀
