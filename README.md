# BetMap - Hotel Booking Application

BetMap is a hotel booking application that allows users to discover and book hotels across Morocco. This application is designed to provide a seamless experience for users to find their ideal accommodation and access additional features like hotel details, location using Google Maps, and more. It also offers an admin panel for hotel management.

## Features

- **Search Hotels:** Users can search for hotels based on location, dates, and preferences.
- **Direct Booking:** BetMap redirects users to the hotel's website for booking.
- **Google Maps Integration:** Users can view hotel locations on the map using the Google Maps API.
- **Admin Panel:** Admins can add new hotels and manage hotel details.

## Technologies Used

- **Frontend:**
  - React
  - Tailwind CSS
  - React Context API for state management

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB with Mongoose for database storage
  - JWT (JSON Web Tokens) for user authentication

## Getting Started

### Prerequisites

- Node.js and npm installed
- MongoDB database

### Installation

1. Clone the repository:

   ```bash
   git clone git@github.com:hamzamza/betmap.git
   cd betmap

Install the server dependencies  & start it :

    
    git checkout backend
    npm install
    npm start

Install the client dependencies & start it:

       
      git checkout frontend
      npm install
      npm start

Install the admin dashborad dependencies & start it:

   
    git checkout admin
    npm install
    npm start



User Stories

    As a user, I can search for hotels by location and dates.
    As a user, I can view hotel details and access the hotel's website for booking.
    As a user, I can use Google Maps to see the hotel's location.
    As an admin, I can add new hotels and manage hotel details.

TODO: Implementing Third-Party Integration

One of the future enhancements planned for BetMap is to enable seamless third-party integration with local hotel systems. This integration will allow the application to automatically fetch data from hotels without manual intervention. This feature will enhance the user experience by providing real-time data and availability from the hotels.
Contributors

    Hamza Douaij - Project Lead
    Hamza Douaij - Frontend Developer
    Hamza Douaij - Backend Developer


