# Firebase To-Do List Application

This is a to-do list application built with Angular that allows users to log in through their Google or GitHub accounts and manage their personal to-do lists. The tasks are stored in Firestore, and the application is deployed on Firebase.

## Features
- **User Authentication**: Log in using Google or GitHub accounts.
  ![image](https://github.com/user-attachments/assets/09af504c-80e7-43e9-af7f-d8c87c90fe06)

- **Task Management**: Add, update, and delete tasks.
- **Firestore Integration**: Store and manage tasks in Firestore.
- **Real-Time Updates**: Tasks are updated in real-time across all devices.
  ![image](https://github.com/user-attachments/assets/0cd8dfd8-e578-4f00-a391-4414571374d8)


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
