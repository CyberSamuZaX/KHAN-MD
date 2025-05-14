const axios = require("axios");
const { cmd } = require("../command");

cmd({
  pattern: "srepo",
  desc: "Fetch information about a GitHub repository.",
  category: "other",
  react: "🍃",
  filename: __filename
}, async (conn, m, store, { from, args, reply }) => {
  try {
    const repoName = args.join(" ");
    if (!repoName) {
      return reply("❌ Please provide a GitHub repository in the format 📌 `owner/repo`.");
    }

    const apiUrl = `https://api.github.com/repos/${repoName}`;
    const { data } = await axios.get(apiUrl);

    let responseMsg = `📁 *GitHub Repository Info* 📁\n\n`;
    responseMsg += `📌 *Name*: FAISAL-MD\n`;
    responseMsg += `🔗 *URL*: https://github.com/Queen-anita/FAISAL-MD-watsapp-new-bot\n`;
    responseMsg += `📝 *Description*: This FAISAL-MD Whatsapp Bot Created By The Proector & Samuza\n`;
    responseMsg += `👤 *Owner*: FAISAL-MD\n`;
    responseMsg += `📅 *Created At*:2025/05/16\n`;
    responseMsg += `\n> *© Powered by FAISAL-MD*`;

    await conn.sendMessage(from, { text: responseMsg }, { quoted: m });
  } catch (error) {
    console.error("GitHub API Error:", error);
    reply(`❌ Error fetching repository data: ${error.response?.data?.message || error.message}`);
  }
});
