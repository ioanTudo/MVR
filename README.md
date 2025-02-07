# Project Setup and Evaluation Guide

## Prerequisites

Before setting up the project, ensure you have the following installed on your system:

- Node.js (Recommended: Latest LTS version)
- npm or yarn (Choose one package manager)
- Git
- Any additional dependencies required by the project (listed below)

## Installation Steps

### 1. Clone the Repository

```sh
git clone https://github.com/ioanTudo/technical-assignment.git
cd mvr
```

### 2. Install Dependencies

Using npm:

```sh
npm install
```

Or using yarn:

```sh
yarn install
```

### 3. Running the Project Locally

To start the development server:

```sh
npm start
```

Or using yarn:

```sh
yarn start
```

The application should now be running at `http://localhost:3000/`

### 4. Running Tests

To execute unit tests:

```sh
npm test
```

Or using yarn:

```sh
yarn test
```

### 5. Building the Project

For production builds, run:

```sh
npm run build
```

Or using yarn:

```sh
yarn build
```


## Troubleshooting

- If you encounter dependency errors, try clearing the cache:
  ```sh
  rm -rf node_modules package-lock.json
  npm cache clean --force
  npm install
  ```
- Ensure you have the correct Node.js version installed.

## Additional Notes

For any issues, feel free to reach out via ioan_alexandru_tudor@yahoo.com or open an issue in the repository.
