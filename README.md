# Gudok_Front

## Contents

1. Installation
2. Structure
3. Navigation Flow

## 1. Installation

1. install Node 12 LTS
2. install expo-cli (need [Watchman](https://facebook.github.io/watchman/docs/install#buildinstall) for mac users.)
3. install Expo Go App in user phone (iOS, Android)
4. install dependencies


## 2. Structure

```bash
.
├── app
│   └── assets
│   │   ├── adaptive-icon.png
│   │   └── favicon.png
│   │   └── icon.png
│   │   └── splash.png
│   └── components
│   │   ├── ArticleBoard.js
│   │   └── Navbar.js
│   │   └── Sidebar.js
│   │   └── Topbar.js
│   └── contexts
│   │   └── AuthContext.js
│   └── screens
│   │   ├── ArticleScreen.js
│   │   └── HomeScreen.js
│   │   └── LoginScreen.js
│   │   └── RegisterScreen.js
│   └── App.js
└── .gitignore
└── app.json
└── babel.config.js
└── index.js
└── package.json
└── README.md
└── yarn.lock
```

## 3. Navigation Flow

![flow](https://user-images.githubusercontent.com/46925347/132096778-34962667-8275-47b0-9ceb-2fb22151fb85.png)
