# Express MongoDB API

This project is an Express.js API that connects to a MongoDB database. It is designed to receive form data from a web page and store it in the database. The form data includes the name of a person, email, number of companions, attendance status for one or both events, and an optional text message.

## Project Structure

```
express-mongodb-api
├── src
│   ├── app.js                # Entry point of the application
│   ├── controllers           # Contains the form controller
│   │   └── formController.js # Handles form submissions
│   ├── models                # Contains the Mongoose models
│   │   └── FormData.js       # Defines the schema for form data
│   ├── routes                # Contains the route definitions
│   │   └── formRoutes.js     # Sets up the form submission routes
│   └── config                # Contains configuration files
│       └── db.js             # Database connection configuration
├── package.json              # NPM configuration file
├── .env                      # Environment variables
├── .gitignore                # Git ignore file
└── README.md                 # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd express-mongodb-api
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Create a `.env` file:**
   In the root directory, create a `.env` file and add your MongoDB connection string:
   ```
   MONGODB_URI=<your-mongodb-connection-string>
   ```

4. **Run the application:**
   ```
   npm start
   ```

5. **API Endpoints:**
   - **POST /api/form**: Submit form data. The request body should include:
     - `name`: String
     - `email`: String
     - `companions`: Number
     - `attendance`: String (e.g., "Misa", "Fiesta", "No asistiré")
     - `message`: String (optional)

## Usage

You can use tools like Postman or cURL to test the API by sending a POST request to the `/api/form` endpoint with the required data.

## License

This project is licensed under the MIT License.