import { Form, Row, Col, Button } from 'react-bootstrap'

import Spinner from '../Spinner'

const Formm = () => {
  const onChangeSelectMultiple = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: [...e.target.options]
        .filter((option) => option.selected)
        .map((option) => option.value),
    }))
  }

  const handleSubmit = (e) => {
    const form = e.currentTarget
    e.preventDefault()

    if (form.checkValidity() === false) {
      return setValidated(true)
    }
  }

  if (loading) {
    return <Spinner />
  }

  return (
    <>
      <div className='p-5' style={{ backgroundColor: '#ECF0F1' }}>
        <h1 className='pb-5'>
          Add a Hospital
          <div
            style={{
              backgroundColor: '#ffb606 ',
              height: 2,
              width: '15%',
              marginTop: 10,
            }}
          >
            {' '}
          </div>
        </h1>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row>
            <Col md={6} lg={4} className='mt-5'>
              <Form.Group controlId='hospitalState'>
                <Form.Select
                  name='hospitalState'
                  onChange={onChange}
                  defaultValue='x'
                >
                  <option disabled value='x'>
                    -- Select an option --
                  </option>
                  <option value='Madhya Pradesh'>Madhya Pradesh</option>
                  <option value='Maharashtra'>Maharashtra</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6} lg={4} className='mt-5'>
              <Form.Group controlId='nodalPersonState'>
                <Form.Select
                  name='nodalPersonState'
                  onChange={onChange}
                  defaultValue='x'
                >
                  <option disabled value='x'>
                    -- Select an option --
                  </option>
                  <option>Madhya Pradesh</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={6} lg={4} className='mt-3'>
              <Form.Group controlId='hospitalServices'>
                <Form.Label>Facilities</Form.Label>
                <Form.Select
                  name='hospitalServices'
                  onChange={onChangeSelectMultiple}
                  multiple
                >
                  <option value='ICU'>ICU</option>
                  <option value='OPD'>OPD</option>
                  <option value='Pathology'>Pathology</option>
                  <option value='Labour Room'>Labour Room</option>
                  <option value='Dialysis'>Dialysis</option>
                  <option value='Trauma'>Trauma</option>
                  <option value='IPD'>IPD</option>
                  <option value='Radiology'>Radiology</option>
                  <option value='Blood Bank'>Blood Bank</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col md={6} lg={4} className='mt-3'>
              <Form.Group controlId='hospitalMiscellaneousFacilities'>
                <Form.Label>Miscellaneous Facilities</Form.Label>
                <Form.Select
                  name='hospitalMiscellaneousFacilities'
                  onChange={onChangeSelectMultiple}
                  multiple
                >
                  <option value='Animal bite care'>Animal bite care</option>
                  <option value='Poisoning care'>Poisoning care</option>
                  <option value='Rabies care'> Rabies care</option>
                  <option value='Drug de-addiction'>Drug de-addiction</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col md={6} lg={4} className='mt-3'>
              <Form.Group controlId='hospitalAcceptanceOfBeneficialServices'>
                <Form.Label>
                  Acceptance of Beneficial Services for Consumers
                </Form.Label>
                <Form.Select
                  name='hospitalAcceptanceOfBeneficialServices'
                  onChange={onChangeSelectMultiple}
                  multiple
                >
                  <option value='BPL'>BPL</option>
                  <option value='Ayushman Card'>Ayushman Card</option>
                  <option value='Health Card'>Health Card</option>
                  <option value='Health Insurance'>Health Insurance</option>
                </Form.Select>
              </Form.Group>
            </Col>

            <Col md={6} lg={4} className='mt-3'>
              <Form.Group controlId='isEmergencyServiceAvailable'>
                <Form.Label>Emergency Service Available?</Form.Label>
                <Form.Select
                  name='isEmergencyServiceAvailable'
                  onChange={onChange}
                  defaultValue='x'
                >
                  <option disabled value='x'>
                    -- Select an option --
                  </option>
                  <option value='Yes'>Yes</option>
                  <option value='No'>No</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col md={6} lg={4} className='mt-3'>
              <Form.Group controlId='isAmbulanceServiceAvailable'>
                <Form.Label>Ambulance Service Available?</Form.Label>
                <Form.Select
                  name='isAmbulanceServiceAvailable'
                  onChange={onChange}
                  defaultValue='x'
                >
                  <option disabled value='x'>
                    -- Select an option --
                  </option>
                  <option value='Yes'>Yes</option>
                  <option value='No'>No</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
          <Button type='submit' className='mt-5'>
            Add Hospital
          </Button>
        </Form>
      </div>
    </>
  )
}

export default Formm
