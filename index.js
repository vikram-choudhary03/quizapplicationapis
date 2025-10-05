const app = require('./app');
require('dotenv').config(); 

const PORT =  3000;

app.listen(process.env.PORT, () => {
  console.log(`Server is listening on the ${process.env.PORT}`);
});
