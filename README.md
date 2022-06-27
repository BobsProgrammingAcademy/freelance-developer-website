# Freelance Developer Portfolio Website

This is a freelance developer portfolio website built using **Django 4**, **React 18**, and **Material UI 5**.

![plot](https://github.com/BobsProgrammingAcademy/Freelance-Developer-Website/blob/master/frontend/src/assets/images/large.png?raw=true)

## Prerequisites

Install the following prerequisites:

1. [Python 3.10.4 or higher](https://www.python.org/downloads/)
2. [Node.js 18.0.0 or higher](https://nodejs.org/en/)
3. [Visual Studio Code](https://code.visualstudio.com/download)


## Installation

### Backend

#### 1. Create a virtual environment

From the **root** directory run:

```bash
cd backend
```
```bash
python -m venv venv
```

#### 2. Activate the virtual environment

From the **backend** directory run:

On macOS:

```bash
source venv/bin/activate
```

On Windows:

```bash
venv\scripts\activate
```

#### 3. Install required backend dependencies

From the **backend** directory run:

```bash
pip install -r requirements.txt
```

#### 4. Run migrations

From the **backend** directory run:

```bash
python manage.py makemigrations
```
```bash
python manage.py migrate
```

#### 7. Create an admin user to access the Django Admin interface

From the **backend** directory run:

```bash
python manage.py createsuperuser
```

When prompted, enter a username, email, and password.

### Frontend

#### 1. Install required frontend dependencies

From the **root** directory run:

```bash
cd frontend
```
```bash
npm install
```

## Run the application

To run the application, you need to have both the backend and the frontend up and running.

#### 1. Run backend

From the **backend** directory run:

```bash
python manage.py runserver
```

#### 2. Run frontend

From the **frontend** directory run:

```bash
npm start
```

#### 3. View the application

Go to http://localhost:3000/ to view the application.


## Add data to the application

Add data through Django Admin.

Go to http://127.0.0.1:8000/admin to access the Django Admin interface and sign in using the admin credentials.

## Customize the application

This section describes how to customize the application. 

### Changing Section Titles and Subtitles 

#### 1. About

To modify the title and subtitle of the **About** section, make changes in the ```frontend/src/components/About.js``` file.

#### 2. Projects

To modify the title and subtitle of the **Projects** section, make changes in the ```frontend/src/components/Projects.js``` file.

#### 3. Technologies

To modify the title and subtitle of the **Technologies** section, make changes in the ```frontend/src/components/Technologies.js``` file.

#### 4. Testimonials

To modify the title and subtitle of the **Testimonials** section, make changes in the ```frontend/src/components/Testimonials.js``` file.

#### 5. Contact

To modify the title and subtitle of the **Contact** section, make changes in the ```frontend/src/components/Contact.js``` file.

### Changing Colors

To modify the colors in the application, make changes in the ```frontend/src/theme/theme.js``` file.

### Changing Fonts

To modify the fonts in the application, first, add a new font to the ```frontend/public/index.html``` file, and then make changes in the ```frontend/src/theme/typography.js``` file.

### Changing Logo

To modify the logo in the application, make changes in the ```frontend/src/layout/Header.js``` and ```frontend/src/layout/Sidebar.js``` files.