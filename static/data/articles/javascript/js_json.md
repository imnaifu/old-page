## JSON对象
- 早期使用eval()
- 现在使用全局对象JSON
- method
	- stringify(): 把js对象序列化
		- `var jsonText = JSON.stringify(json_text, filter_array_or_function, indentation)`
	- parse(): json字符串解析为原生js value
		- `var jsObject = JSON.parse(json_text, function)`

