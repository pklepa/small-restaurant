// another JS file
import { renderHeader } from './header'
import { renderHome } from './home'

renderHeader()
document.querySelector('#tab0').classList.add('active');

renderHome()
