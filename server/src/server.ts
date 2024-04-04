import express from 'express';
import http from 'http';
import {Server} from 'socket.io'

var options = {
    allowUpgrades: true,
    transports: ['websocket', 'file', 'htmlfile', 'xhr-polling', 'jsonp-polling', 'polling'],
    pingTimeout: 9000,
    pingInterval: 3000,
    httpCompression: true,
    origins: '*:*' 
  };
  

const app=express()
const server=http.createServer(app)
const io=new Server(server,{
    cors:{
        origin:'*',
    },
    pingTimeout: 60000
})



const emailToSocketIdMap = new Map();
const socketidToEmailMap = new Map();

io.on("connection",(socket)=>{
    console.log(socket.id)
    socket.on("room:join",(data)=>{
        console.log(data)
        const {email,room}=data
        emailToSocketIdMap.set(email, socket.id);
        socketidToEmailMap.set(socket.id, email);
        io.to(room).emit("user:joined",{email,id:socket.id})
        socket.join(room)
        io.to(socket.id).emit("room:join", data);
    })

    socket.on("user:call", ({ to, offer }) => {
        
        io.to(to).emit("incomming:call", { from: socket.id, offer });
      });

    socket.on("call:accepted", ({ to, ans }) => {
        io.to(to).emit("call:accepted", { from: socket.id, ans });
    });

    socket.on("peer:nego:needed",({to,offer})=>{
        console.log("peer nego needed",offer)
        io.to(to).emit("peer:nego:needed",{from:socket.id,offer})
    })

    socket.on("peer:nego:done",({to,ans})=>{
        console.log("peer nego done",ans)
        io.to(to).emit("peer:nego:final",{from:socket.id,ans})
    })

    socket.on("verify",(room)=>{
        const initiatorEmail=socketidToEmailMap.get(socket.id)
        let email=null
        for (const [socketId, emailjoiner] of socketidToEmailMap.entries()) {
            if(socketId!==socket.id){
                email=emailjoiner
            }
        }
        io.to(emailToSocketIdMap.get(initiatorEmail)).emit("verify",{email,initiatorEmail})
    })

    socket.on("verifyAudio",(room)=>{
        const initiatorEmail=socketidToEmailMap.get(socket.id)
        let email=null
        for (const [socketId, emailjoiner] of socketidToEmailMap.entries()) {
            if(socketId!==socket.id){
                email=emailjoiner
            }
        }
        io.to(emailToSocketIdMap.get(initiatorEmail)).emit("verifyAudio",{email,initiatorEmail})
    })
})

server.listen(5000, () => console.log('server is running on port 5000'));