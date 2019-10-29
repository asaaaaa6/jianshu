import React,{Component} from 'react';
import {Provider} from 'react-redux'
import Header from './common/header'
import store from './store'
// 导入路由
import { HashRouter as Router,Route,Switch,Link } from 'react-router-dom'

// Detail变成异步组件
import Detail from './pages/detail/loadable'
import Home from './pages/home'
import Login from './pages/login'
import Writer from './pages/writer'

class App extends Component{
  render() {
    return (
      <Router>
        {/* provider使组件可以使用store仓库中的数据 */}
        <Provider store={store}>
          <Header/>
          <Switch>
            <Route path='/' exact>
              <Home/>
            </Route>
            {/* 要将组件写在上面才会有parms以及history在this.props中 */}
            <Route path='/detail/:f' exact component={Detail}/>
            <Route path='/login' exact component={Login}/>
            <Route path='/writer' exact component={Writer}/>
          </Switch>
        </Provider>
      </Router>
    )
  }
}

export default App;
