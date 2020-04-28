import React, { Component, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';
import { AppBreadcrumb, AppFooter, AppHeader, AppSidebar, AppSidebarNav, AppSidebarMinimizer, } from '@coreui/react';
import { PrivateRoute } from '../PrivateRoute';
import navigation from '../../nav';
import navigationUser from '../../navUser';
import routes from '../../routes';
import userRoutes from '../../userRoutes';

const DefaultFooter = React.lazy(() => import('./DefaultFooter'));
const DefaultHeader = React.lazy(() => import('./DefaultHeader'));

class DefaultLayout extends Component {
  loading = () => <div className="animated fadeIn pt-1 text-center"><div className="sk-spinner sk-spinner-pulse"></div></div>;

  render() {
    return (
      <div className="app">
        <AppHeader fixed>
          <Suspense fallback={this.loading()}>
            <DefaultHeader />
          </Suspense>
        </AppHeader>
        
        <div className="app-body">
          {
            // eslint-disable-next-line
            localStorage.getItem("roleId") == 3 ? 
            <AppSidebar fixed display="lg">
              <Suspense>
                <AppSidebarNav navConfig={navigationUser} {...this.props} />
              </Suspense>
              <AppSidebarMinimizer />
            </AppSidebar> : 
            <AppSidebar fixed display="lg">
              <Suspense>
                <AppSidebarNav navConfig={navigation} {...this.props} />
              </Suspense>
              <AppSidebarMinimizer />
            </AppSidebar>
          }
          {
            // eslint-disable-next-line
            localStorage.getItem("roleId") == 3 ? 
            <main className="main">
            <AppBreadcrumb appRoutes={userRoutes}/>
            <Container fluid>
              <Suspense fallback={this.loading()}>
                <Switch>
                  { userRoutes.map((route, idx) => {
                    if(userRoutes.isPrivate) {
                      return <PrivateRoute
                        key={idx}
                        path={route.path}
                        exact={route.exact}
                        name={route.name}
                        component={route.component}
                      />
                    }
                    return route.component ? (
                      <Route
                        key={idx}
                        path={route.path}
                        exact={route.exact}
                        name={route.name}
                        render={props => ( <route.component {...props} /> )} 
                      />
                    ) : (null)
                  })}
                </Switch>
              </Suspense>
            </Container>
          </main> :
          <main className="main">
            <AppBreadcrumb appRoutes={routes}/>
            <Container fluid>
              <Suspense fallback={this.loading()}>
                <Switch>
                  { routes.map((route, idx) => {
                    if(route.isPrivate) {
                      return <PrivateRoute
                        key={idx}
                        path={route.path}
                        exact={route.exact}
                        name={route.name}
                        component={route.component}
                      />
                    }
                    return route.component ? (
                      <Route
                        key={idx}
                        path={route.path}
                        exact={route.exact}
                        name={route.name}
                        render={props => ( <route.component {...props} /> )} 
                      />
                    ) : (null)
                  })}
                </Switch>
              </Suspense>
            </Container>
          </main>
          }
        </div>
        <AppFooter>
          <Suspense fallback={this.loading()}>
            <DefaultFooter />
          </Suspense>
        </AppFooter>
      </div>
    );
  }
}

export default DefaultLayout;
