CREATE TABLE lancamento
(
  codigo INT IDENTITY PRIMARY KEY,
  descricao VARCHAR(50) NOT NULL,
  dt_vencimento date not null,
  dt_pagto date,
  valor decimal(10,2) not null,
  observacao varchar(100),
  cd_tipo int not null,
  codigo_categoria int not null,
  codigo_pessoa int not null
);