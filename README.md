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

```text
/jobs
