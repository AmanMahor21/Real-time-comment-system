# Real-time Comment System

   ### A real-time comment system built using Next.js, MySQL, Material-UI (MUI), and Socket.io. This application allows users to post comments in real-time, where comments appear instantly without  page refresh.
   
  ## Features

   - Real-time comments: Users can post and view comments instantly, without refreshing the page.  
   - MySQL integration: Persistent data storage using a MySQL database.
   - Socket.io: Real-time WebSocket communication for instant updates.
   - Material-UI (MUI): Styled using Material-UI components and TailwindCSS.
   - Date formatting: Dates are formatted using date-fns.

## Technologies Used

   - Frontend: Next.js, Material-UI (MUI), TailwindCSS
   - Backend: Node.js (Express)
   - Database: MySQL
   - Real-time Communication: Socket.io
   - Styling: Tailwind CSS, MUI, Bootstrap

## Getting Started
### Prerequisites

   #### Node.js (v18 or above)
   #### MySQL database set up locally

## Installation

 ### Clone the repository:
   #### git clone https://github.com/AmanMahor21/Real-time-comment-system.git


 ### bash

   #### cd Real-time-comment-system
## Install dependencies:

### bash

#### npm install

 ### Set up environment variables:

   #### Create a .env file in the root of your project and include your database configuration.

  ##### bash

1. DB_HOST=localhost
2. DB_USER=root
3. DB_PASSWORD=your_password
4. DB_NAME=comments

 ## Set up MySQL:

### Create a MySQL database named comments, and import the SQL schema (if needed).

#### Run the development server:

#### bash

  * npm run dev

#### Open your browser and navigate to http://localhost:3000.

## Scripts

#### npm run dev: Starts the development server.
####    npm run build: Builds the Next.js app for production.
 ####   npm run start: Starts the production server.
