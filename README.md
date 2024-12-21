
# Cloudflare Pages, Worker and Auth.js Template

This repository hosts a **Cloudflare Pages** template that incorporates **React**, **Cloudflare Workers**, and **Auth.js** for seamless authentication. It provides a scalable and flexible platform for building modern web applications with serverless capabilities.

---

## 🚀 Features

- **Cloudflare Pages** for static site hosting and serverless functions.
- **React** for dynamic and interactive frontend development.
- **Auth.js** configured with GitHub for authentication (easily extendable to Google, Apple, and others).

---

## 🛠️ Getting Started

### Prerequisites
- Node.js installed on your local machine.
- A Cloudflare account.
- A GitHub application set up for OAuth (or other providers if needed).

### Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/RobinRS/cf-worker-pages-template.git
   cd cf-worker-pages-templat
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure your environment:
   - Insert the Secrets in the `wrangler.toml` file in the root directory.
   - Add your environment variables:
     ```env
     AUTH_SECRET=your-auth-secret
     AUTH_CLIENT_ID=your-client-id
     AUTH_CLIENT_SECRET=your-client-secret
     ```

4. Deploy to Cloudflare Pages:
   - Connect your repository to Cloudflare Pages in the Cloudflare dashboard.

---

## ⚙️ Authentication

This project uses [Auth.js](https://authjs.dev) for authentication. It is pre-configured to work with GitHub but can be easily extended to other providers like Google or Apple. Follow the [Auth.js documentation](https://authjs.dev/getting-started/introduction) for detailed setup instructions for additional providers.

---

## 📚 Documentation

For more details on Cloudflare Pages and the Workers runtime, refer to the official documentation:

- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [Cloudflare Workers Documentation](https://developers.cloudflare.com/workers/)

---

## 🤝 Contributing

Contributions are welcome! If you have ideas for improvements or encounter issues, please create an issue in the repository. I’ll be happy to help.

---

## 🌟 Acknowledgments

- [React](https://react.dev) - A JavaScript library for building user interfaces.
- [Auth.js](https://authjs.dev) - Authentication for the modern web.
- [Cloudflare Pages](https://developers.cloudflare.com/pages/) - Deploy scalable and fast websites.

---

## 📄 License

This project is licensed under the MIT License. See the `LICENSE` file for details.
