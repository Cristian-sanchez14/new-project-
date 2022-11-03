import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

const ButtonExampleSocial = (props) => (
  <div className="social">
    <a
      href="https://twitter.com/Cristian_14715"
      alt="link"
      target="_blank"
      rel="noreferrer"
    >
      <Button color="twitter">
        <Icon name="twitter" /> Twitter
      </Button>
    </a>
    <a
      href="https://www.linkedin.com/feed/"
      alt="link"
      target="_blank"
      rel="noreferrer"
    ></a>
    <Button color="linkedin">
      <Icon name="linkedin" /> LinkedIn
    </Button>
    <a
      href="https://www.instagram.com/cristian_snchez7/"
      alt="link"
      target="_blank"
      rel="noreferrer"
    ></a>
    <Button color="instagram">
      <Icon name="instagram" /> Instagram
    </Button>
    <a
      href="https://www.youtube.com/channel/UCdXKvZmgrU3sWxtYEOKNBVg"
      alt="link"
      target="_blank"
      rel="noreferrer"
    ></a>
    <Button color="youtube">
      <Icon name="youtube" /> YouTube
    </Button>
    <a
      href="https://www.youtube.com/channel/UCdXKvZmgrU3sWxtYEOKNBVg"
      alt="link"
      target="_blank"
      rel="noreferrer"
    >
      <Button color="github">
        <Icon name="github" /> GitHub
      </Button>
    </a>
  </div>
)

export default ButtonExampleSocial
