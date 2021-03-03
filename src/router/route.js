/*
 * @Author: your name
 * @Date: 2021-03-01 21:11:09
 * @LastEditTime: 2021-03-01 23:00:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-template/src/router/route.js
 */
const About = () => {
  return (
    <div><h1>About</h1></div>
  )
}
const Users = () => {
  return (
    <div><h1>users</h1></div>
  )
}
const Home = () => {
  return (
    <div><h1>home</h1></div>
  )
}
const router = [
  {
    path:"/",
    component:Home
  },
  {
    path:"/users",
    component:Users
  },
  {
    path:"/about",
    component:About
  }
]
export default router