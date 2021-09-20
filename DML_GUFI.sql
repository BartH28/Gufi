USE GUFI_TARDE
GO

INSERT INTO tipoUsuario(tituloTipoUsuario)
VALUES ('ADMINISTRADOR'),('COMUM')
GO

SELECT * FROM tipoUsuario

INSERT INTO usuario(idTipoUsuario, nomeUsuario, email,senha)
VALUES (1,'ADMINISTRADOR','adm@email.com' ,'adm1234567'),(2, 'Lucas','Lucas@email.com' ,'lucas12345'),(2,'Saulo','Saulo@email.com' ,'Saulo12345')
GO

INSERT INTO instituicao(CNPJ, nomeFantasia, endereço)
VALUES ('999999999', 'Escola SENAI de Informatica','Al.Barão de Limeira, 539' );
GO

INSERT INTO evento (idTipoEvento, idInstituicao, nomeEvento, descricao, dataEvento, acessolivre)
VALUES (1,1, 'ORIENTAÇÃO A OBJETOS', 'Conceitos sobre os pilares da programação orientada a objetos', '18/08/2021 18:00',1), (2,1, 'CICLO DE VIDA','Como utilizar os ciclos da vida com a biblioteca ReactJS', '19/08/2021 10:00', 0)
GO

INSERT INTO tipoEvento (tituloTipoEvento)
VALUES ('C#'),('REACTJS'), ('SQL');
GO

INSERT INTO situacao (descricao) 
VALUES ('APROVADA'),('RECUSADA'), ('AGUARDANDO');
GO

INSERT INTO presenca (idUsuario, idEvento, idSituacao)
VALUES (2,2,3),(3,3,1);
GO

SELECT * FROM evento
SELECT * FROM instituicao
SELECT * FROM presenca
SELECT * FROM situacao
SELECT * FROM tipoEvento
SELECT * FROM tipoUsuario
SELECT * FROM usuario

SELECT U.nomeUsuario Usuário,
          TU.tituloTipoUsuario [Tipo de Usuário],
          U.email [Email do Usuário],
		  E.nomeEvento [Nome do Evento],
		  E.dataEvento,		 
		  convert(varchar(20),E.dataEvento,106) [Data do Evento], --TRATADO.
		  TE.tituloTipoEvento [Tipo do Evento],
		  I.nomeFantasia Instituição,
		  S.descricao Situação,
		  E.acessoLivre
   FROM usuario U
   INNER JOIN presenca P ON (U.idUsuario = P.idUsuario)
   INNER JOIN situacao S ON (P.idUsuario = S.idSituacao)
   INNER JOIN evento E ON (P.idEvento = E.idEvento)
   INNER JOIN tipoEvento TE ON (E.idTipoEvento = TE.idTipoEvento)
   JOIN instituicao I ON (E.idInstituicao = I.idInstituicao)
   INNER JOIN tipoUsuario TU ON (U.idTipoUsuario = TU.idTipoUsuario) 


   SELECT nomeEvento as Evento, S.descricao , nomeUsuario as Usuario FROM presenca P
   INNER JOIN evento E ON (P.idEvento = E.idEvento)
   INNER JOIN usuario U ON (P.idUsuario = U.idUsuario)
   INNER JOIN situacao S ON (P.idSituacao = S.idSituacao)
   WHERE P.idUsuario = 3
   go