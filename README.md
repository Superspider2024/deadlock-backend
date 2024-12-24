# deadlock-backend
- This is the backend code of the deadlock site featured online. It is deployed and hosted on Heroku and, yes I know the code is ugly and terrible but for the most part it works

# Documentation of versions
## Note any version starting with 0. was prior to production

## version 0.0.0
- basic backend code setup to handle all the features needed

## version 0.0.1
- I added CORS module and a few changes to allow communication with frontend

## version 0.0.3

- Major bug fix of 'Lauren' luckily caught in development prior to production. It involved a one-click application-layer permanent DDOS crash on the backend server hence the site was unusable until manual reboot.

- The bug "Lauren" was due to the fact the backend server was tricked into sending two responses to the same request hence causing a "ERR_HTTP_HEADERS_SENT" error in the node.js/express server. This was cuased when an invalid search was made in the leaderboards site.

- I was able to improve error handling on all controllers and asynchronous functions due to the severe bug-"Lauren".

## version 0.0.4

- Implemneted the ELO algorithmn from chess.com to make the points much fairer. This allows those with low points to catch up and those with high not to dominate constantly. This also changed the whole votes router and controller.

## version 1.0.0
- Successfully deployed and changed the code alot to allow deployment to Railways. Fixed a bug in this version where a feature in Railways deformed the cloudinary URLs when sent to the frontend, preventing any image from loading!
