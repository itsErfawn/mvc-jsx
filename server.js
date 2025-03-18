import express from 'express';
import { createEngine } from 'express-react-views';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { autoload } from './routes/autoload.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// تنظیم موتور قالب JSX
app.set('views', './app/views');
app.set('view engine', 'jsx');
app.engine('jsx', createEngine());

// لود کردن روت‌ها
autoload(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 