/*
 * @Author: your name
 * @Date: 2021-03-01 21:11:09
 * @LastEditTime: 2021-06-23 20:39:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-template/src/router/route.js
 */
import Home from "../view/Home"
import Users from "../view/Users"
import About from "../view/About"
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