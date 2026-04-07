import express from "express";
import path from "path";
import multer from "multer";
import nodemailer from "nodemailer";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

const app = express();
app.use(express.json());

// Multer setup for resume storage
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Helper to create a transporter from user-supplied credentials
function createTransporter(smtp: { email: string; password: string; host: string; port: number }) {
  return nodemailer.createTransport({
    host: smtp.host || "smtp.gmail.com",
    port: smtp.port || 465,
    secure: (smtp.port || 465) === 465,
    auth: { user: smtp.email, pass: smtp.password },
  });
}

// API Routes
app.post("/api/test-connection", async (req, res) => {
  const { email, password, host, port } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: "Email and app password are required" });
  }

  const transporter = createTransporter({ email, password, host: host || "smtp.gmail.com", port: port || 465 });

  try {
    await transporter.verify();
    res.json({ message: "Connection successful" });
  } catch (err) {
    res.status(500).json({ error: err instanceof Error ? err.message : "Connection failed" });
  }
});

app.post("/api/send-single-email", upload.single("resume"), async (req, res) => {
  try {
    const { template, recipient, subject, smtp } = JSON.parse(req.body.data);
    const resumeFile = req.file;

    if (!resumeFile) return res.status(400).json({ error: "Resume required" });
    if (!smtp?.email || !smtp?.password) {
      return res.status(400).json({ error: "SMTP credentials are required" });
    }

    const transporter = createTransporter(smtp);

    let personalizedBody = template;
    Object.keys(recipient).forEach(key => {
      personalizedBody = personalizedBody.replace(new RegExp(`{{${key}}}`, 'g'), recipient[key] || '');
    });

    await transporter.sendMail({
      from: `"${smtp.email}" <${smtp.email}>`,
      to: recipient.email || recipient.Email || recipient.EMAIL,
      subject: subject || "Job Application",
      text: personalizedBody,
      attachments: [{ filename: resumeFile.originalname, content: resumeFile.buffer }],
    });

    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err instanceof Error ? err.message : "Failed to send" });
  }
});

async function startServer() {
  const PORT = 3000;

  if (process.env.NODE_ENV !== "production") {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

if (process.env.NODE_ENV !== "production") {
  startServer();
}

export default app;
