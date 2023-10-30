# WikiJS Test
Test wiki.js instance in docker for theming purposes on-the-fly.

For daemon mode:
```sh
docker run -d -p 8080:3000 --name wikijs --restart unless-stopped -e DB_TYPE=sqlite requarks/wiki
```

In terminal:
```sh
docker run -p 8080:3000 --name wikijs --restart unless-stopped -e DB_TYPE=sqlite requarks/wiki
```
