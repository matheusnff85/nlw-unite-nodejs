# pass.in

O pass.in é uma aplicação de **gestão de participantes em eventos presenciais**.

A ferramenta permite que o organizador cadastre um evento e abra uma página pública de inscrição.

Os participantes inscritos podem emitir uma credencial para check-in no dia do evento.

O sistema fará um scan da credencial do participante para permitir a entrada no evento.

## Tecnologias Utilizadas

- Typescript, Fastify, Prisma, Zod.

## Requisitos

### Requisitos funcionais

- [x] O organizador deve poder cadastrar um novo evento;
- [x] O organizador deve poder visualizar dados de um evento;
- [x] O organizador deve poder visualizar a lista de participantes;
- [x] O participante deve poder se inscrever em um evento;
- [x] O participante deve poder visualizar seu crachá de inscrição;
- [x] O participante deve poder realizar check-in no evento;

### Regras de negócio

- [x] O participante só pode se inscrever em um evento uma única vez;
- [x] O participante só pode se inscrever em eventos com vagas disponíveis;
- [x] O participante só pode realizar check-in em um evento uma única vez;

## Rotas

O pass.in possui uma certa variedade de rotas que garantem seu funcionamento corretamente, são elas rotas para criação de eventos e realização de check-in, além de também retornarem informações sendo dos frequentantes do evento, informações do próprio evento, entre outras.

![alt text](./images/image.png)

É possível acessar as informações e seus detalhes exemplicados na imagem acima através da rota .../docs da aplicação, por lá é possível realizar testes as rotas bem como visualizar a entrada esperada e o retorno de cada uma das rotas.

## Como utilizar a aplicação

Caso deseje utilizar a aplicação localmente, basta realizar o clone do projeto por meio do comando
`git clone git@github.com:matheusnff85/nlw-unite-nodejs.git`.

Após realizado o processo, basta via terminal na pasta raiz do projeto utilizar o comando `npm install` para instalar suas dependencias.

Agora renomeie o arquivo `.env.example` para somente `.env` e use o comando `npm run build` após utilizado use `npm start` para iniciar a aplicação.

Com isso a aplicação estará funcionando, basta utilizar o comando `npx prisma db seed` caso deseje preencher o banco de dados com um evento e participantes ficticios, e caso também deseje ter uma visualização melhor dos dados preenchidos na tabela também como poder manipular os mesmos, basta utilizar o comando `npm run db:studio` em um terminal disponível.

Será aberta a visualização abaixo:

![alt text](/images/studio-1.png)
![alt text](/images/studio-2.png)

# Desenvolvido por: [Matheus Marinho](https://www.linkedin.com/in/matheus-marinhodsp/).
