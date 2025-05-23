# Express TypeScript Project

<p align="center">
  <img src="https://expressjs.com/images/express-facebook-share.png" width="320" alt="Express Logo" />
</p>

## Overview

A modern Express.js application built with TypeScript that demonstrates best practices for building robust and maintainable Node.js web services. This project provides a health check endpoint and is structured for scalability and testability.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
- [Running the Application](#running-the-application)
- [Testing](#testing)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)

## Features

- TypeScript integration for type safety and better developer experience
- Clean architecture with controllers, routes, and services
- Health check endpoint for monitoring
- Jest testing setup for unit tests
- Nodemon for development with hot-reloading

## Tech Stack

- [Express.js](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js
- [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript at scale
- [Jest](https://jestjs.io/) - Delightful JavaScript testing framework
- [Nodemon](https://nodemon.io/) - Monitor for changes and automatically restart server

## Project Structure

```
express-ts-project/
├── src/                      # Source code
│   ├── app.ts                # Express application setup
│   ├── controllers/          # Request handlers
│   │   └── healthController.ts  # Health check controller
│   ├── routes/               # API routes definitions
│   │   ├── healthRoutes.ts   # Health routes
│   │   └── index.ts          # Routes aggregator
│   └── services/             # Business logic
│       └── healthService.ts  # Health service
├── tests/                    # Test files
│   ├── controllers/          # Controller tests
│   │   └── healthController.test.ts
│   └── services/             # Service tests
│       └── healthService.test.ts
├── jest.config.ts            # Jest configuration
├── nodemon.json              # Nodemon configuration
├── package.json              # Dependencies and scripts
└── tsconfig.json             # TypeScript configuration
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14.0.0 or later)
- [npm](https://www.npmjs.com/) (v6.0.0 or later)

### Installation

```bash
# Clone the repository
$ git clone <repository-url>
$ cd express-ts-project

# Install dependencies
$ npm install
```

### Environment Variables

Create a `.env` file in the root directory:

```
PORT=3000              # Application port
NODE_ENV=development   # Environment (development, production, test)
```

## Running the Application

```bash
# Development mode with hot-reloading
$ npm run dev

# Build the application
$ npm run build

# Start the production build
$ npm start

# Lint the code
$ npm run lint
```

Once the server is running, you can access it at: `http://localhost:3000`

## Testing

The project uses Jest for testing. Run tests with:

```bash
# Run all tests
$ npm test

# Run tests with coverage report
$ npm run test:coverage

# Run tests in watch mode (for development)
$ npm run test:watch
```

## API Documentation

### Health Endpoint

Returns the health status of the application.

- **URL:** `/api/health`
- **Method:** `GET`
- **Success Response:**
  - **Code:** 200
  - **Content:**
    ```json
    {
      "status": "UP",
      "timestamp": "2023-05-23T12:34:56.789Z"
    }
    ```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
