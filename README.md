# api-boilerplate

A simple hot reloading Express API boilerplate with an example docker-compose setup.

Uses `nodemon` for automatic server restarting.

Expects `PORT` to be set as an environment variable.

Copy the contents of `example.env` and `example.docker-compose.yml` into the parent folder - into files without the `example.` prefix. 

Then from the command line in the parent folder:

  * Build with `docker-compose build`
  * Run with `docker-compose up`

To install new packages: Run the api docker with `docker-compose run api sh` and then use `api install <package_name>`. Type `exit` to return to your command line and then rebuild and rerun - only this time add a -V switch... `docker-compose up -V`. This will force the deletion of the anonymous node_package volume and prevent a [docker race condition issue.](https://github.com/docker/compose/issues/4337)
