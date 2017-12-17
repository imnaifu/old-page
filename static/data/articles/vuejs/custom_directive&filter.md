# 自定义directive
### globally
```
//语法
Vue.directive('directive-name', defination-object)

Vue.directive('rainbow', {
	bind(el, binding, vnode){
		//el -> element
		//binding -> variable passed in "v-on:click='doSomething'"
		//binding.value: 'doSomething' is the value
		//binding.arg: , 'click' is the arg
	}
})
```
### locally
```
<script>
export default {
	directives: {
		//objects inside
		rainbow: {
			bind(el, binding, vnode){
				
			}
		}
	}
}
</script>
```

# 自定义filter
### globally
```
Vue.filter('filter-name', function(value){
	
})
```
### locally
```
<script>
export default {
	filters: {
		//functions inside
		toUpper: function(value){
			return value.toUpperCase();
		}
	}
}
</script>
```
