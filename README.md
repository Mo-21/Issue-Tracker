# Issue Tracker Project

This project is a full-stack web application that allows users to create, manage and track issues (tickets). It is built with Next.js with TypeScript. The project uses MongoDB with Prisma, and styled using RadixUI, a low-level UI component library for React, to create the user interface. The project also uses NextAuth, a library that simplifies authentication for Next.js applications, with two strategies, Google and Credentials.

## Features

- Users can create an account and log in with their email and password.
- Users can create, edit and delete issues.
- Dashboard with bar chart visualizing total issues, latest issues and issues summary.
- Markdown editor to create new issues.
- Users can assign issues to themselves or other collaborators.
- Users can filter and sort issues by name, status, and creation date.
- Can be used without registering with limited actions.
- Error tracking with Sentry

## Usage

To run the project locally, you need to have Node.js, npm and MongoDB installed on your machine. You also need to rename the `.env.example` to `.env` file in the root directory of the project with the following variables:

Then, you can follow these steps:

1. Clone the repository from GitHub: `git clone https://github.com/Mo-21/issue-tracker.git`
2. Install the dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Open your browser and go to http://localhost:3000

## Contributing

This project is open for contributions. If you want to contribute, please follow these steps:

1. Fork this repository and create a new branch for your feature or bug fix.
2. Push your code to your fork and create a pull request to the main branch.
3. Wait for the code review and feedback.
