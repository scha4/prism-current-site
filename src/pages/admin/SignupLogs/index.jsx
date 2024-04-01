import Breadcrumb from '../../../components/admin/Common/Breadcrumb';
import { MDBDataTable } from 'mdbreact';
import React, {useState} from 'react';
import { Card, CardBody, CardSubtitle, CardTitle, Col, Row } from 'reactstrap';
 

const SignupLogs = () =>{
  const data = {
    columns: [
      {
        label: "Name",
        field: "name",
        sort: "asc",
        width: 150,
      },
      {
        label: "Age",
        field: "age",
        sort: "asc",
        width: 270,
      },
      {
        label: "Gender",
        field: "gender",
        sort: "asc",
        width: 270,
      },
      {
        label: "Tel",
        field: "tel",
        sort: "asc",
        width: 270,
      },
      {
        label: "Package",
        field: "package",
        sort: "asc",
        width: 270,
      },
      {
        label: "1st choice",
        field: "first",
        sort: "asc",
        width: 270,
      },
      {
        label: "2nd choice",
        field: "second",
        sort: "asc",
        width: 270,
      },
    ],
    rows: [
      {
        name: "Tiger Nixon",
        age: "System Architect",
        gender: "Edinburgh",
        tel: "61",
        package: "2011/04/25",
        first: "$320",
        second: "$320",
        
      },
    ]
  }

  return (
      <React.Fragment>
            <div className="page-content">

              <Breadcrumb title="Logs" breadcrumbItem="Sign-up Logs" />
              <Row>
                <Col className="col-12">
                  <Card>
                    <CardBody>
                      <CardTitle>Sign-up Logs</CardTitle>
                      <CardSubtitle className="mb-3">
                        The logs that sent with email and database.
                        </CardSubtitle>

                      <MDBDataTable responsive striped bordered data={data} />
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </div>

    </React.Fragment>
        


  )

}

export default SignupLogs;