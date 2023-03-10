----------------------------------------------------------------------------------------------------------------------------------------------------------------------
# AUTHOR INFORMATION:

  > `Ivory Coast`<br/>
  > `GOMPOU GBONGUE TIA ANGE`<br/>
  > `tiaange03@gmail.com`<br/>
  > `Open Source Software`<br/>
  > <a href="https://www.tia-portfolio.com/">Portfolio</a>

  **Follow Me**
  > <a href="https://www.linkedin.com/in/gompou-tia-gbongu%C3%A9-ange-9713b5164/">LinkedIn</a><br/>
  > <a href="https://twitter.com/AngeTia03">Twitter</a>

# APP WEB : >>WeddingDay<<

# FONCTIONNALITÉS A METTRE EN PLACE
----------------------------------------------------------------------------------------------------------------------------------------------------------------------

**Descriptions relatives au projet de fin de formation**
--------------------------------------------------------

1. *Recherche de la mairie*

> Cette fonctionnalité permet aux utilisateurs de rechercher la mairie où ils souhaitent se marier en entrant des critères de recherche tels que la ville, le code postal, le nom de la mairie ou l'adresse. Cette recherche peut aider les utilisateurs à trouver rapidement la mairie la plus proche de chez eux ou la plus adaptée à leurs besoins.
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
2. *Affichage des informations relatives à la mairie*

> Une fois que les utilisateurs ont trouvé la mairie qu'ils souhaitent, ils peuvent accéder à des informations supplémentaires telles que l'adresse de la mairie, le numéro de téléphone, les heures d'ouverture, les tarifs et les documents requis pour la réservation d'une date de mariage. Cette fonctionnalité peut aider les utilisateurs à obtenir toutes les informations nécessaires pour planifier leur mariage à la mairie.
----------------------------------------------------------------------------------------------------------------------------------------------------------------------
3. *Réservation d'une date de mariage*

> Après avoir trouvé la mairie appropriée et vérifié les informations pertinentes, les utilisateurs peuvent procéder à la réservation de leur date de mariage en ligne. Cette fonctionnalité permet aux utilisateurs de sélectionner la date et l'heure de leur mariage, ainsi que de saisir toutes les informations requises pour la réservation.
----------------------------------------------------------------------------------------------------------------------------------------------------------------------
4. *Paiement de la réservation*

> Après avoir réservé la date de leur mariage, les utilisateurs peuvent effectuer le paiement en ligne pour finaliser leur réservation. Cette fonctionnalité permet aux utilisateurs de payer facilement et rapidement pour leur réservation de mariage, sans avoir à se déplacer en personne à la mairie.
----------------------------------------------------------------------------------------------------------------------------------------------------------------------
5. *Impression du reçu de la réservation*

> Enfin, les utilisateurs peuvent imprimer un reçu de leur réservation une fois le paiement effectué. Cette fonctionnalité permet aux utilisateurs de conserver une preuve écrite de leur réservation de mariage à la mairie, qu'ils peuvent conserver pour leurs dossiers personnels ou utiliser pour d'autres formalités.

----------------------------------------------------------------------------------------------------------------------------------------------------------------------

**Les problématiques que peuvent résoudre mon application**

1. Problématique de recherche : Les personnes qui cherchent une mairie pour leur mariage peuvent avoir du mal à trouver les informations dont elles ont besoin, surtout si elles ne connaissent pas bien la région. Votre application peut les aider en offrant une interface conviviale pour effectuer des recherches et trouver les mairies disponibles dans la région de leur choix.

2. Problématique d'information : Les personnes qui ont trouvé une mairie intéressante pour leur mariage peuvent avoir besoin de plus d'informations pour prendre une décision éclairée. Votre application peut leur fournir les informations nécessaires sur les différentes mairies, y compris les tarifs, les services proposés, les photos et les avis des clients précédents.

3. Problématique de réservation : Les personnes qui ont choisi une mairie pour leur mariage peuvent avoir du mal à réserver une date, surtout si elles doivent se déplacer en personne ou passer des heures au téléphone. Votre application peut leur offrir un moyen facile et rapide de réserver une date en ligne, sans avoir à quitter leur domicile.

4. Problématique de paiement : Les personnes qui ont réservé une date peuvent avoir besoin de payer des frais de réservation, mais elles peuvent ne pas avoir de moyen de paiement pratique ou sécurisé. Votre application peut leur offrir un moyen de paiement en ligne sûr et facile, en utilisant une passerelle de paiement réputée pour garantir la sécurité de leurs informations.

**Technologies Utilisées** :
--------------------------

