# WebDevPool

## What is this Project ?

We have built an application where Tech persons(here we are targeting the developers community) can Create their profile, Update their experience and education and much more. 
This web application will be a platform for Developers where developers can share their details like experience, company they work for and even showcase their work by connecting their github repositories to their profile. People visiting the website can post comments and like the other people post and can have a discussion on a post/topic. There will be a single user associated to every profile on the basis of their email. This webapp is little similar to linkedin but relates to developers' community.
The user can share thoughts using create a post and other users can also like and comment on other’s posts.
We have created this application for the recruitment purpose also, so that recruiters can visit our application and can visit as many profiles and can select/contact the perfect fit employee for their company.

## Database:
 mongodb, moongose object document mapper.

## Schemas:
Total three schemas
### User:  
Contain name, email, password and avatar i.e the picture from the email address  is automatically added as their profile picture. If no pic is available a default avatar is added

### Profile: 
This refers to a particular user that is already registered.Apart from that other fields are company, skills, website, location, status, bio, githubusername. Experience: it is an array of objects with different fields related to expirience, data for this field is not mandatory so backend validation is not performed. Education:  it is an array of objects with different fields related to education, data for this field is not mandatory so backend validation is not performed. Social:  Contain field like facebook, linkedin etc.

### Posts: 
This refers to a particular user it has fields like comments, like. A user makes a post his avatar, name, and text post are visible.

## Technologies Used:
### Backend: 
Express, jwt authentication, bycrypt, express-validator , gravatar, config.

### Protected routes: 
In backend some routes are private and others public which is done by using json web token where the user id is sent as a payload through headers. This is done in auth middleware. To make a route private the auth middleware is called in router.get , post or delete.

### Routes User: 
This is a public route to perform user registration for the first time all the fields except avatar are required so backend validation are performed by using express-validator. Salting and hashing of the password is done by using bycrypt. Accessing the email photo is done using gravatar. Jwt sign in to pass the payload using jsonwebtoken. This is a post route.

### Routes Profile: 
To get the profile of registered and signed in user this is a private route.
To create or update profile wis a private route and validation is performed on the backend for the fields that are mentioned as required in the moongoose schema. Though not all fields are required.
This route gets the profile information of all users, it is a private route, this info is  visible to only authenticated users
This route gets the user profile on basis of the user id it is a public route.
This route  deletes the profile as well as the user and the posts it is a private route.
This route updates the expirience array of objects in moongose schema it is a put route and private.
This route deletes the user expirience.
This route is exactly same as expirience it is used to update and delete user education both is private route one is put other is delete.
This route is a private to get the github repo on the basis of the githubusername it is done using the github api.


### Routes Post: 
There are two get routes and both public to get the post of all users and by user id.
This is a post route to make a new posts it is a private route.
This route  deletes the posts it is private route.
There are two routes to like and unlike a comment both are private.
Comment route it is a private and post route to make comments.
Delete comment private route.

### Config: 
Js library to handle global variable like json web token secret key, mongo cloud key with database name and password etc.This library helps to access the values on the basis of the keys stored in a js object.


### Frontend: 
React, Redux, Redux-thunk, React-hooks.

There is posts page, sign up, dashboard, profile page

In the frontend the first landing page  have two option signup or login with a background image. On basis of choosing the option it  goes to the desired route

After logging in the dashboard for every user there are fields like education and expirience to update and delete them.There is  also an option to edit profile.Social network links.

Posts can be liked by the same user only once or unliked.

React hooks are used to maintain state in functional components.Store is created using redux and react-redux for global state management of the application to pass the data to child components from the global state.The are total six reducers inside client/src/reducers they are alert, auth, profile post.The above mentioned reducers are combined using the combineReducers method inside the index.js in the destination mentioned above.The jwt id is stored in local storage.

## Who does the project impact? Who is the end user?

Tech peoples - The naive tech learners who do not have proper guidance and platform to share their experiences and get help from others technical peoples, so that they will be able to ask and discuss new technology and argue their thought process and make any changes if it is required.

The people from IT technical backgrounds, worldwide, students, learners, experts, web developers, programmers, system designers and all the people who want to take help or help others. 

## Screenshots Walkthrough:

### Home Page

![Home Page](https://user-images.githubusercontent.com/63305945/102266269-371b7280-3f3e-11eb-98bf-414b5748c4d7.png)

### Register Page

![Signup](https://user-images.githubusercontent.com/63305945/102266336-50242380-3f3e-11eb-84f2-713433fb4862.png)

### Registration Successful popup and mail sent to emailid

![registration successful message](https://user-images.githubusercontent.com/63305945/102267726-55826d80-3f40-11eb-85cc-ac0f47a917d0.png)

### Login Page

![Login](https://user-images.githubusercontent.com/63305945/102266346-54504100-3f3e-11eb-8f28-e62e192d9e25.png)

### User Dashboard Page

![Dashboard](https://user-images.githubusercontent.com/63305945/102266410-67fba780-3f3e-11eb-948a-3efde5b51fe4.png)

![dashboard continued](https://user-images.githubusercontent.com/63305945/102266435-6fbb4c00-3f3e-11eb-9fa9-1e2cf7602351.png)

### All Users Profiles Page

![all profiles](https://user-images.githubusercontent.com/63305945/102266627-b8730500-3f3e-11eb-83e0-bc1cdedc2972.png)

### Individual Profile Page

![profile individual](https://user-images.githubusercontent.com/63305945/102266634-bb6df580-3f3e-11eb-94ee-fe4f567b47d7.png)

### Individual Profile Page continued..

![profile individual 2](https://user-images.githubusercontent.com/63305945/102266644-be68e600-3f3e-11eb-893d-cc0098aaa92c.png)

### GitHub repos on Profile Page

![github repos on profile](https://user-images.githubusercontent.com/63305945/102266677-c88ae480-3f3e-11eb-823c-a7e8b1880242.png)

### Posts Page

![posts](https://user-images.githubusercontent.com/63305945/102266687-cc1e6b80-3f3e-11eb-9bfe-eba412b3cd4a.png)

### Comments on Posts

![comments on posts](https://user-images.githubusercontent.com/63305945/102266713-d50f3d00-3f3e-11eb-81d9-a11875e1847e.png)

### Add Education Page

![add education](https://user-images.githubusercontent.com/63305945/102266731-d9d3f100-3f3e-11eb-920e-000281622990.png)

### Add Experience Page

![add experience](https://user-images.githubusercontent.com/63305945/102266736-dccee180-3f3e-11eb-887f-64b7826a2d82.png)


