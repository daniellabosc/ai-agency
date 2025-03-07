import Card from 'react-bootstrap/Card'
import SpecialImg from '../../assets/special.png'

function Special () {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant='top' src={SpecialImg} />
      <Card.Body>
        <Card.Title>
          <h2 className='text-secondary'>$399</h2>
        </Card.Title>
        <Card.Text>
          Are you an independant groomer? For a limited time only get a website
          upgrade for $399!
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Special
