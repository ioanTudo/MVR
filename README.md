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

### 3. Configure Environment Variables

Create a `.env` file in the root directory and set the required variables:

```env

```

(Modify these values according to your setup)

### 4. Running the Project Locally

To start the development server:

```sh
npm start
```

Or using yarn:

```sh
yarn start
```

The application should now be running at `http://localhost:3000/`

### 5. Running Tests

To execute unit tests:

```sh
npm test
```

Or using yarn:

```sh
yarn test
```

### 6. Building the Project

For production builds, run:

```sh
npm run build
```

Or using yarn:

```sh
yarn build
```

### 7. Running the Backend (If Applicable)

Navigate to the backend directory and follow similar steps to install dependencies and start the server:

```sh
cd backend
npm install
npm start
```

The backend should be accessible at `http://localhost:5000/` (or the configured port).

## Screenshots

## Troubleshooting

- If you encounter dependency errors, try clearing the cache:
  ```sh
  rm -rf node_modules package-lock.json
  npm cache clean --force
  npm install
  ```
- Ensure you have the correct Node.js version installed.
- Check that all required environment variables are correctly set.

## Additional Notes

- If your project includes Docker support, provide instructions for running it in a container.
- If any additional setup is needed, such as database migrations, include relevant commands here.

For any issues, feel free to reach out via [email/contact details] or open an issue in the repository.
