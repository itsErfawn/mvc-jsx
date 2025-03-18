import User from '../models/User.js';

export default class UserController {
    index(req, res) {
        res.render('users', { title: 'صفحه اصلی' });
    }

    getUsers(req, res) {
        const userModel = new User();
        const users = userModel.getAllUsers();
        res.render('users', { title: 'لیست کاربران', users });
    }
} 