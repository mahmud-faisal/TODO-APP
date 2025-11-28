# TODO App

A modern, responsive todo application built with React.js that helps you manage your daily tasks efficiently with a clean and intuitive interface.

![TODO App Main Interface](https://drive.google.com/uc?export=view&id=1BcbilW-br_K-jFe1zHmCet_XpjX0hp3f)

## 🚀 Features

- **Add Tasks** - Quickly create new tasks with ease
- **Edit Tasks** - Modify existing tasks inline
- **Delete Tasks** - Remove tasks individually or clear all
- **Mark Complete** - Toggle task completion status
- **Task Filtering** - View all, active, or completed tasks
- **Responsive Design** - Works perfectly on all devices
- **Local Storage** - Persist your tasks between sessions
- **Clean UI** - Modern and user-friendly interface

## 📸 Screenshots

### Main Interface
![Main Interface](https://drive.google.com/uc?export=view&id=1BcbilW-br_K-jFe1zHmCet_XpjX0hp3f)


### Login
![Task Management](https://drive.google.com/uc?export=view&id=1HqNj--xWAZ_KZIIlH2k_p6__E6zpSU2e)

### Registration
![Filtered View](https://drive.google.com/uc?export=view&id=1y5fQb_4R_ClWnup90GWG5eTLiFpw_HLP)

## 🛠️ Technologies Used

### Frontend
- **React.js** - Frontend framework
- **CSS3** - Modern styling with Flexbox/Grid
- **JavaScript (ES6+)** - Programming language
- **React Hooks** - State management (useState, useEffect)

### Storage
- **Local Storage** - Browser-based data persistence
- **React State** - In-memory state management

### Deployment
- **Vercel** - Frontend deployment
- **Netlify** - Alternative deployment option

## 📦 Installation

Follow these steps to set up the project locally:

1. **Clone the repository**
   ```bash
   git clone https://github.com/mahmud-faisal/TODO-APP.git
   cd TODO-APP
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🎯 Project Structure

```
TODO-APP/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── TodoForm/
│   │   │   ├── TodoForm.js
│   │   │   └── TodoForm.css
│   │   ├── TodoList/
│   │   │   ├── TodoList.js
│   │   │   └── TodoList.css
│   │   ├── TodoItem/
│   │   │   ├── TodoItem.js
│   │   │   └── TodoItem.css
│   │   ├── FilterButtons/
│   │   │   ├── FilterButtons.js
│   │   │   └── FilterButtons.css
│   │   └── Header/
│   │       ├── Header.js
│   │       └── Header.css
│   ├── hooks/
│   │   ├── useLocalStorage.js
│   │   └── useTodos.js
│   ├── utils/
│   │   ├── constants.js
│   │   └── helpers.js
│   ├── styles/
│   │   ├── App.css
│   │   └── global.css
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```

## ✨ Key Features Explained

### Task Management
- **Add New Tasks**: Simple input field to quickly add tasks
- **Edit Tasks**: Click on any task to edit its content
- **Delete Tasks**: Remove individual tasks or clear all completed
- **Toggle Completion**: Mark tasks as complete/incomplete

### Filtering System
- **All Tasks**: View all tasks regardless of status
- **Active Tasks**: Show only incomplete tasks
- **Completed Tasks**: Display only finished tasks

### Data Persistence
- **Local Storage**: Automatically saves your tasks in browser storage
- **Session Recovery**: Tasks persist even after closing the browser
- **No Data Loss**: Your todo list remains intact between sessions

## 🎨 Customization

### Styling Changes
1. **Color Scheme**: Modify CSS variables in `global.css`
2. **Typography**: Update font families and sizes
3. **Layout**: Adjust spacing and component arrangements
4. **Animations**: Add custom transitions and hover effects

### Feature Enhancements
1. **Categories/Tags**: Add categorization for tasks
2. **Due Dates**: Include date picker for task deadlines
3. **Priority Levels**: Implement priority system (High, Medium, Low)
4. **Search Functionality**: Add search bar to find specific tasks
5. **Dark Mode**: Implement theme switching capability

## 📱 Responsive Design

The application is fully responsive and optimized for:

- 📱 **Mobile** (320px - 767px): Stacked layout with touch-friendly buttons
- 📟 **Tablet** (768px - 1023px): Balanced layout with comfortable spacing
- 💻 **Desktop** (1024px and above): Full-featured interface with optimal use of space

## 🚀 Deployment

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
1. Connect your GitHub repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `build`

### Deploy to GitHub Pages
```bash
npm install --save-dev gh-pages
```

Add to `package.json`:
```json
"homepage": "https://yourusername.github.io/TODO-APP",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

Then run:
```bash
npm run deploy
```

## 🔧 Available Scripts

In the project directory, you can run:

### `npm start`
Runs the app in development mode at [http://localhost:3000](http://localhost:3000)

### `npm test`
Launches the test runner in interactive watch mode

### `npm run build`
Builds the app for production to the `build` folder

### `npm run eject`
**Note: this is a one-way operation. Once you `eject`, you can't go back!**

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit your changes** (`git commit -m 'Add some AmazingFeature'`)
4. **Push to the branch** (`git push origin feature/AmazingFeature`)
5. **Open a Pull Request**

### Development Guidelines
- Follow React best practices
- Use meaningful component and variable names
- Ensure responsive design works on all screen sizes
- Test all functionality before submitting PR

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Mahmud Faisal**
- GitHub: [@mahmud-faisal](https://github.com/mahmud-faisal)
- Portfolio: [Live Demo](https://your-portfolio-link.vercel.app)

## 🙏 Acknowledgments

- React.js team for the excellent framework
- Modern CSS techniques for responsive design
- Inspiration from various todo applications
- Open source community for best practices

## 📞 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/mahmud-faisal/TODO-APP/issues) page
2. Create a new issue with detailed description
3. Provide steps to reproduce any bugs

## 🔄 Version History

- **v1.0.0** - Initial release with basic todo functionality
- **v1.1.0** - Added local storage persistence
- **v1.2.0** - Enhanced UI/UX and responsive design

---

⭐ **If you find this project helpful, please give it a star on GitHub!**
