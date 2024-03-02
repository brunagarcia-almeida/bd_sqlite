const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("empresa.sqlite", (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Conectado ao banco de dados 'Empresa' com sucesso!");

  // Passo 1: Criação das tabelas
  // db.run(
  //   "CREATE TABLE setor (idsetor int primary key, nome varchar(40), ramal varchar(4), e_mail varchar(30) )"
  // );
  // db.run(
  //   "CREATE TABLE funcionario (matricula int primary key, id_setor int not null, nome varchar(40), nascimento date, telefone varchar(15) )"
  // );

  // Passo 2: Inserção setores
  // db.run(
  //   "INSERT INTO setor (idsetor, nome, ramal, e_mail) values (1, 'Financeiro', '4254', 'fin@example.com')",
  // );
  // db.run(
  //   "INSERT INTO setor (idsetor, nome, ramal, e_mail) values (2, 'TI', '1652', 'ti@example.com')",
  // );
  // db.run(
  //   "INSERT INTO setor (idsetor, nome, ramal, e_mail) values (3, 'Comercial', '9658', 'com@example.com')",
  // );

  // Passo 3: Inserção funcionários
  // db.run(
  //   "INSERT INTO funcionario (matricula, id_setor, nome, nascimento, telefone) values (1234, 1, 'Ana', '12-04-1978', '01219219')"
  // );
  // db.run(
  //   "INSERT INTO funcionario (matricula, id_setor, nome, nascimento, telefone) values (1235, 3, 'Ivo', '12-12-2000', '07280921')"
  // );
  // db.run(
  //   "INSERT INTO funcionario (matricula, id_setor, nome, nascimento, telefone) values (1236, 2, 'Bruna', '30-06-1996', '996969')"
  // );
  // db.run(
  //   "INSERT INTO funcionario (matricula, id_setor, nome, nascimento, telefone) values (1237, 3, 'Juca', '10-01-1990', '0123123')"
  // );

  // Passo 4: Consulta de dados
  // db.each("select matricula, nome from funcionario", (err, row) => {
  //   if (err) {
  //     console.error(err.message);
  //   }
  //   console.log(row.matricula + "\t" + row.nome);
  // });
});
