📌 blog-app
Este repositório foi criado com o intúito da criação de um blog em que professores possam postar, editar e remover atividades, avisos e outros para seus alunos e para que os alunos possam ter uma comunicação mais fluida com os temas que acontecem em sua sala de aula e escola.

📌 Índice
Sobre o Projeto
Tecnologias Utilizadas
Setup Inicial
Arquitetura da Aplicação
Guia de Uso
Sobre o Projeto
A aplicação criada tem funções como:

Página inicial com posts publicados
Leitura de posts
Postagem, remoção e deleção de posts (Apenas para professores)
Foi criada para o terceiro tech challenge que nos dá como objetivo uma construção de um site que possa auxiliar alunos e professores nas postagens feitas.

Tecnologias Utilizadas
As tecnologias usadas no front-end foram: React e typescript

Setup Inicial
Passo a passo para rodar o projeto front-end localmente:

Clone os repositórios:
git clone https://github.com/XxVinny100xX/blog-app
e
git clone https://github.com/souleandromachado/blog-api
Acesse a pasta dos projetos (separadamente):
cd nome-do-projeto
Instale as dependências em ambos os repositórios:
npm install
Feito isso, tendo em vista que é necessário o docker instalado na máquina para que possamos executar o projeto back-end para o front-end, entre novamente na pasta do projeto back-end e execute o seguinte comando:
docker compose up -d --build
Após isso, confira se está tudo certo dando o comando:
docker compose logs
Estando tudo certo,volte para a pasta do projeto front-end e rode o projeto com o comando:
docker compose up -d --build
Acesse no navegador: http://localhost:5173
Arquitetura da Aplicação
📂 src/ ┣ 📂 assets/ → Imagens contidas no projeto e README do projeto ┣ 📂 components/ → Componentes reutilizáveis ┣ 📂 contexts/ → Autenticação ┣ 📂 pages/ → Pastas do projeto contendo as páginas do site ┣ 📂 reducer/ → Estado global da aplicação ┗ 📜 App.tsx → Componente principal

Guia de Uso
Para aluno: Primeiro será apresentado a guia inicial com todos as postagens feitas pelos professores: Posts
E então o aluno terá a possibilidade de acessar a postagem para melhor lê-la: Página de post

Para o professor: Ao abrir o site ele terá a mesma visão que o aluno, para ter acesso privilegiado ele deve clicar no botão "docente", onde a seguinte tela será apresentada: Login docente
Para poder acessar a tela de docentes, se autentique com o seguinte cadastro: E-mail: testesfiap3fsdt@gmail.com senha: 1234

Logo em seguida a página será novamente apresentada, porém, com as configurações de admin: Página de post professor

Clicando na primeira opção de "+Criar novo post", a tela ira mudar para uma tela de criação de posts como esta: Criação de post

Caso ele queira fazer a edição de um post, deve escolher a opção "Administrar posts": Administrar post

E quando clicar no post desejado: Editar post
