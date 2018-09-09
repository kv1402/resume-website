import React, {Component} from 'react';
import { Grid, Cell, Card, CardTitle, CardText, CardActions, Button,IconButton, CardMenu } from 'react-mdl'


class Resume extends Component {
  render() {
    return(
      <div>

        <Grid className="demo-grid-2">
          <Cell col={3}> <h6>ABOUT</h6></Cell>
          <Cell col={5}>
            <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}} >
              I am passionate about helping people. I have skills and knowledge around technology, and I like to know more about new technologies, understanding human behaviors, entrepreneurship and innovation. I see myself as a creative, proactive and positive team player.</p>
          </Cell>
          <Cell col={4}><h6><a href="my-resume.pdf"> DOWNLOAD PDF</a></h6></Cell>
        </Grid>
          <div class="edu">
            <Grid className="demo-grid-1">
              <Cell col={3}>EDUCATION</Cell>
              <Cell col={5}>
                <p><t>Master of Computer Science, NTNU Trondheim</t><br/>
                  Technology profile: Digital Business, Sofware Engineering
                </p>
              </Cell>
              <Cell col={4}>
                <p><sm>Expected Fall 2019</sm><br/>
                  <imp><sm>IN PROGRESS</sm></imp>
                </p>
              </Cell>
            </Grid>
            <Grid className="demo-grid-1">
              <Cell col={3}></Cell>
              <Cell col={5}>
                <p><t>Master of Communication Technology, NTNU Trondheim </t><br/>
                   Technology profile: Information Security, Network and Services
                </p>
              </Cell>
              <Cell col={4}>
                <p><sm>Aug 2012 - Jun 2016 </sm></p>
              </Cell>
            </Grid>
            <Grid className="demo-grid-1">
              <Cell col={3}></Cell>
              <Cell col={5}>
                <p><t>Master of Energy and Environment, NTNU Trondheim</t><br/>
                </p>
              </Cell>
              <Cell col={4}>
                <p><sm>Aug 2011 - Jun 2012</sm></p>
              </Cell>
            </Grid>
            <Grid className="demo-grid-1">
              <Cell col={3}></Cell>
              <Cell col={5}>
                <p><t>Tiller Upper Secondary High school</t><br/>
                    Main subject: Scientific subjects
                </p>
              </Cell>
              <Cell col={4}>
                <p><sm>Aug 2008 - Jun 2011</sm></p>
              </Cell>
            </Grid>
          </div>
      <div class="hr"><hr /></div>
      <div class="WORK">
        <Grid className="demo-grid-1">
            <Cell col={3}>WORK</Cell>
            <Cell col={5}>
              <p><t>Evry - Part time as mobile application test</t><br/></p>
              <p><more>
                <ul>
                  <li>Going through the backlog and testing functionality that needs to be tested</li>
                  <li>Tools: Zeplin, Visual studio backlog, Slack </li>
                </ul>
              </more></p>
            </Cell>
            <Cell col={4}>Aug-Jun - 2018</Cell>
        </Grid>
        <Grid className="demo-grid-1">
          <Cell col={3}></Cell>
          <Cell col={5}>
            <p><t>Nord-Trøndelag Elektrisitetsverk - project: ”Handelsrobot”</t><br/></p>
            <p><more>
              <ul>
                <li>Developing a program for automatizing of buying and selling energy in the internal energy market</li>
                <li>Understanding internal energy market</li>
                <li>Retrieving and adding data in MongoDb(document store database)</li>
                <li>Using Python, Gitlab, Slack, Docker, Linux, SSH</li>
              </ul>
            </more></p>
          </Cell>
          <Cell col={4}>Jun-Jul - 2018</Cell>
        </Grid>
        <Grid className="demo-grid-1">
          <Cell col={3}></Cell>
          <Cell col={5}>
            <p><t>TDT4237 Software Security - Student assistant</t><br/>
            </p>
            <p><more>
              <ul>
                <li>Helping students with Owasp Zap and risk management</li>
                <li>Working with the professor in order to grade students’ assignments</li>
              </ul>
            </more></p>
          </Cell>
          <Cell col={4}>
            <p><sm>Aug - Dec 2016</sm></p>
          </Cell>
        </Grid>
        <Grid className="demo-grid-1">
          <Cell col={3}></Cell>
          <Cell col={5}>
            <p><t>IDI Open and NCPC - Student assistant</t><br/></p>
            <p><more>
              <ul>
                <li>Assisted in developing, planning and executing events, and meetings</li>
                <li>In charge of bringing in sponsors</li>
                <li>Produced marketing content for the different marketing channels</li>
              </ul>
            </more></p>
          </Cell>
          <Cell col={4}>Jan 2015 - Dec 2016</Cell>
        </Grid>
        <Grid className="demo-grid-1">
          <Cell col={3}></Cell>
          <Cell col={5}>
            <p><t>Trondheim Maker Faire - Project scout and social media manager</t><br/></p>
            <p><more>
              <ul>
                <li>Assisted in developing, planning and executing events, and meetings</li>
                <li>In charge of bringing in sponsors</li>
                <li>Produced marketing content for the different marketing channels</li>
              </ul>
            </more></p>
          </Cell>
          <Cell col={4}>Jan - Aug 2015</Cell>
        </Grid>
        <Grid className="demo-grid-1">
          <Cell col={3}></Cell>
          <Cell col={5}>
            <p><t>Other Jobs</t><br/></p>
            <p><more>
              <ul>
                <li>HelseIT- Technical assistant at Health IT conference</li>
                <li>Manifestasjonen - Helper at the conference</li>
                <li>Nortura - Fabric worker</li>
                <li>Tiller Helse- og velferdssenter - Help assistant</li>
              </ul>
            </more></p>
          </Cell>
          <Cell col={4}></Cell>
        </Grid>
      </div>
      <div class="hr"><hr /></div>
      <div class="volunteering">
        <Grid className="demo-grid-1">
          <Cell col={3}></Cell>
          <Cell col={5}>
          </Cell>
          <Cell col={4}>3</Cell>
        </Grid>
        <Grid className="demo-grid-1">
          <Cell col={3}></Cell>
          <Cell col={5}>
          </Cell>
          <Cell col={4}>3</Cell>
        </Grid>
        <Grid className="demo-grid-1">
          <Cell col={3}></Cell>
          <Cell col={5}>
          </Cell>
          <Cell col={4}>3</Cell>
        </Grid>
      </div>

      </div>


    )
  }
}

export default Resume;
