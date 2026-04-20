# Resume Email Sender

<div align="center">
<img width="1200" height="475" alt="Resume Email Sender Banner" src="https://github.com/user-attachments/assets/9aa7341f-6230-4aa8-b40b-d0dd18c12d04" />
</div>

A powerful web application that streamlines the job application process by automating personalized email sending with resume attachments. This tool helps job seekers efficiently apply to multiple positions with tailored communications.

## 🚀 Features

### Core Functionality
- **SMTP Configuration**: Secure setup for email providers (Gmail, Outlook, etc.)
- **Resume Upload**: Support for PDF resume files
- **Bulk Email Sending**: Send personalized emails to multiple recipients from Excel data
- **Email Templates**: Customizable templates with dynamic placeholders
- **Attachment Handling**: Automatic resume attachment to emails
- **Progress Tracking**: Real-time sending progress with detailed logs

### User Experience
- **Intuitive Wizard Interface**: Step-by-step process from setup to sending
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Real-time Validation**: Immediate feedback on configuration and data
- **Smooth Animations**: Polished UI with Framer Motion animations

## 🛠️ Tech Stack

### Frontend
- **React 19** - Modern UI framework
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Beautiful icon library

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **TypeScript** - Server-side type safety
- **Nodemailer** - Email sending library
- **Multer** - File upload handling
- **XLSX** - Excel file parsing

### Deployment
- **Vercel** - Deployment platform

## 📋 Prerequisites

Before running this application, make sure you have:

- **Node.js** (version 18 or higher)
- **npm** or **yarn** package manager
- **SMTP Email Account** (Gmail, Outlook, etc. with app password)

## 🚀 Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/resume-email-sender.git
   cd resume-email-sender
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:3000`

## 📖 Usage

### Step-by-Step Guide

1. **SMTP Configuration**
   - Enter your email credentials
   - Configure SMTP host and port
   - Test the connection

2. **Resume Upload**
   - Upload your resume in PDF format
   - The app will process and prepare it for sending

3. **Recipient Data**
   - Upload an Excel file (.xlsx) with recipient information
   - Required columns: Email, Name, and any other custom fields
   - The app automatically detects column headers

4. **Email Template**
   - Customize the email template using placeholders like `{{Name}}`, `{{Company}}`
   - Set the email subject line
   - Configure sending interval to avoid spam filters

5. **Preview & Send**
   - Review personalized emails for each recipient
   - Monitor sending progress in real-time
   - View detailed logs for troubleshooting

### Excel File Format

Your Excel file should have columns like:
| Email | Name | Company | Position |
|-------|------|---------|----------|
| john@example.com | John Doe | Tech Corp | Software Engineer |

### Email Template Example

```
Subject: Application for {{Position}} at {{Company}}

Dear {{Name}},

I am excited to apply for the {{Position}} role at {{Company}}. With my background in [your field], I am confident I can contribute to your team's success.

Please find my resume attached for your review.

Best regards,
[Your Name]
```

## 🔧 API Endpoints

### POST `/api/test-connection`
Test SMTP connection with provided credentials.

**Request Body:**
```json
{
  "email": "your-email@gmail.com",
  "password": "your-app-password",
  "host": "smtp.gmail.com",
  "port": 465
}
```

### POST `/api/send-single-email`
Send a personalized email with resume attachment.

**Request Body (Form Data):**
- `data`: JSON string containing template, recipient, subject, and SMTP config
- `resume`: PDF file

## 🚀 Deployment

### Vercel Deployment

1. **Connect your repository to Vercel**
2. **Deploy:**
   The `vercel.json` configuration handles the build and routing automatically.

### Local Production Build

```bash
npm run build
npm run start
```

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Development Guidelines

- Use TypeScript for all new code
- Follow the existing code style and structure
- Add tests for new features
- Update documentation as needed

## 📄 License

This project is licensed under the Apache-2.0 License - see the [LICENSE](LICENSE) file for details.

## ⚠️ Disclaimer

- Use this tool responsibly and in accordance with email service terms of use
- Respect recipient privacy and anti-spam laws
- The developers are not responsible for misuse of this application

## 🙏 Acknowledgments

- The open-source community for the amazing libraries used
- Lucide for the beautiful icons
- Vercel for the seamless deployment experience

---

**Made with ❤️ for job seekers worldwide**
