import { Spinner, Button } from "react-bootstrap";

const Loader = () => {
  return (
    <>
    <Button variant="primary" className="mt-3">
    Sign in &nbsp;
    <Spinner as="span"
          animation="border"
          size="sm"
          role="status"
          aria-hidden="true">
        <span className="visually-hidden">Loading...</span>
    </Spinner>        
    </Button>
    </>
  )
}

export default Loader
