import { ReactComponent as CheckIcon } from '../images/icon-check.svg'

const Switch = () => {
  return (
    <div className="toggle-container">
      <input type="checkbox" id="switch" name="theme" />
      <label htmlFor="switch"></label>
      <CheckIcon style={{ visibility: 'hidden' }} />
    </div>
  )
}

export default Switch
