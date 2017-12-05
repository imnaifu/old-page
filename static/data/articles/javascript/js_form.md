## form submit
- general: <!-- <input type='submit' value='submit'> -->
- customize: <!-- <button type='submit'>Submit</button> -->
- image: <!-- <input type='image' src='blabla.png'> -->
- 只要表单存在上面列出的任何一个按钮，那么在响应表单控件拥有焦点的情况下，按回车就可以提交表单。如果表单没有提交按钮，按回车不会提交
- 浏览器会在请求发给服务器之前触发submit事件，阻止这个默认行为就可以取消提交(preventDefault())
- 以form.submit()的方式提交表单，不会触发submit事件
- 如果要在提交后禁用提交按钮，需要在onsubmit()禁用，而不能在onclick，因为不同浏览器onsubmit/onclick事件处理顺序不一样

## form reset
- general: <!-- <input type='reset' value='reset form'> -->
- customize: <!-- <button type='reset'>reset form</button> --> 
- unlike form.submit(), call form.reset() is like trigger reset event

## form element 
- method 
    - focus()
    - blur()
- event    
    - blur: when blur
    - change: 
        - for input/textarea 失去焦点且value值改变时触发 
        - for select 选项改变时触发
    - focus： when get focus


## form text
- input
- textarea
- 建议使用.value读取和设置文本框的值，不建议使用dom方法
- select(): 选择文本框的所有文本

## HTML5
- required: for input, textarea, select
- input type: email, url...
- novalidate/formnovalidate: do not validate when submit

## select
- multiple: allow multiple select
- size: number of line can be seen
- if value attribute exist then value=option.value, if not value=option.text in between of option
- option
    - index
    - label
    - selected
    - text
    - value
