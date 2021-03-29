<h3 align="center">
    <b>Desafio Pokémon</b>
    <br><br>
    <p align="center">
        <img src="https://img.shields.io/badge/By-Jac%C3%B3%20Apolin%C3%A1rio-fd951f">
        <img src="https://img.shields.io/badge/License-MIT-fd951f">
    </p>
</h3>

## 🚀 Sobre
O desafio do Pokémon é um teste de Desenvolvimento Web passado pela RedFox. O objetivo do desafio é criar um sistema que substitua o uso de excel, de forma que eu consiga expandir os meus dados e acrescentar funcionalidades. 

## 💻 Tecnologias
- [Express](http://expressjs.com/en/5x/api.html#app.use)
- [Jsonwebtoken](https://github.com/auth0/node-jsonwebtoken#readme)
- [Mongoose](https://mongoosejs.com/docs/guide.html)

## ✅ Rotas: 
### Rotas públicas
| Método | Rota | Função | Campos 
|--|--|--|--|
| POST | /user | Cadastra um usuário | name, email, password | 
| POST | /session | login de usuário na aplicação | email e password | 

### Rotas Privada
| Método | Rota | Função | Campos 
|--|--|--|--|
| GET | /user | Lista usuários da aplicação | | 
| GET | /pokemon | Lista todos os pokemons | | 
| POST | /pokemon/create | Cria pokemons | name, pokedex_number, generation, evolution, family_id, stat_total, atk,def, sta, legendary | 
| PUT | /pokemon/:id | consulta e atualiza as informações de um pokemon na aplicação| | 
| DELETE | /pokemon/:id | Deleta um pokemon da aplicação | |

## 👷🏾‍♂️ Como usar?
<h4> Você precisa das seguintes ferramentas instaladas para executar este projeto: </h4>
 <p> <a href="https://nodejs.org/en/">Node.js<a>, <a href="https://yarnpkg.com/">Yarn</a> e vai precisar criar uma conta no <a href="https://www.mongodb.com/"> MongoDB. </a> </p>

```bash
# Faça um clone
$ git clone https://github.com/Jacoappolinario/Teste-Desenvolvimento-Web.git

# Navegue até o repositório clonado:
$ cd Teste-Desenvolvimento-Web

# Baixe as dependências:
$ yarn install
```
Crie um arquivo .env na pasta do projeto, adicione as crendeciais de conexão do MongoDB nele, e adicione a chave secreta para o auth que será responsavel pela parte de autenticação de usuário como no arquivo .env-example.

```bash
# Divirta-se
$ yarn start
```
#### Atenção: 
Para ter acesso as rotas privadas, você vai precisar pegar o token recebido durante o cadastramento de usuário e clicando em "Auth" caso esteja utilizando o Insomnia, você vai adicionar o token em "Bearer Yoken". Repetindo esse passo em cada rota privada que for utilizar.

## 📕 Licença
Lançado em 2021. Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](/LICENSE) para mais detalhes.

---

Feito com 💙 by [Jacó Apolinário](https://www.linkedin.com/in/jacoapolinario/)
