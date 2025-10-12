
import { Routes, Route } from 'react-router'
import HomePage from './pages/HomePage.jsx'
import CreatePage from './pages/CreatePage.jsx'
import NoteDetailPage from './pages/NoteDetailPage.jsx'


const App = () => {
  return (
    <div data-theme = "forest" className="container mx-auto p-4">
      <button className="btn">Button</button>
      <button className="btn btn-neutral">Neutral</button>
      <button className="btn btn-primary">Primary</button>
      <button className="btn btn-secondary">Secondary</button>
      <button className="btn btn-accent">Accent</button>
      <button className="btn btn-ghost">Ghost</button>
      <button className="btn btn-link">Link</button>
      <Routes>
        <Route path = "/" element = { <HomePage/> } /> 
        <Route path = "/create" element = { <CreatePage/> } /> 
        <Route path = "/note/:id" element = { <NoteDetailPage/> } /> 
      </Routes>
    </div>
  )
}

export default App