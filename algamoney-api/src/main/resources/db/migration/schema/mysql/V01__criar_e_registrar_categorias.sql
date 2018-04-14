create table categoria (
codigo int PRIMARY KEY auto_increment,
nome VARCHAR(50) not NULL
) engine=InnoDB DEFAULT charset=utf8;

insert into categoria(nome) values ('Lazer');
insert into categoria(nome) values ('Alimentação');
insert into categoria(nome) values ('Supermercado');
insert into categoria(nome) values ('Farmácia');
insert into categoria(nome) values ('Outros');
