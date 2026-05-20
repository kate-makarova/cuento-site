Search Engine 
=============

Cuento designed to be hosted by hobbyists on cheap machines whth 1 or 2 gigabites of RAM. As the result, we cannot afford the
fulltext index of MariaDB as it can easilt eat up 300MB of memory or more. The alternative solution is to keep the plain text
index in files on disk, beacause the disk is not utilized for almost anything. 
  
A third-party search engine called Sonic does exactly that. It is built in Rust and designed to utilize as little as 30MB RAM. 
The size of the index files on disk is also negligable and can reach several hundres MB, which is not a concern since almost 
all VPS noe profive at least 10GB of disk space.
  
The only caviat is the fact the Sonic is built on Rust, and we do not want to intriduce Rust libraries on the machne. The 
solution is the same as was used for the backend in go - there is a separate githiv action pipleline to build the rust code into
a binary and upload it on the server. The building takes a long time, but we only need to do this once, when we install the new
instance of cuento. Thus, this pipeline has no automatic trigger. It is started manually by the cli as the very last step of the 
installation process and works in the background while the new forum is already fully operational. 

The user is warned that the search engine will be ready in 10 - 15 minutes. If, in that time, they add some information they want
to be index, there is an admin page for manually synchronizing the index.
