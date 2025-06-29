# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- Modern React application with Vite
- Tailwind CSS for styling
- Axios for API calls
- React Router for navigation
- Toast notifications
- Canvas integration

## 🛠️ Tech Stack

- **Framework**: React 19
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **State Management**: React Context
- **API Client**: Axios
- **UI Components**: React Toastify

## 📋 Project Structure

```
client/
├── public/         # Static assets
├── src/
│   ├── assets/     # Application assets
│   ├── components/ # React components
│   ├── context/    # React context providers
│   └── pages/      # Page components
├── package.json
├── vite.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)

### Installation

1. Clone the repository:
   ```bash
git clone <repository-url>
cd client
```

2. Install dependencies:
   ```bash
npm install
```

3. Create a `.env` file in the root directory with:
   ```
VITE_BACKEND_URL=http://localhost:5000
```

### Development

Run the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Building for Production

```bash
npm run build
```

This will create a production-ready build in the `dist` directory.

## 📦 Deployment

### Netlify/Vercel Deployment

1. Set the following build settings:
   - Build command: `npm run build`
   - Publish directory: `client/dist`

2. Add environment variables:
   - `VITE_BACKEND_URL`: Your backend API URL

## 🛠️ Available Scripts

- `npm run dev`: Starts the development server
- `npm run build`: Creates a production build
- `npm run preview`: Preview the production build locally
- `npm run lint`: Run ESLint for code linting

## 📝 Environment Variables

- `VITE_BACKEND_URL`: URL for the backend API

## 🌐 Live Demo

- **Frontend**: https://imaginefrontend.onrender.com
- **Backend**: https://imagine-7gis.onrender.com

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- React and Vite for providing modern development tools
- Tailwind CSS for excellent styling capabilities
- Axios for reliable API communication
- Render for hosting the application

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
