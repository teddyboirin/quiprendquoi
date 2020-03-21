# Qui prend quoi

## Installation

`npm install`

`npm run start`

## Améliorations apportées


- Possibilité de supprimer un item (`app.js`, `party.pug`)
- Utilisation du localStorage pour stocker le nom de l'utilisateur (`user.js`) - pas actif mais j'ai essayé
- Meilleure présentation visuelle des items (`party.scss`)

## Article personnel

### Sujet : APi de luminosité  (Ambient Light Events)

J'ai décidé de parler de l'api de lumuère ambiante car je trouve que c'est une API qui peut-être utilie pour faire un mode sombre.
En effet, cet API permet de capter la luminosité ambiante (surement via le capteur de luminisoté de l'appreil) afin de savoir quelle est la valeur de la lumière ambiante.

À noter : j'ai essayé d'utiliser cette API sur mon application afin d'ajouter un theme spécial en fonction de la luminosité, mais celle-ci ne fonctionne pas sur Google Chrome, je pense qu'elle est déstinée aux mobiles.

#### Vérifier la disponiblité de la fonctionnalité 

Pour vérifier si la fonctionnalité est présente, on procède comme ceci : 

`if ('ondevicelight' in window) {`

puis si celle-ci est disponible, on ajoute un écouteur d'évènement sur la lumière du device :
`window.addEventListener('devicelight', function(event) {`

puis on éxécute les fonctions qu'on souhaite dans le `callback` :

`if (event.value < 50) {` - si la luminosité est inférieur à 50 (par exemple) 



Pour conclure cette API semble fonctionnée sur les mobile, mais pas encore sur les ordinateur, hélas.
Pour contourner ce problème on peut peut-être créer nous même ce type de fonctionnalité mais au lieu d'utiliser un capteur de luminosité, on pourrait utiliser les heures.
C'est à dire qu'en fonction de l'heure, on pourrait afficher un style css ou un autre (thème sombre ou clair).

# Informations sur le projet

J'ai soulevé un problème, je ne sais pas si c'est moi qui ai mal suivit le tp ou bien un oubli de ta part (ce que je doute), mais lorsque j'ajoute un évènement, je n'ai pas le lien ou l'id de l'évènement afin de pouvoir le consulter.

### FeedBack
Je trouve que ce tp est bien mais peut-être un peu trop long etant donné que c'est une nouvelle chose que l'on apprend, et donc devoir se remettre dans le tp pendant 3 jours cause une confusion sur pluiseurs choses (pour ma part).

Sinon j'ai apprécié le faire et comprendre comment marchent les services workers.


## Problèmes 

Bastien, j'ai essayé de créer un fichier user.js afin d'enregistrer dans le localstorage mais celà ne fonctionne pas et je ne sais pas pourquoi car j'ai essayé de le faire directement dans la console avec le meme code et celà fonctionne...


Merci ! 


