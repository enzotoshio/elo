Para rodar a aplicação, instale o Docker na máquinha e execute os seguintes
passos dentro do diretório do projeto:

- sudo docker build -t elo .
- sudo docker run -ti -p 8080:9000 -v `pwd`/app:/src/app elo

Para executar o bash dentro da aplicação:

- sudo run -ti -p 8080:9000 elo /bin/bash
