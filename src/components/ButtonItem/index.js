import './index.css'

const ButtonItem = props => {
  const {data, activeId, selectLanguage} = props
  const {buttonText, id} = data
  const onClickChangeActiveId = () => selectLanguage(id)

  const activeStyle = activeId === id ? 'activeColor' : 'inactiveColor'

  return (
    <li className="list">
      <button
        className={activeStyle}
        type="button"
        onClick={onClickChangeActiveId}
      >
        {buttonText}
      </button>
    </li>
  )
}
export default ButtonItem
