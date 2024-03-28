- Written in [BabelScript](https://babeljs.io/).
- [React](http://facebook.github.io/react/), [Flux](https://facebook.github.io/flux/), [react-router](https://github.com/rackt/react-router), [immutable.js](http://facebook.github.io/immutable-js/).
- Dev stack based on [gulp.js](http://gulpjs.com/) and [webpack](http://webpack.github.io/) configured both for dev and production.
- Server side rendering.
- CSS livereload and webpack module hot reload.

## Prerequisites

Install [iojs](https://iojs.org/) or [node.js](http://nodejs.org) (version 6.10.3 works, version 12 does not work anymore).
Then install [gulp.js](http://gulpjs.com/) (the code relies on version 3.9.0).

```shell
  npm install -g gulp@3.9.0
```

Some npm modules are required.

```shell
  npm install async
  npm install ladda
```

For dataset schema image generation, install [graphviz](http://www.graphviz.org/).

## Install

```shell
  git clone https://gitlab.fit.cvut.cz/ostrovac/dataset-repo.git
  cd dataset-repo
  npm install
```

## Run

- `gulp` start development
- `gulp -p` run app in production mode
- `gulp build -p` build in production mode

## Quality control

- Use [Broken Link Checker](http://www.brokenlinkcheck.com/) to validate that a user cannot accidentally kill the web.

## Upload datasets

- Create a new database on the server.
- Upload the data into the database. Make sure the tables are stored with InnoDB engine (not MyISAM, which doesn't support foreign key constrains). And if possible, prefer UTF-8 character set before latin1_swedish (the default value in old versions of MySQL).
- Add description of the data into meta.database and possibly into meta.dataset.
- Execute /assets/sql/meta_information.sql script to update meta.information.
- Validate the change on the webpage.

## Continuous Deployment

The `relational-data-page` application is configured with a continuous deployment pipeline. This means that any changes pushed to the `main` branch in the source repository are automatically built and deployed. Below are the details on how this process works and what you need to do to trigger a deployment.

### Triggering Continuous Deployment

1. **Commit Your Changes**: Make the necessary changes to your application code.

2. **Push to the Main Branch**:

   - Commit your changes to your local `main` branch.
   - Push the commits to the remote repository:
     ```bash
     git push origin main
     ```

3. **Deploy the latest revisions**
   - Follow [this scribe](https://scribehow.com/shared/Deploy_a_revision_from_Google_Cloud_Container_Registry__LOfor-PzTlGeLIAvLDrLTQ?referrer=workspace) to deploy the latest revision
   - Tl;dr: Click on "Edit & Deploy New Revision" and select the latest revision.

### What Happens Next

- **Automated Build**: Once the changes are pushed to the `main` branch, the continuous deployment pipeline is triggered. Google Cloud Build automatically starts building the Docker image based on the `cloudbuild.yaml` file in the repository.
- **Automated Testing (if configured)**: If you have set up automated tests, they will be executed during this build process. The deployment will proceed only if the tests pass.
- **Automated Deployment**: After a successful build, the new image is automatically deployed to Google Cloud Run. The `relational-data-page` service is updated with the new version of the application.

### Monitoring Deployment

- You can monitor the progress of the build and deployment in the Google Cloud Console, under Cloud Build and Cloud Run sections, respectively.
- In case of any issues during the build or deployment process, you can troubleshoot by checking the build logs in the Google Cloud Console.

### Important Notes

- Make sure only stable, review-passed code is pushed to the `main` branch, as this will trigger an automatic deployment to the production environment.
- Consider using a separate development branch for ongoing work, and merge to `main` only when ready for deployment.

## Manual Docker Deployment

This section outlines the steps for manually deploying the `relational-data-page` application using Docker. The process includes building the Docker container, testing it locally, tagging the image, pushing it to Google Artifact Registry, and then deploying it to Google Cloud Run.

### Build the Docker Container

First, build the Docker container for the `relational-data-page` application:

```bash
docker build -t relational-data-page .
```

This command builds the Docker image using the Dockerfile in the current directory and tags it as `relational-data-page`.

### Test the Container Locally

Before pushing the image to the Artifact Registry, test it locally to ensure everything is working correctly:

```bash
docker run -p 4000:80 relational-data-page
```

This command runs the Docker container and maps port 4000 on your local machine to port 80 in the Docker container. You can test the application by navigating to `localhost:4000` in your web browser.

### Tag the Local Docker Image

Tag the Docker image with the appropriate tag and the Artifact Registry path:

```bash
docker tag relational-data-page europe-west1-docker.pkg.dev/relational-data-org/relational-data-page/relational-data-page:[tagId]
```

Replace `[tagId]` with your specific tag identifier. This tag associates the local image with a version in the Artifact Registry.

### Push the Image to Artifact Registry

Upload the tagged image to the Google Artifact Registry:

```bash
docker push europe-west1-docker.pkg.dev/relational-data-org/relational-data-page/relational-data-page:[tagId]
```

Ensure you replace `[tagId]` with the same tag used in the previous step.

### Deploy the Image to Cloud Run

After pushing the image to the Artifact Registry, deploy it to Google Cloud Run:

- Navigate to the [Google Cloud Run Console](https://console.cloud.google.com/run/detail/europe-west1/relational-data-page/metrics?hl=en&project=relational-data-org).
- Select the `relational-data-page` service.
- Follow the instructions to deploy the new image.

### Access Control

If you do not have access to the GCP project and need to perform a deployment, please contact Alex at `alex@getml.com` for necessary permissions or assistance.

## Useful links for developers

- [React.js](http://facebook.github.io/react/).
- [What is the Flux application architecture](https://medium.com/brigade-engineering/what-is-the-flux-application-architecture-b57ebca85b9e).
- [Learn ES6](https://babeljs.io/docs/learn-es6/).
- [Immutable.js](http://facebook.github.io/immutable-js/) and [the case for immutability](https://github.com/facebook/immutable-js/#the-case-for-immutability).
- [Express.js](http://expressjs.com/)
- [Node.js](http://nodejs.org/api/)
- [Isomorphic javascript](http://isomorphic.net/javascript)
