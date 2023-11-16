# SpaceBook

SpaceBook is an intergalactic social network. Sign up to create your profile, share your favorite planet, and connect with friends. Create posts on your page to share news, facts, or thoughts about space. You might think this app reminds of you of MySpace, but SpaceBook is out of the this world!

## Tech Being Used

- HTML
- CSS
- JavaScript
- Express
- Mongoose
- React
- EJS
- oAuth 2.0

## ERD
![ERD](wireframes/PNGS/ERD.png)

## Restful Routing Chart

RESTful Routes
| HTTP METHOD (_Verb_) | URL (_Nouns_)     | CRUD   | Response                             |
| -------------------- | ----------------- | ------ | ------------------------------------ |
| GET                  | /                 | READ   | Load Auth Page                       |
| POST                 | /                 | CREATE | Create user in DB                    |
| POST                 | /login            | READ   | Check if user cred are valid         |
| GET                  | /profile/:id      | READ   | Display profile and posts on profile |
| GET                  | /profile/:id/edit | READ   | Load Edit page                       |
| GET                  | /allProfiles      | READ   | Load all profiles page               |
| PUT                  | /profiles/:id     | UPDATE |                                      |
| DELETE               | /profiles/:id     | DELETE | Delete the user's profile            |
| POST                 | /profiles/:id     | CREATE | Create a new post on a page          |
|                      |                   |        |                                      |


## WireFrame
![Auth Page](wireframes/PNGS/$_signup_login.png)
![Profrile Page](wireframes/PNGS/profilepage.png)
![Edit Page](wireframes/PNGS/editPage.png)
![AllUser Page](wireframes/PNGS/allUsers.png)



## User Stories

AAU

- I want to be able to login with a username and password
- I dont want to have to login more than once within a 24hr period
- I want to create a personalized profile
- I want to see who else is on the app and add friends
- I want to share super cool facts about space on my page (make a post)

## MVP Checklist

- User can create account and login.
- User can add info to and update/delete their profile.
- User can create and read posts.
- User can add friends who are also users on the app.
- User's friends list will display on their profile.
- User can see a list of all users on the app.

## Stretch Goals

1. User can upload profile picture.
2. User can search based on name through list of all users.
3. User can edit and delete their posts.
4. User can comment on friend's 'wall'.
5. User can update/delete their posts on friends' 'wall'.
6. Spotify API integration for profile song
7. User has some level of control over the styling of their profile page.
8. User can 'like' friends posts.
9. User can delete their friends.
10. User can sort their 'top friends'.
11. NASA API integration.

## Maybe Roadblocks

- Feature creep
- Route mix up
- Spotify API integration
- Git collaboration
