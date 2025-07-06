import type { CSSProperties } from "react"

const address = {
    zipCode: 44530,
    country: 'Mexico'
}

const styles: CSSProperties = {backgroundColor: '#F1F1F1', borderRadius: 5, padding: 10}

function MyAwesomeComponent() {
  const name = 'Gustavo'
  const lastName = 'Perez'
  const favoriteGames = [
    'Elden Ring', 'Metal Gear', 'Stardew Valley'
  ]
  const isActive = true
  
  return (
    <>
        <h1>{name}</h1>
        <h3>{lastName}</h3>
        <h4>Favorite Games</h4>
        <ul>
          {favoriteGames.map(item => (
            <li>{item}</li>
          ))}
        </ul>
        <h1>{isActive ? 'Active' : 'Inactive'}</h1>
        <p style={styles}>
          {address.country}
        </p>
        <p style={styles}>
          # {address.zipCode}
        </p>
    </>
  )
}

export default MyAwesomeComponent