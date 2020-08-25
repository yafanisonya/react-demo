import React, { useReducer, useContext, useEffect } from "react"
import ReactDOM from 'react-dom'

const store = {
  user: null,
  books: null,
  movies: null
}

function reducer (state, action) {
  switch (action.type) {
    case "setUser":
      return { ...state, user: action.user }
    case "setBooks":
      return { ...state, books: action.books }
    case "setMovies":
      return { ...state, movies: action.movies }
    default:
      throw new Error();
  }
}

const Context = React.createContext(null);

function App () {
  const [state, dispatch] = useReducer(reducer, store);

  const api = { state, dispatch };
  return (
    <Context.Provider value={api}>
      <User />
      <hr />
      <Books />
      <Movies />
    </Context.Provider>
  )
}

function User () {
  const { state, dispatch } = useContext(Context);
  useEffect(() => {
    ajax("/user").then(user => {
      dispatch({ type: "setUser", user: user });
    });
  }, []);
  return (
    <div>
      <h1>个人信息</h1>
      <div>name:{state.user ? state.user.name : ""}</div>
    </div>
  )
}

function Books () {
  const { state, dispatch } = useContext(Context);
  useEffect(
    () => {
      ajax("/books").then(books => {
        dispatch({ type: "setBooks", books: books })
      })
    }, [])
  return (
    <div>
      <h1>我的书籍</h1>
      <ol>{state.books ? state.books.map(book => <li key={book.id}>{book.name}</li>) : "加载中"}</ol>
    </div>
  )
}

function Movies () {
  const { state, dispatch } = useContext(Context);
  useEffect(() => {
    ajax("/movies").then(movies => {
      dispatch({ type: "setMovies", movies: movies })
    })
  }, [])
  return (
    <div>
      <h1>我的电影</h1>
      <ol>{state.movies ? state.movies.map(movie => <li key={movie.id}>{movie.name}</li>) : '加载中'}</ol>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)

function ajax (path) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (path === '/user') {
        resolve({
          id: 1,
          name: "fanison"
        })
      } else if (path === '/books') {
        resolve([
          { id: 1, name: 'JS红宝书' },
          { id: 2, name: 'JS精粹' }
        ])
      } else if (path === '/movies') {
        resolve([
          { id: 1, name: '八百' },
          { id: 2, name: '九百' }
        ])
      }
    }, 2000)
  })
}