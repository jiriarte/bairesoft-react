# Bairesoft React Portfolio

A modern, performant portfolio website built with React, featuring a virtualized blog component and optimized for production deployment.

## Features

- 🚀 Optimized Blog Component with Virtual Rendering
- 🎨 Modern UI/UX Design
- 🔍 Advanced Search and Filtering
- 📱 Fully Responsive Design
- ⚡ Performance Optimized
- 🔄 Smooth Animations

## Tech Stack

- React 18
- Vite
- Styled Components
- React Router v6
- React Window (virtualization)
- Framer Motion

## Getting Started

### Prerequisites

- Node.js (v18.17.0 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/bairesoft-react.git

# Navigate to project directory
cd bairesoft-react

# Install dependencies
npm install

# Start development server
npm run dev
```

### Building for Production

```bash
# Create production build
npm run build

# Preview production build locally
npm run preview
```

## Deployment

This project is configured for deployment on [Render.com](https://render.com).

### Deployment Steps

1. Push your code to GitHub
2. Create a new Web Service on Render
3. Connect your GitHub repository
4. Use the following settings:
   - Build Command: `npm install && npm run build`
   - Start Command: Not required (static site)
   - Publish Directory: `build`

## Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_URL=your_api_url
```

## Performance Optimizations

- Virtual rendering for blog posts
- Lazy loading of images and components
- Debounced search
- Memoized components
- Optimized bundle size

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details
