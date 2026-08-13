# 🔧 Maintenance Management API

A backend REST API for managing maintenance jobs, built with Node.js, Express.js, MongoDB Atlas, and Mongoose.

The application allows maintenance jobs to be created, viewed, updated, batch updated, archived, and filtered by status. The project demonstrates practical backend development, REST API design, MongoDB database integration, Mongoose schema validation, asynchronous JavaScript, error handling, and environment-based configuration.

---

## 📌 Overview

The Maintenance Management API provides a backend service for managing maintenance jobs.

Each maintenance job contains information such as a description, location, priority, status, and archive state. The application uses MongoDB Atlas for persistent data storage and Mongoose to define and validate the job data model.

The API is built with Express.js and provides RESTful endpoints that can be accessed using an API testing tool such as Postman or Thunder Client, or consumed by a future frontend application.

This project is focused specifically on backend and database functionality and does not include a frontend interface.

---

## ✨ Features

- Create a new maintenance job
- View all active maintenance jobs
- Update a single maintenance job
- Batch update multiple maintenance jobs
- Archive maintenance jobs
- Filter maintenance jobs by status
- Validate job data using Mongoose
- Automatically track creation and update timestamps
- Store maintenance jobs in MongoDB Atlas
- RESTful API endpoints
- Environment-based database configuration
- Error handling for unsuccessful requests

---

## 🛠️ Technologies Used

### Backend

- Node.js
- Express.js
- JavaScript
- REST API

### Database

- MongoDB Atlas
- Mongoose

### Development Tools

- Nodemon
- dotenv
- Git
- GitHub

---

## 🗄️ Database & Data Model

The application uses MongoDB Atlas for persistent data storage and Mongoose for schema definition and validation.

Each maintenance job contains the following fields:

| Field | Type | Description |
|---|---|---|
| `description` | String | Description of the maintenance issue |
| `location` | String | Location of the maintenance issue |
| `priority` | String | Priority of the maintenance job |
| `status` | String | Current status of the maintenance job |
| `archived` | Boolean | Indicates whether the job has been archived |
| `createdAt` | Date | Automatically generated creation timestamp |
| `updatedAt` | Date | Automatically generated update timestamp |

### Validation

The `description` and `location` fields are required.

The `priority` field accepts:

- `Low`
- `Medium`
- `High`

The `status` field accepts:

- `Submitted`
- `In Progress`
- `Completed`

The `archived` field defaults to `false`.

Mongoose timestamps automatically provide `createdAt` and `updatedAt` values.

---

## 🔗 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/jobs` | Create a new maintenance job |
| `GET` | `/jobs` | Retrieve all active maintenance jobs |
| `PUT` | `/jobs/:id` | Update a single maintenance job |
| `PUT` | `/jobs/batch` | Update multiple maintenance jobs |
| `PUT` | `/jobs/archive/:id` | Archive a maintenance job |
| `GET` | `/jobs/status/:status` | Filter active jobs by status |

---

## 📝 Example API Requests

### Create a Maintenance Job

**POST**

`/jobs`

Example request body:

```json
{
  "description": "Broken light in classroom",
  "location": "Classroom 4",
  "priority": "High"
}
```

The `status` field defaults to:

`Submitted`

The `archived` field defaults to:

`false`

---

### Get All Active Jobs

**GET**

`/jobs`

This returns maintenance jobs where:

`archived = false`

Archived jobs are excluded from the standard job listing.

---

### Update a Single Job

**PUT**

`/jobs/:id`

Example:

`/jobs/64f123456789abcdef123456`

Example request body:

```json
{
  "status": "In Progress",
  "priority": "Medium"
}
```

The API validates the updated values against the Mongoose schema.

---

### Batch Update Jobs

**PUT**

`/jobs/batch`

Example request body:

```json
{
  "jobIds": [
    "64f123456789abcdef123456",
    "64f123456789abcdef123457"
  ],
  "status": "Completed"
}
```

This allows multiple maintenance jobs to be updated in a single request.

---

### Archive a Job

**PUT**

`/jobs/archive/:id`

Example:

`/jobs/archive/64f123456789abcdef123456`

Archiving changes the job's `archived` value to:

`true`

The job is not deleted from the database. Instead, it is excluded from the standard active job results.

