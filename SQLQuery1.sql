CREATE DATABASE GUFI
GO

USE GUFI
GO

CREATE TABLE tipoUsuario(
idTipoUsuario INT PRIMARY KEY IDENTITY,
tituloTipoUsuario VARCHAR(50) UNIQUE NOT NULL
);
GO	

CREATE TABLE tipoEvento(
idTipoEvento INT PRIMARY KEY IDENTITY,
tituloTipoEvento VARCHAR(100) UNIQUE NOT NULL
);
GO	

CREATE TABLE situacao(
idSituacao TINYINT PRIMARY KEY IDENTITY,
descricao VARCHAR(50) UNIQUE NOT NULL
);
GO	

CREATE TABLE instituicao(
idInstituicao SMALLINT PRIMARY KEY IDENTITY,
CNPJ CHAR(18) UNIQUE NOT NULL,
nomeFantasia VARCHAR(100) NOT NULL,
endere�o VARCHAR(150) UNIQUE NOT NULL
);
GO		

--DROP TABLE usuario

CREATE TABLE usuario(
idUsuario INT PRIMARY KEY IDENTITY,
idTipoUsuario INT FOREIGN KEY REFERENCES tipoUsuario(idTipoUsuario),
nomeUsuario VARCHAR(100) NOT NULL,
email VARCHAR(256) NOT NULL UNIQUE,
senha VARCHAR(10) NOT NULL CHECK( len(senha) >= 8),
);
GO	

DROP TABLE evento

CREATE TABLE evento(
idEvento INT PRIMARY KEY IDENTITY,
idTipoEvento INT FOREIGN KEY REFERENCES tipoEvento(idTipoEvento),
idInstituicao SMALLINT FOREIGN KEY REFERENCES instituicao(idInstituicao),
nomeEvento VARCHAR(50) NOT NULL,
descricao VARCHAR(300) NOT NULL,
dataEvento DATETIME NOT NULL,
acessolivre BIT DEFAULT(1) NOT NULL
);
GO	

drop table presenca

CREATE TABLE presenca(
idpresenca INT PRIMARY KEY IDENTITY,
idUsuario INT FOREIGN KEY REFERENCES usuario(idUsuario),
idEvento INT FOREIGN KEY REFERENCES evento(idevento),
idSituacao TINYINT FOREIGN KEY REFERENCES situacao(idSituacao),
);
GO	