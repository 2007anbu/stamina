# Stamina - Collaborative Whiteboard with Live Diagrams

A real-time collaborative whiteboard application with integrated Mermaid diagram support.

## Features

- **Real-time Drawing**: Draw, text, and erase with multiple users simultaneously
- **Live Diagram Creation**: Create and render Mermaid diagrams (flowcharts, sequence diagrams, Gantt charts, pie charts, etc.)
- **Diagram Sharing**: Share diagrams with connected users instantly
- **Persistent Storage**: Diagrams are saved locally and persist across sessions
- **Zoom & Pan**: Navigate large canvases with smooth zooming and panning
- **Undo/Redo**: Full history management for all actions
- **Cross-platform**: Works on desktop and mobile devices

## How to Use

1. **Drawing Tools**:
   - Brush: Freehand drawing
   - Text: Click to add text anywhere on the canvas
   - Diagram: Create Mermaid diagrams
   - Eraser: Remove content

2. **Creating Diagrams**:
   - Click the Diagram tool
   - Choose from examples or write custom Mermaid code
   - Preview with the Render button
   - Save & Share to add to canvas and broadcast to other users

3. **Collaboration**:
   - Send your current board state with the Send button
   - Diagrams are automatically shared when saved
   - All changes appear in real-time for connected users

## Diagram Examples

### Flowchart
```
graph TD
    A[Start] --> B{Is it working?}
    B -->|Yes| C[Great!]
    B -->|No| D[Debug]
    D --> B
```

### Sequence Diagram
```
sequenceDiagram
    Alice->>Bob: Hello Bob, how are you?
    Bob-->>Alice: I am good thanks!
```

## Running the Application

```bash
npm install
npm start
```

Open http://localhost:3000 in your browser.

## Technologies Used

- Node.js & Express
- Socket.IO for real-time communication
- Mermaid.js for diagram rendering
- HTML5 Canvas for drawing
- Local Storage for persistence