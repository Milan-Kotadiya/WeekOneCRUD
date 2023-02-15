const bcrypt = require('bcrypt')
const password = 'Milan'


async function Hashing(password){

    const password1 = 'Milan'

    const salt = await bcrypt.genSalt(10);
    console.log(salt)
    const Hashed = await bcrypt.hash(password, salt)
    console.log(Hashed)
    const Compare = await bcrypt.compare(password1,Hashed)
    console.log(Compare)
}

Hashing(password);