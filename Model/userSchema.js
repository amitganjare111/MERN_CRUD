import mongoose from 'mongoose';

const userSchema = new mongoose.Schema( {
    
    name: {
        type: String,
        required:true
    },

    email: {
        type: String,
        required: true
    },

    phone: {
        type: String,
        required: true
    },

    city: {
        type: String,
        required: true
    }
});

const User1 = mongoose.model('MERN_CRUD_USER', userSchema);

export default User1;
