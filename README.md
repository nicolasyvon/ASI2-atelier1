# BackEnd du jeu de cartes :

### Contributeur : Nicolas Clain

Liste des fonctionalités:
- http://localhost:8081/api/game/putUser/userId1/userId2 : permet d'ajouter deux nouvelles personnes au jeu et de les lier. Chaque user créé aura donc au niveau de se paramètres l'id du joueur adverse.

- http://localhost:8081/api/game/getUsers : permet d'avoir la liste de tous les utilisateurs ayant accès au jeux. (url utilisé afin de pouvoir debugger).

- http://localhost:8081/api/game/selectCards/userId/card1Id/card2Id/card3Id/card4Id : permet à un joueur de sélectionner les 4 cates avec lesquelles il va jouer.

- http://localhost:8081/api/game/getUser/:userId : permet d'avoir la fiche joueur d'un joueur en particulier.

- http://localhost:8081/api/game/getCards : permet d'avoir la liste de toutes les cartes utilisées dans chaque partie. 

- http://localhost:8081/api/game/attack/userIdAttack/cardIdAttack/cardIdDefense : permet d'attaquer une autre carte. Cependant, cette requête n'est pas encore finie et pose encore problème. 

Pour ce qui est de la notification des joueurs lorsqu'un autre joueur a attaqué la fonctionnalité n'a pas encore était créée mais pour la réaliser il faudrait utiliser les websocket afin de pouvoir notifier les joueurs de manière asynchrone. On utiliserait le même procédé pour notifier le joueur en cas de victoire ou défaite.

![1](https://user-images.githubusercontent.com/72151863/209191166-1f0731d8-51e5-4145-bda3-88c03dfefaaa.png)
![2](https://user-images.githubusercontent.com/72151863/209191169-780ca613-0a86-45d9-b1f8-7f60bb272a36.png)
