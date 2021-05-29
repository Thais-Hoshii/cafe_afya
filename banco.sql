CREATE DATABASE teste;

CREATE TABLE contatos {
  id serial NOT NULL,
  nome VARCHAR(100) NOT NULL,
  email VARCHAR(150) NOT NULL,
  `comentario` TEXT,
  PRIMARY KEY (id)
}