# 🚀 Portfolio - Victor Harri-Chal

<div align="center">

![Ruby](https://img.shields.io/badge/Ruby-CC342D?style=for-the-badge&logo=ruby&logoColor=white)
![Rails](https://img.shields.io/badge/Rails-CC0000?style=for-the-badge&logo=ruby-on-rails&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Stimulus](https://img.shields.io/badge/Stimulus-00D4FF?style=for-the-badge&logo=stimulus&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)

**Portfolio personnel moderne développé avec Ruby on Rails 8**

[🌐 Voir le site](https://victorharri-chal.com) • [📧 Contact](mailto:victorharrichal@yahoo.com)

</div>

---

## 📋 Table des matières

- [À propos](#-à-propos)
- [Fonctionnalités](#-fonctionnalités)
- [Technologies utilisées](#-technologies-utilisées)
- [Installation](#-installation)
- [Structure du projet](#-structure-du-projet)
- [Déploiement](#-déploiement)
- [Contributions](#-contributions)
- [Licence](#-licence)

## 👨‍💻 À propos

Portfolio personnel de **Victor Harri-Chal** !

### 🎯 Objectifs du projet

- Présenter mes compétences techniques et mon parcours professionnel
- Exposer mes projets réalisés avec des technologies modernes
- Démontrer ma maîtrise de Ruby on Rails et des technologies web

## ✨ Fonctionnalités

### 🏠 Page d'accueil
- Design moderne avec effets de distorsion et animations
- Navigation fluide vers les différentes sections
- Présentation personnelle concise et impactante

### 📚 Section Projets
- **NutriFlow** : Application complète de suivi fitness et nutrition
- **NestioBnb** : Plateforme de location d'hébergement avec IA
- **Scandela** : Projet de fin d'études (2023-2025)

### 👤 Section À propos
- Parcours académique et professionnel
- Technologies maîtrisées (Ruby, Rails, React, Angular, Flutter, etc.)
- Expérience internationale et méthodologies de travail

### 📞 Section Contact
- Formulaire de contact fonctionnel
- Liens vers les réseaux professionnels

## 🛠 Technologies utilisées

### Backend
- **Ruby on Rails 8.0.2** - Framework web principal
- **PostgreSQL** - Base de données relationnelle
- **Puma** - Serveur web
- **Stimulus** - Framework JavaScript léger
- **Turbo** - Accélérateur de pages SPA-like

### Frontend
- **Tailwind CSS** - Framework CSS utilitaire
- **Stimulus.js** - Contrôleurs JavaScript
- **Font Awesome** - Icônes
- **Importmap** - Gestion des modules JavaScript

### Outils de développement
- **Docker** - Conteneurisation
- **Kamal** - Déploiement
- **RuboCop** - Linting Ruby
- **Brakeman** - Analyse de sécurité

## 🚀 Installation

### Prérequis
- Ruby 3.2+
- PostgreSQL
- Node.js 18+
- Docker (optionnel)

### Installation locale

1. **Cloner le repository**
```bash
git clone <repository-url>
cd Portfolio
```

2. **Installer les dépendances Ruby**
```bash
bundle install
```

3. **Configuration de la base de données**
```bash
# Copier le fichier de configuration
cp config/database.yml.example config/database.yml

# Créer et migrer la base de données
rails db:create
rails db:migrate
```

4. **Lancer le serveur de développement**
```bash
bin/dev
```

Le site sera accessible sur `http://localhost:3000`

### Installation avec Docker

```bash
# Construire l'image
docker build -t portfolio .

# Lancer le conteneur
docker run -p 3000:3000 portfolio
```

## 📁 Structure du projet

```
Portfolio/
├── app/
│   ├── controllers/          # Contrôleurs Rails
│   ├── views/               # Vues ERB
│   │   ├── pages/          # Pages statiques (home, about, contact)
│   │   └── projects/       # Vues des projets
│   ├── javascript/         # Contrôleurs Stimulus
│   └── assets/            # Assets (CSS, images)
├── config/                # Configuration Rails
├── public/               # Fichiers publics (CV, favicon)
└── Dockerfile           # Configuration Docker
```

## 🌐 Déploiement

### Avec Kamal (recommandé)

```bash
# Configuration du déploiement
kamal setup

# Déploiement
kamal deploy
```

### Variables d'environnement

Créer un fichier `.env` avec les variables suivantes :

```env
DATABASE_URL=postgresql://user:password@localhost/portfolio_production
RAILS_MASTER_KEY=your_master_key_here
```

## 🤝 Contributions

Ce projet étant un portfolio privé, les contributions externes ne sont pas acceptées. Cependant, les suggestions et retours sont les bienvenus via les issues GitHub.

## 📄 Licence

Ce projet est privé et propriété de Victor Harri-Chal. Tous droits réservés.

---

<div align="center">

**Développé avec ❤️ par Victor Harri-Chal**

[LinkedIn](https://linkedin.com/in/victorharri-chal) • [GitHub](https://github.com/VictorHarri-Chal) • [Portfolio](https://victorharri-chal.com)

</div>
