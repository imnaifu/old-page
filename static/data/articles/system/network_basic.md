# LAN(Local Area Networks)
- Ethernet

# WAN(Wide Area Network)
- Internet
- Internet include two type of machine
    1. host
    2. router

# Service
- Network provide service for hsot and its process
1. 面向连接的服务是对电话系统的一种模仿
    - 两种
    - message sequence:两个1kb的消息发送，以两个1kb的消息形式到达
    - byte flow: 不存在消息的边界
2. 无连接的服务是对邮政系统的一种模仿

# Protocal
- 用于特定计算机通信的规则的集合

## Protocal stack
- 把不同的协议一层层叠加起来
- 处于最底层的协议会定义如何识别比特流中的数据包的起始和结束位置
- 在更高的一层，协议会确定如何通过复杂的网络把数据包从来源节点发送到目标节点
- 再高一层，协议会确保所有的数据包会按照正确的顺序到达

# TCP/IP
- It's a set of protocal which make the infomation can be delivered without loss.
1. very low level make sure each bit is correct (checksum, redundant bit)
2. then Ethernet protocal seperate data to small packet
3. IP protocal make sure point to point transfer
4. TCP protocal make sure no loss (compare to UDP)

# IP
- 一种数据报协议，发送者可以向网络上发出长达64kb的数据包，并期望能够到达
- 传送时，会被切割成更小的包
- 独立传输，可能经过不同的路由

# TCP
- 使用IP提供面向连接的数据流
- 为了使用TCP，进程需要首先与一个远程进程建立连接。
- 被请求的进程需要通过机器的IP地址和端口号确定，对进入连接感兴趣的进程监听端口
- 序列号，校验和，出错重传

# 常用端口
- 20/21 FTP upload/download
- 22 SSH Remote login protocal
- 25 SMTP (Simple Mail Transfer Protocal)
- 53 DNS (Domain Name System)
- 80 HTTP (Hyper-Text Transfer Protocal)
- 110 POP (Post Office Protocal) receiving emails from server
- 143 IMAP (Internet Message Access Protocal)
- 443 HTTPS

# Internet Control Message Protocal (ICMP)
- belong to TCP/IP protocal set
- used to transmit control message
- 控制消息是指网络通不通、主机是否可达、路由是否可用等网络本身的消息。这些控制消息虽然并不传输用户数据，但是对于用户数据的传递起着重要的作用
- in linux, ICMP is used in ping command which can detect if a host is reachable

# Proxy
## Normal proxy
server doesn't know who is the client    

## Reversed proxy
client doesn't know who is the server

# Gateway(网关)
- same like router
- higher than switch
- 内网外网IP转换
- switch is used in LAN, Datalink layer, not aware of the IP
- Gateway is used in WAN, Transport Layer, not aware of MAC address

# Switch (交换机)
- used in local area network
- transfer packet depends on the MAC address
- not aware of the IP address
- work in datalink layr

# OSI
- Open System Interconnection (开放式系统互联)

## Physical layer
- point to point connection (not reliable)
- **transmit bit**

## Data link layer
- guaranteed point to pint connection, make sure each bit is correct 
- **make sure every bit is correct**

## Network layer
- where IP protocal exist
- allow any node in the network to communicate with each other (not reliable)
- **transmit packet**

## Transport layr
- using packet
- where TCP exist
- guaranteed and reliable connection between nodes
- **make sure each packet arrived and insequence**

## Application layr
- where HTTP exist
- for applications communication

# DNS
## host file has higher priority than DNS
- if you save ip-domain_name relation in host file, it will use that first rather than send request to DNS server

## Root server(根域名服务器）
- only 13 of them exist in the whole world, none of them in China

## 递归查询 迭代查询
- 递归查询
    - client sent to DNS server
    - return answer or not
- 迭代查询
    - DNS server sent to root server
    - return answer or an closer answer

# Content Delivery Networks (CDN)
- It is created to resolve the latency for the requst
- by using more cache server to reduce the distance from the main server to the user
- provide protection


# Ref 
- [https://foofish.net/proxy-and-reverse-proxy.html](https://foofish.net/proxy-and-reverse-proxy.html)
- [http://www.ruanyifeng.com/blog/2017/06/tcp-protocol.html](http://www.ruanyifeng.com/blog/2017/06/tcp-protocol.html)
- [https://www.incapsula.com/cdn-guide/what-is-cdn-how-it-works.html](https://www.incapsula.com/cdn-guide/what-is-cdn-how-it-works.html)
