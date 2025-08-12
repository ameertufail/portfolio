# 3D Developer Portfolio

This is a stunning 3D developer portfolio built with React, Three.js, and Tailwind CSS. It showcases projects, experience, and skills in a visually engaging and interactive way.

## Features

- **3D Animations**: Smooth and interactive 3D models and animations powered by Three.js and React Three Fiber.
- **Responsive Design**: Fully responsive layout that looks great on all devices, from mobile phones to desktops.
- **Dynamic Content**: All portfolio content (projects, experiences, skills) is easily configurable in a single file.
- **Modern Tech Stack**: Built with modern technologies like Vite, React, and Tailwind CSS for a fast and efficient development experience.

## Technologies Used

- [React](https://reactjs.org/)
- [Three.js](https://threejs.org/)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction)
- [React Three Drei](https://github.com/pmndrs/drei)
- [Framer Motion](https://www.framer.com/motion/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)

## Project Structure

```
.
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── canvas/
│   │   └── ...
│   ├── constants/
│   │   └── index.js  // All portfolio content is here
│   ├── hoc/
│   └── ...
├── package.json
└── README.md
```

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1.  **Clone the repo**
    ```sh
    git clone https://github.com/ameertufail/portfolio.git
    ```
2.  **Install NPM packages**
    ```sh
    npm install
    ```
3.  **Run the development server**
    ```sh
    npm run dev
    ```

The application will be available at `http://localhost:5173`.

## Deployment

This project is configured for deployment to GitHub Pages.

1.  **Build the application**
    ```sh
    npm run build
    ```
2.  **Deploy to GitHub Pages**
    ```sh
    npm run deploy
    ```

This will create a `gh-pages` branch and deploy the contents of the `dist` folder. Make sure you have set the `homepage` field in your `package.json` to the correct URL.
