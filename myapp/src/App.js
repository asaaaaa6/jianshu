import React,{Component} from 'react';
import {Provider} from 'react-redux'
import Header from './common/header'
import store from './store'
// 导入路由
import { HashRouter as Router,Route,Switch,Link } from 'react-router-dom'
import Detail from './pages/detail'
import Home from './pages/home'

class App extends Component{
  render() {
    return (
      <Router>
      <div>
        {/* provider使组件可以使用store仓库中的数据 */}
        <Provider store={store}>
          <Header/>
          <Switch>
            <Route path='/' exact>
              <Home/>
            </Route>
            <Route path='/detail' exact>
              <Detail/>
            </Route>
          </Switch>
        </Provider>
        
      </div>
      </Router>
    )
  }
}

export default App;
