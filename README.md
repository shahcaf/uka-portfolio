# UKA - United Kingdom's Army Portfolio Website

Official portfolio website for the United Kingdom's Army (UKA) Roblox group. This modern, responsive website showcases the group's activities, provides information to potential recruits, and serves as a central hub for the community.

## Features

- 🎯 Modern, responsive design that works on all devices
- 🚀 Fast loading with optimized assets
- 📱 Mobile-first approach
- ✨ Smooth animations and transitions
- 📝 Contact form (frontend only - needs backend integration)
- 📊 Animated statistics counter
- 📸 Image gallery
- 🔗 Social media integration

## Technologies Used

- HTML5
- CSS3 (with CSS Variables for theming)
- Vanilla JavaScript (ES6+)
- Font Awesome Icons
- Google Fonts

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A code editor (VS Code, Sublime Text, etc.)
- Basic knowledge of HTML, CSS, and JavaScript

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/uka-portfolio.git
   ```

2. Navigate to the project directory:
   ```bash
   cd uka-portfolio
   ```

3. Open `index.html` in your preferred web browser:
   ```bash
   start index.html  # On Windows
   open index.html   # On macOS
   xdg-open index.html  # On Linux
   ```

## Customization

### Colors

You can easily customize the color scheme by modifying the CSS variables in the `:root` selector in `css/styles.css`:

```css
:root {
    --primary: #1a365d;    /* Dark blue */
    --secondary: #c53030;  /* Red */
    --accent: #e2b04c;    /* Gold */
    --light: #f7fafc;     /* Light gray */
    --dark: #1a202c;      /* Dark gray */
    --gray: #718096;      /* Medium gray */
}
```

### Images

Replace the placeholder images in the `images` directory with your own images. Make sure to update the image paths in the HTML and CSS files accordingly.

### Content

Edit the content in `index.html` to match your group's information. Update the following sections:

- Hero section text
- About section
- Statistics in the About section
- Gallery images and captions
- Join Us section with requirements
- Contact information
- Footer content

## Deployment

To deploy this website, you can use any static site hosting service such as:

- [Netlify](https://www.netlify.com/)
- [Vercel](https://vercel.com/)
- [GitHub Pages](https://pages.github.com/)
- [Firebase Hosting](https://firebase.google.com/docs/hosting)

## Backend Integration (Optional)

To make the contact form functional, you'll need to set up a backend service. Here are some options:

1. **Netlify Forms**: If deploying to Netlify, you can use their built-in form handling.
2. **Formspree**: A simple form backend service.
3. **Custom Backend**: Set up a Node.js/Express server with Nodemailer to handle form submissions.

## Browser Support

This website is built with modern web standards and works best in the latest versions of:

- Google Chrome
- Mozilla Firefox
- Apple Safari
- Microsoft Edge

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- [Font Awesome](https://fontawesome.com/) for the icons
- [Google Fonts](https://fonts.google.com/) for the typography
- [Unsplash](https://unsplash.com/) for placeholder images

## Contact

For any inquiries, please contact us at [contact@ukaroblox.com](mailto:contact@ukaroblox.com)

---

© 2025 United Kingdom's Army (UKA) - All rights reserved.
