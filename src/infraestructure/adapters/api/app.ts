import dotenv from 'dotenv';
import { LoginApp } from './login-app';

try {
    dotenv.config()
    new LoginApp().start()
} catch (error) {
    console.log(error)
}