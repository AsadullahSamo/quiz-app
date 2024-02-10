# Project Brief

## Dive into the Quiz App
Dive into the Quiz App, a sleek web application that generates a new set of 10 random questions every time you play, offering a fresh and exciting challenge with each session. It's a streamlined and interactive way to test your trivia prowess across a variety of categories and difficulties.

## What You Will Learn
- **API Integration:** Learn to integrate with the Open Trivia DB API, understanding how to handle API keys, read documentation, and manipulate the retrieval of random questions to ensure a unique quiz each time.
- **Interactive UI Development:** Develop a user interface that not only looks good but is highly interactive, handling user inputs with immediate feedback on their answers.
- **State Management:** Master the management of application state to track user progress across different questions and sessions within the quiz.
- **Responsive Design:** Create a responsive design that provides a seamless experience across desktop, tablet, and mobile devices, adapting the layout to fit various screen sizes.

## Requirements
1. Begin by exploring the Open Trivia DB API. Understand its structure, how to fetch random questions, and configure your application with an API key.
2. Construct the homepage featuring the quiz logo, title, description, and a "Let's Get Started" call-to-action button (non-functional for now) that prepares the user for the quiz.
3. Upon initiating the quiz by clicking the "Let's Get Started" button, fetch and present a sequence of 10 questions with four answer choices each from the API, highlighting selections while hovering.
4. Implement revealing correct or incorrect answers logic upon clicking the question with intuitive color-coded feedback and proper icons. Once the user clicks the question, show the "Next Question" button to easily navigate to the next question.
5. After the last question, show a "Check Your Results" button that leads to a results summary (can be an empty page for now).
6. Display a circle-shaped progress indicator with the text of how many questions the user answered in a centered card.
7. Display a summary card with a "Your answers" title that lists the numbered user's answers and/or correct answers with visual icons indicating correct or incorrect responses.
8. Implement a sticky navigation bar with options to return home or start a new quiz, ensuring it's accessible at any point in the results page of the quiz.
9. Adapt the UI for tablet dimensions, optimizing space and layout.
10. Adapt the UI for mobile dimensions, and adjust some of the buttons on smaller screens in a column layout.
