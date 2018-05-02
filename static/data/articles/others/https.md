# 由 https 引发的一系列的知识点的补充
人类对信任的追求也是永无止境

# 从最原始的开始说起 - 对称加密 (Symmetric Encryption)
这个是最古老的了，追溯到古罗马军事指令的传递，反正就是两个人事先规定好一套加密规则，
那么当规则只有双方知道的时候，通信也就被加密了。
这种方法不太好的原因是一旦规则被破解，那就完蛋了，这方面做的最好的是德国的二战时候使用的 igma 机，电影里看到的，
他每天都会有一套新规则，所以破解了也是有时效的，堪称完美（如果没有计算机的话） 

> 对称加密这里，最重要的，或者说 “密” 的原因，是因为规则被隐藏，第三方不知道，这也是风险所在。

# 进阶版 - 非对称加密 (Asymmetric Encrption)
有三个天才发明了这个，非对称加密，应该拿诺贝尔奖，没有这个东西，现在的一切都不存在了（比特币都没）
简言之就是，我可以生产出两个密匙，一个叫公匙 (Public key)，一个叫私匙 (private key)。
叫非对称的原因是，用其中一个加密的信息，可以用另一个解开。

> 非对称加密这里，最重要的不是加密规则，因为规则大家都知道，“密” 的原因，是因为算力不够。
所以，除非是技术上有重大飞跃，不然这套规则是绝对安全的。

## 公匙私匙（Public key & Private key）
- 可以把公匙看作是自己的锁，私匙看作对应的钥匙。如果有人想给我发加密消息，他只需要拿我的锁给消息加密，然后广播。
这样虽然所有人都收到了消息，但只有我能解开锁，只有我能看到消息。
- 同理如果我们想给别人发消息，我们就需要拿他的锁来加密消息。

We can see public key as a your own lock, and private key as your own key which can open the lock.    
1. Then, if someone want to send message to you, you send your lock to them. So they can encrypt their message using your lock.
You have the key, so you can decrypr. But others don't.
2. If you want to send message to others, you have to get their public key. Then do the same, encrypt the message using their public key.


- 尽管非对称加密很安全，但是效率有点低。
- 所以我们有一套两个都用的方法，先用非对称加密的方式交换一个对称加密的规则，再用此规则进行交流。

Although asymmetric encryption can used for one to many trasition and is secure. It's efficiency is not that good.   
So combining both the symmetric and asymmetric encription is nowadays how we transimit data.
Baiscly, use the asymmetric encryption to transmmit the key for which is used for the symmetric encryption.


## 私匙加密
一般来说，我们是把私匙自己保存，公匙拿去让别人给我们传加密信息。
我一开始想私匙加密信息，别人手里都有公匙，那这个加密，毫无用处啊。
后来才发现其实私匙加密并不是为了加密信息，而是为了证明这个信息是来自于正确的人，从而确保信息不是伪造的。

比如说我收到一个署名是老王的信息，因为用了我的公匙加密，所以我知道至我有拿到了这个信息，但是我不能确定这个发送者是不是老王。
老王要怎样证明自己是老王呢，那就是用老王自己的私匙加密发送信息。因为我们都有老王的公匙，所以当我们用老王的公匙只能解开用老王的私匙加密的信息，所以发送人一定是老王。

过程逻辑上是没问题的，问题在于性能太差，因为加密整个文件，这里我们要引入一个新的加密方法，也不能叫加密吧。

# 单向加密 - Hash
hash 是一种单向加密的算法，满足以下几个特征：
- 无论输入的消息有多长，计算出来的消息摘要的长度总是固定的
- 用相同的摘要算法对相同的消息求两次摘要，其结果必然相同
- 一般地，只要输入的消息不同，对其进行摘要以后产生的摘要消息也几乎不可能相同    
- 消息摘要函数是单向函数，即只能进行正向的信息摘要，而无法从摘要中恢复出任何的消息
- 好的摘要算法，没有人能从中找到“碰撞”，虽然“碰撞”是肯定存在的。即对于给定的一个摘要，不可能找到一条信息使其摘要正好是给定的。或者说，无法找到两条消息，是它们的摘要相同

> 一般来讲，我们的密码再数据库存放的时候，是存的 Hash 之后的值，所以除了你之外没有人知道你的密码，所以不能找回密码，只能修改密码

# 数字签名
> 指的是对原始文件的指纹 (hash) 进行了私钥加密。这样，即可保证文件的特征 (hash) 一定经过了私钥的加密。
同时由于 hash 的长度普遍不长（MD5为128位，SHA1主要为256位），也并没有带来太大的开销。 

这样，当你收到了文件，并且收到了加密的 hash，那么当你对收到的文件进行 hash 处理，得到的结果和收到的一样，那就说明文件没有被篡改


# 数字证书
最后的最后，问题是你怎样确认老王是老王。在这里就是，如果你手里拿着老王的公匙，你怎么能确定这确确实实是老王的公匙。    
这里就要引入信任的根节点。

# Certificate Authority (CA)
这是一个所谓的第三方权威机构，大概意思就是，你在这个江湖走，谁也不可信任，只用信任这几个机构就行了。
这几个机构将自己的公匙放在你的电脑里，所以你可以默认这几个机构的公匙确实是他们（这是一切信任的基础）

## 老王要怎样拿到 CA 的证书？
老王需要向 CA 提交一些信息，自己的公匙，名字，公匙的版本号等，CA 经过认证后，会返回一个用 CA 的私匙加密的数字证书。
每次有别人向老王发送请求的时候，老王就可以把自己的证书返回，从而证明自己是自己。。。  


# 最后一个完整的安全的通信过程
1. 你在客户端发出一个 https 请求
2. 老王返回给你他的数字证书，这个数字证书，是用 CA 的私匙加密的
3. 你可以用 CA 的公匙来解密，验证证书，同时拿到老王的公匙（这里就确认这个公匙确实是老王的），传输的文件，老王的公匙加密签名（文件的 hash）
4. 你用老王的公匙读取加密的签名得到 hash 值，同时对收到的文件进行 hash 处理，如果两个值一样，那就说明传输过程加密且文件没有被篡改

![ca_https.png](ca_https.png)

所以行走江湖，什么都不用，只要 CA 的公匙就行了。

# SSL (Secure Sockets Layer)
It's a standard security protocol for establishing encrypted links between web server and browser in an online communication.


# Ref 
- [https://yq.aliyun.com/articles/54155](https://yq.aliyun.com/articles/54155)
- [https://www.youtube.com/watch?v=E5FEqGYLL0o](https://www.youtube.com/watch?v=E5FEqGYLL0o)
