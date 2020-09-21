import App from './app';
import FeedBackController from './controller/feedback_controller';

const app = new App(
  [
    new FeedBackController()
  ],
  8888,
);
 
app.listen();

