// another JS file
import { renderHeader } from './header'
import { renderHome } from './home'
import { renderMenu } from './menu'

renderHeader()
document.querySelector('#tab0').classList.add('active');

renderHome()
// renderMenu()
