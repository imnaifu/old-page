
# Linked List featrue
## 1. sequence array: fast in retrieve, bad is insert
## 2. linked list: fast in insert, bad in retrieve

# linked list 
- head, head.value, head.next
- tail, tail.value, tail.next = null

# insert head
```javascript
$new_head = new vertex();
$new_head.next = $head;
$head = $new_head;
```

# insert tail
```javascript
$new_tail = new vertex();
$tmp = head;
while ($tmp.next != null){
  $tmp = $tmp.next
}
$tmp.next = $new_tail;
$new_tail.next = null;
```

# insert kth
```javascript
$new_vertex = new vertex();
$tmp = $head;
while (--$k != 0){
  $tmp = $tmp.next;
}
$hold = $tmp.next;
$tmp.next = $new_vertex;
$new_vertex.next = $hold;
```

# remove head
```javascript
$head = $head.next;
delete $head;
```

# remove tail;
```javascript
$tmp = $head;
while ($tmp.next != null){
  $pre = $tmp;
  $tmp = $tmp.next;
}
$pre.next = null;
delete $tmp;
```

# remove kth
```javascript
$tmp = $head;
while (--$k != 0){
  $pre = $tmp;
  $tmp = $tmp.next;
}
$pre.next = $tmp.next;
delete $tmp;
```














