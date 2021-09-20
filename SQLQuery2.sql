USE GUFI
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

INSERT INTO evento (idTipoEvento, idInstituicao, nomeEvento, descricao, dataEvento)
VALUES (1,1, 'ORIENTAÇÃO A OBJETOS', 'Conceitos sobre os pilares da programação orientada a objetos', '18/08/2021 18:00',1), (2,1, 'CICLO DE VIDA','Como utilizar os ciclos da vida com a biblioteca ReactJS', '19/08/2021 10:00', 0)
GO
