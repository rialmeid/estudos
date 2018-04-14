CREATE TABLE pessoa
(
    codigo INT PRIMARY KEY auto_increment,
    nome VARCHAR(100) NOT NULL,
    ativo BOOLEAN NOT NULL,
    logradouro VARCHAR(100),
    numero INT,
    bairro VARCHAR(50),
    cep VARCHAR(8),
    cidade VARCHAR(50),
    estado VARCHAR(2)
) engine=InnoDB DEFAULT charset=utf8;