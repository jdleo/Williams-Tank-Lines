import React from 'react';
import Layout from '../components/Layout';
import {Image, Container, Card, Icon, Header, Segment, Button} from 'semantic-ui-react';

class CareersComponent extends React.Component {

  state = {
    currentCareer: 'driver'
  }

  render () {
    const careers = {
      //PAGE FOR DRIVER OPPORTUNITES
      driver: (
        <Layout>
          <Image src='https://raw.githubusercontent.com/jdleo/Williams-Tank-Lines/master/assets/careersImg.png'/>
          <Image.Group size='large' style={{'marginTop': '40px'}}>
            <Image src="https://raw.githubusercontent.com/jdleo/Williams-Tank-Lines/master/assets/careers/careersImg2.png" rounded/>
            <Image src="https://raw.githubusercontent.com/jdleo/Williams-Tank-Lines/master/assets/careers/careersImg3.png" rounded/>
          </Image.Group>
          <Container style={{'marginTop': '40px'}}>
            <div>
              <Button animated onClick={() => {this.setState({'currentCareer':'driver'})}}>
                <Button.Content visible>Driver Opportunites</Button.Content>
                <Button.Content hidden>
                  View opportunity
                </Button.Content>
              </Button>
              <Button animated='fade' onClick={() => {this.setState({'currentCareer':'mechanic'})}}>
                <Button.Content hidden>View opportunity</Button.Content>
                <Button.Content visible>
                  Mechanic Opportunites
                </Button.Content>
              </Button>
              <Button animated onClick={() => {this.setState({'currentCareer':'clerical'})}}>
                <Button.Content visible>Clerical Opportunites</Button.Content>
              <Button.Content hidden>View opportunity</Button.Content>
              </Button>
            </div>
            <Card.Group centered style={{'marginTop':'40px'}}>
              <Card fluid>
                <Card.Content>
                  <Card.Header>Driver Opportunities</Card.Header>
                  <Card.Meta>
                    <span className='summary'>This position requires the loading, transporting, and delivering of petroleum products and operation of company equipment in a safe manner, complying with all state, federal, company and customer policies and procedures.</span>
                  </Card.Meta>
                  <Card.Description>
                    <br/>
                    <Header as='h4' color='grey'>
                      Job Description and Requirements
                    </Header>
                    Night shift position starting time 5 PM to 5 AM (starting times may vary between terminals)<br/>
                    All shifts run on a twelve (12) hour shift basis (may vary from day to day)<br/>
                    Weekly shifts schedule is five (5) days on, two (2) days off, and five (5) days on, three (3) days off.<br/>
                    Straight pay. NO overtime<br/>
                    Availability to work long hours, including weekends, holidays and nights Ability to work in all types of weather conditions<br/>
                    Drug/Alcohol free<br/>

                    <br/>
                    <Header as='h4' color='grey'>
                      Employment Criteria
                    </Header>
                    The criteria stated below are minimum qualification levels for hiring commercial drivers by Williams Tank Lines.<br/>
                    Minimum Experience:<br/>
                    Applicants must have (1) year of verifiable experience as a Class A Driver. Minimum of high school education completed is desirable but not mandatory in
                    all applicants.<br/>

                    <br/>
                    <Header as='h4' color='grey'>
                      Qualifications
                    </Header>
                    Class A Commercial Drivers License with hazardous materials and tanker endorsement (doubles/triples if in Nevada), with TSA clearance<br/>
                    Must possess TWIC badge (Transportation Worker’s Identification Credentials) <br/>Applicant must receive a 1 year minimum clearance on pre-employment physical
                    and back evaluation<br/>

                    <br/>
                    <Header as='h4' color='grey'>
                      Driving Record
                    </Header>
                    Applicant must not have been convicted of a felony in the use of a motor vehicle. <br/>No outstanding Failure to appear or Pay fines entries on their driving record.<br/>
                    No more than 1 moving violation conviction in the preceding 12 months and no
                    more than 2 moving violation convictions in the past 36 months.<br/>

                    <br/>
                    <Header as='h4' color='grey'>
                      Other Requirements
                    </Header>
                    Applicants who have been convicted of any of the following violations may not be considered for employment:
                    <Segment.Group>
                      <Segment>DWI/DUI</Segment>
                      <Segment>RECKLESS OR CARELSS DRIVING</Segment>
                      <Segment>HIT & RUN, (LEAVING THE SCENE OF AN ACCIDENT)</Segment>
                      <Segment>SUSPENDED LICENSE AS A RESULT OF MOVING VIOLATION CONVICTIONS</Segment>
                    </Segment.Group>
                    No more than one preventable accident in the past three (3) years.<br/>
                    Applicant must provide a complete list of all states in which they have held drivers or commercial driver’s licenses within the last three (3) years and the license numbers so that we can obtain a complete driving record check. Applicant must agree to obtain a new CDL issued from the state they are currently working<br/>
                    in within thirty (30) days of employment with the company.<br/>

                    <br/>
                    <Header as='h4' color='grey'>
                      Benefits
                    </Header>
                    <Segment.Group>
                      <Segment>Medical and Dental and Vision plan - 60 days.</Segment>
                      <Segment>No Cost Life Insurance</Segment>
                      <Segment>401(k) with employer matching and profit sharing</Segment>
                      <Segment>Competitive pay</Segment>
                      <Segment>Training for those that meet the minimum criteria</Segment>
                      <Segment>Quarterly Incentive Bonus</Segment>
                      <Segment>Paid Vacations</Segment>
                      <Segment>Paid Holidays</Segment>
                      <Segment>Direct Deposits</Segment>
                      <Segment>Full Uniform Service</Segment>
                      <Segment>Trained on Defensive Driving</Segment>
                    </Segment.Group>
                    <br/>
                    You will not be considered if you do not meet the requirements and qualification listed above.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  Send Resume and 3 year DMV printout along with pre-application questionaire to:<br/>
                  Fax: 800-417-8036<br/>
                  Email: employment@williamstanklines.com<br/>
                  For Questions call:<br/>
                  Phone: 209-944-5613 ext. 1000<br/>
                  Please provide email address or phone number where you can be contacted<br/>

                </Card.Content>
              </Card>
            </Card.Group>
          </Container>
        </Layout>
      ),
      mechanic: (
        <Layout>
          <Image src='https://raw.githubusercontent.com/jdleo/Williams-Tank-Lines/master/assets/careersImg.png'/>
          <Image.Group size='large' style={{'marginTop': '40px'}}>
            <Image src="https://raw.githubusercontent.com/jdleo/Williams-Tank-Lines/master/assets/careers/mechanicImg1.png" rounded/>
            <Image src="https://raw.githubusercontent.com/jdleo/Williams-Tank-Lines/master/assets/careers/mechanicImg2.png" rounded/>
          </Image.Group>
          <Container style={{'marginTop': '40px'}}>

            <div>
              <Button animated onClick={() => {this.setState({'currentCareer':'driver'})}}>
                <Button.Content visible>Driver Opportunites</Button.Content>
                <Button.Content hidden>
                  View opportunity
                </Button.Content>
              </Button>
              <Button animated='fade' onClick={() => {this.setState({'currentCareer':'mechanic'})}}>
                <Button.Content hidden>View opportunity</Button.Content>
                <Button.Content visible>
                  Mechanic Opportunites
                </Button.Content>
              </Button>
              <Button animated onClick={() => {this.setState({'currentCareer':'clerical'})}}>
                <Button.Content visible>Clerical Opportunites</Button.Content>
              <Button.Content hidden>View opportunity</Button.Content>
              </Button>
            </div>
            <Card.Group centered style={{'marginTop':'40px'}}>
              <Card fluid>
                <Card.Content>
                  <Card.Header>Mechanic Opportunities</Card.Header>
                  <Card.Meta>
                    <span className='summary'>This position is primarily responsible for maintenance and repairs on heavy duty big rig diesel trucks.</span>
                  </Card.Meta>
                  <Card.Description>
                    <br/>
                    <Header as='h4' color='grey'>
                      General Responsibilities
                    </Header>
                    Maintain, troubleshoot, and repair diesel engines. For example air conditioning system, brake system, overhead valve adjustments, etc<br/>

                    <br/>
                    <Header as='h4' color='grey'>
                      Skills and Requirements
                    </Header>
                    Must have own tools<br/>
                    Must have experience in: brake inspections, air condition system, overhead
                    valve adjustment.<br/>
                    Proper and safe use of basic hand and power tools.<br/>
                    Ability to work efficiently with minimal supervision, and function well as a team
                    member.<br/>
                    Must be able to speak, read, write, and comprehend so as to ensure effective
                    communication across all lines of employees, vendors, and customers.<br/> General computer skills.<br/>
                    Must be able to operate a motor vehicle.<br/>
                    Must possess and maintain a valid driver's license during the course of employment - Class A preferred but not required.<br/>

                    <br/>
                    <Header as='h4' color='grey'>
                      Specialized Skills Required
                    </Header>
                    Must be able to climb on and around diesel truck equipment.<br/>
                    Must be able to sit, kneel, walk, lift (up to 50 pounds) and carry for extended
                    periods.<br/>

                    <br/>
                    <Header as='h4' color='grey'>
                      Job Conditions / Work Environment
                    </Header>
                    Monday through Friday (working every other weekend)<br/>
                    Road call may be required<br/>
                    Occasional travel to outside terminal locations may be required<br/>

                    <br/>
                    <Header as='h4' color='grey'>
                      Education / Work Experience
                    </Header>
                    4 years Journeyman/Equipment Maintenance experience required<br/>
                  High School diploma required<br/>

                    <br/>
                    Williams Tank Lines is a drug free work place.<br/>
                    Employment is contingent satisfactorily passing pre-employment exam and drug testing is required.<br/>

                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  Send Resume and 3 year DMV printout along with pre-application questionaire to:<br/>
                  Fax: 800-417-8036<br/>
                  Email: employment@williamstanklines.com<br/>
                  For Questions call:<br/>
                  Phone: 209-944-5613 ext. 1000<br/>
                  Please provide email address or phone number where you can be contacted<br/>

                </Card.Content>
              </Card>
            </Card.Group>
          </Container>
        </Layout>
      ),
      clerical: (
        <Layout>
          <Image src='https://raw.githubusercontent.com/jdleo/Williams-Tank-Lines/master/assets/careersImg.png'/>
          <Image.Group size='large' style={{'marginTop': '40px'}}>
            <Image src="https://raw.githubusercontent.com/jdleo/Williams-Tank-Lines/master/assets/careers/clericalImg1.png" rounded/>
            <Image src="https://raw.githubusercontent.com/jdleo/Williams-Tank-Lines/master/assets/careers/clericalImg2.png" rounded/>
          </Image.Group>
          <Container style={{'marginTop': '40px'}}>
            <div>
              <Button animated onClick={() => {this.setState({'currentCareer':'driver'})}}>
                <Button.Content visible>Driver Opportunites</Button.Content>
                <Button.Content hidden>
                  View opportunity
                </Button.Content>
              </Button>
              <Button animated='fade' onClick={() => {this.setState({'currentCareer':'mechanic'})}}>
                <Button.Content hidden>View opportunity</Button.Content>
                <Button.Content visible>
                  Mechanic Opportunites
                </Button.Content>
              </Button>
              <Button animated onClick={() => {this.setState({'currentCareer':'clerical'})}}>
                <Button.Content visible>Clerical Opportunites</Button.Content>
              <Button.Content hidden>View opportunity</Button.Content>
              </Button>
            </div>
            <Card.Group centered style={{'marginTop':'40px'}}>
              clerical
            </Card.Group>
          </Container>
        </Layout>
      )
    }

    return (
      <div>
        {careers[this.state.currentCareer]}
      </div>
    );
  }
}

export default CareersComponent;
