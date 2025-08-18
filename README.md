# Personal Portfolio Website

A modern, minimal portfolio website built with Next.js 14, Tailwind CSS, and Framer Motion. Features a clean design with smooth animations and a comprehensive showcase of your work, insights, and ways to connect.

## ✨ Features

- **Modern Design**: Clean, minimal aesthetic with plenty of white space
- **Smooth Animations**: Framer Motion-powered transitions and hover effects
- **Responsive Layout**: Optimized for all device sizes
- **Section-based Navigation**: Easy navigation between different portfolio sections
- **Interactive Elements**: Hover effects, progress bars, and smooth transitions
- **Contact Form**: Built-in contact form for easy communication
- **Performance Optimized**: Built with Next.js 14 and optimized for speed

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **TypeScript**: Full type safety
- **Deployment**: Vercel-ready

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page with section management
│   └── globals.css         # Global styles and Tailwind config
├── components/
│   ├── Navigation.tsx      # Left-side navigation component
│   └── sections/           # Portfolio section components
│       ├── Hero.tsx        # Landing section with profile
│       ├── Building.tsx    # Active projects showcase
│       ├── Results.tsx     # Case studies and outcomes
│       ├── Insights.tsx    # Blog posts and recommendations
│       └── Connect.tsx     # Contact form and collaboration
└── lib/
    └── utils.ts            # Utility functions
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio-web
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

### Personal Information

Update the following files with your information:

- **Hero Section** (`src/components/sections/Hero.tsx`): Update name, description, and stats
- **Building Section** (`src/components/sections/Building.tsx`): Add your active projects
- **Results Section** (`src/components/sections/Results.tsx`): Include your case studies
- **Insights Section** (`src/components/sections/Insights.tsx`): Add your blog posts and recommendations
- **Connect Section** (`src/components/sections/Connect.tsx`): Update contact information and social links

### Styling

- **Colors**: Modify the color scheme in `src/app/globals.css`
- **Typography**: Update font choices in `src/app/layout.tsx`
- **Layout**: Adjust spacing and sizing in individual component files

### Content Management

- **Projects**: Update the `projects` array in `Building.tsx`
- **Case Studies**: Modify the `caseStudies` array in `Results.tsx`
- **Blog Posts**: Edit the `blogPosts` array in `Insights.tsx`
- **Recommendations**: Update the `recommendations` array in `Insights.tsx`

## 📱 Responsive Design

The website is fully responsive and includes:
- Mobile-first design approach
- Optimized navigation for small screens
- Responsive grid layouts
- Touch-friendly interactions

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Other Platforms

The website can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- DigitalOcean App Platform

## 🔧 Advanced Features

### Form Integration

To enable the contact form:

1. **Formspree** (Simple):
   ```tsx
   // In Connect.tsx, update the form action
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

2. **Supabase** (Advanced):
   - Set up a Supabase project
   - Create a contacts table
   - Update the form submission handler

### Analytics

Add analytics by installing:
```bash
npm install @vercel/analytics
```

Then add to your layout:
```tsx
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

## 🎯 Performance Optimization

- **Image Optimization**: Uses Next.js Image component for optimal loading
- **Code Splitting**: Automatic code splitting by Next.js
- **Lazy Loading**: Components load as needed
- **Optimized Animations**: Framer Motion optimizations for smooth performance

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Animated with [Framer Motion](https://www.framer.com/motion/)
- Icons from [Lucide](https://lucide.dev/)

---

**Happy Building! 🚀**

For questions or support, feel free to reach out through the contact form on the website.
