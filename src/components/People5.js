import React from 'react'
import axios from 'axios'
import {Header, Container, Card, Image, Button } from 'semantic-ui-react'
import Planet from './Planet'
import {Link} from 'react-router-dom'




class People5 extends React.Component {

  state = {people: [],  }

  componentDidMount() {
    axios.get("https://swapi.co/api/people/?page=5")
      .then( res => {
        this.setState({ 
          people: res.data.results,
          
        });
      })
  }
          

  
  renderPerson = () => {
    const { people, } = this.state
    return people.map( peps => (
      
       <Card.Group>      
        <Card>
          <Card.Content>
            <Image src='http://icons.iconarchive.com/icons/sensibleworld/starwars/1024/Darth-Vader-icon.png' />
            <Card.Header>{ peps.name }</Card.Header>
          </Card.Content>
          <Link to='/planet'>
            <Planet homeworld={peps.homeworld}/>
            <Button>
              Planet
            </Button>
            </Link>
        </Card>
      </Card.Group>
      
     )
   )
  }
    render () {
      return(
        <Container>
          <div>{this.renderPerson()}</div>
        </Container>
      )
    }
}

export default People5
