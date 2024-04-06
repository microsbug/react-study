const App = () => {
  const clickHandler = event => {
    event.preventDefault() // 取消默认行为
    event.stopPropagation() // 取消事件的冒泡
    alert('我是App中的clickHandler')
    /**
     * 在React中无法通过返回false来取消默认行为,因为React是单向数据流,无法阻止事件的冒泡
     *    return false
     * 事件对象
     *    - React事件中同样会传递事件对象,可以在相应函数中定义参数来接收事件对象
     *    - React中的事件对象同样不是原生的事件对象,是经过React包装后的事件对象
     *    - 由于事件经历过包装,所有无需再考虑兼容性的问题
     */
    return false
  }

  return (
    <div
      onClick={() => {
        alert('div')
      }}
      style={{
        width: '200px',
        height: '200px',
        margin: '100px auto',
        backgroundColor: 'red'
      }}>
      {/*
            在React中事件需要通过元素的属性来设置,
              和原生JS不同,在React中事件的属性需要使用驼峰命名法
                onclick -> onClick
                onchange -> onChange
              属性值不能直接执行代码,而是需要一个回调函数:
                onclick="alert(123)"
                onClick={() => alert(123)}
        */}

      <button onClick={() => alert(123)}>点我一下</button>
      <button onClick={clickHandler}>clickHandler函数测试!</button>
      <br />
      <a
        href="https://www.baidu.com"
        onClick={clickHandler}>
        超链接
      </a>
    </div>
  )
}

/**
 * <button onclick="alert(123)"点我一下</button>
 *
 * <button id="btn1">点我一下</button>
 *
 * document.getElementById("btn1").onclick = function() {}
 *
 * document.getElementById("btn1").addEventListener("click", function() {}, false)
 *
 */
export default App
