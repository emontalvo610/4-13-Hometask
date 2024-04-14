# 4-13-Hometask

## Description

This project is a web application that captures the content of a webpage at regular intervals and sends the captured data to a Node.js backend server for storage on the local computer.

## Features

- Captures the webpage content as an image every 5 seconds
- Sends the captured image data to a Node.js backend server
- Saves the received image data to a local directory on the server

## Screenshots
![Border Radius Generator](/screenshots/Annotation%202024-04-14%20031433.jpg "Border Radius Generator")
![Box Shadow Generator](/screenshots/Annotation%202024-04-14%20031549.jpg "Box Shadow Generator")
![Text Shadow Generator](/screenshots/Annotation%202024-04-14%20031559.jpg "Text Shadow Generator")
![CSS Cursor Generator](/screenshots/Annotation%202024-04-14%20034131.jpg "CSS Cursor Generator")

## Requirements

1. https://cssgenerator.org/box-shadow-css-generator.html
2. https://cssgenerator.org/border-radius-css-generator.html
3. https://cssgenerator.org/text-shadow-css-generator.html
4. https://cssgenerator.org/css-cursor-demonstrator-and-generator.html
5. Backend: Take a screenshot of the web page every 5 secs and save in harddisk

## Frontend

### Tech Stacks

- Next.js
- App router
- Axios
- HTML2Canvas
- CopyToClipBoard

### Features

- Border Radius Generator
  - All Corner Radius controller
  - Top Left Radius controller
  - Top Right Radius controller
  - Bottom Left Radius controller
  - Bottom Right Radius controller
  - Border Style Width controller
  - Border Style option
  - Background color picker
  - Border color picker
- Box shadow Generator
  - Horizontal Length controller
  - Vertical Length controller
  - Blur Radius controller
  - Spread Radius controller
  - Shadow Color picker
  - Shadow Opacity controller
- CSS cursor Generator
  - Cursor List options
- Text shadow Generator
  - Horizontal Length controller
  - Vertical Length controller
  - Blur Radius controller
  - Spread Radius controller
  - Shadow Color picker
  - Shadow Opacity controller
- Copy css styles to the clipboard

### Challenges

- How to adopt the dynamic css styles with tailwind CSS to the preview screen
- How to implement pixel perfect design
- How to copy the styles to the clipboard

### Solutions

- We should use inline style css, since Tailwind CSS doesn't support dynamic css
- We can take a look at that css attriubutes and elements of each component on this site: https://cssgenerator.org/box-shadow-css-generator.html
- We can use navigator object in javascript to copy the styles to the clipboard

### Utilization Functions

- HexToRGB (RgbToHex)
- CopyToClipBoard

## Backend
### Tech Stacks
- Node.js
- Express.js
- Cors module

### API features
- api/capture
	- Body: ImageData (Canvas DataURI)

## How to use this program

### Prerequisites
- Node.js and npm installed on your machine

### Installation

1. Clone the repository

2. Set up the node modules on both front end and back end side

```shell
npm install
```

3. Run the program

```shell
npm run dev
```

4. Open your web browser and visit `http://localhost:3000` to see the application running.

### Usage

The webpage content will be captured every 5 seconds, and the captured image data will be sent to the backend server. The server will save the received image data to the `captured_images` directory in the server folder, with the file name based on the current timestamp.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).






