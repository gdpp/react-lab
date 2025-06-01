type Button = {
    label: string,
    onClick: () => void,
     disabled: boolean
}

const Button = ({label, onClick, disabled}: Button) => {
  return (
    <button onClick={onClick} disabled={disabled}>{label}</button>
  )
}

export default Button