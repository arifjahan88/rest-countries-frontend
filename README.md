# Country Explorer

Country Explorer is a web application built with React and TypeScript that allows users to explore and learn about different countries around the world. It fetches data from the [REST Countries API](https://restcountries.com/v3.1/all) and displays it in an organized and user-friendly manner.

## Features

- **Home Page**: Displays a list of all countries with their flags, names, and population counts.
- **Search**: Users can search for countries by name using the search input field.
- **Filter**: Users can filter countries by region using the dropdown menu.
- **Country Details**: Clicking on a country card navigates to a dedicated page that displays detailed information about the selected country, including its capital, currencies, languages, and neighboring countries (if any).
- **Border Countries**: On the country details page, users can click on the border country names to navigate to the respective country's details page.
- **Light/Dark Mode**: Users can toggle between light and dark color modes.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **TypeScript**: Superset of JavaScript that adds optional static typing.
- **Redux Toolkit**: Toolset for efficient Redux development, including RTK Query for data fetching.
- **RTK Query**: Redux Toolkit's powerful data fetching and caching solution.
- **React Router Dom**: Library for handling client-side routing in React applications.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Lottie React**: Library for rendering Lottie animations in React applications.

## Installation and Setup

1. Clone the repository: `git clone https://github.com/arifjahan88/rest-countries-frontend`
2. Navigate to the project directory: `cd rest-countries-frontend`
3. Install dependencies: `npm install or yarn`
4. Start the development server: `npm run dev or yarn dev`
5. Open your browser and visit `http://localhost:5173` to see the application.
