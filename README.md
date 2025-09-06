# 📝 Blog Website

A **Full Stack Blog Website** built using **React**, **Django**, and **MySQL**. This project allows users to create, read, update, and delete blog posts, with authentication and authorization features.

---

## 🚀 Features

- 🔐 **User Authentication** (Register, Login, Logout)
- ✍️ **Create, Update, and Delete Blogs**
- 📜 **View All Blogs and Single Blog Details**
- 👤 **Profile Management**
- 🗄 **MySQL Database Integration**
- 🎨 **Responsive UI with Tailwind CSS**
- ⚡ **REST API built using Django REST Framework**

---

## 🛠️ Tech Stack

**Frontend:**
- React.js
- Tailwind CSS
- Axios

**Backend:**
- Django
- Django REST Framework (DRF)

**Database:**
- MySQL

**Tools & Others:**
- Git & GitHub
- Postman for API testing
- VS Code

---

## 📂 Project Structure

```
blog-website/
│── frontend/       # React code
│── backend/        # Django code
│── manage.py       # Django entry point
│── db.sqlite3      # MySQL / SQLite database
│── package.json    # Frontend dependencies
│── requirements.txt # Backend dependencies
│── README.md
```

---

## ⚙️ Installation and Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/archit646/Blog-Full-Stack-.git
cd Blog-Full-Stack-
```

### 2️⃣ Setup Backend (Django)
```bash
cd backend
python -m venv venv
source venv/bin/activate   # For Windows: venv\Scripts\activate
pip install -r requirements.txt
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
```

### 3️⃣ Setup Frontend (React)
```bash
cd frontend
npm install
npm start
```

---

## 🔗 API Endpoints

| Endpoint             | Method | Description         |
|---------------------|--------|---------------------|
| `/api/posts/`       | GET    | Get all posts       |
| `/api/posts/:id/`   | GET    | Get single post     |
| `/api/posts/create/`| POST   | Create new post     |
| `/api/posts/:id/`   | PUT    | Update post         |
| `/api/posts/:id/`   | DELETE | Delete post         |

---

## 👨‍💻 Author

**Archit Kumar**  
📧 Email: architk471@gmail.com  
💼 LinkedIn: [linkedin.com/in/archit646](https://linkedin.com/in/archit646)  
💻 GitHub: [github.com/archit646](https://github.com/archit646)



