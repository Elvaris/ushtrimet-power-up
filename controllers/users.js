const { PrismaClient } = require('@prisma/client');
const db = require('../database');
const prisma = new PrismaClient();
const jwt = require('jsonwebtoken');

const getUsers = async (req, res) => {
    try {
        const users = await prisma.user.findMany({
            where: {
                name: { endsWith: 't' },
            },
            orderBy: {
                id: 'desc',
            },
            select: {
                email: true,
            },
            // select user.email from users where name like "%t" order by id desc
        });
        res.json(users);
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal server error!');
    }
};

const createUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const user = await prisma.user.create({
            data: {
                email,
                name,
                password,
                Post: {
                    create: {
                        title: 'Test title',
                        body: 'this is a test body.',
                    },
                },
            },
        });
        res.json(user);
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal server error!');
    }
};

const updateUser = (req, res) => {
    const userId = req.params.id;
    const { name, email } = req.body;
    db.query(
        'UPDATE users SET name = ?, email = ? where id = ?',
        [name, email, userId],
        (err, result) => {
            if (err) {
                console.log(err);
                return res.status(500).send('Internal server error!');
            }
            if (result.affectedRows === 0) {
                return res.status(404).send('User not found.');
            }
            res.send('User updated successfully!');
        }
    );
};

const deleteUser = (req, res) => {
    db.query(
        'DELETE FROM users where id = ?',
        [req.params.id],
        (err, result) => {
            if (err) {
                console.log(err);
                return res.status(500).send('Internal server code');
            }

            if (result.affectedRows === 0) {
                return res.status(404).send('user not found');
            }
            res.send('user is deleted!');
        }
    );
};

const getUser = (req, res) => {
    db.query(
        'SELECT * FROM users WHERE id = ?',
        [req.params.id],
        (err, result) => {
            if (err) {
                console.log(err);
                return res.status(500).send('Internal server code');
            }

            if (result.length == 0) {
                return res
                    .status(404)
                    .send(`User with id: ${req.params.id} is not found!`);
            }

            res.json(result);
        }
    );
};

const getUserByName = (req, res) => {
    console.log(req.query);

    if (!req.query.name) {
        return res.status(404).send('Name filter is not found.');
    }

    const pattern = `%${req.query.name}%`;
    db.query(
        'Select * from users where name like ?',
        [pattern],
        (err, result) => {
            if (err) {
                console.log(err);
                return res.status(500).send('Internal server code');
            }

            if (result.length !== 0) {
                res.json(result);
            } else {
                res.status(404).send(
                    'User with name ' + req.query.name + ' not found'
                );
            }
        }
    );
};

  
  
    
const logIn= async (req,res)=>{
    try{
        const {email,password}=req.body;
        const user= await prisma.user.findFirst({
            where:{
                email,
                password,
            },
        });
        if(user){
            const token=await jwt.sign(user,process.env.SECRET_TOKEN,{
                expiresIn:'5m',
            });
            res.json(token);
        }else{ 
            res.status(404).send('Please check your credentials.');
        }
    }catch(error){
        console.log(error);
        return res.status(500).send('Internal server code');
        

    }
};



const deleteUserById = async (req, res) => {
    const userId = req.params.id;
    try {
      const deletedUser = await User.findByIdAndDelete(userId);
      if (!deletedUser) {
        return res.status(404).send('User not found');
      }
      res.status(200).send('User is deleted');
    } catch (error) {
      res.status(500).send('Server Error');
    }
  };


module.exports = {
    getUsers,
    createUser,
    updateUser,
    deleteUser,
    getUser,
    getUserByName,
    logIn,
    deleteUserById,
};