**FrontEnd**

 > `HTML`
 > `CSS`
 > `JS`
 > `TypeScript`
 > `ANGULAR`

**BackEnd(API)**

 > `PHP`
 > `POSTGRESQL`
 > `SYMFONY`
   > `EasySymfony Admin`

**Approche technique**
----------------------

1. Recherche de la mairie : `HTML et CSS peuvent être utilisés pour concevoir une interface de recherche conviviale, avec des champs de saisie et des boutons de recherche. JavaScript peut être utilisé pour valider les entrées de l'utilisateur et effectuer une requête à la base de données PostgreSQL via PHP.`

2. Affichage des informations relatives à la mairie : `PostgreSQL peut être utilisé pour stocker les informations relatives à chaque mairie, telles que l'adresse, les tarifs et les documents requis. PHP peut être utilisé pour interroger la base de données et récupérer les informations pertinentes. Angular peut ensuite être utilisé pour afficher les informations dans une interface conviviale, conçue à l'aide d'HTML et de CSS.`

3. Réservation d'une date de mariage : `Angular peut être utilisé pour concevoir un formulaire de réservation, avec des champs pour sélectionner la date et l'heure du mariage, ainsi que des champs pour saisir les informations personnelles de l'utilisateur. Lorsque l'utilisateur soumet le formulaire, les données peuvent être envoyées à PHP pour les stocker dans la base de données PostgreSQL.`

4. Paiement de la réservation : `Les technologies de traitement des paiements en ligne telles que "Stripe" ou "PayPal" peuvent être utilisées pour gérer les transactions de paiement. PHP peut être utilisé pour concevoir une interface conviviale pour saisir les informations de paiement, et JavaScript peut être utilisé pour interagir avec l'API de la plateforme de paiement pour effectuer la transaction(Intégrer les moyens de paiment mobiles money également tel que `

5. Impression du reçu de la réservation : `Une fois que la réservation a été effectuée et que le paiement a été traité, PHP peut être utilisé pour générer un reçu de réservation à partir des données stockées dans la base de données PostgreSQL. Ce reçu peut être présenté à l'utilisateur pour impression ou téléchargement sous forme de fichier PDF. Angular peut également être utilisé pour concevoir une interface conviviale pour afficher le reçu.`

----------------------------------------------------------------------------------------------------------------------------------------------------------------------

**Programme sous forme algorithme**
-----------------------------------

1. Recherche de la mairie :

  > Demander à l'utilisateur de saisir le nom de la ville ou de la mairie qu'il souhaite rechercher.

  > Vérifier que l'entrée de l'utilisateur est valide et non vide.

  > Utiliser une requête SQL pour interroger la base de données et récupérer toutes les mairies correspondantes.

  > Afficher les résultats de la recherche dans une liste sur la page web.

2. Affichage des informations relatives à la mairie :

  > Récupérer l'identifiant unique de la mairie à partir de l'URL de la page.

  > Utiliser une requête SQL pour récupérer toutes les informations relatives à cette mairie dans la base de données.

  > Afficher ces informations sur la page web à l'aide d'un modèle HTML prédéfini.

3. Réservation d'une date de mariage :

  > Afficher un formulaire de réservation pour la mairie sélectionnée.

  > Demander à l'utilisateur de saisir les informations nécessaires pour effectuer la réservation, comme la date et l'heure souhaitées et les informations personnelles de l'utilisateur.

  > Vérifier que toutes les informations saisies sont valides et non vides.

  > Insérer les informations de réservation dans la base de données PostgreSQL en utilisant une requête SQL.

4. Paiement de la réservation :

  > Afficher un formulaire de paiement pour la réservation sélectionnée.

  > Demander à l'utilisateur de saisir les informations de paiement nécessaires, telles que le nom de la carte de crédit et le numéro de carte.

  > Vérifier que toutes les informations saisies sont valides et non vides.

  > Utiliser une API de paiement en ligne, comme `Stripe` ou `PayPal`, pour effectuer le traitement du paiement.

  > Mettre à jour la base de données pour marquer la réservation comme payée.

5. Impression du reçu de la réservation :

  > Récupérer l'identifiant unique de la réservation à partir de l'URL de la page.

  > Utiliser une requête SQL pour récupérer toutes les informations relatives à cette réservation dans la base de données.

  > Générer un fichier PDF du reçu de la réservation en utilisant une bibliothèque de génération de PDF, comme PDFKit.

  > Afficher le fichier PDF sur la page web pour que l'utilisateur puisse l'imprimer ou le télécharger.

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

**structuration des dossiers dans mon projet**
------------------------------------------------

**FrontEnd**

**Backend**