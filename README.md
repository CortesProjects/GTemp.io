myproject/
│
├── manage.py
├── myproject/
│   ├── settings.py
│   ├── urls.py
│   └── ...
└── app/                # <-- we will create this app
    ├── views.py
    ├── urls.py
    ├── templates/
    │   └── app/
    │       ├── home.html
    │       ├── page1.html
    │       └── page2.html
    └── static/
        └── app/
            └── script.js

python -m venv [envname]
[envname]\Scripts\activate      #activate the environment
pip install Django              #current instance ([envname]) install package Django
django-admin startproject [foldername]
cd [foldername]
python manage.py runserver                #similar to "npm run dev" or "uvicorn main:app --reload"
python manage.py startapp [foldername2]   #inside [foldername]

#all startapp [folders] should be added in
INSTALLED_APPS = [
    ...,
    'app', #call the folders that was created with "startapp" NOT "startproject"
]
#create folder templates for htmls

#inside myapp/views.py create location link, and function file location and function
urlpatterns = [
    path('link1/', file1.function_1),
    path('link2/', file1.function_2),
    path('link3/', file1.funcrion_3),
]

#inside myapp/urls.py create a function that calls the templates when server is run
def home(request):
    return render(request, 'app/home.html') #i called templates/home.html

#inside myproject/settings.py 
"DIRS": [BASE_DIR / "myapp" / "#if you want to add more"], #add templates to app/templates

#inside myproject/urls.py use this code, to call the function app/urls.py
path('', include('app.urls')),

python manage.py runserver 




PythonFrontend/
│
├── backend/                        # Django backend
│   ├── mybackend/                  # Django project settings
│   │   ├── __init__.py
│   │   ├── settings.py
│   │   ├── urls.py
│   │   └── wsgi.py
│   │
│   ├── authapp/                    # Django app for authentication
│   │   ├── migrations/
│   │   ├── __init__.py
│   │   ├── views.py
│   │   ├── urls.py
│   │   ├── models.py   (optional, mostly Supabase used here)
│   │   └── forms.py    (optional, Django forms if you want)
│   │
│   ├── manage.py
│
├── frontend/                       # Templates & static files
│   ├── templates/
│   │   ├── login.html
│   │   └── register.html
│   │
│   └── static/                     # CSS, JS, Images
│       ├── css/
│       │   └── style.css
│       ├── js/
│       └── img/
│
├── venv/                           # Virtual environment
└── requirements.txt


Backend

python -m venv venv
venv\Scripts\activate
pip install "fastapi[all]" uvicorn supabase Django       # install packages
pip freeze > requirements.txt                            # creates .txt and stores it inside
Django-admin startproject myproject
cd myproject
python manage.py startapp myapp    # can't execute command? place myproject/myproject outside myproject/ folder




# inside myapp/urls.py create location link, and function file location and function
from django.urls import path
from . import views
urlpatterns = [
    path('login/', views.login, name='login'),
    path('register/', views.register, name='register'),
]

#inside myapp/views.py create a function that calls the templates when server is run
def home(request):
    return render(request, 'app/home.html') #i called templates/home.html

#inside myproject/urls.py add
path("", include("authapp.urls")),


# add these in myproject/settings.py
SUPABASE_URL = os.getenv("SUPABASE_URL", "https://YOUR_PROJECT.supabase.co") # replace with your supabase url 
SUPABASE_KEY = os.getenv("SUPABASE_KEY", "YOUR_ANON_KEY") #replace with your supabase URL

#inside myproject/settings.py
INSTALLED_APPS = [
    ...,
    'myapp',
]

# connect frontend and backend
'DIRS': [os.path.join(BASE_DIR, "..", "frontend", "templates")]

cd..
mkdir frontend
code frontend

paste register.html
paste login.html

cd backend && python manage.py runserver
[or]
cd backend
python manage.py runserver
[or]
python \backend\manage.py runserver



