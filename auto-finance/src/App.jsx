import React, { lazy, Suspense } from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Loading from '@components/loading/loading'
import TabBar from '@components/tab-bar/tab-bar'

const Home = lazy(() => import('@views/home/home'))
const SearchCar = lazy(() => import('@views/search-car/search-car'))
const Financial = lazy(() => import('@views/financial/financial'))
const Mine = lazy(() => import('@views/mine/mine'))

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Suspense fallback={<Loading />}>
            <Route exact path="/" component={Home} />
            <Route path="/search-car" component={SearchCar} />
            <Route path="/financial" component={Financial} />
            <Route path="/mine" component={Mine} />
          </Suspense>
        </Switch>
        <TabBar />
        {/* <Loading></Loading> */}
      </Router>
    </>
  )
}

export default App
