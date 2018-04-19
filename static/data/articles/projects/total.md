# A Letter to Myself
设计师给前面展示部分的设计，后面还有个文章的管理系统

# Nomination system
- 线下流程搬到线上
- 登陆，自动发邮件，导出excel，
- 提供一个对外的表单，提名老师，学校从提名的老师中选一个提交信息，管理员从学校提交的人里选获胜者

# 在线教育系统评分模块
- 提供一个评分表单模块，供其他模块使用

# 财务管理系统
- 账单，收据，退款，补助
- pdf, 几个小时的cronjob

# 日历模块
- 复盘，表单验证的规则很复杂，用原来的方法是不太好的
- 原来的方法指的是，需要验证的字段加一个class，然后后面querySelector全部需要验证的字段，再写规则
- 改进的话，应该用闭包写一个策略工厂返回strategy函数，策略应该在调用的时候进行输入，验证的时候直接使用


```javascript

// validate('DOM选择器', '规则函数', '错误信息')；
validate('.selector-string-1', strategyFactory('rule-name-1'), 'error-msg-1');
validate('.selector-string-2', strategyFactory('rule-name-2'), 'error-msg-2');

```

```javascript
function strategyFactory(strategyName, paras={}){
    let func;
    switch(strategyName){
        case 'checkEmpty':
            func = function(){
                //checking rules here
                //return boolean
            };
            break;
        default:
            break;
    }
}
```