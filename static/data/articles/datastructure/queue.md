# queue (last in first out)
## enque
~~~javascript
$tmp = new vertex();
$tail.next = $tmp;
$tail = $tmp;
~~~

## deque
~~~javascript
$tmp = $head;
$head = $head.next;
delete or return $head;
~~~
