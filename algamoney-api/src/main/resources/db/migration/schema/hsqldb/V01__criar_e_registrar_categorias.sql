create table categoria (
  codigo numeric PRIMARY KEY,
  nome VARCHAR(50) not NULL
);

insert into categoria(codigo, nome) values (1, 'Lazer');
insert into categoria(codigo, nome) values (2, 'Alimentação');
insert into categoria(codigo, nome) values (3, 'Supermercado');
insert into categoria(codigo, nome) values (4, 'Farmácia');
insert into categoria(codigo, nome) values (5, 'Outros');
