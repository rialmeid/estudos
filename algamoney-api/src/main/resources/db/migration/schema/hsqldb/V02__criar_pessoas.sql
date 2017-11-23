CREATE TABLE pessoa
(
  codigo INT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  ativo BOOLEAN NOT NULL,
  logradouro VARCHAR(100),
  numero INT,
  bairro VARCHAR(50),
  cep VARCHAR(8),
  cidade VARCHAR(50),
  estado VARCHAR(2)
);