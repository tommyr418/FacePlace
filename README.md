# FacePlace!

[FacePlace Live](https://faceplace2017.herokuapp.com/)

FacePlace is a full-stack social media platform designed to mimic the popular website Facebook. It uses Ruby on Rails to handle the backend, on top of a  PostgresSQL database, with the frontend handled by React.js which uses the Redux architectural framework.

## Features

### User Profiles

Profiles are stored modularly in the database as profile entries of which a user can have an unlimited amount. They are associated with a user via a user_id foreign key and presorted into categories and subcategories. In order to create a profile entry, a user simply hits the 'add info' button on their main page and a modal with a modular form will appear. Users can then select a category, subcategory and input a entry

### Friending

Users can add one another to their friends lists by hitting the Add friend button on the potential friend's page, a request will be sent to the potential friend. The potential friend will have pending requests in dropdown menu on their header where they can accept or decline the request.

### Posting

At the user's convenience there is a post creation form on every user page to add a post the that user's wall. users can also post to their own walls from the main page.

### News Feed

All the posts that are related to the user and the user's friends are displayed on the front page.

## Future Directions for FacePlace

### Search

Users should be able to find anyone on the platform by inputing a name on the search bar.

### Events

Users should be able to plan events with the ability to send invitations to friends

### Notifications

Users should be alerted to any changes worthy of news such as a friend posting on their wall, a upcoming birthday or event, etc.
