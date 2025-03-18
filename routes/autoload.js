import UserController from '../app/controllers/UserController.js';

export const autoload = (app) => {
    // تعریف روت‌ها و اتصال به کنترلرها
    app.get('/', (req, res) => {
        const userController = new UserController();
        userController.index(req, res);
    });

    app.get('/users', (req, res) => {
        const userController = new UserController();
        userController.getUsers(req, res);
    });
}; 