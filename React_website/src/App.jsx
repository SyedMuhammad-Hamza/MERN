import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <nav>
        <div className='logo'>
            <img src="/assets/p1.jpg" />
        </div>
      </nav>
    </div>
  )
}

export default App