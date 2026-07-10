<div align="center">

# DSA Visualizer

### Data structures and algorithms, made visible.

An interactive, browser-based platform for understanding core data structures and algorithms through step-by-step visualizations.

Built from scratch using **HTML, CSS, and vanilla JavaScript**.

<br>

[View Live Demo](https://ayan-023.github.io/dsa-visualizer/) · [Explore Modules](#-available-visualizers) · [View Roadmap](#-roadmap)

</div>

---

## About the Project

Data structures and algorithms are easier to understand when you can see them in action.

**DSA Visualizer** transforms abstract operations into clear, interactive animations. Instead of only reading code or tracing values on paper, users can observe how data changes at every step.

The project focuses on:

- Clear and understandable visualizations
- Step-by-step algorithm execution
- Interactive user controls
- Responsive and accessible interfaces
- Clean implementations without external frameworks

Every visualizer is built using **vanilla HTML, CSS, and JavaScript**, keeping the underlying logic transparent and easy to study.

---

## Live Demo

### [Launch DSA Visualizer →](YOUR_LIVE_DEMO_LINK)

---

## Available Visualizers

| Module | Visualization | Status |
| :--- | :--- | :---: |
| **Stack** | Push and pop operations with live top-pointer tracking | ✅ Available |
| **Queue** | Enqueue and dequeue operations with front and rear tracking | ✅ Available |
| **Bubble Sort** | Animated comparisons, swaps, and pass-by-pass sorting | ✅ Available |
| **Selection Sort** | Step-by-step minimum selection and element placement | ✅ Available |
| **Tree Traversal** | Interactive binary-tree traversal and node exploration | 🚧 In Development |

---

## Features

- Interactive data-structure operations
- Step-by-step algorithm animations
- Visual comparison and swap states
- Custom user input
- Asynchronous animation timing
- Dynamic rendering based on application state
- Responsive landing page
- Lightweight and dependency-free
- Modular structure for adding new algorithms

---

## How It Works

Each visualization follows a simple state-driven process:

```text
User Input
     ↓
Update Data State
     ↓
Render Visualization
     ↓
Perform Operation
     ↓
Animate State Changes
     ↓
Render Updated Result
```

The interface is regenerated from the current data state whenever an operation occurs. This keeps the visual representation synchronized with the underlying algorithm.

---

## Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **HTML5** | Page structure and semantic markup |
| **CSS3** | Layout, responsive design, animations, and visual states |
| **JavaScript** | Algorithm logic, state management, and DOM rendering |

No frameworks. No visualization libraries. No unnecessary dependencies.

Just browser fundamentals doing actual work.

---

## Project Structure

```text
DSA-Visualizer/
│
├── index.html
├── style.css
├── script.js
│
├── stack/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── queue/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── bubble-sort/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── selection-sort/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
└── README.md
```

---

## Getting Started

No package manager, build process, or installation is required.

### 1. Clone the repository

```bash
git clone https://github.com/ayan-023/dsa-visualizer
```

### 2. Open the project directory

```bash
cd DSA-Visualizer
```

### 3. Run the project

Open `index.html` directly in your browser.

For a better development experience, run the project using a local development server such as the **Live Server** extension in Visual Studio Code.

---

## Example: Bubble Sort Visualization

Given the input:

```text
8, 3, 7, 1, 9, 2
```

The visualizer:

1. Compares two adjacent elements
2. Highlights both elements using distinct visual states
3. Swaps them when the left value is greater
4. Continues through the remaining unsorted elements
5. Repeats until the complete array is sorted

Expected result:

```text
1, 2, 3, 7, 8, 9
```

---

## Roadmap

The project will continue expanding with additional algorithms and data structures.

- [x] Stack
- [x] Queue
- [x] Bubble Sort
- [x] Selection Sort
- [ ] Binary Tree
- [ ] Tree Traversals
- [ ] Binary Search
- [ ] Merge Sort
- [ ] Quick Sort
- [ ] Linked List
- [ ] Graph Traversals
- [ ] Breadth-First Search
- [ ] Depth-First Search
- [ ] Pathfinding Algorithms

---

## Design Philosophy

The interface follows a restrained technical design inspired by graph paper, engineering diagrams, and educational tools.

The design prioritizes:

- Information over decoration
- Clear visual hierarchy
- Purposeful animation
- Consistent interaction states
- Readable algorithm behavior

Animations are used to explain state changes rather than simply make elements move.

---

## Learning Objectives

This project was created to strengthen practical understanding of:

- Data structures and algorithms
- Algorithm visualization
- DOM manipulation
- Asynchronous JavaScript
- State-driven UI rendering
- Responsive CSS layouts
- Modular front-end development
- Git and GitHub workflows

---

## Contributing

Contributions, suggestions, and improvements are welcome.

To contribute:

1. Fork the repository
2. Create a new branch

```bash
git checkout -b feature/new-visualizer
```

3. Make your changes
4. Commit them

```bash
git commit -m "feat: add new algorithm visualizer"
```

5. Push the branch

```bash
git push origin feature/new-visualizer
```

6. Open a pull request

Please keep new visualizers consistent with the existing design system and interaction patterns.

---

## Feedback

Found a bug or have an idea for a new visualization?

Open an issue and include:

- A clear description
- Steps to reproduce the issue
- Expected behavior
- Screenshots or screen recordings when useful

---

## Author

Built by **Ayan Khan**

Computer Engineering student exploring algorithms through interactive web experiences.

---

## License

This project is available under the **MIT License**.

You are free to use, modify, and distribute the project while preserving the original license notice.

---

<div align="center">

Built with HTML, CSS, JavaScript, and an unreasonable number of array comparisons.

**If this project helped you understand an algorithm, consider giving the repository a ⭐.**

</div>