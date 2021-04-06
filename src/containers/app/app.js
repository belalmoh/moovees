import './app.scss';
import React, { useEffect } from 'react';
import { PageHeader, PageFooter, Movie } from '../../components';
import { Layout } from 'antd';
import { Movies } from '../index';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const { Footer, Content } = Layout;


function App(props) {

  useEffect(() => {
    props.getAllGenres();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.movies]);

  return (
    <>
    <Router>
      <Layout style={{height:"100h", backgroundColor: 'white'}}>
          <Link to="/">
              <PageHeader title="Moovees App"></PageHeader>
          </Link>
          <Content className="site-layout" style={{ padding: '0 50px', marginTop: 50, height: '100%' }}>
            <Switch>
              <Route path="/movie/:movieId">
                <Movie movie={props.selectedMovie} imagesPath={props.imagesPath} clearSelectedMovie={props.clearSelectedMovie} selectMovie={props.selectMovie}/>
              </Route>
              <Route path="/">
                <Movies {...props}/>
              </Route>
            </Switch>
          </Content>
          <Footer style={{ position: "fixed", bottom: "0", width: '100%' }}>
            <PageFooter title="Moovees"/>
          </Footer>
        </Layout>
    </Router>
    </>
  );
}

export default App;
