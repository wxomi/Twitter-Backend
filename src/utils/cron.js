import cron from "node-cron";
import Keepalive from "../Models/keepalive.js";

let delets = false;

const setupCron = () => {
  const job = cron.schedule("0 0 * * *", async () => {
    try {
      if (delets === false) {
        const result = await Keepalive.create({
          title: "Keepalive",
        }).then(() => {
          delets = true;
          console.log("Keepalive created");
        });
        console.log(result);
        console.log("Keepalive created");
      } else {
        const result = await Keepalive.deleteMany({}).then(() => {
          console.log("Keepalive deleted");
        });
        delets = false;
        console.log(result);
      }
    } catch (error) {
      console.log(error);
    }
    console.log("Cron job running");
  });
};

export default setupCron;
