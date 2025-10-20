# Photography event management 
[![Hacktoberfest](https://img.shields.io/badge/Hacktoberfest-2025-blueviolet?style=for-the-badge&logo=hacktoberfest)](https://hacktoberfest.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](./LICENSE)
[![Open Issues](https://img.shields.io/github/issues/drakeRAGE/CaptureChronicles?style=for-the-badge)](https://github.com/drakeRAGE/CaptureChronicles/issues)
[![Stars](https://img.shields.io/github/stars/drakeRAGE/CaptureChronicles?style=for-the-badge)](https://github.com/drakeRAGE/CaptureChronicles/stargazers)
[![Forks](https://img.shields.io/github/forks/drakeRAGE/CaptureChronicles?style=for-the-badge)](https://github.com/drakeRAGE/CaptureChronicles/network/members)

This repository contains the source code for a Photography Event Management Website designed to showcase and manage photography events efficiently. The platform is built to cater to photographers, event organizers, and attendees, providing a seamless experience for managing event details, registration, and galleries.

![image](https://github.com/user-attachments/assets/60df99a8-ff5d-4e18-8cb1-50265d7b0eb7)


# Event Page
![image](https://github.com/user-attachments/assets/24c9911b-19ad-46a1-aba8-731a41b9eb2b)

![image](https://github.com/user-attachments/assets/62bcccb1-cbb4-4d05-b74f-e0e4323f5036)


## Installation

Install project with npm

```bash
  npm install 
  cd gallery
  npm install
```
    
## Run application

To run application , write command : 

```bash
    npm run dev
    cd gallery
    npm run dev
```

Access the website:
Open your browser and navigate to https://gallery-r19w.onrender.com 


## Features

**🎉 Event Management**
Create and Manage Events: Easily create, update, and delete events with detailed descriptions, locations, organizers, and dates.

Categorize Events: Automatically categorize events as Upcoming, Ongoing, or Previous based on their start and end dates.

Detailed Listings: Comprehensive listings with support for images, ticket fees, sponsor details, and more.

**📸 Photography Galleries**
Event-Specific Galleries: Each event can have its own gallery showcasing the best photographs.

Full-Screen Viewing: Utilize the react-fullscreen-image library for immersive viewing experiences.

Image Upload: Easy upload functionality for organizers to add and manage event photos.

**🗓️ User Engagement**
Registration System: Allow users to register for events with user-friendly forms.

Notifications: Keep users informed about event updates, changes, and reminders.

User Profiles: Registered users can manage their profiles and view their registered events.

**🛠️ Technical Stack**
Frontend: Built with React, Vite, and MUI for a modern, responsive, and fast user interface.

Backend: Utilizes Node.js, Express, and MongoDB for scalable and robust server-side operations.

Authentication: Secure authentication using JWT and Firebase for storing profile images.

Deployment: Easily deployable using cloud services or containers for scalability.
Installation


## 🔒 Protected Pages

Secure Access: The Event Page, Profile Page, Create-Event Page, and Update Event Page are protected and accessible only after successful login. This ensures that only authorized users can view and manage sensitive information.

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`MONGO`

`VITE_FIREBASE_API_kEY`

`JWT_SECRET`

`OPENCAGE_API_KEY`

## Deployment

To deploy this project run

```bash
  npm run build
```

## Contributing
We welcome contributions from the community! If you're interested in contributing to this project, please follow these steps:

Fork the repository.
Create a new branch for your feature or bug fix.
Commit your changes and push the branch.
Open a pull request detailing your changes.

## Usage
Admin Panel: Access administrative features to manage events, users, and site content.
User Dashboard: Users can view their profile, registered events, and explore upcoming events.
Gallery: Explore photographs from past events and upload new ones.


## Feedback

If you have any feedback, please reach out to us at crashbrown2004@gmail.com

