# 非对称加密（Asymmetric Encrption） 
Used in one to many trasition.
	
# 公匙私匙（Public key & Private key）
- 可以把公匙看作是自己的锁，私匙看作对应的钥匙。
如果有人想给我发加密消息，他只需要拿我的锁给消息加密，然后广播。
这样虽然所有人都收到了消息，但只有我能解开锁，只有我能看到消息。
- 同理如果我们想给别人发消息，我们就需要拿他的锁来加密消息。
- 这个设计真的，简直完美。

We can see public key as a your own lock, and private key as your own key which can open the lock.    
1. Then, if someone want to send message to you, you send your lock to them. So they can encrypt their message using your lock.
You have the key, so you can decrypr. But others don't.
2. If you want to send message to others, you have to get their public key. Then do the same, encrypt the message using their public key.

# 对称加密（Symmetric Encryption）
- 尽管非对称加密很安全，但是效率有点低。
- 所以我们有一套两个都用的方法，先用非对称加密的方式交换一个对称加密的规则，再用此规则进行交流。

Although asymmetric encryption can used for one to many trasition and is secure. It's efficiency is not that good.   
So combining both the symmetric and asymmetric encription is nowadays how we transimit data.
Baiscly, use the asymmetric encryption to transmmit the key for which is used for the symmetric encryption.

# Ref 
- [https://www.youtube.com/watch?v=E5FEqGYLL0o](https://www.youtube.com/watch?v=E5FEqGYLL0o)
