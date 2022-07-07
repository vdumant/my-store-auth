const jwt=require('jsonwebtoken');

const secret='myCat';
const token ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGUiOiJjdXN0b21lciIsImlhdCI6MTY1NzEzNTIwNX0.fSlHZIx0yz75UJADhJjTfPPXau7JD_3Wl227amWT_yE';

function verifyToken(token,secret) {
  return jwt.verify(token,secret) ;
}

const payload = verifyToken(token,secret);
console.log(payload);
