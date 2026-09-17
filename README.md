# Modern Personal Portfolio Website

This is a complete, professional, and responsive personal portfolio website for Abilash A, an IT fresher aiming for a career in software development. It is built using only HTML, CSS, and JavaScript, with a focus on a premium user experience and a clean, modern design.

## Live Demo

**Expected URL:** https://abilashabilash80029-creator.github.io/Portfolio/

The URL becomes active after this folder is uploaded to a GitHub repository named `Portfolio` and the Pages workflow completes.

## Hosting

This is a static website, so it can be hosted without a server or database.

### GitHub Pages

1. Create a new public repository on GitHub.
2. Upload all files and folders from this `Portfolio` directory.
3. Open the repository's **Settings > Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and the `/ (root)` folder, then click **Save**.
6. Open the generated URL, usually `https://your-username.github.io/repository-name/`.

### Netlify

1. Open [Netlify](https://app.netlify.com/) and choose **Add new site > Import an existing project**.
2. Connect your GitHub repository.
3. Set the publish directory to `.` and leave the build command empty.
4. Click **Deploy site**.

### Vercel

1. Open [Vercel](https://vercel.com/) and choose **Add New > Project**.
2. Import your GitHub repository.
3. Choose **Other** as the framework preset.
4. Leave the build command empty and set the output directory to `.`.
5. Click **Deploy**.

After deployment, replace the placeholder **Live Demo** link above with your public URL.

## Features

- **Fully Responsive:** Looks great on desktops, tablets, and mobile devices.
- **Modern Dark Theme:** A sleek, professional dark theme with an optional light mode.
- **Premium UI/UX:** Designed with a focus on clean aesthetics and intuitive user experience.
- **Interactive & Animated:**
    - Animated typing effect in the hero section.
    - Smooth scrolling for all navigation links.
    - Subtle on-scroll animations for all sections.
    - Interactive hover effects on buttons and cards.
- **Easy Navigation:**
    - Sticky navigation bar that stays at the top on scroll.
    - Mobile-friendly navigation menu.
    - Back-to-top button for easy access to the home section.
- **Dynamic Functionality:**
    - Dark/Light mode toggle to switch between themes.
    - Working contact form (requires configuration with a service like Formspree).
- **SEO & Performance:**
    - SEO-friendly semantic HTML.
    - Clean, well-commented, and organized code.
    - Fast loading with no external frameworks (except for FontAwesome icons and Typed.js).

## Website Sections

1.  **Home:** A hero section with a profile image, animated text, career objective, and call-to-action buttons.
2.  **About Me:** A brief introduction, education summary, and career goals presented in clean cards.
3.  **Skills:** A grid of cards showcasing technical skills with icons.
4.  **Projects:** A portfolio showcase with images, descriptions, technologies used, and links to GitHub/live demos.
5.  **Education:** A clean timeline layout for academic history.
6.  **Leadership & Club Experience:** A section to highlight leadership roles and experiences.
7.  **Contact:** Contact information and a working contact form.
8.  **Footer:** Copyright information and social media links.

## Project Structure

```
Portfolio/
│
├── index.html          # Main HTML file
├── css/
│   └── style.css       # All styles for the website
├── js/
│   └── script.js       # All interactive functionality
├── images/             # Folder for profile and project images
├── resume/             # Folder for the resume PDF
└── README.md           # Project documentation
```

## How to Run the Website

You can run this website in two simple ways:

1.  **Directly in the Browser:**
    - Simply navigate to the project folder and double-click the `index.html` file. It will open in your default web browser.

2.  **Using a Live Server (Recommended for Development):**
    - If you have a code editor like VS Code, you can install the "Live Server" extension.
    - Right-click on `index.html` and choose "Open with Live Server". This will automatically open and refresh the page whenever you make changes.

3.  **Using Python's local server:**
    - Open a terminal in this folder and run `python -m http.server 8000`.
    - Open `http://localhost:8000` in your browser.

## Customization Guide

This portfolio is designed to be easily customized.

1.  **Content:**
    - Open `index.html` and edit the text directly. You can change the name, career objective, project descriptions, etc.

2.  **Contact Form:**
    - Go to [Formspree.io](https://formspree.io/) and create a new form.
    - Replace the `action` URL in the `<form>` tag in `index.html` with your unique Formspree URL.

3.  **Images:**
    - Place your profile picture in the `images/` folder (e.g., `profile.png`).
    - Add your project images to the `images/` folder.
    - Update the `src` attribute in the `<img>` tags in `index.html` to match your new image filenames.

4.  **Resume:**
    - Place your resume (e.g., `Abilash_Resume.pdf`) in the `resume/` folder.
    - Make sure the `href` in the "Download Resume" button in `index.html` matches the filename.

5.  **Styling:**
    - Open `css/style.css` to change the website's appearance.
    - You can easily change the color scheme by modifying the CSS variables at the top of the file (e.g., `--main-color`).
