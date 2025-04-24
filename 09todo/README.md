
# 📝 TodoApp with React Context API



A feature-rich Todo application with persistent storage, built using React Context API and localStorage.

## ✨ Features

- ✅ Add new todos
- ✏️ Edit existing todos
- 🗑️ Delete todos
- ☑️ Toggle todo completion status
- 💾 Automatic localStorage persistence
- 🎨 Responsive UI with clean design
- 🔄 Context API for state management

## 🚀 Technologies Used

- React 18+
- React Context API
- localStorage for data persistence
- Tailwind CSS for styling
- React Hooks (useState, useEffect, useContext)

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Shantanu-kulkarni1229/todoapp.git
   ```
2. Navigate to project directory:
   ```bash
   cd todoapp
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start development server:
   ```bash
   npm start
   ```
5. Open in browser:
   ```
   http://localhost:3000
   ```

## 🧠 Core Concepts Implemented

### 1. Context API Implementation
**File:** `contexts/TodoContext.js`

#### Key Components:
- **TodoContext**: Creates context with default values
- **TodoProvider**: Context provider component
- **useTodo**: Custom hook for accessing context

```javascript
export const TodoContext = createContext({
  todos: [],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {}
});

export const useTodo = () => useContext(TodoContext);
```

### 2. State Management
**File:** `App.js`

#### Key Features:
- Centralized state management using Context API
- localStorage integration for data persistence
- CRUD operations for todos

```javascript
const [todos, setTodos] = useState([]);

// Add new todo
const addTodo = (todo) => {
  setTodos((prev) => [{id: Date.now(), ...todo}, ...prev]);
};

// Update existing todo
const updateTodo = (id, todo) => {
  setTodos((prev) => prev.map((prevTodo) => 
    prevTodo.id === id ? todo : prevTodo
  ));
};

// Delete todo
const deleteTodo = (id) => {
  setTodos((prev) => prev.filter((todo) => todo.id !== id));
};

// Toggle completion status
const toggleComplete = (id) => {
  setTodos((prev) => prev.map((prevTodo) => 
    prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo
  ));
};
```

### 3. localStorage Integration
**File:** `App.js`

```javascript
// Load todos on initial render
useEffect(() => {
  const savedTodos = JSON.parse(localStorage.getItem("todos"));
  if (savedTodos?.length > 0) {
    setTodos(savedTodos);
  }
}, []);

// Save todos on change
useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos));
}, [todos]);
```

### 4. Component Structure

#### TodoForm Component
**File:** `components/TodoForm.js`
- Handles new todo input
- Uses Context API to access addTodo function
- Form validation

```javascript
const { addTodo } = useTodo();
const [todo, setTodo] = useState("");

const handleSubmit = (e) => {
  e.preventDefault();
  if (!todo) return;
  addTodo({ todo, completed: false });
  setTodo("");
};
```

#### TodoItem Component
**File:** `components/TodoItem.js`
- Editable todo items
- Toggle completion status
- Delete functionality
- Local state management for editing

```javascript
const [isTodoEditable, setIsTodoEditable] = useState(false);
const [todoMsg, setTodoMsg] = useState(todo.todo);
const { updateTodo, deleteTodo, toggleComplete } = useTodo();

const handleEdit = () => {
  updateTodo(todo.id, {...todo, todo: todoMsg});
  setIsTodoEditable(false);
};
```

## 🎓 Key Learnings

### 1. Context API Patterns
- Creating and providing context
- Consuming context with custom hooks
- Global state management without prop drilling

### 2. State Management
- Centralized state management
- Immutable state updates
- Complex state transformations

### 3. Data Persistence
- localStorage integration
- JSON serialization/deserialization
- Data lifecycle management

### 4. Component Design
- Reusable components
- Separation of concerns
- Controlled vs uncontrolled components
- Form handling best practices

### 5. UI/UX Considerations
- Immediate visual feedback
- Error prevention
- Accessible form controls
- Responsive design principles

## 🛠️ Future Improvements

- [ ] Add dark mode toggle
- [ ] Implement due dates and priorities
- [ ] Add categories/tags for todos
- [ ] Undo/redo functionality
- [ ] Drag-and-drop reordering
- [ ] Animations for UI interactions
- [ ] Search/filter functionality

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.

## 📧 Contact

Your Name - your.email@example.com  
Project Link: [https://github.com/yourusername/todoapp](https://github.com/yourusername/todoapp)
