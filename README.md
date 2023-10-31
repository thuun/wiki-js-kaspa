# WikiJS Theme for Kaspa Wiki
A theme for the [Kaspa Wiki](https://wiki.kaspa.org)

To build the theme, you'll need sass:
```sh
apt install sass
```

Then to build the `theme/`:
```sh
sass --style=nested --sourcemap=none --watch kaspa-wiki.scss:publish/wiki.css
```

Create a database:
```sh
mkdir data && chmod 777 data
```

For daemon mode:
```sh
docker run -d -p 8080:3000 --name wikijs --restart unless-stopped -e DB_TYPE=sqlite -e DB_FILEPATH=/srv/db.sqlite -v "$(pwd)/data:/srv:rw" requarks/wiki
```

In terminal:
```sh
docker run -p 8080:3000 --name wikijs --restart unless-stopped -e DB_TYPE=sqlite -e DB_FILEPATH=/srv/db.sqlite -v "$(pwd)/data:/srv:rw" requarks/wiki
```
