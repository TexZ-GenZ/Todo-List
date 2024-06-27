import './styles/style.css';
import write from './js_components/writeDom';
import dom from './js_components/dom'


dom.addTodo.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        write.addList();
    })
})