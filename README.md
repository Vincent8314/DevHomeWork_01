# Personal Portfolio Website - HTML & CSS Fundamentals

> **Web Development School Project**  
> A responsive personal profile website demonstrating core HTML & CSS concepts with an enhanced dark/light theme system.

---

## 📚 Project Overview

This project was created as part of a web development course homework assignment focusing on **HTML & CSS fundamentals**. The assignment consisted of three progressive exercises designed to build proficiency in web structure and styling.

### Learning Objectives

The exercises aimed to teach:
- **HTML semantic structure** and proper document organization
- **CSS styling fundamentals** including typography, colors, and spacing
- **Navigation menu creation** using lists and CSS selectors
- **Responsive design principles** through media queries
- **Interactive elements** using pseudo-classes and JavaScript

---

## 🎯 Assignment Requirements

### Exercise 1: Create a Basic Profile Page
**Focus:** HTML Basics

✅ **Completed Requirements:**
- `<!DOCTYPE html>` declaration with proper HTML structure
- `<h1>` heading for name ("Vincent li.")
- `<h2>` subheading for role ("Web Developer")
- `<p>` paragraphs for biography (3 descriptive paragraphs)
- `<ul>` unordered list with 3 skills/hobbies (JavaScript, UI Design, Photography)
- `<img>` tag with descriptive `alt` attribute

### Exercise 2: Style the Profile with CSS
**Focus:** CSS Fundamentals

✅ **Completed Requirements:**
- External stylesheet (`styles.css`) linked to HTML
- `background-color` applied to `<body>`
- `color` styling for `<h1>` heading
- `font-size` modifications for `<p>` paragraphs
- `text-align: center` for `<h1>` and `<h2>` headings
- `font-family` (Inter from Google Fonts) applied to entire body
- `border` styling applied to images

### Exercise 3: Create a Horizontal Navigation Menu
**Focus:** Lists & CSS Selectors

✅ **Completed Requirements:**
- `<nav>` element with semantic HTML
- `<ul>` list containing 3 navigation links: "Home", "About", "Contact"
- `list-style-type: none` to remove bullet points
- `display: inline-block` for horizontal alignment
- Link styling with `text-decoration: none`
- `padding` spacing around navigation links
- Custom `color` for link text
- **Bonus:** `a:hover` pseudo-class for interactive link color changes

---

## 🌟 Enhanced Features

Beyond the basic requirements, this project includes several advanced features to demonstrate mastery and create a professional portfolio:

### 🎨 Dark/Light Theme System
- **Dynamic theme toggle** button for user preference
- **CSS custom properties** (variables) for efficient color management
- **System preference detection** automatically applies user's OS theme
- **Persistent theme switching** maintains visual consistency across pages
- **Smooth transitions** between light and dark modes

### 📱 Responsive Design
- **Mobile-first approach** with media queries at multiple breakpoints:
  - `max-width: 667px` - Tablet and small devices
  - `max-width: 500px` - Mobile phones
  - `max-width: 400px` - Small mobile devices
  - `max-width: 340px` - Extra small screens
- **Flexible typography** that scales appropriately
- **Adaptive navigation** that reorganizes for smaller screens
- **Optimized spacing** for different viewport sizes

### 🎨 Design System
- **Custom color palette** with accent colors for visual hierarchy
- **Professional typography** using Inter font family
- **Consistent spacing** throughout the layout
- **Subtle visual effects** (shadows, hover states, image filters)
- **Sticky navigation** for improved user experience

---

## 🛠️ Technical Implementation

### File Structure
```
project/
├── README.md           # Project documentation (this file)
├── index.html          # Home page
├── about.html          # About page
├── contact.html        # Contact page
├── styles.css          # Main stylesheet (organized hierarchically)
├── index.js            # Theme toggle functionality
└── favicon/
    └── favicon-remove-best.ico
```

### CSS Organization
The stylesheet follows a **hierarchical structure** matching the HTML document flow:
1. **Global styles** (variables, resets)
2. **Navigation** (including all responsive breakpoints)
3. **Main content** (headings, paragraphs, lists)
4. **Media elements** (images, divs)
5. **Footer** (with responsive adjustments)

**Key principle:** All `@media` queries are placed immediately after their related element for better maintainability.

### JavaScript Functionality
- Theme toggle button event listener
- CSS class manipulation (`reverse` class for dark mode)
- System preference detection using `window.matchMedia`
- Dynamic button text updates ("Dark" ↔ "Light")

---

## 🎓 Skills Demonstrated

### HTML
- ✅ Semantic markup structure
- ✅ Proper document hierarchy
- ✅ Accessibility attributes (`alt` text)
- ✅ Multi-page navigation
- ✅ External resource linking

### CSS
- ✅ External stylesheet management
- ✅ CSS custom properties (variables)
- ✅ Flexbox and layout techniques
- ✅ Responsive design with media queries
- ✅ Pseudo-classes (`:hover`, `:contains`)
- ✅ Advanced selectors (`>`, `nav>ul>li>a`)
- ✅ Color theory and contrast
- ✅ Typography hierarchy

### JavaScript
- ✅ DOM manipulation
- ✅ Event handling
- ✅ Class list management
- ✅ Browser API integration

---

## 🚀 Future Enhancements

Potential improvements for continued learning:
- [ ] Add a contact form with validation
- [ ] Implement a projects/portfolio section
- [ ] Add smooth scroll behavior for navigation
- [ ] Include animations and transitions
- [ ] Integrate a CSS preprocessor (SASS/SCSS)
- [ ] Add more accessibility features (ARIA labels, keyboard navigation)
- [ ] Implement localStorage to persist theme preference

---

## 📖 What I Learned

This project taught me:
1. **HTML structure matters** - Semantic markup improves both accessibility and maintainability
2. **CSS organization is crucial** - Hierarchical structure makes debugging and updates much easier
3. **Responsive design is essential** - Mobile-first approach ensures compatibility across devices
4. **User experience enhances engagement** - Features like theme toggle improve usability
5. **CSS variables are powerful** - Custom properties enable efficient theme management
6. **Media queries provide flexibility** - Grouping them with related elements improves code readability

---

## 👨‍💻 Author

**Vincent Libouton**  
Web Development Student

---

## 📄 License

This project was created for educational purposes as part of a web development course assignment.

---

## 🙏 Acknowledgments

- **Course Instructor** for providing clear, progressive exercises
- **Google Fonts** for the Inter typeface
- **Unsplash** for placeholder imagery
- **Modern CSS** for inspiration on theme implementation