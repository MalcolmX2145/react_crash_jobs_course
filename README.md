# react_crash_jobs_course

This is a crash course project I used to learn React Library

## The Application

This is a web application that allows the user to find react developer jobs. 

I have used a mock backend called json-server to act as the server which will store all the json data used on the page.

It has crud functionality in that it the user can add a job, delete it, edit it ad view all the jobs. All this will then be reflected on the json file which runs the server.

Use `npm run build` to run the frontend and `npm run server` to the the backend.

## Things learned

### Components

React uses components which are just piecesof a UI in an application. The jist of it is that components have their own jsx file that holds the code of said component.

React allows to break down complex UIs, which make them easier to maintain and scale.

Components can get props passed in and can hold their own state.

## State

State represents the data that a component manages internally.

This could be form input data, fetched data, UI-related data like if a modal is open/closed.

There is also global state, which relates to the app as a whole and not a single component.

### Things I used

#### 1. react-icons

#### 2. json-server - (a library that enables you to create a mock api with crud functionality)

#### 3. Vite

#### 4. react-spinners - https://github.com/davidhu2000/react-spinners

#### 5. react-toastify

### Note that the form code I used in this project in is AddJobPage.jsx file under the pages folder.
