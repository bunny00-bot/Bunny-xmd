//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "bunnytech000@gmail.com";
global.location = "Harare, Zimbabwa";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Zimbabwe";
global.github = process.env.GITHUB || "https://github.com/bunny00-bot/Bunny-xmd.git";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vb5HhRAFi8xggoraw43G";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vb57ZHh7IUYcNttXEB3y";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/c770g1.jpg";
global.devs = "https://t.me/bunnytech";
global.sudo = process.env.SUDO || "262771528985";
global.owner = process.env.OWNER_NUMBER || "262771528986";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || "3";
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://files.catbox.moe/4cm6kb.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.AUTOSTATUS_REACT = process.env.AUTOSTATUS_REACT === 'true';
global.autoLikeEmoji = process.env.AUTO_LIKE_EMOJI || "💚";
global.save_status_from = process.env.SAVE_STATUS_FROM || "263771528985";
global.read_status_from = process.env.READ_STATUS_FROM || "263771528985";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://bunny-md-session.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaVBxVDFsc2gvUmlqUjBtWHc4L3lwK0pMR0ZQTUZCbUZRTjh1Z3BVK29HMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN2RlVzRrR3pNYlowV3kwYm96LzFHU1h5b3p0R2toQkw4VG1PRDQ4QllXUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrSElPS3B5V2gvM2tJOXUxQ0paaHcxNzN5clBHNXZBWVA5ZHZpUWNibUhRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDSWFFMHE2QUx5b0dqMUltREpQaTFTK1E3MVJVbDQ2TU05dXp1Znp4ZkVJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZHOWkwMk9vN0RIV3pEemVWb1JVWGJvTzQxWFk5SVJrSCtHaHYvSUpkbWM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjVmVjlDTm5VcXYwMGg0amprNjlRVm1hTnhqMmxkclVHNC8ya0VyM2QwWGs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZU5tU3J1NXJaemZjK2s4UWhYVUpnaVNRMmkrL0lFeUNmV1RzRmo3NXJFdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSWhCdCswakVQajNreENnMUFzeDNlOGdBanNWMGoyUkFsZHZ3c00rSE1pbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZ4bExKblZjTlBRS01MTDJLazdxY3Y5UmRIekd3Wi9jbFhuZDl3SjVZblYwM2hFSlZQWjU5TnphVFBjR1lHdWtlTmRJYURST2tObEUySUJvU20wNmdRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODUsImFkdlNlY3JldEtleSI6InhFb2FFTjMvV3A5eHZGYm4wVWhFQ21kNmpyV0RPYUY5T3F3RzBJNjMvcFU9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjYzNzc0MjM3OTg4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkRBOTI1OTRFQjkyQTYyMkIzMEU0RURFM0NBMkU3MTVBIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NDUzMjY3OTZ9LHsia2V5Ijp7InJlbW90ZUppZCI6IjI2Mzc3NDIzNzk4OEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBNEYwMUE0MDgwREFBNDg0MjBDQ0FEODc1QTY0NTlBOCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzQ1MzI2Nzk3fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJKQUt6Nk1XSFFLQ05qT0ZvS01Pd3R3IiwicGhvbmVJZCI6ImMzMjA0NDRhLWI4YmItNGY2NC1iMmFhLTBkMzYzZmJmNWQwYSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLSVZVcVZINEtwenBFQ0FoWGR6RUNicTVuK2M9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZE94KzlTU3lRczFVT3R6ejNOaW5MTmt1bmV3PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjcxTDg0WDRQIiwibWUiOnsiaWQiOiIyNjM3NzQyMzc5ODg6MUBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTC9Ua3ZVRUVMdWxuc0FHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiSDhLUVBmdEoxNmkzVkpFWkxmQkl5MmlUQkhDQ2dJSHVaYWdjSGZFamxsST0iLCJhY2NvdW50U2lnbmF0dXJlIjoiQ0g0aU9wZFJVV2ZlUHRhOFoxeUljaXpSSlQxdnhJcGZUMGFTQWJkMDF5VXMrV2VmUmd0eDFkQ1Y3M3lVc1V6S2toRitHQkZMMWc5eU5SMzYxTXNwQ1E9PSIsImRldmljZVNpZ25hdHVyZSI6IkwwUTJlQUs0NmMwWHdkeWlNcnpnYVdoTlZVVDNXc29oVTJYaFVCR0R4bk9KZGJ4ZnRTSURaaUF3b3JJTVk5WjY3L2x6UElSSHRiVXRmL09PZFZEQmpBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjYzNzc0MjM3OTg4OjFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUi9Da0QzN1NkZW90MVNSR1Mzd1NNdG9rd1J3Z29DQjdtV29IQjN4STVaUyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc0NTMyNjc5MiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFBdkcifQ=="
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || "+",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BUNNY-MD™`",
  author: process.env.PACK_AUTHER || "BUNNU-MD",
  packname: process.env.PACK_NAME || "B U N N Y",
  botname: process.env.BOT_NAME || "BUNNY-MD",
  ownername: process.env.OWNER_NAME || "BUNNY",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "B U N N Y").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
