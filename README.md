# DoneWithIt

Welcome to **DoneWithIt**, a mobile app built with **React Native**, designed to help users sell and purchase used items easily and conveniently. This project showcases a simple yet powerful implementation of a marketplace, focusing on clean UI/UX and robust functionality.

---

## Features

- **Sell Items**: Users can post items they no longer need with descriptions, images, and pricing.
- **Buy Items**: Browse a wide range of items posted by other users.
- **Messaging System**: Communicate with sellers directly within the app.
- **Image Uploading**: Capture or upload photos for listings.
- **Authentication**: Secure user login and registration.
- **Responsive Design**: Optimized for various screen sizes.

---

## Technologies Used

- **React Native**: For building cross-platform mobile applications.
- **Expo**: For development, build, and deployment.
- **Node.js & Express** (Backend): To handle server-side operations.
- **MongoDB**: As the database to store user and product data.
- **Cloudinary**: For image storage and processing.

---

## Setup Instructions

### Prerequisites

Ensure you have the following installed on your machine:

- Node.js (v14+)
- npm or yarn
- Expo CLI
- MongoDB (or use a hosted service like MongoDB Atlas)

### Steps to Run

1. **Clone the Repository**  
   ```bash
   git clone https://github.com/SaidAbderrahmane/DoneWithIt.git
   cd DoneWithIt
   ```

2. **Install Dependencies**  
   ```bash
   npm install
   ```

3. **Set Up Backend**  
   - Navigate to the `server` directory.
   - Configure your `.env` file with your MongoDB URI and other environment variables.
   - Start the backend server:
     ```bash
     npm start
     ```

4. **Run the App**  
   - Start the Expo development server:
     ```bash
     npm start
     ```
   - Use the Expo Go app to view the app on your device, or use an emulator/simulator.

---

## Folder Structure

```plaintext
DoneWithIt/
├── assets/          # Images and other static resources
├── components/      # Reusable UI components
├── screens/         # Individual screens of the app
├── navigation/      # Navigation configuration
├── services/        # API and backend interaction logic
├── server/          # Backend logic (Express.js)
├── .env             # Environment variables (add manually)
├── App.js           # Entry point of the application
└── README.md        # Project documentation
```

---

## Contributing

Contributions are welcome! If you'd like to contribute:

1. Fork the repository.
2. Create a new branch (`feature/my-feature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/my-feature`).
5. Open a Pull Request.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Contact

If you have any questions or suggestions, feel free to reach out:

- **Author**: [Said Abderrahmane](https://github.com/SaidAbderrahmane)
- **LinkedIn**: [linkedin.com/hadj-said-abderrahmane](https://linkedin.com/hadj-said-abderrahmane) 

--- 

Happy coding! 🚀
