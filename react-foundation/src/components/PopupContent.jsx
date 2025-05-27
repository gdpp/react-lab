import { createPortal } from "react-dom"

const PopupContent = ({copied}) => {
  return createPortal(
    <section>
        {copied && (
            <div style={{ padding: '4rem', position: 'absolute', bottom: '1rem', backgroundColor: 'green', color: 'white'}}>Copied to Clipboard</div>
        )}
    </section>,
    document.querySelector("#popup-content")
  )
}

export default PopupContent