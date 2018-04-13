总结下之前做过的calendar

# 基本的layout
```html
    <div class='row control-panel'>控制部分</div>
    <div class='row'>
        <div class='col-md-10 calendar-main'>
            主体
        </div>
        <div class='col-md-2 calendar-category'>
            侧边类别
        </div>
    </div>
```

# 细节部分layout
每一周（一行）是一个table，一个月（所有行）也是个table，包裹每一行。
```html
<table>
    <thead>
        <tr>
            <th>Sunday</th>
            <th>Monday</th>
            <th>Tuesday</th>
        </tr>
    </thead>
    <tbody>
        <tr><!-- first week -->
            <table>
                <thead>
                    <tr>
                        <th>11</th><!-- date -->
                        <th>12</th>
                        <th>13</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td col-span='2'>event</td><!-- two day -->
                        <td col-span='1'>event</td>
                    </tr>
                    <tr>
                        <td col-span='1'>event</td>
                        <td col-span='1'>event</td>
                        <td col-span='1'>event</td>
                    </tr>
                </tbody>
            </table>  
        </tr>
        <tr><!-- second week -->
            <table>
                <thead>
                    <tr>
                        <th>21</th><!-- date -->
                        <th>22</th>
                        <th>33</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>  
        </tr>
    </tbody>
</table>
```

