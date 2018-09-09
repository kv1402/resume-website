import React, {Component} from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {
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
        <div><h1>This is Angular</h1></div>
      )
    } else if (this.state.activeTab === 2) {
      return(
        <div><h1>This is VueJS</h1></div>
      )
    } else if (this.state.activeTab === 3) {
      return(
        <div><h1>This is MongDB</h1></div>
      )
    }
  }


  render() {
    return(
      <div className="category-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
          <Tab>React</Tab>
          <Tab>Angular</Tab>
          <Tab>VueJS</Tab>
          <Tab>MongoDB</Tab>
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

export default Projects;
