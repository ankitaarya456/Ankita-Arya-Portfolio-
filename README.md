# Ankita Arya - Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Framer Motion, showcasing my journey as a Software Developer and AI Researcher.

## 🌟 Features

- **Modern Design**: Clean, enterprise-level design with light purple and pink theme
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Smooth Animations**: Beautiful animations powered by Framer Motion
- **SEO Optimized**: Comprehensive meta tags and structured data
- **Fast Performance**: Built with Next.js 15 and Turbopack
- **Accessible**: WCAG compliant design with proper semantic HTML

## 🚀 Live Demo

Visit the live website: [ankitaarya.dev](https://ankitaarya.dev)

## 📱 Sections

- **Hero**: Introduction with animated profile and key stats
- **About**: Personal story and educational journey
- **Experience**: Professional timeline with detailed achievements
- **Skills**: Technical expertise with proficiency levels
- **Projects**: Featured projects with live demos
- **Contact**: Multiple ways to connect with interactive form

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS 4, Custom CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Linting**: Biome
- **Deployment**: Vercel (recommended)

## 🎨 Color Palette

- **Primary Purple**: #8B5FBF
- **Secondary Pink**: #EC4899
- **Accent**: #6366F1
- **Background**: Light gradients from purple to pink
- **Text**: Professional grays

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/ankitaarya/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## 🚀 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run Biome linter
- `npm run format` - Format code with Biome

## 📂 Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles with theme
│   ├── layout.tsx       # Root layout with metadata
│   └── page.tsx         # Main page component
├── components/
│   ├── Navigation.tsx   # Responsive navigation
│   ├── Hero.tsx         # Hero section with animations
│   ├── About.tsx        # About section with timeline
│   ├── Experience.tsx   # Work experience timeline
│   ├── Skills.tsx       # Technical skills with progress
│   ├── Projects.tsx     # Featured projects showcase
│   ├── Contact.tsx      # Contact form and info
│   ├── Footer.tsx       # Footer with social links
│   └── ClientLayout.tsx # Client-side layout wrapper
└── public/              # Static assets
```

## 🎨 Customization

### Theme Colors
Edit CSS variables in `src/app/globals.css`:

```css
:root {
  --color-primary: #8B5FBF;
  --color-secondary: #EC4899;
  --color-accent: #6366F1;
  /* Add your custom colors */
}
```

### Content
Update personal information in respective component files:
- Personal info: `Hero.tsx`, `About.tsx`, `Contact.tsx`
- Work experience: `Experience.tsx`
- Skills: `Skills.tsx`
- Projects: `Projects.tsx`

### Animations
Modify Framer Motion variants in component files to customize animations.

## 📱 Responsive Design

- **Mobile**: Optimized for smartphones (320px+)
- **Tablet**: Enhanced for tablets (768px+)
- **Desktop**: Full experience for desktops (1024px+)
- **Large Screens**: Optimal viewing for large displays (1440px+)

## ⚡ Performance Features

- **Next.js 15**: Latest features and optimizations
- **Turbopack**: Fast bundling for development
- **Image Optimization**: Automatic image optimization
- **Code Splitting**: Automatic code splitting
- **SEO**: Comprehensive meta tags and structured data

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

## 📞 Contact

- **Email**: ankitaarya9135@gmail.com
- **Phone**: +91 8210024102
- **LinkedIn**: [linkedin.com/in/ankita-arya](https://linkedin.com/in/ankita-arya)
- **GitHub**: [github.com/ankitaarya](https://github.com/ankitaarya)

---

**Built with ❤️ and ☕ using Next.js, TypeScript & Framer Motion**
