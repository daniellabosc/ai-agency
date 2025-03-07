import './banner.css'
import Card from 'react-bootstrap/Card'

function Banner () {
  return (
    <Card className='banner'>
      <Card.Body>
        <Card.Text>
          <a href='#contact'>
            <h3>Are you an independant groomer?</h3>
            <h5>
              check out our{' '}
              <span className='text-red'>$399 Website Upgrade!</span>
            </h5>
          </a>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Banner
