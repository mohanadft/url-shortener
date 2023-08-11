import app from "./app";
import envConfig from "./config/env.config";

app.listen(envConfig.port, () => {
  console.log(`Server is listening on port ${envConfig.port}`);
});