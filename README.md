# Maintenance Management App

## Description

This is a full-stack maintenance management application developed using Node.js, Express.js, MongoDB Atlas and Mongoose. The application allows users to create, update, archive and manage maintenance jobs.

---

## Features

- Submit a maintenance job
- View all maintenance jobs
- Update a single maintenance job
- Batch update multiple maintenance jobs
- Archive maintenance jobs
- Filter jobs by status

---

## Technologies Used

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose

---

## Installation

1. Clone or download the project.

2. Install the dependencies:

```bash
npm install
```

3. Create a `.env` file and add your MongoDB connection string:

```text
MONGO_URI=your_mongodb_connection_string
```

4. Start the application:

```bash
npm run dev
```

The server will start on:

```
http://localhost:3000
```

---

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/jobs` | Create a new job |
| GET | `/jobs` | Get all jobs |
| PUT | `/jobs/:id` | Update a single job |
| PUT | `/jobs/batch` | Batch update jobs |
| PUT | `/jobs/archive/:id` | Archive a job |
| GET | `/jobs/status/:status` | Filter jobs by status |

---

## Author

Dyllan Meissenheimer