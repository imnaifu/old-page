# function type
- **Public** : access anywhere
- **Protected** : this class or child class
- **Private** : only this class, child class can not

# Static （静态）
- 声明类成员或方法为 static ，就可以不实例化类而直接访问，静态成员属于类，不属于任何对象实例，但类的对象实例都能共享。
- static property: 
    - if outside the class, class_name :: property_name; if inside the class, self :: property_name 
    - static method: 
    - if outside the class, class_name :: method_name() or $var = new Class_name(), $var->method_name() like normal way;
    - if inside the class, self :: method_name()

## usage
In PHP, '**static**' mainly has two usages.  
1. Define class variable/method (as opposed to instance variable/method) 
and can be accessed **without instantiating class**
2. Can be used to maintain state between function calls (like javascript closure).

```php
function test()
{
    static $a = 0;
    echo $a;
    $a++;
}

test();  // prints 0
test();  // prints 1
test();  // prints 2
```

3. so when to use static
- only if you decide that the function does not need the instance to run


# Abstract Class（抽象类）
- It's a class actually, but you can define abstract method, then it will be very like the interface.   
Because absract method is also a 'must-to-be-defined' method for the child class.   
- 不能实例化，只能拿来继承

# Interface 
- is used to restrict the class   
- For example, If you want drive a car, there are many brand for you to choose.
But, they all using the same interface so you can drive all of them in a same way (with little difference). 
Here the same interface means like they must have four wheels, must have one steering wheel. Something like that.
So, the interface is to tell the class which 'implement' the interface must have method which defined in the interface. 
It's a restriction.   

# Constant（常量）
- outside the class, use define (CON, '123');
- inside the class, use const CON='123';

```php
Class darling {
    var $variable = 'abc'; //this is called property
    function love(){
        echo $this->variable; 
        //you can call the class property inside the class by using '$this'
    }
}
```

```php
__construct ( ) {
    // 实例化一个类之前执行的方法
    // like cos_class_init ( )
}

__destruct ( ) { 
    // 销毁一个类之前执行的方法
    // like cos_class_exit ( ) 
}
```

# this 
- '_**$this->**_' refer to the Current Object.   
- '_**$this->member**_' refer to the Non-Static Member.   
Basically, _**$this**_ is used for referring the instance.
Because _**$this**_ is actually a object, so can use like _**$this->member**_.  

# self
- '_**self::**_' refer to Current Class.    
- '_**self::member**_' refer to Static Member.   
_**self**_ is used for referring the object belongs to the class itself (like CONSTANT and static value). 
Because _**self**_ is not a object, so have use like _**self::member**_.

# Diff
有一些value是class value，有一些value是instance的value.
eg. 有一个class named人类   

```php
class human{   
     public static human_history = '1000,000 years'; 
     //value belongs to the human class not each human
        
     public human_age = '100 years'; 
     //value belongs to one person but not the whole human   
}      
```

So can use $this->human_age to access each human age.
And use self::human_history to access the human history

```php
<?php
class Person {
    public $name = 'Jack1';
    const NAME = 'Jack2';

    function __construct($person_name) {
        $this->name = 'Jack3';
//        $this->name = $person_name;
    }

    function call(){
        echo $this->name;
    }
};

$jack = new Person('Jack0');

//Get constant
echo $jack::NAME; //Jack2

//Get property
echo $jack->name; //Jack3

//Get method
$jack->call();    //Jack3  
```


# Ref
- [http://php.net/manual/en/language.oop5.abstract.php](http://php.net/manual/en/language.oop5.abstract.php)
- [http://php.net/manual/en/language.oop5.interfaces.php](http://php.net/manual/en/language.oop5.interfaces.php)

