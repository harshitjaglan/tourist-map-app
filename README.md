# Full-Stack Tourist Map Application

This repository contains a full-stack web application that allows users to explore interactive maps and related data. The application is built with a React (Vite) frontend, Leaflet.js for map integration, and a Spring Boot backend for API services. Continuous Integration/Continuous Deployment (CI/CD) is automated using Jenkins.

## Features

- **Interactive Mapping**: Provides an intuitive user interface with interactive maps powered by Leaflet.js.
- **RESTful API Services**: The Spring Boot backend serves robust APIs for data management and interaction.
- **Automated CI/CD**: Jenkins pipelines automate build, test, and deployment workflows for seamless development and production updates.

## Tech Stack

### Frontend
- **React** (Vite)
- **Leaflet.js**

### Backend
- **Spring Boot**

### CI/CD
- **Jenkins**
  - Maven for backend builds
  - npm for frontend builds
  - Artifact archiving and deployment

## Project Structure

```
.
├── backend
│   ├── src
│   │   ├── main
│   │   │   └── java/com/example/backend
│   │   │       └── BackendApplication.java
│   └── pom.xml
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── App.jsx
│   │   └── index.jsx
│   ├── vite.config.js
│   └── package.json
└── Jenkinsfile
```

## Prerequisites

1. **Node.js**: Ensure Node.js and npm are installed.
2. **Maven**: Ensure Apache Maven is installed and added to the system PATH.
3. **Java**: Java 21+ is required for running the Spring Boot backend.
4. **Jenkins**: A working Jenkins setup with access to the repository.

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/harshitjaglan/tourist-map-app.git
cd tourist-map-app
```

### 2. Backend Setup

```bash
cd backend
mvn clean install
```

### 3. Frontend Setup

```bash
cd frontend
npm install
npm run build
```

### 4. Jenkins Configuration

- Add a new pipeline job in Jenkins.
- Use the provided `Jenkinsfile` in the repository.
- Ensure tools like Maven and npm are configured in Jenkins and available in the PATH.

### 5. Run Locally

- **Backend**:
  ```bash
  cd backend
  mvn spring-boot:run
  ```
- **Frontend**:
  ```bash
  cd frontend
  npm run dev
  ```

## CI/CD Pipeline

The Jenkins pipeline includes the following stages:

1. **Checkout**: Clones the repository.
2. **Build Backend**: Uses Maven to clean, compile, and package the Spring Boot backend.
3. **Build Frontend**: Uses npm to install dependencies and build the production frontend.
4. **Archive Artifacts**: Stores the backend JAR and frontend build files for deployment.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Author

- **Harshit Jaglan**

