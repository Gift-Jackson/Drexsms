# Drexsms

Drexsms is a web application offering virtual phone numbers for verification and communication across all available countries. Built using React, TypeScript, Vite, and Tailwind CSS, this project aims to provide a seamless and efficient user experience.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Contributing](#contributing)
- [License](#license)

## Installation

To get started with the project, follow these steps:

1. **Clone the repository:**

    ```sh
    git clone https://github.com/Gift-Jackson/drexsms.git
    cd drexsms
    ```

2. **Install the dependencies:**

    ```sh
    npm install
    ```

    ## Usage

To run the project locally, use the following command:

```sh
npm run dev
```


    ## Project Structure

The project's structure is organized as follows:


- **public/**: Contains static files like the favicon and the HTML template.
- **src/**: Contains the main source code for the project.
  - **assets/**: Contains images, icons, and other static assets.
  - **components/**: Contains reusable React components.
  - **hooks/**: Contains custom hooks used across the application.
  - **pages/**: Contains individual page components.
  - **App.tsx**: The root component of the application.
  - **index.tsx**: The entry point for the React application.
  - **main.tsx**: The main TypeScript file.
- **.gitignore**: Specifies files to be ignored by Git.
- **package.json**: Contains project dependencies and scripts.
- **postcss.config.js**: Configuration for PostCSS.
- **README.md**: The project's README file.
- **tailwind.config.js**: Configuration for Tailwind CSS.
- **tsconfig.json**: TypeScript configuration file.
- **vite.config.ts**: Configuration for Vite.

## Available Scripts

In the project directory, you can run:

### `npm install`

Installs the necessary dependencies required for the project.

### `npm run dev`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `dist` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified, and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm run preview`

Serves the production build locally for previewing. 

### `npm run lint`

Runs the linter on your codebase to ensure code quality and consistency.

## Contributing

We welcome contributions from the community! Here are some ways you can help:

1. **Reporting Bugs**: If you find a bug, please report it by opening an issue on GitHub.
2. **Suggesting Features**: Have an idea for a new feature? Feel free to share it by opening an issue.
3. **Submitting Pull Requests**: If you'd like to contribute code, follow these steps:
   - Fork the repository.
   - Create a new branch for your feature or bug fix.
   - Make your changes and commit them with descriptive commit messages.
   - Push your changes to your fork.
   - Open a pull request to the main repository.

### Code Style

We use ESLint and Prettier to maintain code quality and consistency. Please ensure your code follows the project's coding standards by running `npm run lint` and fixing any issues before submitting a pull request.

### Commit Messages

Please follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification for your commit messages:

- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation only changes
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **perf**: A code change that improves performance
- **test**: Adding missing or correcting existing tests
- **chore**: Changes to the build process or auxiliary tools and libraries such as documentation generation

Thank you for your contributions!