---

### Filter Jobs by Status

**GET**

`/jobs/status/:status`

Example:

`/jobs/status/In%20Progress`

This returns active maintenance jobs matching the requested status.

---

## 🔄 API Architecture

The application follows a simple backend architecture:

Client / API Testing Tool
          ↓
    Express Server
          ↓
      Job Routes
          ↓
   Job Controllers
          ↓
     Mongoose Model
          ↓
     MongoDB Atlas

The Express server receives HTTP requests and directs them to the appropriate route.

The route calls the relevant controller function, which performs the required database operation through the Mongoose `Job` model.

The result is then returned to the client as a JSON response.

---

## 🧩 Backend Structure

The application separates routing, controller logic, and database modelling.

### Routes

The `jobRoutes.js` file defines the API endpoints and connects each route to its corresponding controller.

### Controllers

The `jobController.js` file contains the application logic for:

- Creating jobs
- Retrieving jobs
- Updating jobs
- Batch updating jobs
- Archiving jobs
- Filtering jobs

### Model

The `Job.js` file defines the Mongoose schema and validation rules used for maintenance jobs.

This separation keeps the API organised and makes the application easier to maintain.

---

## 🔐 Environment Configuration

The MongoDB connection string is stored using an environment variable rather than being hard-coded into the application.

The `dotenv` package loads environment variables from a local `.env` file.

Create a `.env` file in the project root:

```env
MONGO_URI=your_mongodb_connection_string
```

Replace the placeholder with your own MongoDB Atlas connection string.

### Security

The `.env` file contains sensitive database credentials and must not be committed to GitHub.

The project's `.gitignore` file excludes:

```text
.env
node_modules
```

This prevents environment variables and installed dependencies from being uploaded to the repository.

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/DyllanMeissenheimer23/maintenance-management-api.git
```

Navigate into the project:

```bash
cd maintenance-management-api
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the project root:

```env
MONGO_URI=your_mongodb_connection_string
```

Add your MongoDB Atlas connection string.

Do not commit the `.env` file to GitHub.

### 4. Start the development server

```bash
npm run dev
```

The server will run on:

`http://localhost:3000`

---

## 🧪 Testing

The API was tested during development to verify the functionality of the maintenance management endpoints.

The following operations were tested:

- Creating maintenance jobs
- Retrieving maintenance jobs
- Updating individual jobs
- Batch updating jobs
- Archiving jobs
- Filtering jobs by status

The API can also be tested using tools such as Postman or Thunder Client.

---

## 📁 Project Structure

```text
maintenance-management-api/
│
├── controllers/
│   └── jobController.js
│
├── models/
│   └── Job.js
│
├── routes/
│   └── jobRoutes.js
│
├── app.js
├── package.json
├── package-lock.json
├── .gitignore
├── .env
└── README.md
```

> The `.env` file should remain local and must not be committed to the repository.

---

## 🧠 Key Backend Concepts Demonstrated

This project demonstrates practical experience with:

- RESTful API development
- Node.js
- Express.js
- Express routing
- MVC-style separation of routes, controllers, and models
- MongoDB Atlas
- Mongoose
- Mongoose schemas
- Schema validation
- CRUD operations
- Batch database updates
- Soft archiving
- Database querying and filtering
- Asynchronous JavaScript
- Error handling
- HTTP status codes
- Environment variables
- Git and GitHub

---

## 🔮 Future Improvements

Potential future improvements include:

- Add a React frontend
- Add user authentication and authorisation
- Add pagination
- Add advanced filtering and sorting
- Add maintenance job search
- Add technician assignment
- Add due dates and maintenance schedules
- Add automated unit and integration tests
- Add API documentation using Swagger/OpenAPI
- Deploy the API to a cloud platform

---

## 👨‍💻 Author

**Dyllan Meissenheimer**

Postgraduate Diploma in Information Technology Management

Aspiring Full Stack Web Developer

---

## 📚 Project Context

This project was originally developed as part of the HyperionDev Web Frameworks coursework and has been prepared as a standalone backend portfolio project.

It demonstrates practical experience building a REST API with Node.js and Express.js, integrating MongoDB Atlas through Mongoose, implementing database operations, and structuring backend functionality using routes, controllers, and models.
