import {Component} from 'react'
import './index.css'
import ButtonItem from '../ButtonItem'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

class Main extends Component {
  state = {activeId: languageGreetingsList[0].id}

  onLanguageChange = id => {
    this.setState({activeId: id})
  }

  onRenderButton = () => {
    const {activeId} = this.state

    return (
      <ul className="buttonContainer">
        {languageGreetingsList.map(each => (
          <ButtonItem
            data={each}
            key={each.id}
            activeId={activeId}
            selectLanguage={this.onLanguageChange}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {activeId} = this.state
    const renderButton = this.onRenderButton()
    const activeImageData = languageGreetingsList.filter(
      each => each.id === activeId,
    )[0]
    return (
      <div className="contentContainer">
        <h1>Multilingual Greetings</h1>
        {renderButton}
        <img
          className="image"
          src={activeImageData.imageUrl}
          alt={activeImageData.imageAltText}
        />
      </div>
    )
  }
}
export default Main
