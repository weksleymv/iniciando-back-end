# Aula 04 - Iniciando back-end

Nessa aula foi terminado o desenvolvimento do back-end da aula anterior que recebe requisiçes HTTP através do http://localhost:3333/ e salva os dados em banco de dados Postgres.

*para rodar esse projeto, você vai precisar estar rodando um banco de dados Postgres com nome "gostack_gobarber", instalar as libs com o comando **yarn** e rodar o projeto com o comando **yarn dev:server***

**ATENÇÃO** para as requisições de criar e listar agendamentos e atualizar avatar é necessário estar autenticado através da rota 'Sessions" e enviar o token criado junto à requisição!


As requisições aceitas são:

- Para agendamentos:

+ **GET** (/appointments) para **listar** todos os agendamentos salvos.

  + A resposta é dada em uma lista de projetos. Como abaixo:
```JSON
[
  {
    "id": "355ddda2-67d8-4088-868b-cffbedf11b29",
    "provider_id": "fa25a010-016c-4c99-bc2c-b465999ab8e4",
    "date": "2020-04-28T11:00:00.000Z",
    "created_at": "2020-04-28T14:58:52.269Z",
    "updated_at": "2020-04-28T14:58:52.269Z"
  },
  {
    "id": "90e1fdac-b3a7-4481-80d4-725e402bb5e0",
    "provider_id": "fa25a010-016c-4c99-bc2c-b465999ab8e4",
    "date": "2020-04-28T12:00:00.000Z",
    "created_at": "2020-04-28T15:04:22.717Z",
    "updated_at": "2020-04-28T15:04:22.717Z"
  }
]
```


+ **POST** (/appointments) para **criar** um novo agendamento.

  + O provider_id deve existir para conseguir ter sucesso na requisição. Deve-se enviar os dados no corpo da requisição. Como abaixo:

```JSON
{
	"provider_id": "fa25a010-016c-4c99-bc2c-b465999ab8e4",
	"date": "{% now 'iso-8601', '' %}"
}
```


- Para usuários:

+ **POST** (/users) para **criar** um novo usuário.

  + Deve-se enviar os dados no corpo da requisição. Como abaixo:

```JSON
{
	"name": "John Doe",
	"email": "johndoe@example.com",
	"password": "123456"
}
```

+ **PATCH** (/users/avatar) para **criar** ou **modificar** o avatar do usuário.

  + O provider_id deve existir para conseguir ter sucesso na requisição. Deve-se enviar os dados no corpo da requisição. Como abaixo:

*essa rota precisa ser enviada junto com o arquivo do avatar no corpo da requisição e o token de autenticação junto aos parâmetros*


- Para Sessions:



+ **POST** (/sessions) para **criar** uma nova sessão de usuário.

  + Deve-se enviar os dados para realizar a sessão. Como abaixo:

```JSON
{
	"email": "johndoe@example.com",
	"password": "123456"
}
```
"# iniciando-back-end"


# Recuperação de senha
**Requisitos Funcionais**
- O usuário deve poder recuperar sua senha informando seu e-mail;
- O usuário deve receber um e-mail com instruções de recuperação de senha;
- O usuário deve poder resetar sua senha;

**Requistios Não Funcionais**
- Utilizar Mailtrap para testar envios em ambiente de dev;
- Utilizar Amazon SES para envios em produção;
- O envio de e-mails deve acontecer em segundo plano (background job);

**Regras Negocio**
- O link enviado por e-mail para resetar senha, deve expirar em 2h;
- O usuário precisa confirmar a nova senha ao resetar;

# Atualização do perfil
**Requisitos Funcionais**
- Usuário deve poder atualizar seu nome, e-mail e senha;

**Requistios Não Funcionais**

**Regras Negocio**
- O usuário não pode alterar seu e-mail para um e-mail já utilizado;
- Para atualizar sua senha, deverá ser informardo a senha antiga;
- Para atualizar sua senha, deverá ser informado a antiga;

# Painel do prestador
**Requisitos Funcionais(RF)**
- O usuário deve poder listar seus agendamentos de um dia específico;
- O prestador deve receber uma notificação sempre que houver um novo agendamento;
- O prestador deve poder visualizar as notificações não lidas;

**Requistios Não Funcionais(RNF)**
- Os agendamentos do prestador no dia devem ser armazenadas em cache;
- As notificações do prestador devem ser armazenadas no MongoDB;
- As notificações do prestador devem ser enviadas em tempo-real utilizando Socket.io;

**Regras Negocio(RN)**
- A notificação deve ter um status de lida/não lida para que o prestador possa controlar;

# Agendamento de serviços
**Requisitos Funcionais**
- O usuário deve poder listar todos os prestadores de serviço cadastrados;
- O usuário deve poder listas os dias de um mês com pelo menos um horário disponível de um prestador;
- O usuário deve poder listar hosrários especificos de um dia de um prestador;
- O usuário deve poder realizar um novo agendamento para um prestador;

**Requistios Não Funcionais**
- A listagem de prestadores deve ser armazenada em cache;

**Regras Negocio**
- Cada agendamento deve durar 1h exatamente;
- Os agendamentos devem estar disponíveis entre 8h às 18hs (primeiro as 8hs, último as 17h);
- O usuário não pode agendar em um horário ja marcado;
- O usuário não pode agendar em um horário do passado;
- O usuário não pode agendar serviços com ele mesmo;



