# WikiJS Theme for Kaspa Wiki
A theme for the [Kaspa Wiki](https://wiki.kaspa.org).

You can use the theme directly by copying the [compiled theme](https://github.com/thuun/wiki-js-kaspa/blob/master/theme/publish/wiki.css) into your WikiJS instance. Navigate to Administration -> Themes, and under "Code Injection" drop the contents to the "CSS Override" then click Apply.

-----

## Development

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
