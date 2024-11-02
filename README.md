# Firebase To-Do List Application

This is a to-do list application built with Angular that allows users to log in through their Google or GitHub accounts and manage their personal to-do lists. The tasks are stored in Firestore, therefore users can experience real-time task update, and the application is deployed on Firebase.

## Features
- **User Authentication**: Log in using Google or GitHub accounts.
   <p align="center">
    <img src="https://github.com/user-attachments/assets/f8eafab7-4b0e-4083-b239-edbcfd3489ef" alt="Login via gmail or github accounts" width="60%"/>
  </p>
<br />

- **Task Management**: Add, update, and delete tasks.
- **Firestore Integration**: Store and manage tasks in Firestore.
- **Real-Time Updates**: Tasks are updated in real-time across all devices.
  <p align="center">
    <img src="https://github.com/user-attachments/assets/ffe87d1e-9517-42fd-985d-6c4da6735b23" alt="personalized todo list" />
  <p/>
  <p>
    <img src="https://github.com/user-attachments/assets/a405a9cf-4b39-47ba-8c4c-aa7bc90bc9d6" alt="realtime item management" />
  </p>
<br />



## Access the App
You can access the deployed application at the following URL:

[https://ng-firebase-todo-list-37033.web.app](https://ng-firebase-todo-list-37033.web.app)

## Developer Guide

### Prerequisites
To set up this project locally, you need the following tools installed:
- **Node.js** (version 16.x or higher)
- **npm** (version 7.x or higher)
- **Angular CLI** (version 18.1.0 or higher)
- **Firebase CLI** (for deployment)

### Installation
1. **Clone the repository**:
   ```bash
   https://github.com/SanduniNavoda/ng-firebase-todo-list-app.git
   cd firebase-todo-list
   
2. **Install the dependencies**:
   ```bash
   npm install

3. **Set up Firebase**:
- If you want to connect this project to your own Firebase project, you'll need to configure Firebase.
- Replace the Firebase configuration in `src/environments/environment.ts` with your own Firebase project credentials.

4. **Run the development server**:
   ```bash
   ng serve
   
- Navigate to http://localhost:4200/ to view the app.
- The app will automatically reload if you change any of the source files.


### Building the Project

1. **To build the project for production, run**:
   ```bash
   ng build --configuration production
The build artifacts will be stored in the dist/firebase-todo-list directory.

### Deployment

To deploy the application to Firebase Hosting:

1. **Build the project:**:
   ```bash
   ng build --prod

2. **Deploy to Firebase:**:
   ```bash
   firebase deploy
Ensure that you have configured the Firebase CLI with your Firebase project.

### Contributing
Contributions are welcome! Please submit a pull request with any improvements, bug fixes, or new features.

### License
This project is licensed under the MIT License - see the LICENSE file for details.
