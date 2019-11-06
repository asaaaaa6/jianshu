import Loadable from 'react-loadable'
import React from 'react'

// 实现import from 方法时，我们webpack会将这一类的都一起打包,在刚进入页面的时候

const LoadableComponent = Loadable({
    loader:()=>import('./index'),
    loading(){
        return <div>正在加载</div>
    }
})

export default ()=><LoadableComponent/>


// 在调用LoadableComponent组件时，首先考虑到import(./index)加载Detail(异步加载组件),渲染需要时间,在等待的时候，先加载下面的div

// 而且由于()=>import('./index')是懒加载(就近加载);所以这个js文件一开始没有被打包，而是在进入这个页面的时候才打包，就是用他的时候才加载(懒加载)