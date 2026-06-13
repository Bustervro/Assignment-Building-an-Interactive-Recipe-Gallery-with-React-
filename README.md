# Assignment-Building-an-Interactive-Recipe-Gallery-with-React-

# Interactive Recipe Gallery

This is a React application that displays a recipe image gallery. Users can click Next and Previous buttons to move through a list of recipe images.

The app uses React state to track the current image index and includes boundary checks so users cannot go before the first image or past the last image.

## Technologies Used

- React
- Vite
- JavaScript
- CSS

## How to Run

npm install
npm run dev

## Features

- Displays recipe images
- Shows recipe descriptions
- Next button moves forward
- Previous button moves backward
- Boundary checks prevent going past the first or last image

## Normal Test Cases

1. Click Next from the first image. The gallery moves to the second image.
2. Click Next again. The gallery moves to the third image.
3. Click Previous. The gallery moves back to the second image.

## Edge Test Cases

1. On the first image, the Previous button is disabled.
2. On the last image, the Next button is disabled.
3. Clicking Next and Previous multiple times does not crash the app or go outside the image list.
