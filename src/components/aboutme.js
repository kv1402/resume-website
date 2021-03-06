import React, {Component} from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class About extends Component {
  constructor(props){
    super(props);
    this.state = {activeTab: 0};
  }

  toggleCategories(){
    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/*Project */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background:
               'url(https://react-etc.net/files/2017-12/react-hexagon.png) center / cover'}}> React Project#1</CardTitle>
            <CardText>
              Blablalbllblblblblbl
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
            </Card>
            {/*Project */}
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
              <CardTitle style={{color: '#fff', height: '176px', background:
                 'url(https://react-etc.net/files/2017-12/react-hexagon.png) center / cover'}}> React Project#1</CardTitle>
              <CardText>
                Blablalbllblblblblbl
              </CardText>
              <CardActions border>
                <Button colored>GitHub</Button>
                <Button colored>CodePen</Button>
                <Button colored>LiveDemo</Button>
              </CardActions>
              <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
              </CardMenu>
              </Card>
              {/*Project */}
              <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background:
                   'url(https://react-etc.net/files/2017-12/react-hexagon.png) center / cover'}}> React Project#1</CardTitle>
                <CardText>
                  Blablalbllblblblblbl
                </CardText>
                <CardActions border>
                  <Button colored>GitHub</Button>
                  <Button colored>CodePen</Button>
                  <Button colored>LiveDemo</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                  <IconButton name="share" />
                </CardMenu>
                </Card>
        </div>
      )
    } else if (this.state.activeTab === 1) {
      return(
        <div><h1>Interest & Activities</h1></div>
      )
    } else if (this.state.activeTab === 2) {
      return(
        <div className="projects-grid">
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#000', height: '176px', background:
               'url(https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Flag_of_South_Vietnam.svg/900px-Flag_of_South_Vietnam.svg.png) center / cover'}}> Vietnamese</CardTitle>
            <CardText>
              Mother Tongue
            </CardText>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
            </Card>
            {/*Project */}
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
              <CardTitle style={{color: '#000', height: '176px', background:
                 'url(http://www.ttu.no/getfile.php/1019917.1551.qdfdfuvaut/Norsk+flagg.gif) center / cover'}}> Norwegian</CardTitle>
              <CardText>
                Native
              </CardText>
              <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
              </CardMenu>
              </Card>
              {/*Project */}
              <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#000', height: '176px',weight: 'bold', background:
                   'url(https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg) center / cover'}}>English</CardTitle>
                <CardText>
                  Fluent
                </CardText>
                <CardMenu style={{color: '#fff'}}>
                  <IconButton name="share" />
                </CardMenu>
                </Card>

        </div>
      )
    } else if (this.state.activeTab === 3) {
      return(
        <div><h1>Computer Skills</h1></div>
      )
    }
  }


  render() {
    return(
      <div className="category-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
          <Tab>About Me</Tab>
          <Tab>Interest & Activities</Tab>
          <Tab>Languages</Tab>
          <Tab>Computer skills</Tab>
        </Tabs>

        <section className="projects-grid">
          <Grid>
            <Cell col={12}><div className="content">{this.toggleCategories()}</div></Cell>
          </Grid>
        </section>
      </div>
    )
  }
}

export default About;
