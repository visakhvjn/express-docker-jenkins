## Trying out Jenkins with Docker

The application is a simple web application powered by express that runs on port 80. What we are trying to acheive here is this 

1. Push to the `main` branch of the repo
2. Make Jenkins fetch the code 
3. Make a docker image of this
4. Push to docker hub
5. Use that image to deploy to a linode machine