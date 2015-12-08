# Elo7 - Landing Page

What was used on the project:

  - **NodeJs & NPM & Gruntfile & Bower** - To up a server, do the asset pipeline and manage the packages
  - **Yeoman** - To do the basic scaffolding (Project structure)
  - **Ruby** - To precompile SASS
  - **HTML5 & SASS & JS** - Project front-end
  - **Docker** - To provide an easier way to run the project

> The landing page should run on IE(>8), Firefox and Chrome.

### Installation

Essentially you need:

Ruby + SASS

```sh
$ sudo apt-get install ruby | $ sudo brew install ruby
$ gem install sass
```

NodeJs + NPM

```sh
$ sudo apt-get install -y nodejs npm
$ sudo apt-get install -y build-essential nodejs-legacy
```

Now lets move to the packages and tools that can be generated by what we already install:

```sh
$ npm i
$ bower i
```

Optional (Docker): http://docs.docker.com/engine/installation/

### Running

Grunt:

```sh
$ grunt serve
```

Or Docker:

- sudo docker build -t elo .
- sudo docker run -ti -p 8080:9000 -v `pwd`/app:/src/app elo

To execute the bash inside Docker:

- sudo run -ti -p 8080:9000 elo /bin/bash