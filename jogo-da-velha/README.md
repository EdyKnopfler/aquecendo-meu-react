# Tutorial de React: Jogo da Velha

Tutorial oficial presente em: https://react.dev/learn/tutorial-tic-tac-toe

O código não é o mesmo! Foi refatorado para separar a lógica do jogo da lógica de apresentação:
* Uma classe `GameStatus` foi criada para representar o estado corrente da partida
* A ação de jogar (`makeMove`), ao invés de alterar o objeto, devolve um novo com o novo estado
* O histórico implementado é composto por uma lista de `GameStatus`
* Também, o tabuleiro é criado usando loops ao invés de colocar as linhas e colunas _hardcoded_ (não sei se isso torna mais legível, mas como exercício foi interessante!)

De acordo com o tutorial, a imutabilidade garante que 