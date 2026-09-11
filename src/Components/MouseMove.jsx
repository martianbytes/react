import { useEffect, useState } from "react"

const MouseMove = () => {
    const [cor, setCor] = useState({x:0, y:0});

    useEffect(()=> {
        const handleMouseMove = (event) => {
            setCor({x:event.clientX, y:event.clientY})
        }
        window.addEventListener('mousemove', handleMouseMove);

        return () => {window.removeEventListener('mousemove', handleMouseMove);}
    }, [])
  return (
    <div>
        <p>X position: {cor.x}</p>
        <p>Y position: {cor.y}</p>
        
    </div>
  )
}

export default MouseMove