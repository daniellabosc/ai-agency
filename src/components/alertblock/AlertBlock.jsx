import Alert from 'react-bootstrap/Alert'

function AlertBox ({ text }) {
  return (
    <>
      {['success'].map(variant => (
        <Alert key={variant} variant={variant}>
          {text}
        </Alert>
      ))}
    </>
  )
}

export default AlertBox
